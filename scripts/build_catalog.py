#!/usr/bin/env python3
"""Build the split catalog from partner feeds.

Writes catalog/first.json, catalog/pages/page-N.json (96 cards),
catalog/items/<id>.json, catalog/index/{size,brand,origin}.json
and catalog/map/map-N.json (10 000 addresses). Does not write products.json.
"""
import csv
import gzip
import io
import json
import os
import re
import sys
import urllib.request
import zipfile
from collections import defaultdict
from urllib.parse import unquote, urlparse, parse_qs

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FEEDS = os.path.join(ROOT, "feeds")
OUT = ROOT

SHOPS = {
    "Sizeer_lt-SizeerLT_google_all-shopping.zip": ("Sizeer", "LT", True),
    "iQueens_fr-iQueensFR_google_all-shopping.zip": ("Queens", "FR", True),
    "Footshop_ch-FootshopCH_google_all-shopping.zip": ("Footshop", "CH", True),
}

SNEAKER = re.compile(r"\b(sneaker|sneakers|trainer|trainers|basket|baskets)\b", re.I)
SHOE_CAT = re.compile(r"\b(shoes|sneakers|trainers|footwear|baskets)\b", re.I)
NOT_SNEAKER = re.compile(
    r"\b(boot|boots|wellington|rubber boot|ballet|ballerina|flat|heel|pump|stiletto|"
    r"sandal|slide|slides|flip-flop|mule|boxer|brief|briefs|calecon|caleçons|underwear|"
    r"sock|socks|chaussette|chaussettes|bag|sac|tote|boxer|brief|briefs|calecon|caleçons|underwear|"
    r"boot|boots|wellington|ballet|ballerina|heel|pump|stiletto|sandal|slide|slides|claquettes|mule|flip-flop|"
    r"jacket|coat|t-shirt|tee|shirt|hoodie|pants|jeans|hat|dress|skirt)\b",
    re.I,
)
SHOE = SNEAKER
SKIP = NOT_SNEAKER
HEEL = NOT_SNEAKER

def is_sneaker(title, category=""):
    blob = f"{title or ''} {category or ''}"
    if NOT_SNEAKER.search(blob):
        return False
    if SNEAKER.search(blob):
        return True
    return bool(SHOE_CAT.search(category or ""))
SIZE_RE = re.compile(r"(\d{2}(?:[.,]\d)?|\d{1,2}(?:[.,]\d)?)")


def rates():
    fallback = {"EUR": 1.0, "GBP": 1.17, "CHF": 1.06, "PLN": 0.23, "USD": 0.92}
    try:
        with urllib.request.urlopen("https://api.frankfurter.app/latest?from=EUR&to=GBP,CHF,PLN,USD", timeout=20) as r:
            data = json.loads(r.read().decode())
        inv = {k: 1 / v for k, v in data.get("rates", {}).items() if v}
        inv["EUR"] = 1.0
        return inv
    except Exception as e:
        print("fx fallback", e)
        return fallback


def money(raw, fx):
    if not raw:
        return None, None
    text = str(raw).strip().replace(",", ".")
    m = re.search(r"([A-Z]{3})?\s*(\d+(?:\.\d+)?)\s*([A-Z]{3})?", text)
    if not m:
        return None, None
    cur = m.group(1) or m.group(3) or "EUR"
    val = float(m.group(2))
    rate = fx.get(cur, 1.0)
    return round(val * rate, 2), cur



COLOR_WORDS = {
    "black","white","grey","gray","blue","red","green","beige","brown","navy","pink",
    "purple","orange","yellow","gold","silver","cream","ivory","khaki","olive","multi",
    "gum","salt","sea","moss","bone","slate","linen","sail","sesame","fir",
}
FILLER = {
    "trainer","trainers","sneaker","sneakers","shoe","shoes","boot","boots",
    "mens","men","womens","women","kids","kid","the","and","og","new","wntr","winter",
    "mid","low","hi","high","retro","sma","spw","baskets","basket","eur",
}
SHORT_COLOR = {
    "black":"Black","white":"White","grey":"Grey","gray":"Grey","blue":"Blue","red":"Red",
    "green":"Green","beige":"Beige","brown":"Brown","navy":"Navy","pink":"Pink",
    "purple":"Purple","orange":"Orange","yellow":"Yellow","gold":"Gold","silver":"Silver",
    "cream":"Cream","ivory":"Ivory","khaki":"Khaki","olive":"Olive",
}

