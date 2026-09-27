window.HOME_DOC_TITLE = document.title || 'Sneake® Away — compare sneaker prices';

(function(){
  var PROMO_CODES = [
    {shop:"Footshop",code:"BALANCE10",pct:10,from:"2026-09-24",until:"2026-09-30",brands:["new balance"]},
    {shop:"Footshop",code:"WARMUP10",pct:10,from:"2026-10-01",until:"2026-10-07",brands:["the north face","north face","columbia"]},
    {shop:"Footshop",code:"SNEAKER10",pct:10,from:"2026-09-08",until:"2026-10-14",brands:["nike","jordan"]},
    {shop:"Footshop",code:"3STRIPES12",pct:12,from:"2026-10-15",until:"2026-10-21",brands:["adidas"]},
    {shop:"Queens",code:"LIMITED15",pct:15,from:"2026-09-24",until:"2026-10-14",brands:["melissa","havaianas","birkenstock","ugg","veja","converse","asics","dr. martens","dr martens","reebok","moon boot","puma"]}
  ];
  function day(){ var d=new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
  function key(s){ s=String(s||"").toLowerCase(); if(s.indexOf("footshop")>=0) return "footshop"; if(s.indexOf("queens")>=0) return "queens"; return s; }
  window.promoForOffer = function(p, shop){
    var brand=String((p&&p.brand)||"").toLowerCase()+" "+String((p&&p.name)||"").toLowerCase()+" "+String((p&&p.id)||"").toLowerCase()+" "+String((p&&p.family)||"").toLowerCase();
    var today=day();
    var sk=key(shop);
    for (var i=0;i<PROMO_CODES.length;i++){
      var row=PROMO_CODES[i];
      if (key(row.shop)!==sk) continue;
      if (row.from && today<row.from) continue;
      if (row.until && today>row.until) continue;
      var ok=!row.brands || !row.brands.length;
      if (!ok){
        for (var j=0;j<row.brands.length;j++){
          var b=String(row.brands[j]).toLowerCase();
          if (brand.indexOf(b)>=0 || b.indexOf(brand)>=0){ ok=true; break; }
        }
      }
      if (ok) return row;
    }
    return null;
  };
  window.promoRowHTML = function(p, shop){
    var row=window.promoForOffer(p, shop);
    if(!row) return "";
    var code=String(row.code).replace(/"/g,"");
    return '<div class="offer-promo"><span class="offer-promo-code">'+code+'</span><button type="button" class="offer-promo-copy" onclick="copyPromoCode(\''+code+'\', this)" aria-label="Copy code"><i class="fas fa-copy" aria-hidden="true"></i></button><span class="offer-promo-note">extra −'+row.pct+'% at checkout</span></div>';
  };
  window.copyPromoCode = function(code, btn){
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(function(){
        if(!btn) return;
        var prev=btn.innerHTML;
        btn.innerHTML='<i class="fas fa-check" aria-hidden="true"></i>';
        setTimeout(function(){ btn.innerHTML=prev; },1200);
      });
    }
  };
})();

/* Live PDP + fit + offer boxes. Loaded after script.js */
(function () {
  const FIT_KEY = 'sa_fit_ref';
  const FIT_FOOT_KEY = 'sa_fit_foot';

  const I18N = {
    desc: { en: 'Description', bg: 'Описание', fr: 'Description', de: 'Beschreibung', es: 'Descripción', it: 'Descrizione' },
    fit: { en: 'Fit', bg: 'Пасване', fr: 'Pointure', de: 'Passform', es: 'Calce', it: 'Calzata' },
    fit_pick: { en: 'A pair you already wear', bg: 'Чифт, който вече носиш', fr: 'Une paire que vous portez déjà', de: 'Ein Paar, das du schon trägst', es: 'Un par que ya usas', it: 'Un paio che porti già' },
    fit_other: { en: 'Another model I wear', bg: 'Друг модел, който нося', fr: 'Un autre modèle', de: 'Anderes Modell', es: 'Otro modelo', it: 'Altro modello' },
    fit_none: { en: 'No fit note for this pair yet.', bg: 'Няма бележка за пасване за този модел.', fr: 'Pas encore de note de pointure.', de: 'Noch kein Hinweis zu diesem Modell.', es: 'Aún no hay nota de calce.', it: 'Nessuna nota di calzata.' },
    fit_from_desc: { en: 'From the shop description', bg: 'От описанието на магазина', fr: 'D’après la description', de: 'Aus der Shop-Beschreibung', es: 'Según la descripción', it: 'Dalla descrizione del negozio' },
    fit_disc: { en: 'Approximate last comparison, not a guarantee.', bg: 'Приблизително сравнение по калъп, не гаранция.', fr: 'Comparaison approximative, pas une garantie.', de: 'Ungefährer Leistenvergleich, keine Garantie.', es: 'Comparación aproximada, no es garantía.', it: 'Confronto approssimativo, non una garanzia.' },
    width: { en: 'Width', bg: 'Ширина', fr: 'Largeur', de: 'Weite', es: 'Ancho', it: 'Larghezza' },
    arch: { en: 'Arch', bg: 'Свод', fr: 'Voûte', de: 'Fußgewölbe', es: 'Arco', it: 'Arco' },
    w_narrow: { en: 'Narrow', bg: 'Тесен', fr: 'Étroit', de: 'Schmal', es: 'Estrecho', it: 'Stretto' },
    w_regular: { en: 'Regular', bg: 'Нормален', fr: 'Normal', de: 'Normal', es: 'Normal', it: 'Normale' },
    w_wide: { en: 'Wide', bg: 'Широк', fr: 'Large', de: 'Weit', es: 'Ancho', it: 'Largo' },
    a_low: { en: 'Low', bg: 'Нисък', fr: 'Bas', de: 'Flach', es: 'Bajo', it: 'Basso' },
    a_normal: { en: 'Normal', bg: 'Нормален', fr: 'Normal', de: 'Normal', es: 'Normal', it: 'Normale' },
    a_high: { en: 'High', bg: 'Висок', fr: 'Haut', de: 'Hoch', es: 'Alto', it: 'Alto' },
    ship_price: { en: 'Shipping cost', bg: 'Цена на доставка', fr: 'Frais de port', de: 'Versandkosten', es: 'Gastos de envío', it: 'Costo spedizione' },
    delivery_time: { en: 'Delivery time', bg: 'Време за доставка', fr: 'Délai de livraison', de: 'Lieferzeit', es: 'Plazo de entrega', it: 'Tempi di consegna' },
    delivery: { en: 'Delivery', bg: 'Доставка', fr: 'Livraison', de: 'Lieferung', es: 'Entrega', it: 'Consegna' },
    delivery_unknown: { en: 'This shop does not give us a delivery time.', bg: 'Магазинът не дава срок за доставка.', fr: 'Le magasin n’indique pas de délai.', de: 'Der Shop nennt keine Lieferzeit.', es: 'La tienda no indica plazo.', it: 'Il negozio non indica i tempi.' },
    ship_unknown: { en: 'This shop does not give a shipping price for this destination.', bg: 'Магазинът не дава цена за доставка до тази дестинация.', fr: 'Pas de frais de port pour cette destination.', de: 'Kein Versandpreis für dieses Ziel.', es: 'Sin precio de envío a este destino.', it: 'Nessun prezzo di spedizione per questa destinazione.' },
    ship_ww: { en: 'Shipping amount only after you pick a destination.', bg: 'Сума за доставка само след избор на дестинация.', fr: 'Frais de port après le choix d’une destination.', de: 'Versandpreis erst nach Wahl des Ziels.', es: 'Gastos de envío tras elegir destino.', it: 'Spedizione solo dopo la destinazione.' },
    duty: { en: 'Duties / VAT', bg: 'Мито / ДДС', fr: 'Droits / TVA', de: 'Zoll / MwSt.', es: 'Aranceles / IVA', it: 'Dazi / IVA' },
    delivered: { en: 'delivered', bg: 'с доставка', fr: 'livré', de: 'geliefert', es: 'entregado', it: 'consegnato' },
    for_foot: { en: 'For your foot: try EU {s}', bg: 'За твоя крак: пробвай EU {s}', fr: 'Pour votre pied : essayez EU {s}', de: 'Für deinen Fuß: EU {s} probieren', es: 'Para tu pie: prueba EU {s}', it: 'Per il tuo piede: prova EU {s}' },
    size_title: { en: 'Your size', bg: 'Твоят размер', fr: 'Votre pointure', de: 'Deine Größe', es: 'Tu talla', it: 'La tua taglia' },
    save: { en: 'Save', bg: 'Запази', fr: 'Enregistrer', de: 'Speichern', es: 'Guardar', it: 'Salva' },
    skip: { en: 'Skip', bg: 'Пропусни', fr: 'Passer', de: 'Überspringen', es: 'Omitir', it: 'Salta' },
    size_chip: { en: 'Size', bg: 'Размер', fr: 'Pointure', de: 'Größe', es: 'Talla', it: 'Taglia' },
    duty_txt: { en: 'We do not have a duty figure from the shop. Import tax may apply when the parcel crosses a border.', bg: 'Нямаме сума за мито от магазина. При внос през граница може да има такса.', fr: 'Pas de montant de droits fourni. Une taxe d’importation peut s’appliquer.', de: 'Kein Zollbetrag vom Shop. Bei Einfuhr kann Steuer anfallen.', es: 'La tienda no da un arancel. Puede haber tasa de importación.', it: 'Nessun importo daziario dal negozio. All’importazione può applicarsi una tassa.' },
    eta: { en: 'est. {a}–{b}', bg: 'ок. {a}–{b}', fr: 'env. {a}–{b}', de: 'ca. {a}–{b}', es: 'est. {a}–{b}', it: 'circa {a}–{b}' },
    days: { en: '{a}–{b} days', bg: '{a}–{b} дни', fr: '{a}–{b} jours', de: '{a}–{b} Tage', es: '{a}–{b} días', it: '{a}–{b} giorni' },
    has_size: { en: 'Has {s}', bg: 'Има {s}', fr: 'Pointure {s}', de: 'Größe {s} da', es: 'Talla {s}', it: 'Taglia {s}' },
    no_size: { en: 'No {s}', bg: 'Няма {s}', fr: 'Pas de {s}', de: 'Keine {s}', es: 'Sin {s}', it: 'Niente {s}' },
    offers: { en: 'Offers', bg: 'Оферти', fr: 'Offres', de: 'Angebote', es: 'Ofertas', it: 'Offerte' },
    same_eu: { en: 'Usually the same EU size as {r}.', bg: 'Обикновено същият EU номер като {r}.', fr: 'Souvent la même pointure UE que {r}.', de: 'Meist dieselbe EU-Größe wie {r}.', es: 'Suele ser la misma talla EU que {r}.', it: 'Di solito stessa taglia EU di {r}.' },
    half_up: { en: 'Often +½ EU versus {r}.', bg: 'Често +½ EU спрямо {r}.', fr: 'Souvent +½ UE par rapport à {r}.', de: 'Oft +½ EU gegenüber {r}.', es: 'A menudo +½ EU frente a {r}.', it: 'Spesso +½ EU rispetto a {r}.' },
    half_down: { en: 'Often −½ EU versus {r}.', bg: 'Често −½ EU спрямо {r}.', fr: 'Souvent −½ UE par rapport à {r}.', de: 'Oft −½ EU gegenüber {r}.', es: 'A menudo −½ EU frente a {r}.', it: 'Spesso −½ EU rispetto a {r}.' },
    narrower: { en: 'Narrower last than {r}.', bg: 'По-тесен калъп от {r}.', fr: 'Forme plus étroite que {r}.', de: 'Schmaler als {r}.', es: 'Horma más estrecha que {r}.', it: 'Forma più stretta di {r}.' },
    wider: { en: 'Roomier last than {r}.', bg: 'По-широк калъп от {r}.', fr: 'Forme plus large que {r}.', de: 'Weiter als {r}.', es: 'Horma más ancha que {r}.', it: 'Forma più ampia di {r}.' }
  };

  function tx(key) {
    const pack = I18N[key];
    if (!pack) return key;
    return pack[typeof currentLang !== 'undefined' ? currentLang : 'en'] || pack.en;
  }

  function prettyLast(key) {
    return String(key || '').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  function matchSilhouette(p) {
    const lasts = window.SA_LASTS;
    if (!lasts || !p) return null;
    const hay = ((p.brand || '') + ' ' + (p.name || '') + ' ' + (p.line || '')).toLowerCase();
    let found = null;
    let foundLen = 0;
    Object.keys(lasts.silhouettes || {}).forEach(key => {
      const s = lasts.silhouettes[key];
      (s.match || []).forEach(m => {
        if (hay.includes(String(m).toLowerCase()) && String(m).length >= foundLen) {
          found = Object.assign({ key }, s);
          foundLen = String(m).length;
        }
      });
    });
    return found;
  }

  function descFitOverride(p) {
    const blob = JSON.stringify(p.desc || p.name || '').toLowerCase();
    const rules = [
      { re: /runs narrow|very narrow|slim fit|тесен калъп|läuft schmal/, width: 'narrow', note: true },
      { re: /runs wide|wide fit|wide last|широк калъп|läuft weit/, width: 'wide', note: true },
      { re: /high arch|high instep|висок свод/, arch: 'high', note: true },
      { re: /low arch|flat foot|нисък свод/, arch: 'low', note: true },
      { re: /true to size|tts|по размер/, vs: 0, note: true },
      { re: /size up|half size up|\+0\.5|\+½/, vs: 0.5, note: true }
    ];
    const out = {};
    rules.forEach(r => {
      if (r.re.test(blob)) Object.assign(out, r, { fromDesc: true });
    });
    return Object.keys(out).length ? out : null;
  }

  function closeLasts(currentKey, n) {
    const sils = (window.SA_LASTS && window.SA_LASTS.silhouettes) || {};
    const cur = sils[currentKey];
    if (!cur) return Object.keys(sils).slice(0, n).map(k => Object.assign({ key: k }, sils[k]));
    return Object.keys(sils)
      .filter(k => k !== currentKey)
      .map(k => {
        const s = sils[k];
        const dw = (s.width === cur.width) ? 0 : 1;
        const dv = Math.abs((s.vsRef || 0) - (cur.vsRef || 0));
        return Object.assign({ key: k, _d: dw * 2 + dv }, s);
      })
      .sort((a, b) => a._d - b._d)
      .slice(0, n);
  }

  function fitNote(p, refKey) {
    const over = descFitOverride(p);
    const cur = matchSilhouette(p);
    const sils = (window.SA_LASTS && window.SA_LASTS.silhouettes) || {};
    const ref = refKey && sils[refKey] ? Object.assign({ key: refKey }, sils[refKey]) : null;
    if (over && over.fromDesc) {
      const bits = [];
      if (over.width) bits.push(tx('w_' + over.width));
      if (over.arch) bits.push(tx('a_' + over.arch));
      if (over.vs === 0.5 && ref) bits.push(tx('half_up').replace('{r}', prettyLast(ref.key)));
      if (over.vs === 0 && ref) bits.push(tx('same_eu').replace('{r}', prettyLast(ref.key)));
      return { text: bits.join(' · ') || tx('fit_from_desc'), source: 'desc' };
    }
    if (!cur) return { text: tx('fit_none'), source: '' };
    if (!ref) return { text: cur.note || tx('fit_none'), source: 'last' };
    const d = (cur.vsRef || 0) - (ref.vsRef || 0);
    let line = tx('same_eu').replace('{r}', prettyLast(ref.key));
    if (d >= 0.4) line = tx('half_up').replace('{r}', prettyLast(ref.key));
    if (d <= -0.4) line = tx('half_down').replace('{r}', prettyLast(ref.key));
    if (cur.width === 'narrow' && ref.width !== 'narrow') line += ' ' + tx('narrower').replace('{r}', prettyLast(ref.key));
    if (cur.width === 'wide' && ref.width !== 'wide') line += ' ' + tx('wider').replace('{r}', prettyLast(ref.key));
    return { text: line, source: 'last' };
  }

  function addDays(n) {
    const d = new Date();
    d.setDate(d.getDate() + n);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    return dd + '.' + mm;
  }

  
  function destZone(cc) {
    const z = (window.SA_ZONES && window.SA_ZONES.zones) || {};
    const code = String(cc || '').toUpperCase();
    for (const name of Object.keys(z)) {
      if ((z[name].cc || []).indexOf(code) !== -1) return z[name];
    }
    return z.other || { daysMin: 7, daysMax: 21 };
  }
function deliveryLine(offer, country) {
    if (!country) return { label: tx('delivery_time'), known: false };
    const policy = typeof offerShipPolicy === 'function' ? offerShipPolicy(offer, country) : null;
    if (policy && policy.daysMin != null && policy.daysMax != null) {
      const destOk = policy.rateAppliesTo
        ? policy.rateAppliesTo.indexOf(country) !== -1
        : !(Array.isArray(policy.ships) && policy.ships.length && policy.ships.indexOf(country) === -1);
      if (destOk) return { label: policy.daysMin + '–' + policy.daysMax + ' days', known: true };
    }
    const z = destZone(country);
    if (z && z.daysMin != null) return { label: z.daysMin + '–' + z.daysMax + ' days', known: true, zone: true };
    return { label: tx('delivery_time'), known: false };
  }

  function shipLine(offer, country, rate, symbol) {
    if (!country) return { label: tx('delivery'), known: false, ww: true };
    const cost = offerShippingCost(offer, country);
    if (cost == null) return { label: tx('delivery'), known: false };
    const n = Math.round(Number(cost) * rate);
    if (n <= 0) return { label: (langs[currentLang] || langs.en).ship_free || 'Free delivery', known: true, value: 0 };
    return { label: symbol + n, known: true, value: n };
  }

  function isSale(offer, p) {
    const was = Number(offer.wasPrice || p.originalPrice || 0);
    return was && was > Number(offer.price || 0);
  }

  function rankBadge(i, use) {
    if (!use || i > 2) return '';
    const cls = i === 0 ? 'gold' : i === 1 ? 'silver' : 'bronze';
    return `<span class="rank-wreath rank-${cls}" title="${cls}" aria-hidden="true">${i + 1}</span>`;
  }

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  window.initProductPage = async function initProductPage() {
    const _rootKeep = document.getElementById('product-page');
    const _yKeep = _rootKeep && document.body.classList.contains('product-view') ? _rootKeep.scrollTop : 0;

    const root = document.getElementById('product-page');
    if (!root) return;
    const rawId = new URLSearchParams(location.search).get('p') || new URLSearchParams(location.search).get('id');
    const dict = langs[currentLang] || langs.en;
    if (!rawId) {
      root.hidden = true;
      root.innerHTML = '';
      document.body.classList.remove('product-view');
      return;
    }
    let p = (productsData || []).find(item => String(item.id) === String(rawId) || Number(item.id) === Number(rawId));
    if (!p) {
      try {
        const raw = sessionStorage.getItem('sa_open_product') || localStorage.getItem('sa_open_product');
        if (raw) {
          const cached = JSON.parse(raw);
          if (cached && String(cached.id) === String(rawId)) p = cached;
        }
      } catch (e) {}
    }
    if (!p) {
      try {
        const res = await fetch('products.json', { cache: 'no-store' });
        if (res.ok) {
          const all = await res.json();
          if (Array.isArray(all)) {
            productsData = all;
            p = all.find(item => String(item.id) === String(rawId));
          }
        }
      } catch (e) {}
    }
    if (typeof loadProductsFull === 'function') {
      try { await loadProductsFull(); } catch (e) {}
      p = (productsData || []).find(item => String(item.id) === String(rawId) || Number(item.id) === Number(rawId)) || p;
    }
    if (!p) {
      root.hidden = false;
      document.body.classList.add('product-view');
      root.innerHTML = `<p class="product-missing">No product. <a href="index.html">Catalog</a></p>`;
      return;
    }
    root.hidden = false;
    document.body.classList.add('product-view');
    applyProductVariant(p);
    try {
      const merged = offersForSameColor(p);
      if (merged && merged.length) {
        p._offersBase = p._offersBase || merged;
        p.offers = merged;
      }
    } catch (e) {}
    if (typeof selectedSizes !== 'undefined' && selectedSizes.length === 1) selectedProductSize = selectedSizes[0];
    else selectedProductSize = null;
    document.title = ((p.brand ? p.brand + ' ' : '') + (p.name || '')).trim() + ' — Sneake® Away';

    let ranked = [];
    try { ranked = rankedOffers(p) || []; } catch (e) { ranked = (p.offers || []).slice(); }
    const destLocked = shipMode === 'tome' && !!currentCountry;
    if (typeof selectedSizes !== 'undefined' && selectedSizes.length) {
      const sized = ranked.filter(o => selectedSizes.some(sz => offerHasSize(o, sz)));
      if (sized.length) ranked = sized;
    }
    if (destLocked) {
      const ship = ranked.filter(o => o._ships !== false);
      if (ship.length) ranked = ship;
    }
    ranked = ranked.slice().sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));

    const rate = rates[currentCurrency] || 1;
    const symbol = symbols[currentCurrency] || '€';
    rememberViewed(p.id);
    const rangeInfo = formatRange(p, rate, symbol);
    const useMedals = false;
    const shipYes = ranked;
    const top = ranked[0];
    const topSale = top && isSale(top, p);
    const showLanded = destLocked && top && top._ships === true;
    const topNum = top
      ? Math.round(((showLanded && top._total != null) ? top._total : (top.price || 0)) * rate)
      : (rangeInfo.min != null ? rangeInfo.min : null);

    const boxes = ranked.map((offer, i) => {
      const sale = isSale(offer, p);
      const item = Math.round((offer.price || 0) * rate);
      const was = offer.wasPrice ? Math.round(offer.wasPrice * rate) : null;
      const dest = destLocked ? currentCountry : '';
      const del = deliveryLine(offer, dest || null);
      const ship = shipLine(offer, dest || null, rate, symbol);
      const sizeTxt = selectedProductSize
        ? (offerHasSize(offer, selectedProductSize)
          ? tx('has_size').replace('{s}', selectedProductSize)
          : tx('no_size').replace('{s}', selectedProductSize))
        : '';
      const badge = rankBadge(i, useMedals && offer._ships === true);
      const url = (typeof shopHref === 'function' ? shopHref(offer) : (offer.url || '#'));
      const info = (typeof langs !== 'undefined' && (langs[currentLang] || langs.en).shop_info) || 'Info in the shop';
      const ddp = !!(offer.ddp || (dest && typeof knownDdp === 'function' && knownDdp(offer.shop, dest)));
      const est = dest && typeof dutyEstimate === 'function' ? dutyEstimate(offer, dest) : null;
      const calc = dest && typeof landedCalcOn === 'function' && landedCalcOn();
      const shipKnown = dest && ship.known;
      let taxLine = '';
      if (ddp) taxLine = (langs[currentLang] || langs.en).ddp_included || langs.en.ddp_included;
      else if (dest) {
        if (offer.taxIncluded !== false) {
          taxLine = (langs[currentLang] || langs.en).vat_included || 'VAT included';
        } else {
          const vat = Number((typeof VAT_PCT !== 'undefined' && VAT_PCT[dest]) || 0);
          const amt = vat ? Math.round(item * vat / 100) : 0;
          taxLine = ((langs[currentLang] || langs.en).vat_not_included || 'VAT not included') +
            (vat ? '. ' + ((langs[currentLang] || langs.en).vat_approx || 'Indicative VAT') + ' ~' + vat + '% (~' + symbol + amt + ')' : '');
        }
      }
      let dutyLine = '';
      if (dest && !ddp && est && est.duty) {
        dutyLine = ((langs[currentLang] || langs.en).duty_approx || 'Indicative duty') +
          ' ~' + est.duty + '% (~' + symbol + Math.round(est.amount * rate) + ') — ' + info;
      } else if (dest && !ddp && offer.taxIncluded !== false) {
        dutyLine = (langs[currentLang] || langs.en).duty_na || '';
      }
      const promo = (typeof promoForOffer === 'function') ? promoForOffer(p, offer.shop) : null;
      const itemAfter = (promo && promo.pct) ? Math.round(item * (100 - Number(promo.pct)) / 100) : item;
      const toYouAmt = itemAfter + (shipKnown ? (ship.value || 0) : 0) + (calc && est ? Math.round(est.amount * rate) : 0);
      const estNote = !shipKnown
        ? ((langs[currentLang] || langs.en).without_ship || 'without shipping') + ' · ' + info
        : ((langs[currentLang] || langs.en).calc_warn || '');
      const estHTML = calc ? `<div class="offer-est">
          <span class="offer-est-label">${esc((langs[currentLang] || langs.en).total_est || 'Estimated total')}</span>
          <span class="offer-est-amt">${symbol}${toYouAmt}</span>
          <span class="offer-est-note">${esc(estNote)}${promo && promo.pct ? ' · code −' + promo.pct + '% included' : ''}</span>
        </div>` : '';
      const shipTxt = dest
        ? tx('ship_price') + ': ' + (shipKnown ? ship.label : info)
        : tx('ship_price') + ': ' + info;
      const delTxt = tx('delivery_time') + ': ' + (del.known ? del.label : info);
      return `<article class="offer-box">
        <div class="offer-box-left">
          <a class="offer-shop-link" href="${url}" target="_blank" rel="noopener sponsored noreferrer">${esc(offer.shop || 'Shop')}</a>
          <p class="offer-box-line">${esc(shipTxt)}</p>
          <p class="offer-box-line">${esc(delTxt)}</p>
          ${taxLine ? `<p class="offer-box-line">${esc(taxLine)}</p>` : ''}
          ${dutyLine ? `<p class="offer-box-line">${esc(dutyLine)}</p>` : ''}
          ${sizeTxt ? `<p class="offer-box-size">${esc(sizeTxt)}</p>` : ''}
          ${(function(){ var h=window.promoRowHTML ? window.promoRowHTML(p, offer.shop) : ''; return h || ''; })()}
        </div>
        <div class="offer-box-right">
          <p class="offer-box-price ${sale ? 'price-sale' : 'price-regular'}">${was && sale ? `<span class="price-was">${symbol}${was}</span>` : ''}<a class="offer-shop-price" href="${url}" target="_blank" rel="noopener sponsored noreferrer">${symbol}${item}</a></p>
          ${estHTML}
        </div>
      </article>`;
    }).join('');

    const sibs = (typeof uniqueVariants === 'function') ? uniqueVariants(p) : [];
    const sizes = p.sizes || [];
    const wantSizes = [];
    if (typeof selectedSizes !== 'undefined' && selectedSizes && selectedSizes.length) selectedSizes.forEach(s => wantSizes.push(s));
    if (selectedProductSize != null && String(selectedProductSize) !== '') wantSizes.push(selectedProductSize);
    function liveColorFits(card) {
      if (!card) return true;
      const uniq = [...new Set(wantSizes.map(String))];
      if (uniq.length) {
        const ok = typeof cardHasAnyEuSize === 'function'
          ? cardHasAnyEuSize(card, uniq)
          : uniq.some(sz => (card.sizes || []).some(s => String(s) === String(sz) || Number(s) === Number(sz)) || (card.offers || []).some(o => typeof offerHasSize === 'function' && offerHasSize(o, sz)));
        if (!ok) return false;
      }
      if (typeof shipMode !== 'undefined' && shipMode === 'tome' && currentCountry && typeof productAvailableHere === 'function' && !productAvailableHere(card)) return false;
      return true;
    }
    const colorHTML = sibs.length > 1 ? `<div class="p-opts"><span class="p-opts-label">${dict.opt_color || 'Colour'}</span><div class="p-color-swatches">${sibs.map((x) => {
      const card = (typeof findProductById === 'function' && x.id != null) ? (findProductById(x.id) || x) : x;
      const fit = liveColorFits(card);
      const on = String(x.id || x.key) === String(p.id) ? ' on' : '';
      const label = esc(x.label || x.color || '');
      const img = String(x.image || p.image || '').replace(/"/g, '"');
      const miss = fit ? '' : ' strike';
      return `<button type="button" class="p-swatch${on}${miss}" data-color="${esc(String(x.key || x.color))}" data-sid="${esc(String(x.id || ''))}" title="${label}"><span class="p-swatch-pic"><img src="${img}" alt="${label}"></span><span>${label}</span></button>`;
    }).join('')}</div></div>` : '';
    const sizeHTML = sizes.length ? `<div class="p-opts"><span class="p-opts-label">${dict.opt_size || 'Size'}</span> <button type="button" class="size-guide-link" onclick="openSizeGuide()">${dict.size_guide || 'Size chart'}</button>${typeof sizeSysTabsHTML==='function'?sizeSysTabsHTML('pdp'):''}<div class="p-chips">${(typeof cleanEuSizes==='function'?cleanEuSizes(sizes):sizes).map(s => `<button type="button" class="p-chip${(typeof sizeIsOn === 'function' ? sizeIsOn(s) : String(selectedProductSize) === String(s)) ? ' on' : ''}" data-size="${s}">${typeof labelSize==='function'?labelSize(s):s}</button>`).join('')}</div></div>` : '';

    const descObj = p.desc || {};
    const descTxt = descObj[currentLang] || descObj.en || '';
    const descHTML = descTxt ? `<details class="product-desc-drop"><summary>${tx('desc')}</summary><p>${esc(descTxt)}</p></details>` : '';

    let refKey = '';
    try { refKey = localStorage.getItem(FIT_KEY) || ''; } catch (e) {}
    const curSil = matchSilhouette(p);
    const suggestions = closeLasts(curSil ? curSil.key : '', 6);
    const allKeys = Object.keys((window.SA_LASTS && window.SA_LASTS.silhouettes) || {});
    const note = fitNote(p, refKey);
    const lastWidth = (curSil && curSil.width) || 'regular';
    const widthPct = lastWidth === 'narrow' ? 22 : lastWidth === 'wide' ? 78 : 50;
    let footEU = selectedProductSize || '';
    try { footEU = footEU || localStorage.getItem('sa_fit_eu') || ''; } catch (e) {}
    const fitHTML = `<section class="fit-panel">
      <div class="fit-bar">
        <span>${tx('w_narrow')}</span>
        <div class="fit-track"><i class="fit-knob" style="left:${widthPct}%"></i></div>
        <span>${tx('w_wide')}</span>
      </div>
      <p class="fit-footline">${tx('for_foot').replace('{s}', footEU || '—')} · ${esc(note.text)}</p>
      <p class="fit-pick-label">${tx('fit_pick')}</p>
      <div class="fit-refs">${suggestions.map(s => `<button type="button" class="fit-ref${refKey === s.key ? ' on' : ''}" data-ref="${s.key}">${prettyLast(s.key)}</button>`).join('')}
        <label class="fit-other">${tx('fit_other')}
          <select id="fit-all">${[''].concat(allKeys).map(k => `<option value="${k}" ${k === refKey ? 'selected' : ''}>${k ? prettyLast(k) : '—'}</option>`).join('')}</select>
        </label>
      </div>
    </section>`;

    const brandQ = encodeURIComponent(p.brand || '');
    const styleLabel = dict['st_' + (p.style || '')] || p.style || '';
    const brandList = moreFromBrand(p, 6);
    const recentList = viewedProducts(p.id);
    const railsHTML = `<div class="product-rails">
        ${brandList.length ? `<section class="product-rail"><h2>${dict.more_brand || 'More from this brand'}</h2><div class="radar-row">${railCards(brandList, symbol, rate)}</div></section>` : ''}
        ${recentList.length ? `<section class="product-rail"><h2>${dict.recent_title || 'Recently viewed'}</h2><div class="radar-row">${railCards(recentList, symbol, rate)}</div></section>` : ''}
    </div>`;

    const priceClass = topSale ? 'price-sale' : 'price-regular';
    const headPrice = topNum != null
      ? `<p class="${priceClass} product-gold-price">${symbol}${topNum}${showLanded ? ' <span class="delivered-tag">'+tx('delivered')+'</span>' : ''}</p>`
      : `<p class="price-range-main product-gold-price">${rangeInfo.html && rangeInfo.html !== '—' ? rangeInfo.html : symbol + '—'}</p>`;

    root.innerHTML = `
      <a class="product-back" href="${(typeof catalogFile==='function'?catalogFile():'index.html')}" onclick="event.preventDefault(); leaveProductView(); history.pushState({},'', (typeof catalogFile==='function'?catalogFile():'index.html') + location.search.replace(/[?&]p=[^&]*/,'').replace(/^&/,'?')); if(!(document.getElementById('products-container')||{}).querySelector||!document.getElementById('products-container').querySelector('.card')){ if(typeof scheduleCatalogRender==='function') scheduleCatalogRender(); }">← ${dict.cat_all || 'All'}</a>
      <div class="product-layout">
        <div class="product-media">
          <div class="product-main-wrap">
            <img id="product-main-img" src="${p.image}" alt="${esc(p.name)}" onerror="this.src='logo.png'">
            <button type="button" class="zoom-fab" onclick="openImageZoom(document.getElementById('product-main-img').src, '${String(p.name).replace(/'/g, '')}')" aria-label="Zoom"><i class="fas fa-search-plus"></i></button>
          </div>
          <div class="product-thumbs">${((p.images && p.images.length) ? p.images : [p.image]).filter(Boolean).slice(0, 10).map((src) => `<button type="button" class="product-thumb${src === p.image ? ' on' : ''}" data-src="${src}"><img src="${src}" alt="" loading="lazy"></button>`).join('')}</div>
          ${fitHTML}
        </div>
        <div class="product-info">
          <p class="product-brand"><a class="brand-cat-link" href="index.html?q=${brandQ}">${esc(p.brand)}</a>${styleLabel ? ' · ' + esc(styleLabel) : ''}</p>
          <h1>${esc(p.name)}</h1>
          <div class="product-gold">
            <div class="product-gold-row">
              ${headPrice}
              <span class="dest-price-arrow" aria-hidden="true">→</span>
              <button type="button" class="select-ui dest-chip dest-chip-price" id="dest-chip-product" onclick="openDestPanel()"></button>
            </div>
            <p class="product-dest-hint">${destLocked
              ? '(' + (dict.dest_hint_tome || '').replace('{c}', currentCountry) + ')'
              : '(' + (dict.dest_hint_ww || '') + ')'}</p>
          </div>
          ${colorHTML}
          ${sizeHTML}
          <div class="calc-wrap">${typeof calcBtnHTML === 'function' ? calcBtnHTML(dict) : ''}</div>
          <div class="offer-boxes">
            <p class="product-rest-label">${tx('offers')}</p>
            ${boxes || ''}
          </div>
          ${descHTML}
        </div>
      </div>
      ${railsHTML}`;

    renderDestChip();
    const mainImg = document.getElementById('product-main-img');
    if (mainImg) mainImg.onclick = () => openImageZoom(mainImg.src, p.name);
    root.querySelectorAll('.product-thumb').forEach(btn => {
      btn.onclick = () => {
        const src = btn.getAttribute('data-src');
        if (mainImg && src) mainImg.src = src;
        root.querySelectorAll('.product-thumb').forEach(t => t.classList.toggle('on', t === btn));
      };
    });
    root.querySelectorAll('.p-chip, .p-swatch').forEach(btn => {
      btn.onclick = () => {
        const y = window.scrollY;
        if (btn.dataset.size) {
          if (typeof toggleCatalogSize === 'function') { toggleCatalogSize(btn.dataset.size); return; }
          selectedProductSize = (String(selectedProductSize) === String(btn.dataset.size)) ? null : btn.dataset.size;
          Promise.resolve(initProductPage()).then(() => window.scrollTo(0, y));
          return;
        }
        if (btn.dataset.color) {
          const sid = btn.getAttribute('data-sid');
          if (sid && String(sid) !== String(p.id) && typeof openProduct === 'function') {
            openProduct(sid);
            return;
          }
          selectedProductColor = (String(selectedProductColor) === String(btn.dataset.color)) ? null : btn.dataset.color;
          Promise.resolve(initProductPage()).then(() => window.scrollTo(0, y));
        }
      };
    });
    if (_yKeep) root.scrollTop = _yKeep;
    root.querySelectorAll('.fit-ref').forEach(btn => {
      btn.onclick = () => {
        try { localStorage.setItem(FIT_KEY, btn.getAttribute('data-ref') || ''); } catch (e) {}
        initProductPage();
      };
    });
    const sel = document.getElementById('fit-all');
    if (sel) sel.onchange = () => {
      try { localStorage.setItem(FIT_KEY, sel.value || ''); } catch (e) {}
      initProductPage();
    };
    root.querySelectorAll('.offer-meta-btn').forEach(btn => {
      btn.onclick = () => {
        const tip = btn.parentElement.querySelector('.offer-tip');
        if (!tip) return;
        const kind = btn.getAttribute('data-tip');
        if (!kind) { tip.hidden = true; return; }
        const map = { 'ship-unknown': tx('ship_unknown'), 'ship-ww': tx('ship_ww'), 'delivery-unknown': tx('delivery_unknown'), duty: tx('duty_txt') };
        tip.textContent = map[kind] || '';
        tip.hidden = !tip.textContent;
      };
    });
    root.querySelectorAll('.brand-cat-link').forEach(a => {
      a.onclick = (ev) => {
        ev.preventDefault();
        leaveProductView();
        filterBrand(p.brand);
        history.pushState({}, '', 'index.html?q=' + brandQ);
      };
    });
  };


  const GUIDE = {
    en: {
      chip: 'Guide',
      title: 'The SA guide',
      s1t: 'Size',
      s1: 'Use the size chip in the top bar. You can pick several sizes at once. The catalogue then shows only pairs that have at least one of those sizes.',
      s2t: 'Destination',
      s2: 'The globe sets “to me” and a country. You then see shops that ship there, and a closer figure with shipping when the shop has given us that data.',
      s3t: 'On the product page',
      s3: 'Colours of the same model stay on the page. A thin line on a photo means that colour does not have your selected size. You can still open it.',
      s4t: 'Look and List',
      s4: 'Two views of the same catalogue: Look is looser, List is the classic grid with prices.',
      s5t: 'Fit',
      s5: 'Fit compares the pair you are viewing with commonly worn models, using public last data. It helps you judge whether a model runs small or large. It does not replace the shop size chart.',
      s6t: 'Wishlist',
      s6: 'Save a pair in Wishlist and set a price. When an offer reaches that price, the row is marked in Wishlist. The bell next to the heart shows how many saved prices have been reached.',
      s7t: 'Delivery and charges',
      s7: 'Shipping, VAT or duty lines appear only when we have data from the shop. They are an indication. The amount on the shop listing is the one that counts.',
      foot: 'We do not hold stock. You buy and receive from the shop.'
    },
    bg: {
      chip: 'Гид',
      title: 'The SA guide',
      s1t: 'Размер',
      s1: 'Чипът в горната лента е за номер. Може няколко наведнъж. Каталогът показва само наличното в поне един от тях.',
      s2t: 'Дестинация',
      s2: 'Глобусът е „до мен“ и държава. Остават магазини, които пращат към теб, и по-ясна цена с доставка, когато магазинът е дал тези данни.',
      s3t: 'Страницата на продукта',
      s3: 'Цветовете на същия модел си стоят. Линия върху снимката значи, че този цвят няма избрания номер. Пак можеш да го отвориш.',
      s4t: 'Look и List',
      s4: 'Два изгледа на същия каталог: по-свободен и класически, с цени.',
      s5t: 'Fit',
      s5: 'Fit сравнява гледания чифт с често носени модели по публични данни за калъп. Помага да прецениш дали пада по-малък или по-голям. Не заменя таблицата на магазина.',
      s6t: 'Wishlist',
      s6: 'Запази чифт в Любими и задай цена. Когато офертата я достигне, редът се отбелязва в Любими. Камбанката до сърцето показва колко записани цени са достигнати.',
      s7t: 'Доставка и такси',
      s7: 'Доставка, ДДС или мито се показват само ако ги имаме от магазина. Това е ориентир. Меродавна е сумата в обявата на магазина.',
      foot: 'Не държим склад. Купуваш и получаваш от магазина.'
    }
  };
  function guideCopy() {
    const lang = (typeof currentLang !== 'undefined' && GUIDE[currentLang]) ? currentLang : 'en';
    return GUIDE[lang] || GUIDE.en;
  }
  window.renderGuideChip = function () {
    const el = document.getElementById('guide-chip');
    if (el) el.textContent = guideCopy().chip;
  };
  window.openSiteGuide = function () {
    document.getElementById('site-guide-panel')?.remove();
    const g = guideCopy();
    const keys = ['s1','s2','s3','s4','s5','s6','s7'];
    const blocks = keys.map(k => `<h4>${g[k+'t']}</h4><p>${g[k]}</p>`).join('');
    document.body.insertAdjacentHTML('beforeend', `
      <div id="site-guide-panel" class="dest-panel guide-panel" role="dialog" onclick="if(event.target===this)this.remove()">
        <div class="dest-panel-card">
          <button type="button" class="guide-close" onclick="document.getElementById('site-guide-panel').remove()" aria-label="Close">&times;</button>
          <h3>${g.title}</h3>
          ${blocks}
          <p class="guide-foot">${g.foot}</p>
        </div>
      </div>`);
  };

  window.renderSizeChipLive = function () {
    const el = document.getElementById('size-chip');
    if (!el) return;
    const sys = window.sizeChipSystem || 'eu';
    const vals = (typeof selectedSizes !== 'undefined' && selectedSizes.length)
      ? selectedSizes.map(eu => (typeof labelSize === 'function' ? labelSize(eu) : (typeof displayFromEu === 'function' ? displayFromEu(eu, sys) : eu)))
      : [];
    el.textContent = vals.length ? (sys.toUpperCase() + ' ' + vals.join(', ')) : (tx('size_chip') + ': —');
    el.onclick = openSizeChipLive;
  };

  function openSizeChipLive() {
    document.getElementById('size-chip-panel')?.remove();
    const sys = window.sizeChipSystem || 'eu';
    const sizes = (typeof sizeMapping !== 'undefined' ? sizeMapping : []);
    const selected = new Set((typeof selectedSizes !== 'undefined' ? selectedSizes : []).map(String));
    const chips = sizes.map(s => {
      const lab = s[sys] != null ? s[sys] : s.eu;
      const on = selected.has(String(s.eu)) ? ' on' : '';
      return `<button type="button" class="p-chip${on}" data-eu="${s.eu}">${lab}</button>`;
    }).join('');
    document.body.insertAdjacentHTML('beforeend', `
      <div id="size-chip-panel" class="dest-panel" role="dialog">
        <div class="dest-panel-card">
          <h3>${tx('size_title')}</h3>
          <div class="size-sys-tabs" id="size-sys-tabs">
            ${['eu','uk','us','cm'].map(k => `<button type="button" class="p-chip${sys===k?' on':''}" data-sys="${k}">${k.toUpperCase()}</button>`).join('')}
          </div>
          <div class="p-chips size-multi" id="size-chip-list">${chips}</div>
          <div class="dest-panel-actions">
            <button type="button" class="dest-btn-primary" id="size-chip-ok">${tx('save')}</button>
            <button type="button" class="dest-btn-ghost" id="size-chip-skip">${tx('skip')}</button>
          </div>
        </div>
      </div>`);
    const list = document.getElementById('size-chip-list');
    list.onclick = function (e) {
      const b = e.target.closest('[data-eu]');
      if (!b) return;
      b.classList.toggle('on');
    };
    document.getElementById('size-sys-tabs').onclick = function (e) {
      const b = e.target.closest('[data-sys]');
      if (!b) return;
      window.sizeChipSystem = b.getAttribute('data-sys');
      try { localStorage.setItem('sa_size_sys', window.sizeChipSystem); } catch (e2) {}
      openSizeChipLive();
    };
    document.getElementById('size-chip-ok').onclick = function () {
      const picked = [...list.querySelectorAll('.p-chip.on')].map(b => parseFloat(b.getAttribute('data-eu'))).filter(n => !isNaN(n));
      selectedSizes = picked;
      selectedProductSize = picked.length === 1 ? picked[0] : selectedProductSize;
      try {
        localStorage.setItem('sa_fit_eu', picked[0] || '');
        localStorage.setItem('sa_fit_eus', JSON.stringify(picked));
      } catch (e) {}
      document.getElementById('size-chip-panel').remove();
      window.renderSizeChipLive();
      if (document.getElementById('product-page') && !document.getElementById('product-page').hidden) initProductPage();
      else if (typeof applyFiltersAndRender === 'function') applyFiltersAndRender();
    };
    document.getElementById('size-chip-skip').onclick = function () {
      selectedSizes = [];
      try { localStorage.removeItem('sa_fit_eu'); localStorage.removeItem('sa_fit_eus'); } catch (e) {}
      document.getElementById('size-chip-panel').remove();
      window.renderSizeChipLive();
      if (typeof applyFiltersAndRender === 'function') applyFiltersAndRender();
    };
  }

  function injectViewToggle() {
    let wrap = document.getElementById('view-toggle');
    if (!wrap) {
      const controls = document.querySelector('.top-controls-left') || document.querySelector('.top-controls');
      if (!controls) return;
      wrap = document.createElement('div');
      wrap.id = 'view-toggle';
      wrap.className = 'view-toggle';
      wrap.innerHTML = '<button type="button" data-view-btn="look">Look</button><button type="button" data-view-btn="list">List</button>';
      controls.prepend(wrap);
    }
    wrap.querySelectorAll('button').forEach(btn => {
      btn.onclick = () => {
        const v = btn.getAttribute('data-view-btn');
        document.body.setAttribute('data-view', v);
        try { localStorage.setItem('sa_view', v); } catch (e) {}
        wrap.querySelectorAll('button').forEach(b => b.classList.toggle('on', b === btn));
      };
    });
    let start = 'list';
    try { start = localStorage.getItem('sa_view') || 'list'; } catch (e) {}
    document.body.setAttribute('data-view', start);
    wrap.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.getAttribute('data-view-btn') === start));
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectViewToggle();
    window.renderSizeChipLive();
    window.renderGuideChip();
  });
  window.addEventListener('load', function () {
    injectViewToggle();
    window.renderSizeChipLive();
    window.renderGuideChip();
    if (typeof updateUI === 'function' && !updateUI._saWrapped) {
      const prev = updateUI;
      window.updateUI = function () {
        prev();
        window.renderSizeChipLive();
        window.renderGuideChip();
      };
      window.updateUI._saWrapped = true;
    }
  });
})();
