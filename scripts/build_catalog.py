#!/usr/bin/env python3
"""Build products.json, products-lite.json and catalog/first.json from partner feeds.

Does not deploy. The workflow uploads the files as an artifact until the shape is checked.
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

SHOE = re.compile(r"shoe|sneaker|trainer|footwear|basket|footwear", re.I)
SKIP = re.compile(r"\b(jacket|coat|t-shirt|tee|shirt|hoodie|pants|jeans|sock|hat|bag|dress|skirt)\b", re.I)
HEEL = re.compile(r"\b(heel|pump|stiletto|sandal|slide|flip-flop|mule)\b", re.I)
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


def slug(text):
    text = re.sub(r"[^a-z0-9]+", "-", (text or "").lower()).strip("-")
    return text[:80] or "item"


def gender(row, title):
    g = (row.get("gender") or "").strip().lower()
    age = (row.get("age_group") or "").strip().lower()
    if g in ("female", "women", "woman"):
        return "women"
    if g in ("male", "men", "man"):
        return "men"
    if g in ("unisex",):
        return "men"
    blob = f"{g} {age} {title}".lower()
    if any(x in blob for x in ("kid", "child", "junior", "infant", "boy", "girl")):
        return "kids"
    if any(x in blob for x in ("women", "woman", "female", "wmns")):
        return "women"
    if any(x in blob for x in (" men", "male", "mens")):
        return "men"
    return "men"


def sizes_of(row, title):
    raw = row.get("size") or ""
    found = []
    for part in re.split(r"[/,|]", raw):
        m = SIZE_RE.search(part.replace(",", "."))
        if not m:
            continue
        try:
            n = float(m.group(1))
        except ValueError:
            continue
        if 1 <= n <= 55:
            found.append(n)
    return sorted(set(found))


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
    if "shoes" in cat.lower():
        return True
    blob = " ".join(row.get(k) or "" for k in ("google_product_category", "product_type", "title"))
    return bool(SHOE.search(blob) or re.search(r"\bboots?\b", blob, re.I))


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
        color = (row.get("color") or "").split("/")[0].strip() or "Color"
        mpn = (row.get("mpn") or row.get("item_group_id") or row.get("id") or "").strip()
        cat = gender(row, title)
        model = re.sub(r"\s+", " ", title).strip()
        model = re.sub(re.escape(brand), "", model, flags=re.I).strip(" -")
        sz = sizes_of(row, title)
        imgs = images_of(row)
        if not imgs:
            continue
        gtin = (row.get("gtin") or "").strip()
        key = slug(f"{brand}-{mpn or model}-{color}-{cat}")
        product = {
            "id": key,
            "brand": brand,
            "name": model[:80] or title[:80],
            "colorway": color,
            "category": cat,
            "family": f"{brand.lower()}|{slug(model)}|{cat}",
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
            if not re.search(r"shoe|sneaker|trainer|footwear|boot", title + " " + cat_name, re.I):
                continue
            if SKIP.search(title) and not SHOE.search(title):
                continue
            price, _ = money((cols[13] or cols[14]) + " GBP", fx)
            if not price:
                continue
            brand = (cols[16] or cols[20] or "Unknown").strip()
            color = (cols[2].split("-")[-1] if "-" in cols[2] else "Color").title()
            mpn = cols[19].strip() if len(cols) > 19 else cols[0]
            imgs = [cols[6]] if cols[6].startswith("http") else []
            if not imgs:
                continue
            cat = gender({}, title)
            key = slug(f"{brand}-{mpn}-{color}-{cat}")
            sz = []
            product = {
                "id": key,
                "brand": brand,
                "name": title[:80],
                "colorway": color,
                "category": cat,
                "family": f"{brand.lower()}|{slug(title)}|{cat}",
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


def lite(card):
    out = dict(card)
    out["images"] = card["images"][:2]
    out["offers"] = []
    for off in card["offers"]:
        o = dict(off)
        o.pop("shippingByCountry", None)
        out["offers"].append(o)
    return out


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
    products = list(cards.values())
    products.sort(key=lambda p: (p["brand"], p["name"], p["id"]))
    for i, p in enumerate(products):
        p["pop"] = max(1, len(p["offers"]) * 10 + min(len(p["sizes"]), 12))
    os.makedirs(os.path.join(OUT, "catalog"), exist_ok=True)
    with open(os.path.join(OUT, "products.json"), "w") as f:
        json.dump(products, f, ensure_ascii=False, separators=(",", ":"))
    with open(os.path.join(OUT, "products-lite.json"), "w") as f:
        json.dump([lite(p) for p in products], f, ensure_ascii=False, separators=(",", ":"))
    with open(os.path.join(OUT, "catalog", "first.json"), "w") as f:
        json.dump(products[:96], f, ensure_ascii=False, separators=(",", ":"))
    meta = {
        "count": len(products),
        "shops": sorted({o["shop"] for p in products for o in p["offers"]}),
        "fx": fx,
    }
    with open(os.path.join(OUT, "catalog", "meta.json"), "w") as f:
        json.dump(meta, f, indent=2)
    print("cards", len(products))


if __name__ == "__main__":
    main()