def clean_words(text):
    return re.sub(r"[^a-z0-9]+", " ", (text or "").lower().replace("®", "")).strip()

def short_color(raw):
    words = clean_words(raw).split()
    for w in words:
        if w in SHORT_COLOR:
            return SHORT_COLOR[w]
    return (raw or "Color").split("/")[0].strip()[:24] or "Color"

def short_model(brand, title, color):
    name = clean_words(title)
    b = clean_words(brand)
    if b and name.startswith(b):
        name = name[len(b):].strip()
    for part in re.split(r"[/|,]", color or ""):
        c = clean_words(part)
        if c:
            name = name.replace(c, " ")
    toks = [t for t in name.split() if t and t not in FILLER and t not in COLOR_WORDS and not (t.replace(".", "", 1).isdigit() and 3 <= float(t) <= 16)]
    num_at = next((i for i, t in enumerate(toks) if re.fullmatch(r"\d{3,4}r?", t)), -1)
    if num_at >= 0:
        toks = toks[:num_at + 1]
    model = " ".join(toks).strip()
    if not model:
        model = clean_words(title)[:40]
    # Keep a readable model, not the feed row.
    pretty = []
    for t in model.split():
        pretty.append(t.upper() if re.fullmatch(r"\d{3,4}r?", t) else t.capitalize())
    return " ".join(pretty)[:48]

def card_key(brand, model, color, cat):
    return slug("%s-%s-%s-%s" % (brand, model, color, cat))

def family_of(brand, model, cat):
    return "%s|%s|%s" % (clean_words(brand), clean_words(model), cat)

def pick_images(urls):
    urls = [u for u in urls if u]
    def sole(u):
        s = u.lower()
        if re.search(r"outsole|sole[-_]?view|underside|bottom[-_]?view|podoshv|podmet", s):
            return True
        m = re.search(r"_z_(\d+)\.(jpg|jpeg|webp|png)", s)
        return bool(m and int(m.group(1)) >= 8)
    good = [u for u in urls if not sole(u)]
    use = good or urls
    return use[:8]

def slug(text):
    text = re.sub(r"[^a-z0-9]+", "-", (text or "").lower()).strip("-")
    return text[:80] or "item"


def size_num(raw):
    m = re.search(r"(\d+(?:[.,]\d+)?)", str(raw or "").replace(",", "."))
    if not m:
        return None
    try:
        return float(m.group(1))
    except ValueError:
        return None

def gender(row, title, sizes=None):
    # Same order as inferOfferGender in script.js.
    # age_group is the feed field for the kids test the site does on the name.
    age = (row.get("age_group") or "").strip().lower()
    if age in ("kids", "infant", "toddler", "newborn"):
        return "kids"
    blob = " ".join([
        row.get("gender") or "",
        row.get("product_type") or "",
        title or "",
        row.get("link") or "",
    ]).lower()
    if re.search(r"moterims|women|woman|womens|dama|femme|donna|damskie|ladies|female|wmns", blob):
        return "women"
    if re.search(r"vaikams|kids|\bkid\b|child|junior|youth|infant|toddler", blob):
        return "kids"
    if re.search(r"vyrams|\bmen\b|\bmens\b|uomo|homme|herren|meskie|\bmale\b", blob):
        return "men"
    nums = [n for n in (size_num(s) for s in (sizes or [])) if n is not None and 30 <= n <= 50]
    if nums:
        if max(nums) <= 41 and min(nums) <= 39:
            return "women"
        if min(nums) >= 40:
            return "men"
    return "men"


# UK/US to EU. A bare 1-16 is not stored as EU.
UK_EU = {3: 35.5, 3.5: 36, 4: 37, 4.5: 37.5, 5: 38, 5.5: 38.5, 6: 39, 6.5: 40, 7: 40.5, 7.5: 41, 8: 42, 8.5: 42.5, 9: 43, 9.5: 44, 10: 44.5, 10.5: 45, 11: 45.5, 11.5: 46, 12: 47, 13: 48}
US_EU = {4: 36, 4.5: 36.5, 5: 37.5, 5.5: 38, 6: 38.5, 6.5: 39, 7: 40, 7.5: 40.5, 8: 41, 8.5: 42, 9: 42.5, 9.5: 43, 10: 44, 10.5: 44.5, 11: 45, 11.5: 45.5, 12: 46, 13: 47.5}
US_W_EU = {5: 35.5, 5.5: 36, 6: 36.5, 6.5: 37, 7: 37.5, 7.5: 38, 8: 38.5, 8.5: 39, 9: 40, 9.5: 40.5, 10: 41, 10.5: 42, 11: 42.5, 12: 44}

def to_eu(raw, system):
    text = str(raw or "").strip().lower().replace(",", ".")
    if not text:
        return None
    system = (system or "").lower()
    if "uk" in text:
        system = "uk"
    elif "us" in text:
        system = "us"
    elif "eu" in text or "eur" in text:
        system = "eu"
    m = re.search(r"(\d+(?:\.\d+)?)", text)
    if not m:
        return None
    n = float(m.group(1))
    if system == "uk":
        return UK_EU.get(n)
    if system == "us":
        return US_EU.get(n)
    if system == "usw":
        return US_W_EU.get(n)
    if 34 <= n <= 50:
        return n
    return None

def sizes_of(row, title, system="eu"):
    raw = (row.get("size") or "").strip()
    found = []
    for part in re.split(r"[/,|]", raw):
        eu = to_eu(part, system)
        if eu is not None and eu not in found:
            found.append(eu)
    return found


def images_of(row):
    out = []
    for key in ("image_link", "additional_image_link"):
        raw = row.get(key) or ""
        for bit in re.split(r"[,\s]+", raw):
            if bit.startswith("http") and bit not in out:
                out.append(bit)
    return out[:8]


def norm(row):
    return {k.lower(): (v or "") for k, v in row.items() if k}

def shoe_row(row):
    cat = row.get("google_product_category_name") or row.get("product_type") or ""
    title = row.get("title") or ""
    return is_sneaker(title, cat)


def offer(shop, origin, price, was, url, color, sizes, image, gtin, mpn, tax):
    return {
        "shop": shop,
        "price": price,
        "wasPrice": was,
        "shipping": None,
        "url": url,
        "color": color or "",
        "sizes": sizes,
        "sizesInStock": sizes,
        "image": image,
        "gtin": gtin or "",
        "mpn": mpn or "",
        "shipsTo": None,
        "shippingByCountry": {},
        "origin": origin,
        "taxIncluded": tax,
        "ddp": False,
        "availability": "in_stock",
    }


def add(cards, key, product, off):
    card = cards.get(key)
    if not card:
        cards[key] = product
        product["offers"] = [off]
        return
    card["offers"].append(off)
    card["sizes"] = sorted(set(card["sizes"] + product["sizes"]))
    for img in product["images"]:
        if img not in card["images"] and len(card["images"]) < 8:
            card["images"].append(img)
    if product["gtins"]:
        card["gtins"] = list(dict.fromkeys(card["gtins"] + product["gtins"]))[:12]


def from_google(path, shop, origin, fx, cards):
    n = 0
    with zipfile.ZipFile(path) as zf:
        name = zf.namelist()[0]
        raw = zf.read(name)
    text = raw.decode("utf-8", errors="replace")
    sample = text[:200]
    delim = "\t" if sample.count("\t") > sample.count(",") else ","
    reader = csv.DictReader(io.StringIO(text), delimiter=delim)
    for row in reader:
        row = norm(row)
        title = row.get("title") or ""
        if not shoe_row(row):
            continue
        price, cur = money(row.get("sale_price") or row.get("price"), fx)
        if not price:
            continue
        was, _ = money(row.get("price"), fx) if row.get("sale_price") else (None, None)
        if was and was <= price:
            was = None
        brand = (row.get("brand") or "").strip() or "Unknown"
        raw_color = (row.get("color") or "").strip()
        color = short_color(raw_color)
        mpn = (row.get("mpn") or row.get("item_group_id") or row.get("id") or "").strip()
        sz = sizes_of(row, title)
        cat = gender(row, title, sz)
        model = short_model(brand, title, raw_color)
        imgs = pick_images(images_of(row))
        if not imgs:
            continue
        gtin = (row.get("gtin") or "").strip()
        key = card_key(brand, model, color, cat)
        product = {
            "id": key,
            "brand": brand,
            "name": model,
            "colorway": color,
            "category": cat,
            "family": family_of(brand, model, cat),
            "mpn": mpn,
            "image": imgs[0],
            "images": imgs,
            "colors": [color],
            "sizes": sz,
            "offers": [],
            "pop": 1,
            "fresh": 1,
            "gtins": [gtin] if gtin else [],
            "style": None,
        }
        off = offer(shop, origin, price, was, row.get("link") or "", color, sz, imgs[0], gtin, mpn, True)
        add(cards, key, product, off)
        n += 1
    print(shop, n)
    return n


def oxygen_url(raw):
    if not raw:
        return ""
    if "murl=" in raw:
        q = parse_qs(urlparse(raw).query)
        if q.get("murl"):
            return unquote(q["murl"][0])
    return raw.replace("<LSN EID>", os.environ.get("LSN_EID", "")).replace("<LSN OID>", os.environ.get("LSN_OID", ""))


def from_oxygen(path, fx, cards):
    n = 0
    raw = open(path, "rb").read(2)
    opener = gzip.open if raw == b"\x1f\x8b" or path.endswith(".gz") else open
    with opener(path, "rt", errors="replace") as f:
        for line in f:
            if line.startswith("HDR|") or line.startswith("TRL|") or not line.strip():
                continue
            cols = line.rstrip("\n").split("|")
            if len(cols) < 18:
                continue
            title = cols[1]
            cat_name = cols[3]
            if not is_sneaker(title, cat_name):
                continue
            price, _ = money((cols[13] or cols[14]) + " GBP", fx)
            if not price:
                continue
            brand = (cols[16] or cols[20] or "Unknown").strip()
            raw_color = cols[2].split("-")[-1].strip() if "-" in cols[2] else ""
            color = short_color(raw_color)
            mpn = cols[19].strip() if len(cols) > 19 else cols[0]
            imgs = pick_images([cols[6]] if cols[6].startswith("http") else [])
            if not imgs:
                continue
            cat = gender({}, title)
            model = short_model(brand, title, raw_color)
            key = card_key(brand, model, color, cat)
            sz = []
            product = {
                "id": key,
                "brand": brand,
                "name": model,
                "colorway": color,
                "category": cat,
                "family": family_of(brand, model, cat),
                "mpn": mpn,
                "image": imgs[0],
                "images": imgs,
                "colors": [color],
                "sizes": sz,
                "offers": [],
                "pop": 1,
                "fresh": 1,
                "gtins": [],
                "style": None,
            }
            off = offer("Oxygen", "GB", price, None, oxygen_url(cols[5]), color, sz, imgs[0], "", mpn, True)
            add(cards, key, product, off)
            n += 1
    print("Oxygen", n)
    return n


def slim_offer(off):
    return {
        "shop": off.get("shop"),
        "price": off.get("price"),
        "wasPrice": off.get("wasPrice"),
        "url": off.get("url"),
        "sizes": off.get("sizes") or off.get("sizesInStock") or [],
        "image": off.get("image") or "",
        "origin": off.get("origin") or "",
    }


def lite(card):
    # Catalog file: pictures stay, offers shrink to one row per shop.
    seen = set()
    offers = []
    for off in card.get("offers") or []:
        shop = off.get("shop") or ""
        if shop in seen:
            continue
        seen.add(shop)
        offers.append(slim_offer(off))
    return {
        "id": card.get("id"),
        "brand": card.get("brand"),
        "name": card.get("name"),
        "colorway": card.get("colorway"),
        "category": card.get("category"),
        "family": card.get("family"),
        "mpn": card.get("mpn"),
        "image": card.get("image"),
        "images": card.get("images") or [],
        "colors": card.get("colors") or [],
        "sizes": card.get("sizes") or [],
        "offers": offers,
        "pop": card.get("pop") or 1,
        "fresh": card.get("fresh") or 1,
        "style": card.get("style"),
    }



def from_jd(path, fx, cards):
    # Same pipe file as Oxygen, fetched with the same WinSCP. Not CJ.
    n = 0
    raw = open(path, "rb").read(2)
    opener = gzip.open if raw == b"\x1f\x8b" or path.endswith(".gz") else open
    with opener(path, "rt", errors="replace") as f:
        for line in f:
            if line.startswith("HDR|") or line.startswith("TRL|") or not line.strip():
                continue
            cols = line.rstrip("\n").split("|")
            if len(cols) < 33:
                continue
            title = cols[1]
            if not is_sneaker(title, cols[4]):
                continue
            price, _ = money(cols[13] + " USD", fx)
            if not price:
                continue
            brand = (cols[16] or cols[20] or "Unknown").strip()
            raw_color = (cols[32] or "").strip()
            color = short_color(raw_color)
            if not color:
                continue
            gender_raw = (cols[33] or "").strip().lower()
            cat = "women" if gender_raw.startswith("women") else "kids" if "kid" in gender_raw else "men"
            system = "usw" if cat == "women" else "us"
            eu = to_eu(cols[30], system)
            sz = [eu] if eu is not None else []
            imgs = pick_images([cols[6]] if cols[6].startswith("http") else [])
            if not imgs:
                continue
            model = short_model(brand, title, raw_color)
            mpn = (cols[19] or cols[2] or cols[0]).strip()
            key = card_key(brand, model, color, cat)
            product = {
                "id": key,
                "brand": brand,
                "name": model,
                "colorway": color,
                "category": cat,
                "family": family_of(brand, model, cat),
                "mpn": mpn,
                "image": imgs[0],
                "images": imgs,
                "colors": [color],
                "sizes": sz,
                "offers": [],
                "pop": 1,
                "fresh": 1,
                "gtins": [cols[23]] if len(cols) > 23 and cols[23] else [],
                "style": None,
            }
            off = offer("JD", "US", price, None, oxygen_url(cols[5]), color, sz, imgs[0], cols[23] if len(cols) > 23 else "", mpn, False)
            add(cards, key, product, off)
            n += 1
    print("JD", n)
    return n


def main():
    fx = rates()
    print("fx", fx)
    cards = {}
    for fname, (shop, origin, _) in SHOPS.items():
        path = os.path.join(FEEDS, fname)
        if not os.path.exists(path):
            print("missing", path)
            sys.exit(1)
        from_google(path, shop, origin, fx, cards)
    oxy = os.path.join(FEEDS, "oxygen", "oxygen.txt")
    if not os.path.exists(oxy):
        print("missing oxygen")
        sys.exit(1)
    from_oxygen(oxy, fx, cards)
    jd = os.path.join(FEEDS, "jd", "jd.txt")
    if not os.path.exists(jd):
        jd = os.path.join(FEEDS, "jd", "jd.txt.gz")
    if os.path.exists(jd):
        from_jd(jd, fx, cards)
    else:
        print("missing jd")
    products = list(cards.values())
    products.sort(key=lambda p: (p["brand"], p["name"], p["id"]))
    for i, p in enumerate(products):
        p["pop"] = max(1, len(p["offers"]) * 10 + min(len(p["sizes"]), 12))
    os.makedirs(os.path.join(OUT, "catalog"), exist_ok=True)
    item_dir = os.path.join(OUT, "catalog", "items")
    os.makedirs(item_dir, exist_ok=True)
    light = [lite(p) for p in products]
    # Full PDP data, one file per product. Not loaded by the catalog.
    for p in products:
        with open(os.path.join(item_dir, p["id"] + ".json"), "w") as f:
            json.dump(p, f, ensure_ascii=False, separators=(",", ":"))
    page_dir = os.path.join(OUT, "catalog", "pages")
    os.makedirs(page_dir, exist_ok=True)
    with open(os.path.join(OUT, "catalog", "first.json"), "w") as f:
        json.dump(light[:96], f, ensure_ascii=False, separators=(",", ":"))
    pages = 0
    for start in range(0, len(light), 96):
        pages += 1
        with open(os.path.join(page_dir, "page-%d.json" % pages), "w") as f:
            json.dump(light[start:start + 96], f, ensure_ascii=False, separators=(",", ":"))
    write_indexes(light)
    write_sitemaps(light)
    meta = {
        "count": len(products),
        "items": "catalog/items",
        "pages": pages,
        "pageSize": 96,
        "shops": sorted({o["shop"] for p in products for o in p["offers"]}),
        "fx": fx,
    }
    with open(os.path.join(OUT, "catalog", "meta.json"), "w") as f:
        json.dump(meta, f, indent=2)
    print("cards", len(products), "pages", pages)


def write_indexes(light):
    by_size, by_brand, by_dest = {}, {}, {}
    for card in light:
        pid = card.get("id")
        for raw in card.get("sizes") or []:
            by_size.setdefault(str(raw), []).append(pid)
        brand = card.get("brand") or "Unknown"
        by_brand.setdefault(brand, []).append(pid)
        for off in card.get("offers") or []:
            origin = off.get("origin") or ""
            if origin:
                by_dest.setdefault(origin, []).append(pid)
    index_dir = os.path.join(OUT, "catalog", "index")
    os.makedirs(index_dir, exist_ok=True)
    for name, data in (("size", by_size), ("brand", by_brand), ("origin", by_dest)):
        with open(os.path.join(index_dir, name + ".json"), "w") as f:
            json.dump(data, f, ensure_ascii=False, separators=(",", ":"))
    # Address map, 10 000 ids per file. Not a product dump.
    map_dir = os.path.join(OUT, "catalog", "map")
    os.makedirs(map_dir, exist_ok=True)
    ids = [c.get("id") for c in light if c.get("id")]
    for i in range(0, max(len(ids), 1), 10000):
        part = ids[i:i + 10000]
        with open(os.path.join(map_dir, "map-%d.json" % (i // 10000 + 1)), "w") as f:
            json.dump(part, f, ensure_ascii=False, separators=(",", ":"))


def write_sitemaps(light):
    base = "https://sneakeaway.com/index.html?p="
    urls = [base + p.get("id", "") for p in light if p.get("id")]
    chunk = 10000
    parts = []
    site_dir = os.path.join(OUT, "catalog", "sitemaps")
    os.makedirs(site_dir, exist_ok=True)
    for i in range(0, max(len(urls), 1), chunk):
        part = urls[i:i + chunk]
        name = "sitemap-%d.xml" % (len(parts) + 1)
        body = ["<?xml version=\"1.0\" encoding=\"UTF-8\"?>", '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
        body += ["  <url><loc>%s</loc></url>" % u for u in part]
        body.append("</urlset>")
        with open(os.path.join(site_dir, name), "w") as f:
            f.write("\n".join(body))
        parts.append(name)
    index = ["<?xml version=\"1.0\" encoding=\"UTF-8\"?>", '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    index += ["  <sitemap><loc>https://sneakeaway.com/%s</loc></sitemap>" % name for name in parts]
    index.append("</sitemapindex>")
    with open(os.path.join(OUT, "sitemap.xml"), "w") as f:
        f.write("\n".join(index))


if __name__ == "__main__":
    main()
