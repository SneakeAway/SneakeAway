// =============================================
// script.js - ПЪЛЕН С WISHLIST И LOAD MORE
// =============================================

const langs = {
    en: {
        shipping: "shipping", sort_by: "Sort By", s_pop: "Most Popular", s_new: "New In", s_low: "Price: Low to High", s_high: "Price: High to Low",
        h_style: "Style",
        st_basketball: "Basketball", st_running: "Running", st_tennis: "Tennis", st_lifestyle: "Lifestyle",
        h_price: "Price Categories", under: "Under", luxury: "Luxury / Rare", h_size: "Select Size", h_material: "Materials", h_color: "Colors",
        btn_other: "Other prices", cat_all: "All", cat_men: "Men", cat_women: "Women", cat_kids: "Kids", cat_brand: "Brands", cat_partners: "Partners",
        page: "Page", prod_count: "items", btn_load_more: "Load More Products",
        f_about: "About Us", f_follow: "Follow Us", f_contact: "Contacts",
        contact_soon: "No public inbox yet. Partner applications use the operator’s personal email.",
        f_about_text: "Your ultimate destination for discovering and comparing the best sneaker deals worldwide.",
        materials: ["Leather", "Suede", "Mesh", "Canvas", "Gore-Tex", "Recycled", "Synthetic", "Nubuck", "Rubber", "Textile", "Primeknit"],
        compare: "Compare",
        wishlist: "Wishlist",
        back_to_products: "← Back to products",
        desired_price: "Desired price",
        save: "Save",
        check_alerts: "🔔 Check for alerts",
        no_wishlist: "You don't have any favorite products yet.",
        alert_saved: "✓ We will notify you below",
        enter_valid_price: "Enter a valid price",
        choose_color_size: "Choose color and size",
        color: "Color",
        size_eu: "Size (EU)",
        add_to_wishlist: "Add to wishlist",
        select_color_size: "Please select color and size",
        best_from: "Best from",
        all_offers: "All offers",
        other_offers: "Other offers",
        close: "Close",
        compare_products: "Product comparison",
        remove: "Remove",
        no_products_filters: "No products match your filters.",
        try_remove_filters: "Try removing some filters.",
        clear_filters: "Clear filters",
        showing: "Showing",
        of: "of",
        products: "products",
        search_placeholder: "Search sneakers...",
        price_alerts_title: "Price alerts:",
        no_alerts: "No products under the desired price right now.",
        is_now_at: "is now at",
        desired: "desired",
        go_to_shop: "Go to shop",
        watch_story: "Watch the story",
        filters_btn: "Filters",

        slogan: "Find. Sneake Away.",
        similar_title: "In this lane",
        radar_title: "On the radar",
        radar_note: "Ranked from the offers we have for each pair.",
        radar_court: "Court", radar_city: "City", radar_kids: "Kids", radar_under: "Under 150",
        promise_h: "Compare the same pair across shops",
        promise_p: "We do not sell sneakers. We rank offers. You buy and receive from the shop.",
        size_guide: "Size chart",
        size_guide_note: "Adult sneakers, approximate conversion. The shop listing is the source of truth.",
        how_1t: "Find", how_1d: "Pick a model, size and country.",
        how_2t: "Compare", how_2d: "Gold is the best total we can estimate. Silver and bronze follow.",
        how_3t: "Buy in shop", how_3d: "The retailer charges you, ships and handles returns.",
        social_soon: "Social profiles coming soon.",
        cookie_txt: "We store language, theme, country and wishlist on this device. No ad cookies yet.",
        calc_btn: "Calculate price to you",
        calc_done: "Hide total to you",
        calc_need_dest: "Pick a destination first",
        ship_label: "Shipping cost", ship_price: "Shipping cost", delivery_time: "Delivery time",
        duty_approx: "Indicative duty",
        to_you: "To you",
        vat_included: "VAT included",
        vat_not_included: "VAT not included",
        vat_approx: "Indicative VAT",
        ddp_included: "Duties and taxes included in the price",
        duty_na: "No extra duty (same customs area)",
        shop_info: "Info in the shop",
        size_sys_eu: "EU",
        size_sys_uk: "UK",
        size_sys_us: "US",
        size_sys_cm: "CM",

        cookie_ok: "OK",
        dest_pick_line: "Choose a destination for a price with shipping to you.",
        h_gender: "Gender",
        more_offers: "More offers",
        more_brand: "More from this brand",
        recent_title: "Recently viewed",
        account_title: "Account",
        account_soon: "Sign in will arrive with saved lists. Wishlist stays on this device for now.",
        partners_empty: "We compare offers from shops. The partner list grows as programmes are approved.",

        col_shop: "Shop",
        col_price: "Price",
        col_ship: "Shipping",
        col_total: "Total",
        f_terms: "By using this site you agree we may earn a commission. Price for you does not change.",

        from_n_shops: "from {n} shops",
        ship_free: "free delivery",
        ship_incl: "incl. delivery",
        ship_plus: "+ {s} delivery",
        ship_item: "pair {p}",
        ship_free_over: "free delivery over {n}",
        opt_size: "Size",
        opt_color: "Colour",
        h_desc: "About this pair",
        cheapest_at: "best at",
        show_worldwide: "Show worldwide",
        empty_dest: "No models ship to your country with the current filters.",
        settings: "Settings",
        alert_for_country: "Alert for",
        alert_no_country: "No country (worldwide price)",
        privacy: "Privacy",
        empty_cloud: "No sneakers in this cloud…",
        skip_story: "Skip",
        mode_ww: "Worldwide",
        mode_tome: "Ship to me",
        mode_label: "Mode",
        dest_choose: "Where do you shop from?",
        dest_continue_ww: "Continue worldwide",
        dest_apply: "Use this country",
        dest_note_ww: "* Worldwide: lowest product price across shops — not personalized to your delivery country (shipping/duties may not be included).",
        dest_note_tome: "** Ship to me: price for your selected destination, including delivery where available. Duties/extra fees only if the retailer shows them.",
        dest_change: "Change country",
        dest_warn_ww: "No country selected — best price is not personalized to your delivery.",
        check_ship_to: "Check shipping to",
        ships_yes: "Ships",
        ships_no: "No shipping",
        ships_unknown: "No data",
        buy_at: "Buy at",
        affiliate_note: "We may earn a commission when you buy through links on this site. Your price does not change.",
        duties_note: "Orders from another country or outside the EU may incur duties, VAT or courier fees. The shop confirms the final amount.",
        offer_board: "Offers",
        total_label: "Total",
        shipping_short: "ship"
    },
    bg: {
        shipping: "доставка", sort_by: "Сортиране", s_pop: "Най-популярни", s_new: "Нови модели", s_low: "Цена: Възходяща", s_high: "Цена: Низходяща",
        h_style: "Стил",
        st_basketball: "Баскетбол", st_running: "Бягане", st_tennis: "Тенис", st_lifestyle: "Всекидневни",
        h_price: "Ценови категории", under: "Под", luxury: "Луксозни / Редки", h_size: "Избери размер", h_material: "Материали", h_color: "Цветове",
        btn_other: "Други цени", cat_all: "Всички", cat_men: "Мъже", cat_women: "Жени", cat_kids: "Деца", cat_brand: "Марки", cat_partners: "Партньори",
        page: "Страница", prod_count: "модела", btn_load_more: "Виж още модели",
        f_about: "За нас", f_follow: "Последвай ни", f_contact: "Контакти",
        contact_soon: "Все още няма публична поща. За партньорски програми се ползва личният имейл на оператора.",
        f_about_text: "Вашата крайна дестинация за откриване и сравняване на най-добрите оферти за маратонки в целия свят.",
        materials: ["Кожа", "Велур", "Меш", "Канвас", "Gore-Tex", "Рециклирани", "Синтетика", "Нубук", "Гума", "Текстил", "Primeknit"],
        compare: "Сравни",
        wishlist: "Любими",
        back_to_products: "← Назад към продуктите",
        desired_price: "Желана цена",
        save: "Запази",
        check_alerts: "🔔 Провери за известия",
        no_wishlist: "Все още нямате любими продукти.",
        alert_saved: "✓ Ще те уведомим под",
        enter_valid_price: "Въведи валидна цена",
        choose_color_size: "Избери цвят и размер",
        color: "Цвят",
        size_eu: "Размер (EU)",
        add_to_wishlist: "Добави в любими",
        select_color_size: "Моля избери цвят и размер",
        best_from: "Най-добра от",
        all_offers: "Всички оферти",
        other_offers: "Други оферти",
        close: "Затвори",
        compare_products: "Сравнение на продукти",
        remove: "Премахни",
        no_products_filters: "Няма продукти, които отговарят на филтрите.",
        try_remove_filters: "Опитай да премахнеш някои филтри.",
        clear_filters: "Изчисти филтрите",
        showing: "Показани",
        of: "от",
        products: "продукта",
        search_placeholder: "Търси маратонки...",
        price_alerts_title: "Известия за цена:",
        no_alerts: "Няма продукти под желаната цена в момента.",
        is_now_at: "е вече на",
        desired: "желана",
        go_to_shop: "Към магазина",
        watch_story: "Гледай историята",
        filters_btn: "Филтри",

        slogan: "Намери. Измъкни се.",
        similar_title: "В същия ред",
        radar_title: "На радара",
        radar_note: "Демо лента — живото подреждане идва с партньорските фийдове.",
        radar_court: "Игрище", radar_city: "Град", radar_kids: "Деца", radar_under: "Под 150",
        promise_h: "Сравни една и съща двойка в много магазини",
        promise_p: "Ние не продаваме маратонки. Подреждаме оферти. Купуваш и получаваш от магазина.",
        size_guide: "Таблица размери",
        size_guide_note: "Мъжки/дамски кецове, приблизителна конверсия. Важи размерът в магазина.",
        how_1t: "Намери", how_1d: "Избери модел, размер и държава.",
        how_2t: "Сравни", how_2d: "Златото е най-добрият сбор, който можем да сметнем. Следват сребро и бронз.",
        how_3t: "Купи в магазин", how_3d: "Магазинът таксува, доставя и приема връщания.",
        social_soon: "Социалните профили предстоят.",
        cookie_txt: "Пазим език, тема, държава и любими на това устройство. Все още няма рекламни бисквитки.",
        cookie_ok: "ОК",
        partners_empty: "Сравняваме оферти от магазини. Списъкът с партньори расте.",

        col_shop: "Магазин",
        col_price: "Цена",
        col_ship: "Доставка",
        col_total: "Общо",
        f_terms: "Ползвайки сайта приемаш, че може да получаваме комисиона. Цената за теб не се променя.",

        from_n_shops: "от {n} магазина",
        ship_free: "безплатна доставка",
        ship_incl: "с доставка",
        ship_plus: "+ {s} доставка",
        ship_item: "чифт {p}",
        ship_free_over: "безплатна доставка над {n}",
        opt_size: "Размер",
        opt_color: "Цвят",
        h_desc: "За този чифт",
        cheapest_at: "най-евтино",
        show_worldwide: "Покажи навсякъде",
        empty_dest: "Няма модели с доставка до твоята държава при тези филтри.",
        settings: "Настройки",
        alert_for_country: "Известие за",
        alert_no_country: "Без държава (цена навсякъде)",
        privacy: "Поверителност",
        empty_cloud: "Няма кец в този облак…",
        skip_story: "Пропусни",
        mode_ww: "Навсякъде",
        mode_tome: "До мен",
        mode_label: "Режим",
        dest_choose: "От коя държава пазаруваш?",
        dest_continue_ww: "Продължи навсякъде",
        dest_apply: "Използвай тази държава",
        dest_note_ww: "* Навсякъде: най-ниска цена на продукта между магазините — не е персонализирана към твоята държава (доставка/мита може да не са включени).",
        dest_note_tome: "** До мен: цена за избраната дестинация, с доставка където я има. Мита и допълнителни такси — само ако магазинът ги показва.",
        dest_change: "Смени държава",
        dest_warn_ww: "Няма избрана държава — най-добрата цена не е персонализирана към доставката ти.",
        check_ship_to: "Провери доставка до",
        ships_yes: "Доставя",
        ships_no: "Не доставя",
        ships_unknown: "Няма данни",
        buy_at: "Купи от",
        affiliate_note: "Може да получаваме комисиона при покупка през линковете. Цената за теб не се променя.",
        duties_note: "При доставка от друга страна или извън ЕС е възможно да дължиш мито, ДДС или такса на куриера. Крайната сума се потвърждава в магазина.",
        vat_included: "ДДС включен",
        vat_not_included: "ДДС не е включен",
        vat_approx: "Ориентировъчно ДДС",
        ddp_included: "Таксите влизат в цената",
        duty_approx: "Ориентировъчно мито",
        duty_na: "Без допълнително мито (същият митнически съюз)",
        shop_info: "Инфо в магазина",
        to_you: "До теб",
        ship_label: "Доставка",
        offer_board: "Оферти",
        total_label: "Общо",
        shipping_short: "дост."
    },
    fr: {
        shipping: "livraison", sort_by: "Trier par", s_pop: "Plus populaires", s_new: "Nouveautés", s_low: "Prix: Croissant", s_high: "Prix: Décroissant",
        h_style: "Style", st_basketball: "Basket", st_running: "Running", st_tennis: "Tennis", st_lifestyle: "Lifestyle",
        h_price: "Catégories de prix", under: "Moins de", luxury: "Luxe / Rare", h_size: "Choisir la taille", h_material: "Matériaux", h_color: "Couleurs",
        btn_other: "Autres prix", cat_all: "Tous", cat_men: "Hommes", cat_women: "Femmes", cat_kids: "Enfants", cat_brand: "Marques", cat_partners: "Partenaires",
        page: "Page", prod_count: "articles", btn_load_more: "Voir plus de modèles",
        f_about: "À propos", f_follow: "Suivez-nous", f_contact: "Contacts",
        contact_soon: "Pas encore de boîte publique. Les programmes partenaires utilisent l’e-mail personnel de l’opérateur.",
        f_about_text: "Votre destination ultime pour découvrir et comparer les meilleures offres de baskets au monde.",
        materials: ["Cuir", "Daim", "Mesh", "Toile", "Gore-Tex", "Recyclé", "Synthétique", "Nubuck", "Caoutchouc", "Textile", "Primeknit"],
        compare: "Comparer",
        wishlist: "Favoris",
        back_to_products: "← Retour aux produits",
        desired_price: "Prix souhaité",
        save: "Enregistrer",
        check_alerts: "🔔 Vérifier les alertes",
        no_wishlist: "Vous n'avez encore aucun produit favori.",
        alert_saved: "✓ Nous vous préviendrons en dessous de",
        enter_valid_price: "Entrez un prix valide",
        choose_color_size: "Choisissez couleur et taille",
        color: "Couleur",
        size_eu: "Taille (EU)",
        add_to_wishlist: "Ajouter aux favoris",
        select_color_size: "Veuillez choisir couleur et taille",
        best_from: "Meilleur chez",
        all_offers: "Toutes les offres",
        other_offers: "Autres offres",
        close: "Fermer",
        compare_products: "Comparaison de produits",
        remove: "Retirer",
        no_products_filters: "Aucun produit ne correspond aux filtres.",
        try_remove_filters: "Essayez de retirer certains filtres.",
        clear_filters: "Effacer les filtres",
        showing: "Affichage",
        of: "sur",
        products: "produits",
        search_placeholder: "Rechercher des sneakers...",
        price_alerts_title: "Alertes prix :",
        no_alerts: "Aucun produit sous le prix souhaité pour le moment.",
        is_now_at: "est maintenant à",
        desired: "souhaité",
        go_to_shop: "Voir le magasin",
        watch_story: "Voir l'histoire",
        filters_btn: "Filtres",

        slogan: "Trouve. Échappe-toi.",
        promise_h: "Comparez la même paire dans plusieurs boutiques",
        promise_p: "Nous ne vendons pas de baskets. Nous classons les offres. Vous achetez chez le marchand.",
        size_guide: "Guide des tailles",
        size_guide_note: "Baskets adulte, conversion approximative. La fiche du magasin fait foi.",
        how_1t: "Trouver", how_1d: "Modèle, pointure, pays.",
        how_2t: "Comparer", how_2d: "L'or est le meilleur total estimé. Argent et bronze suivent.",
        how_3t: "Acheter en boutique", how_3d: "Le marchand encaisse, livre et gère les retours.",
        social_soon: "Réseaux sociaux bientôt.",
        cookie_txt: "Nous stockons langue, thème, pays et favoris sur cet appareil.",
        cookie_ok: "OK",
        dest_pick_line: "Choose a destination for a price with shipping to you.",
        h_gender: "Gender",
        more_offers: "More offers",
        more_brand: "More from this brand",
        recent_title: "Recently viewed",
        account_title: "Account",
        account_soon: "Sign in will arrive with saved lists. Wishlist stays on this device for now.",
        partners_empty: "Nous comparons les offres des boutiques. La liste des partenaires s’allonge.",

        col_shop: "Boutique",
        col_price: "Prix",
        col_ship: "Livraison",
        col_total: "Total",
        f_terms: "En utilisant le site, vous acceptez une éventuelle commission. Votre prix ne change pas.",

        from_n_shops: "chez {n} boutiques",
        cheapest_at: "moins cher chez",
        show_worldwide: "Voir partout",
        empty_dest: "Aucun modèle ne livre vers votre pays avec ces filtres.",
        settings: "Réglages",
        alert_for_country: "Alerte pour",
        alert_no_country: "Sans pays (prix mondial)",
        privacy: "Confidentialité",
        empty_cloud: "Pas de sneakers dans ce nuage…",
        skip_story: "Passer",
        mode_ww: "Partout",
        mode_tome: "Chez moi",
        mode_label: "Mode",
        dest_choose: "Depuis quel pays achetez-vous ?",
        dest_continue_ww: "Continuer partout",
        dest_apply: "Utiliser ce pays",
        dest_note_ww: "* Partout : prix le plus bas du produit entre les boutiques — non personnalisé pour votre pays (livraison/droits éventuellement non inclus).",
        dest_note_tome: "** Chez moi : prix pour la destination choisie, livraison incluse si disponible. Droits/frais extra uniquement si le vendeur les indique.",
        dest_change: "Changer de pays",
        dest_warn_ww: "Aucun pays choisi — le meilleur prix n'est pas personnalisé pour votre livraison.",
        check_ship_to: "Vérifier la livraison vers",
        ships_yes: "Livre",
        ships_no: "Ne livre pas",
        ships_unknown: "Pas de données",
        buy_at: "Acheter chez",
        affiliate_note: "Nous pouvons percevoir une commission via les liens. Votre prix ne change pas.",
        duties_note: "Une commande depuis un autre pays ou hors UE peut entraîner droits, TVA ou frais de coursier. Le montant final est confirmé par le magasin.",
        offer_board: "Offres",
        total_label: "Total",
        shipping_short: "livr."
    },
    de: {
        shipping: "versand", sort_by: "Sortieren nach", s_pop: "Beliebteste", s_new: "Neu eingetroffen", s_low: "Preis: Aufsteigend", s_high: "Preis: Absteigend",
        h_style: "Stil", st_basketball: "Basketball", st_running: "Lauf", st_tennis: "Tennis", st_lifestyle: "Lifestyle",
        h_price: "Preiskategorien", under: "Unter", luxury: "Luxus / Selten", h_size: "Größe wählen", h_material: "Materialien", h_color: "Farben",
        btn_other: "Andere Preise", cat_all: "Alle", cat_men: "Herren", cat_women: "Damen", cat_kids: "Kinder", cat_brand: "Marken", cat_partners: "Partner",
        page: "Seite", prod_count: "artikel", btn_load_more: "Mehr Modelle anzeigen",
        f_about: "Über uns", f_follow: "Folgen Sie uns", f_contact: "Kontakte",
        contact_soon: "Noch kein öffentliches Postfach. Partnerprogramme nutzen die private E-Mail des Betreibers.",
        f_about_text: "Ihr ultimatives Ziel, um die weltweit besten Sneaker-Angebote zu entdecken und zu vergleichen.",
        materials: ["Leder", "Wildleder", "Mesh", "Canvas", "Gore-Tex", "Recycelt", "Synthetik", "Nubuk", "Gummi", "Textil", "Primeknit"],
        compare: "Vergleichen",
        wishlist: "Favoriten",
        back_to_products: "← Zurück zu den Produkten",
        desired_price: "Wunschpreis",
        save: "Speichern",
        check_alerts: "🔔 Alarme prüfen",
        no_wishlist: "Sie haben noch keine Lieblingsprodukte.",
        alert_saved: "✓ Wir benachrichtigen Sie unter",
        enter_valid_price: "Gültigen Preis eingeben",
        choose_color_size: "Farbe und Größe wählen",
        color: "Farbe",
        size_eu: "Größe (EU)",
        add_to_wishlist: "Zu Favoriten hinzufügen",
        select_color_size: "Bitte Farbe und Größe wählen",
        best_from: "Beste bei",
        all_offers: "Alle Angebote",
        other_offers: "Weitere Angebote",
        close: "Schließen",
        compare_products: "Produktvergleich",
        remove: "Entfernen",
        no_products_filters: "Keine Produkte entsprechen den Filtern.",
        try_remove_filters: "Versuche einige Filter zu entfernen.",
        clear_filters: "Filter löschen",
        showing: "Angezeigt",
        of: "von",
        products: "Produkte",
        search_placeholder: "Sneaker suchen...",
        price_alerts_title: "Preisalarme:",
        no_alerts: "Derzeit keine Produkte unter dem Wunschpreis.",
        is_now_at: "ist jetzt bei",
        desired: "gewünscht",
        go_to_shop: "Zum Shop",
        watch_story: "Geschichte ansehen",
        filters_btn: "Filter",

        slogan: "Finde. Schleich dich weg.",
        promise_h: "Vergleiche dasselbe Paar in vielen Shops",
        promise_p: "Wir verkaufen keine Sneaker. Wir ordnen Angebote. Du kaufst im Shop.",
        size_guide: "Größentabelle",
        size_guide_note: "Erwachsenen-Sneaker, ungefähre Umrechnung. Maßgeblich ist der Shop.",
        how_1t: "Finden", how_1d: "Modell, Größe, Land.",
        how_2t: "Vergleichen", how_2d: "Gold ist die beste geschätzte Summe. Silber und Bronze folgen.",
        how_3t: "Im Shop kaufen", how_3d: "Der Händler berechnet, liefert und nimmt zurück.",
        social_soon: "Social Media folgt.",
        cookie_txt: "Wir speichern Sprache, Theme, Land und Wunschliste auf diesem Gerät.",
        cookie_ok: "OK",
        dest_pick_line: "Choose a destination for a price with shipping to you.",
        h_gender: "Gender",
        more_offers: "More offers",
        more_brand: "More from this brand",
        recent_title: "Recently viewed",
        account_title: "Account",
        account_soon: "Sign in will arrive with saved lists. Wishlist stays on this device for now.",
        partners_empty: "Wir vergleichen Angebote von Shops. Die Partnerliste wächst.",

        col_shop: "Shop",
        col_price: "Preis",
        col_ship: "Versand",
        col_total: "Gesamt",
        f_terms: "Mit der Nutzung der Seite akzeptierst du eine mögliche Provision. Dein Preis ändert sich nicht.",

        from_n_shops: "von {n} Shops",
        cheapest_at: "günstigste bei",
        show_worldwide: "Weltweit anzeigen",
        empty_dest: "Keine Modelle liefern mit diesen Filtern in dein Land.",
        settings: "Einstellungen",
        alert_for_country: "Alarm für",
        alert_no_country: "Kein Land (Weltpreis)",
        privacy: "Datenschutz",
        empty_cloud: "Keine Sneaker in dieser Wolke…",
        skip_story: "Überspringen",
        mode_ww: "Weltweit",
        mode_tome: "Zu mir",
        mode_label: "Modus",
        dest_choose: "Aus welchem Land shoppst du?",
        dest_continue_ww: "Weltweit fortfahren",
        dest_apply: "Dieses Land verwenden",
        dest_note_ww: "* Weltweit: niedrigster Produktpreis über alle Shops — nicht personalisiert für dein Land (Versand/Zoll ggf. nicht enthalten).",
        dest_note_tome: "** Zu mir: Preis für dein gewähltes Land, inkl. Versand soweit verfügbar. Zoll/Zusatzgebühren nur, wenn der Händler sie ausweist.",
        dest_change: "Land ändern",
        dest_warn_ww: "Kein Land gewählt — der Bestpreis ist nicht auf deine Lieferung personalisiert.",
        check_ship_to: "Versand prüfen nach",
        ships_yes: "Liefert",
        ships_no: "Kein Versand",
        ships_unknown: "Keine Daten",
        buy_at: "Kaufen bei",
        affiliate_note: "Wir können eine Provision über Links erhalten. Dein Preis ändert sich nicht.",
        duties_note: "Bestellungen aus einem anderen Land oder außerhalb der EU können Zoll, MwSt. oder Kuriergebühren verursachen. Der Shop bestätigt den Endbetrag.",
        offer_board: "Angebote",
        total_label: "Gesamt",
        shipping_short: "Vers."
    },
    es: {
        shipping: "envío", sort_by: "Ordenar por", s_pop: "Más populares", s_new: "Novedades", s_low: "Precio: Menor a Mayor", s_high: "Precio: Mayor a Menor",
        h_style: "Estilo", st_basketball: "Baloncesto", st_running: "Running", st_tennis: "Tenis", st_lifestyle: "Lifestyle",
        h_price: "Categorías de precio", under: "Bajo", luxury: "Lujo / Raro", h_size: "Elegir talla", h_material: "Materiales", h_color: "Colores",
        btn_other: "Otros precios", cat_all: "Todos", cat_men: "Hombres", cat_women: "Mujeres", cat_kids: "Niños", cat_brand: "Marcas", cat_partners: "Socios",
        page: "Página", prod_count: "artículos", btn_load_more: "Ver más modelos",
        f_about: "Sobre nosotros", f_follow: "Síguenos", f_contact: "Contactos",
        contact_soon: "Aún no hay buzón público. Las redes de afiliados usan el correo personal del operador.",
        f_about_text: "Tu destino definitivo para descubrir y comparar las mejores ofertas de zapatillas en todo el mundo.",
        materials: ["Cuero", "Gamuza", "Malla", "Lona", "Gore-Tex", "Reciclado", "Sintético", "Nubuck", "Caucho", "Textil", "Primeknit"],
        compare: "Comparar",
        wishlist: "Favoritos",
        back_to_products: "← Volver a productos",
        desired_price: "Precio deseado",
        save: "Guardar",
        check_alerts: "🔔 Comprobar alertas",
        no_wishlist: "Aún no tienes productos favoritos.",
        alert_saved: "✓ Te avisaremos por debajo de",
        enter_valid_price: "Introduce un precio válido",
        choose_color_size: "Elige color y talla",
        color: "Color",
        size_eu: "Talla (EU)",
        add_to_wishlist: "Añadir a favoritos",
        select_color_size: "Por favor elige color y talla",
        best_from: "Mejor en",
        all_offers: "Todas las ofertas",
        other_offers: "Otras ofertas",
        close: "Cerrar",
        compare_products: "Comparación de productos",
        remove: "Quitar",
        no_products_filters: "Ningún producto coincide con los filtros.",
        try_remove_filters: "Prueba a quitar algunos filtros.",
        clear_filters: "Limpiar filtros",
        showing: "Mostrando",
        of: "de",
        products: "productos",
        search_placeholder: "Buscar zapatillas...",
        price_alerts_title: "Alertas de precio:",
        no_alerts: "No hay productos por debajo del precio deseado ahora.",
        is_now_at: "está ahora a",
        desired: "deseado",
        go_to_shop: "Ir a la tienda",
        watch_story: "Ver la historia",
        filters_btn: "Filtros",

        slogan: "Encuentra. Escápate.",
        promise_h: "Compara el mismo par en varias tiendas",
        promise_p: "No vendemos zapatillas. Ordenamos ofertas. Compras en la tienda.",
        size_guide: "Guía de tallas",
        size_guide_note: "Zapatillas de adulto, conversión aproximada. Vale la ficha de la tienda.",
        how_1t: "Encuentra", how_1d: "Modelo, talla y país.",
        how_2t: "Comparar", how_2d: "El oro es el mejor total estimado. Siguen plata y bronce.",
        how_3t: "Comprar en tienda", how_3d: "La tienda cobra, envía y gestiona devoluciones.",
        social_soon: "Redes sociales pronto.",
        cookie_txt: "Guardamos idioma, tema, país y favoritos en este dispositivo.",
        cookie_ok: "OK",
        dest_pick_line: "Choose a destination for a price with shipping to you.",
        h_gender: "Gender",
        more_offers: "More offers",
        more_brand: "More from this brand",
        recent_title: "Recently viewed",
        account_title: "Account",
        account_soon: "Sign in will arrive with saved lists. Wishlist stays on this device for now.",
        partners_empty: "Comparamos ofertas de tiendas. La lista de partners crece.",

        col_shop: "Tienda",
        col_price: "Precio",
        col_ship: "Envío",
        col_total: "Total",
        f_terms: "Al usar el sitio aceptas que podemos ganar comisión. Tu precio no cambia.",

        from_n_shops: "de {n} tiendas",
        cheapest_at: "más barato en",
        show_worldwide: "Ver en todo el mundo",
        empty_dest: "Ningún modelo envía a tu país con estos filtros.",
        settings: "Ajustes",
        alert_for_country: "Alerta para",
        alert_no_country: "Sin país (precio mundial)",
        privacy: "Privacidad",
        empty_cloud: "No hay sneakers en esta nube…",
        skip_story: "Saltar",
        mode_ww: "En todo el mundo",
        mode_tome: "A mi país",
        mode_label: "Modo",
        dest_choose: "¿Desde qué país compras?",
        dest_continue_ww: "Seguir en todo el mundo",
        dest_apply: "Usar este país",
        dest_note_ww: "* En todo el mundo: precio más bajo del producto entre tiendas — no personalizado a tu país (envío/aranceles pueden no estar incluidos).",
        dest_note_tome: "** A mi país: precio para el destino elegido, con envío si está disponible. Aranceles/cargos extra solo si la tienda los muestra.",
        dest_change: "Cambiar país",
        dest_warn_ww: "Sin país elegido — el mejor precio no está personalizado a tu envío.",
        check_ship_to: "Comprobar envío a",
        ships_yes: "Envía",
        ships_no: "No envía",
        ships_unknown: "Sin datos",
        buy_at: "Comprar en",
        affiliate_note: "Podemos ganar comisión por los enlaces. Tu precio no cambia.",
        duties_note: "Un pedido desde otro país o fuera de la UE puede incluir aranceles, IVA o gastos de mensajería. La tienda confirma el importe final.",
        offer_board: "Ofertas",
        total_label: "Total",
        shipping_short: "envío"
    },
    it: {
        shipping: "spedizione", sort_by: "Ordina per", s_pop: "Più popolari", s_new: "Nuovi arrivi", s_low: "Prezzo: Crescente", s_high: "Prezzo: Decrescente",
        h_style: "Stile", st_basketball: "Basket", st_running: "Running", st_tennis: "Tennis", st_lifestyle: "Lifestyle",
        h_price: "Categorie di prezzo", under: "Sotto", luxury: "Lusso / Raro", h_size: "Scegli taglia", h_material: "Materiali", h_color: "Colori",
        btn_other: "Altri prezzi", cat_all: "Tutti", cat_men: "Uomo", cat_women: "Donna", cat_kids: "Bambini", cat_brand: "Marchi", cat_partners: "Partner",
        page: "Pagina", prod_count: "articoli", btn_load_more: "Visualizza altri modelli",
        f_about: "Chi siamo", f_follow: "Seguici", f_contact: "Contatti",
        contact_soon: "Nessuna casella pubblica per ora. I programmi partner usano l’email personale dell’operatore.",
        f_about_text: "La tua destinazione definitiva per scoprire e confrontare le migliori offerte di sneakers in tutto il mondo.",
        materials: ["Pelle", "Camoscio", "Mesh", "Tela", "Gore-Tex", "Riciclato", "Sintetico", "Nubuck", "Gomma", "Tessuto", "Primeknit"],
        compare: "Confronta",
        wishlist: "Preferiti",
        back_to_products: "← Torna ai prodotti",
        desired_price: "Prezzo desiderato",
        save: "Salva",
        check_alerts: "🔔 Controlla avvisi",
        no_wishlist: "Non hai ancora prodotti preferiti.",
        alert_saved: "✓ Ti avviseremo sotto",
        enter_valid_price: "Inserisci un prezzo valido",
        choose_color_size: "Scegli colore e taglia",
        color: "Colore",
        size_eu: "Taglia (EU)",
        add_to_wishlist: "Aggiungi ai preferiti",
        select_color_size: "Seleziona colore e taglia",
        best_from: "Migliore da",
        all_offers: "Tutte le offerte",
        other_offers: "Altre offerte",
        close: "Chiudi",
        compare_products: "Confronto prodotti",
        remove: "Rimuovi",
        no_products_filters: "Nessun prodotto corrisponde ai filtri.",
        try_remove_filters: "Prova a rimuovere alcuni filtri.",
        clear_filters: "Cancella filtri",
        showing: "Mostrati",
        of: "di",
        products: "prodotti",
        search_placeholder: "Cerca sneakers...",
        price_alerts_title: "Avvisi prezzo:",
        no_alerts: "Nessun prodotto sotto il prezzo desiderato al momento.",
        is_now_at: "è ora a",
        desired: "desiderato",
        go_to_shop: "Vai al negozio",
        watch_story: "Guarda la storia",
        filters_btn: "Filtri",

        slogan: "Trova. Filatela.",
        promise_h: "Confronta lo stesso paio in più negozi",
        promise_p: "Non vendiamo sneaker. Classifichiamo le offerte. Compri nel negozio.",
        size_guide: "Guida alle taglie",
        size_guide_note: "Sneaker adulto, conversione approssimativa. Vale la scheda del negozio.",
        how_1t: "Trova", how_1d: "Modello, taglia e paese.",
        how_2t: "Confronta", how_2d: "L'oro è il totale stimato migliore. Poi argento e bronzo.",
        how_3t: "Compra in negozio", how_3d: "Il negozio addebita, spedisce e gestisce i resi.",
        social_soon: "Social in arrivo.",
        cookie_txt: "Salviamo lingua, tema, paese e preferiti su questo dispositivo.",
        cookie_ok: "OK",
        dest_pick_line: "Choose a destination for a price with shipping to you.",
        h_gender: "Gender",
        more_offers: "More offers",
        more_brand: "More from this brand",
        recent_title: "Recently viewed",
        account_title: "Account",
        account_soon: "Sign in will arrive with saved lists. Wishlist stays on this device for now.",
        partners_empty: "Confrontiamo le offerte dei negozi. L’elenco dei partner cresce.",

        col_shop: "Negozio",
        col_price: "Prezzo",
        col_ship: "Spedizione",
        col_total: "Totale",
        f_terms: "Usando il sito accetti una possibile commissione. Il prezzo per te non cambia.",

        from_n_shops: "da {n} negozi",
        cheapest_at: "meglio da",
        show_worldwide: "Mostra in tutto il mondo",
        empty_dest: "Nessun modello spedisce nel tuo paese con questi filtri.",
        settings: "Impostazioni",
        alert_for_country: "Avviso per",
        alert_no_country: "Nessun paese (prezzo globale)",
        privacy: "Privacy",
        empty_cloud: "Nessuna sneaker in questa nuvola…",
        skip_story: "Salta",
        mode_ww: "Tutto il mondo",
        mode_tome: "Verso di me",
        mode_label: "Modalità",
        dest_choose: "Da quale paese acquisti?",
        dest_continue_ww: "Continua in tutto il mondo",
        dest_apply: "Usa questo paese",
        dest_note_ww: "* Tutto il mondo: prezzo più basso del prodotto tra i negozi — non personalizzato per il tuo paese (spedizione/dazi potrebbero non essere inclusi).",
        dest_note_tome: "** Verso di me: prezzo per la destinazione scelta, con spedizione se disponibile. Dazi/costi extra solo se il negozio li indica.",
        dest_change: "Cambia paese",
        dest_warn_ww: "Nessun paese scelto — il prezzo migliore non è personalizzato per la tua spedizione.",
        check_ship_to: "Verifica spedizione verso",
        ships_yes: "Spedisce",
        ships_no: "Non spedisce",
        ships_unknown: "Nessun dato",
        buy_at: "Compra da",
        affiliate_note: "Possiamo ricevere una commissione dai link. Il prezzo per te non cambia.",
        duties_note: "Un ordine da un altro paese o extra UE può includere dazi, IVA o costi del corriere. Il negozio conferma l'importo finale.",
        offer_board: "Offerte",
        total_label: "Totale",
        shipping_short: "sped."
    }
};

function openSizeGuide() {
    const modal = document.getElementById('size-guide-modal');
    const table = document.getElementById('size-guide-table');
    if (!modal || !table) return;
    table.innerHTML = '<thead><tr><th>EU</th><th>US</th><th>UK</th><th>CM</th></tr></thead>' +
        '<tbody>' + sizeMapping.map(s => `<tr><td>${s.eu}</td><td>${s.us}</td><td>${s.uk}</td><td>${s.cm}</td></tr>`).join('') + '</tbody>';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
}
function closeSizeGuide() {
    const modal = document.getElementById('size-guide-modal');
    if (modal) modal.hidden = true;
    document.body.style.overflow = '';
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSizeGuide();
});

const sizeMapping = [
    { eu: 36, us: 4, uk: 3.5, cm: 22.5 }, { eu: 36.5, us: 4.5, uk: 4, cm: 23 },
    { eu: 37.5, us: 5, uk: 4.5, cm: 23.5 }, { eu: 38, us: 5.5, uk: 5, cm: 24 },
    { eu: 38.5, us: 6, uk: 5.5, cm: 24.5 }, { eu: 39, us: 6.5, uk: 6, cm: 25 },
    { eu: 40, us: 7, uk: 6, cm: 25.5 }, { eu: 40.5, us: 7.5, uk: 6.5, cm: 26 },
    { eu: 41, us: 8, uk: 7, cm: 26.5 }, { eu: 42, us: 8.5, uk: 7.5, cm: 27 },
    { eu: 42.5, us: 9, uk: 8, cm: 27.5 }, { eu: 43, us: 9.5, uk: 8.5, cm: 28 },
    { eu: 44, us: 10, uk: 9, cm: 28.5 }, { eu: 44.5, us: 10.5, uk: 9.5, cm: 29 },
    { eu: 45, us: 11, uk: 10, cm: 29.5 }, { eu: 45.5, us: 11.5, uk: 10.5, cm: 30 },
    { eu: 46, us: 12, uk: 11, cm: 30.5 }, { eu: 47, us: 12.5, uk: 11.5, cm: 31 },
    { eu: 47.5, us: 13, uk: 12, cm: 31.5 }, { eu: 48, us: 13.5, uk: 12.5, cm: 32 }
];


const FX_FALLBACK = { EUR: 1, USD: 1.08, GBP: 0.84, CHF: 0.94 };
let rates = Object.assign({}, FX_FALLBACK);
const symbols = { EUR: "€", USD: "$", GBP: "£", CHF: "CHF " };
let fxDate = '';

async function loadFxRates() {
    try {
        const res = await fetch('https://api.frankfurter.app/latest?from=EUR&to=USD,GBP,CHF', { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (!data || !data.rates) return;
        rates.EUR = 1;
        if (data.rates.USD) rates.USD = data.rates.USD;
        if (data.rates.GBP) rates.GBP = data.rates.GBP;
        if (data.rates.CHF) rates.CHF = data.rates.CHF;
        fxDate = data.date || '';
        try { localStorage.setItem('sa_fx', JSON.stringify({ rates: rates, date: fxDate })); } catch (e) {}
        const tip = document.getElementById('fx-tip');
        if (tip && fxDate) tip.textContent = 'ECB ' + fxDate;
    } catch (e) {
        try {
            const raw = localStorage.getItem('sa_fx');
            if (raw) {
                const saved = JSON.parse(raw);
                if (saved && saved.rates) { rates = Object.assign(rates, saved.rates); fxDate = saved.date || ''; }
            }
        } catch (e2) {}
    }
}

let currentCountry = null;
let shipMode = 'ww'; // 'ww' | 'tome'
let qvCheckCountry = '';
let currentCurrency = 'EUR';
let currentLang = 'en';

let compareList = [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentView = 'products';
let priceAlerts = JSON.parse(localStorage.getItem('priceAlerts')) || {};

// Filter & Sort state
let currentSort = 's_pop';
let selectedSizes = [];       // EU sizes (numbers)
let sizeChipSystem = 'eu';

function cleanEuSizes(sizes) {
    const raw = (sizes || []).map(s => String(s));
    const nums = raw.map(Number).filter(n => !isNaN(n));
    const adult = nums.some(n => n >= 36 && n <= 50);
    if (!adult) return raw;
    return raw.filter(s => {
        const n = Number(s);
        if (isNaN(n)) return true;
        if (n >= 1 && n <= 13.9) return false;
        if (n > 48) return false;
        return true;
    });
}
function labelSize(eu) {
    const sys = (typeof sizeChipSystem !== 'undefined' && sizeChipSystem) ? sizeChipSystem : 'eu';
    const row = (typeof sizeMapping !== 'undefined' ? sizeMapping : []).find(r => String(r.eu) === String(eu) || Number(r.eu) === Number(eu));
    if (!row) return String(eu);
    if (sys === 'uk') return row.uk;
    if (sys === 'us') return row.us;
    if (sys === 'cm') return row.cm;
    return row.eu;
}
function toEuSize(val) {
    const n = parseFloat(val);
    const sys = (typeof sizeChipSystem !== 'undefined' && sizeChipSystem) ? sizeChipSystem : 'eu';
    if (sys === 'eu' || isNaN(n)) return n;
    const row = (typeof sizeMapping !== 'undefined' ? sizeMapping : []).find(r => Number(r[sys]) === n || String(r[sys]) === String(val));
    return row ? Number(row.eu) : n;
}
function sizeSysTabsHTML(reload) {
    const sys = (typeof sizeChipSystem !== 'undefined' && sizeChipSystem) ? sizeChipSystem : 'eu';
    return `<div class="size-sys-tabs">${['eu','uk','us','cm'].map(k => `<button type="button" class="p-chip${sys===k?' on':''}" data-sys="${k}" onclick="setSizeChipSystem('${k}', '${reload}')">${k.toUpperCase()}</button>`).join('')}</div>`;
}

document.addEventListener('click', function (e) {
    const tab = e.target.closest && e.target.closest('.size-sys-tabs [data-sys]');
    if (!tab) return;
    e.preventDefault();
    e.stopPropagation();
    setSizeChipSystem(tab.getAttribute('data-sys'));
}, true);

function setSizeChipSystem(k, reload) {
    window.sizeChipSystem = k;
    sizeChipSystem = k;
    try { localStorage.setItem('sa_size_sys', k); } catch (e) {}
    document.querySelectorAll('.size-sys-tabs [data-sys]').forEach(b => {
        b.classList.toggle('on', b.getAttribute('data-sys') === k);
    });
    document.querySelectorAll('[data-size]').forEach(b => {
        b.textContent = labelSize(b.getAttribute('data-size'));
        if (typeof sizeIsOn === 'function') b.classList.toggle('on', sizeIsOn(b.getAttribute('data-size')));
    });
    try { if (typeof renderSizeChipLive === 'function') renderSizeChipLive(); } catch (e) {}
}


let selectedColors = [];      // color keywords (lowercase)
let selectedMaterials = [];   // English material names
let selectedPriceRanges = []; // 'under100' | '100-200' | '200-500' | 'luxury'
let maxPriceSlider = 1500;
let searchTerm = '';
let selectedCategory = ''; // men|women|kids|''
let selectedGenders = [];
let selectedStyles = [];
let selectedBrands = [];
let selectedLines = [];
let selectedHeights = [];
let selectedProductSize = null; // kept in sync with selectedSizes

function sizeIsOn(eu) {
    return (selectedSizes || []).some(s => String(s) === String(eu) || Number(s) === Number(eu));
}
function toggleCatalogSize(eu, after) {
    const n = (typeof toEuSize === 'function') ? toEuSize(eu) : parseFloat(eu);
    if (isNaN(n)) return;
    const has = sizeIsOn(n);
    selectedSizes = has ? selectedSizes.filter(s => String(s) !== String(n) && Number(s) !== n) : selectedSizes.concat([n]);
    selectedProductSize = selectedSizes.length === 1 ? selectedSizes[0] : null;
    try { localStorage.setItem('sa_fit_eus', JSON.stringify(selectedSizes)); } catch (e) {}
    try { if (typeof renderSizeChipLive === 'function') renderSizeChipLive(); } catch (e) {}
    if (typeof after === 'function') after();
    else {
        const qv = document.getElementById('quickview-modal');
        const pp = document.getElementById('product-page');
        if (qv && !qv.hidden) {
            const id = qv.getAttribute('data-pid');
            if (id) refreshQvQuiet(id);
        } else if (pp && !pp.hidden) {
            try { initProductPage(); } catch (e2) {}
        } else if (typeof applyFiltersAndRender === 'function') scheduleCatalogRender();
    }
}

let selectedProductColor = null;

const EXTRA_I18N = {
    s_off: { en: 'Biggest cut vs retail', bg: 'Най-голяма отстъпка', fr: 'Plus grosse remise', de: 'Größter Rabatt', es: 'Mayor descuento', it: 'Sconto più alto' },
    pick_size: { en: 'Pick a size for a ranked price', bg: 'Избери размер за класирана цена', fr: 'Choisis une pointure pour le classement', de: 'Größe wählen für die Rangliste', es: 'Elige talla para el ranking', it: 'Scegli la taglia per la classifica' },
    h_brand: { en: 'Brand', bg: 'Марка', fr: 'Marque', de: 'Marke', es: 'Marca', it: 'Marca' },
    h_line: { en: 'Line', bg: 'Линия', fr: 'Ligne', de: 'Linie', es: 'Línea', it: 'Linea' },
    h_height: { en: 'Height', bg: 'Височина', fr: 'Hauteur', de: 'Höhe', es: 'Altura', it: 'Altezza' },
    ht_low: { en: 'Low', bg: 'Ниски', fr: 'Basses', de: 'Low', es: 'Low', it: 'Low' },
    ht_mid: { en: 'Mid', bg: 'Средни', fr: 'Mid', de: 'Mid', es: 'Mid', it: 'Mid' },
    ht_high: { en: 'High', bg: 'Високи', fr: 'Montantes', de: 'High', es: 'High', it: 'High' },
    report_offer: { en: 'Report', bg: 'Докладвай', fr: 'Signaler', de: 'Melden', es: 'Avisar', it: 'Segnala' },
    updated: { en: 'Updated', bg: 'Обновено', fr: 'Mis à jour', de: 'Aktualisiert', es: 'Actualizado', it: 'Aggiornato' },
    restock_alert: { en: 'Tell me when this size is back', bg: 'Кажи ми като се върне този размер', fr: 'Prévenir quand cette pointure revient', de: 'Bescheid wenn die Größe wieder da ist', es: 'Avisadme cuando vuelva esta talla', it: 'Avvisami quando torna questa taglia' },
    other_colors: { en: 'Other colours', bg: 'Друг цвят', fr: 'Autres couleurs', de: 'Andere Farben', es: 'Otros colores', it: 'Altri colori' },
    choose_size_first: { en: 'Choose a size for gold / silver / bronze', bg: 'Избери размер за злато / сребро / бронз', fr: 'Choisis une pointure pour or / argent / bronze', de: 'Größe für Gold / Silber / Bronze', es: 'Elige talla para oro / plata / bronce', it: 'Scegli taglia per oro / argento / bronzo' },
    qv_label: { en: 'Quick view', bg: 'Бърз преглед', fr: 'Aperçu', de: 'Schnellansicht', es: 'Vista rápida', it: 'Anteprima' },
    view: { en: 'View', bg: 'Виж', fr: 'Voir', de: 'Ansehen', es: 'Ver', it: 'Vedi' },
    see_pair: { en: 'See the pair', bg: 'Виж чифта', fr: 'Voir la paire', de: 'Zum Paar', es: 'Ver el par', it: 'Vedi il paio' },
    from_door: { en: 'from {p} to the door', bg: 'от {p} до вратата', fr: 'dès {p} livré', de: 'ab {p} geliefert', es: 'desde {p} a domicilio', it: 'da {p} a casa' },
    dest_hint_ww: {
        en: 'Prices are not for a country yet. Pick where it should ship.',
        bg: 'Цените още не са за държава. Избери до къде да праща.',
        fr: 'Prix sans pays. Choisis la destination.',
        de: 'Preise ohne Land. Ziel wählen.',
        es: 'Precios sin país. Elige destino.',
        it: 'Prezzi senza paese. Scegli destinazione.'
    },
    per_page: {
        en: 'Per page',
        bg: 'На страница',
        fr: 'Par page',
        de: 'Pro Seite',
        es: 'Por página',
        it: 'Per pagina'
    },
    calc_warn: { en: 'Totals are approximate and indicative.', bg: 'Сумите са приблизителни и ориентировъчни.', fr: 'Totaux approximatifs et indicatifs.', de: 'Summen sind Näherungswerte.', es: 'Totales aproximados e indicativos.', it: 'Totali approssimativi e indicativi.' },
    calc_hint: {
        en: 'Prices are approximate and for orientation. The shop listing is the exact amount.',
        bg: 'Цените са приблизителни и за ориентир. Точната сума е в магазина.',
        fr: 'Prix approximatifs, à titre indicatif. Le montant exact est celui du magasin.',
        de: 'Preise sind Näherungswerte zur Orientierung. Maßgeblich ist der Shop.',
        es: 'Precios aproximados y orientativos. El importe exacto está en la tienda.',
        it: 'Prezzi approssimativi e indicativi. L’importo esatto è quello del negozio.'
    },
    total_est: { en: 'Estimated total', bg: 'Ориентировъчен сбор', fr: 'Total estimé', de: 'Geschätzte Summe', es: 'Total estimado', it: 'Totale stimato' },
    without_ship: { en: 'without shipping', bg: 'без доставка', fr: 'sans livraison', de: 'ohne Versand', es: 'sin envío', it: 'senza spedizione' },
    no_your_size: {
        en: 'Not in your size',
        bg: 'Няма твоя номер',
        fr: 'Pas à votre pointure',
        de: 'Nicht in deiner Größe',
        es: 'No está en tu talla',
        it: 'Non nella tua taglia'
    },
    no_your_dest: {
        en: 'Does not ship to you',
        bg: 'Няма до твоята дестинация',
        fr: 'Pas de livraison vers vous',
        de: 'Kein Versand zu dir',
        es: 'No envía a tu destino',
        it: 'Non spedisce verso di te'
    },
    wish_remove: { en: 'Remove', bg: 'Премахни', fr: 'Retirer', de: 'Entfernen', es: 'Quitar', it: 'Rimuovi' },
    dest_hint_tome: {
        en: 'Totals include delivery to {c}.',
        bg: 'Сборът е с доставка до {c}.',
        fr: 'Totaux avec livraison vers {c}.',
        de: 'Summe inkl. Versand nach {c}.',
        es: 'Totales con envío a {c}.',
        it: 'Totali con spedizione in {c}.'
    }
};
function tExtra(key) {
    const pack = EXTRA_I18N[key];
    if (!pack) return key;
    return pack[currentLang] || pack.en;
}
Object.keys(langs).forEach(code => {
    langs[code].s_off = (EXTRA_I18N.s_off[code] || EXTRA_I18N.s_off.en);
    langs[code].pick_size = EXTRA_I18N.pick_size[code] || EXTRA_I18N.pick_size.en;
    langs[code].h_brand = EXTRA_I18N.h_brand[code] || EXTRA_I18N.h_brand.en;
    langs[code].h_line = EXTRA_I18N.h_line[code] || EXTRA_I18N.h_line.en;
    langs[code].h_height = EXTRA_I18N.h_height[code] || EXTRA_I18N.h_height.en;
    langs[code].report_offer = EXTRA_I18N.report_offer[code] || EXTRA_I18N.report_offer.en;
    langs[code].updated = EXTRA_I18N.updated[code] || EXTRA_I18N.updated.en;
    langs[code].restock_alert = EXTRA_I18N.restock_alert[code] || EXTRA_I18N.restock_alert.en;
    langs[code].other_colors = EXTRA_I18N.other_colors[code] || EXTRA_I18N.other_colors.en;
    langs[code].choose_size_first = EXTRA_I18N.choose_size_first[code] || EXTRA_I18N.choose_size_first.en;
    langs[code].qv_label = EXTRA_I18N.qv_label[code] || EXTRA_I18N.qv_label.en;
    langs[code].view = EXTRA_I18N.view[code] || EXTRA_I18N.view.en;
    langs[code].see_pair = EXTRA_I18N.see_pair[code] || EXTRA_I18N.see_pair.en;
    langs[code].from_door = EXTRA_I18N.from_door[code] || EXTRA_I18N.from_door.en;
    langs[code].dest_hint_ww = EXTRA_I18N.dest_hint_ww[code] || EXTRA_I18N.dest_hint_ww.en;
    langs[code].dest_hint_tome = EXTRA_I18N.dest_hint_tome[code] || EXTRA_I18N.dest_hint_tome.en;
    langs[code].per_page = EXTRA_I18N.per_page[code] || EXTRA_I18N.per_page.en;
    langs[code].calc_warn = EXTRA_I18N.calc_warn[code] || EXTRA_I18N.calc_warn.en;
    langs[code].calc_hint = EXTRA_I18N.calc_hint[code] || EXTRA_I18N.calc_hint.en;
    langs[code].total_est = EXTRA_I18N.total_est[code] || EXTRA_I18N.total_est.en;
    langs[code].without_ship = EXTRA_I18N.without_ship[code] || EXTRA_I18N.without_ship.en;
    langs[code].wish_remove = EXTRA_I18N.wish_remove[code] || EXTRA_I18N.wish_remove.en;
    langs[code].no_your_size = EXTRA_I18N.no_your_size[code] || EXTRA_I18N.no_your_size.en;
    langs[code].no_your_dest = EXTRA_I18N.no_your_dest[code] || EXTRA_I18N.no_your_dest.en;
});

function sizeNum(v) {
    const n = parseFloat(String(v).replace(',', '.'));
    return Number.isFinite(n) ? n : null;
}
function offerKnownHasSize(offer, euSize) {
    if (euSize == null || euSize === '') return true;
    const stock = (offer && (offer.sizesInStock || offer.sizes)) || [];
    if (!Array.isArray(stock) || !stock.length) return null;
    const want = sizeNum(euSize);
    return stock.some(s => sizeNum(s) === want || String(s) === String(euSize));
}
function offerHasSize(offer, euSize) {
    const k = offerKnownHasSize(offer, euSize);
    return k !== false;
}
function offersForSize(p, euSize) {
    return (p.offers || []).filter(o => offerHasSize(o, euSize));
}
function productHasSelectedSize(p) {
    if (!selectedSizes.length) return true;
    if (!p._sizeSet) p._sizeSet = new Set((p.sizes || []).map(Number));
    if (selectedSizes.some(sz => p._sizeSet.has(Number(sz)))) return true;
    const listed = p.sizes || [];
    const offers = p.offers || [];
    const anyKnown = offers.some(o => ((o.sizesInStock || o.sizes || []).length));
    if (!listed.length && !anyKnown) {
        return false;
    }
    return selectedSizes.some(sz => {
        const flags = offers.map(o => offerKnownHasSize(o, sz));
        if (flags.some(f => f === true)) return true;
        const want = sizeNum(sz);
        if (listed.some(s => sizeNum(s) === want || String(s) === String(sz))) return true;
        if (flags.some(f => f === false)) return false;
        return false;
    });
}
function jsId(id) {
    return "'" + String(id).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
}
function findProductById(id) {
    const raw = String(id == null ? '' : id);
    return (productsData || []).find(item => String(item.id) === raw) || null;
}
function uniqueShops(p, offers) {
    const list = offers || (p && p.offers) || [];
    return [...new Set(list.map(o => o.shop).filter(Boolean))];
}
function priceRangeEUR(p) {
    const country = (shipMode === 'tome') ? currentCountry : null;
    let offers = relevantOffers(p);
    if (selectedSizes.length === 1) {
        offers = offers.filter(o => offerHasSize(o, selectedSizes[0]));
    } else if (selectedSizes.length > 1) {
        offers = offers.filter(o => selectedSizes.some(sz => offerHasSize(o, sz)));
    }
    if (!offers.length) {
        offers = [...(p.offers || [])];
        if (selectedSizes.length === 1) offers = offers.filter(o => offerHasSize(o, selectedSizes[0]));
        if (!offers.length) return null;
        const tags = offers.map(o => Number(o.price) || 0);
        return { min: Math.min(...tags), max: Math.max(...tags), n: uniqueShops(p, offers).length, noShip: true };
    }
    const totals = offers.map(o => offerTotalEUR(o, country));
    return { min: Math.min(...totals), max: Math.max(...totals), n: uniqueShops(p, offers).length };
}
function shopHref(offer) {
    const raw = (offer && (offer.url || offer.affiliate_url)) || '';
    if (!raw) return '#';
    try {
        if (raw.includes('url=')) {
            const dest = new URL(raw, 'https://sneakeaway.com').searchParams.get('url');
            if (dest && /^https?:/i.test(dest)) return dest;
        }
    } catch (e) {}
    return raw;
}

function catalogImgClick(event, id) {
    if (document.body.getAttribute('data-view') === 'look') {
        event.stopPropagation();
        showQuickView(id);
        return;
    }
    openProduct(id);
}

function formatRange(p, rate, symbol) {
    const r = priceRangeEUR(p);
    if (!r) return { html: '—', shops: 0 };
    const a = Math.round(r.min * rate);
    const b = Math.round(r.max * rate);
    const spread = r.min ? (r.max - r.min) / r.min : 0;
    const html = (spread < 0.08 || a === b) ? `${symbol}${a}` : `${symbol}${a}–${symbol}${b}`;
    return { html, shops: r.n, min: a, max: b };
}
function discountDepth(p) {
    const best = getBestPriceEUR(p);
    const orig = Number(p.originalPrice) || 0;
    if (!orig || best >= orig) return 0;
    return (orig - best) / orig;
}
function timeAgo(iso, dict) {
    if (!iso) return '';
    const t = Date.parse(iso);
    if (!t) return '';
    const h = Math.max(1, Math.round((Date.now() - t) / 3600000));
    return (dict.updated || 'Updated') + ' ' + h + 'h';
}
function reportOffer(shop, name) {
    const sub = encodeURIComponent('Sneake Away — report offer');
    const body = encodeURIComponent((name || '') + '\n' + (shop || '') + '\n' + location.href);
    location.href = 'mailto:sneakeaway@gmail.com?subject=' + sub + '&body=' + body;
}
function saveCatalogSpot() {
    try {
        sessionStorage.setItem('sa_cat_y', String(window.scrollY || 0));
        sessionStorage.setItem('sa_cat_shown', String(displayedCount || 0));
        sessionStorage.setItem('sa_cat_back', '1');
    } catch (e) {}
}
function restoreCatalogSpot() {
    try {
        if (sessionStorage.getItem('sa_cat_back') !== '1') return;
        sessionStorage.removeItem('sa_cat_back');
        const shown = parseInt(sessionStorage.getItem('sa_cat_shown') || '0', 10);
        const y = parseInt(sessionStorage.getItem('sa_cat_y') || '0', 10);
        if (shown > productsPerLoad) {
            displayedCount = 0;
            const extra = shown - productsPerLoad;
            renderProducts(true);
            displayedCount = productsPerLoad;
            const loops = Math.ceil(extra / productsPerLoad);
            for (let i = 0; i < loops; i++) renderProducts(false);
        }
        setTimeout(() => window.scrollTo(0, y), 40);
    } catch (e) {}
}

let productsData = [];
const FALLBACK_PRODUCTS = [{"id": 1, "name": "Air Jordan 1 Retro High OG", "brand": "Jordan", "category": "men", "image": "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=640&q=80", "desc": "Класически модел с премиум кожа и отлична изработка.", "colors": ["Black/White", "Chicago", "Royal Blue"], "sizes": [40, 41, 42, 42.5, 43, 44, 45], "materials": ["Leather", "Rubber"], "originalPrice": 180, "offers": [{"shop": "Nike", "price": 142, "shipping": 0, "url": "https://www.nike.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0, "UK": 9, "US": 14}}, {"shop": "Footlocker", "price": 149, "shipping": 5, "url": "https://www.footlocker.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 4, "RO": 4, "GR": 4, "DE": 4, "IT": 4, "FR": 4, "ES": 4, "AT": 4, "NL": 4, "BE": 4, "UK": 6, "US": 12}}, {"shop": "Zalando", "price": 155, "shipping": 0, "url": "https://www.zalando.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0}}, {"shop": "JD Sports", "price": 160, "shipping": 4, "url": "https://www.jdsports.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 4, "RO": 4, "GR": 4, "DE": 4, "IT": 4, "FR": 4, "ES": 4, "AT": 4, "NL": 4, "BE": 4, "UK": 6, "US": 12}}]}, {"id": 2, "name": "Nike Air Force 1 '07 White", "brand": "Nike", "category": "men", "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=640&q=80", "desc": "Иконичният модел с удобна възглавница за всеки ден.", "colors": ["White", "Black", "White/Black"], "sizes": [39, 40, 41, 42, 43, 44, 45], "materials": ["Leather", "Synthetic", "Rubber"], "originalPrice": 130, "offers": [{"shop": "Nike", "price": 119, "shipping": 0, "url": "https://www.nike.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0, "UK": 9, "US": 14}}, {"shop": "JD Sports", "price": 125, "shipping": 4, "url": "https://www.jdsports.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 4, "RO": 4, "GR": 4, "DE": 4, "IT": 4, "FR": 4, "ES": 4, "AT": 4, "NL": 4, "BE": 4, "UK": 6, "US": 12}}, {"shop": "ASOS", "price": 129, "shipping": 0, "url": "https://www.asos.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0, "UK": 5}}]}, {"id": 3, "name": "Adidas Samba OG Black", "brand": "Adidas", "category": "men", "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=640&q=80", "desc": "Легендарният Samba в черен цвят.", "colors": ["Black/White", "White/Black", "Green"], "sizes": [40, 41, 42, 43, 44, 45], "materials": ["Leather", "Suede", "Rubber"], "originalPrice": 110, "offers": [{"shop": "Adidas", "price": 100, "shipping": 0, "url": "https://www.adidas.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0, "UK": 9, "US": 14}}, {"shop": "Zalando", "price": 115, "shipping": 0, "url": "https://www.zalando.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0}}, {"shop": "Footlocker", "price": 120, "shipping": 6, "url": "https://www.footlocker.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 4, "RO": 4, "GR": 4, "DE": 4, "IT": 4, "FR": 4, "ES": 4, "AT": 4, "NL": 4, "BE": 4, "UK": 6, "US": 12}}]}, {"id": 4, "name": "New Balance 550 White Grey", "brand": "New Balance", "category": "men", "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=640&q=80", "desc": "Ретро баскетболен стил с модерен комфорт.", "colors": ["White/Grey", "Black", "Green"], "sizes": [40, 41, 42, 42.5, 43, 44], "materials": ["Leather", "Suede", "Rubber"], "originalPrice": 160, "offers": [{"shop": "New Balance", "price": 140, "shipping": 0, "url": "https://www.newbalance.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0, "UK": 9, "US": 14}}, {"shop": "Size?", "price": 145, "shipping": 5, "url": "https://www.size.co.uk", "shipsTo": ["UK", "BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE"], "shippingByCountry": {"UK": 0, "BG": 8, "RO": 8, "GR": 8, "DE": 8, "IT": 8, "FR": 8, "ES": 8, "AT": 8, "NL": 8, "BE": 8}}, {"shop": "End", "price": 150, "shipping": 0, "url": "https://www.endclothing.com", "shipsTo": ["UK", "BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE"], "shippingByCountry": {"UK": 0, "BG": 7, "RO": 7, "GR": 7, "DE": 7, "IT": 7, "FR": 7, "ES": 7, "AT": 7, "NL": 7, "BE": 7}}]}, {"id": 5, "name": "Nike Dunk Low Panda", "brand": "Nike", "category": "men", "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=640&q=80", "desc": "Популярният Panda цвят.", "colors": ["Black/White", "University Blue"], "sizes": [39, 40, 41, 42, 43, 44, 45], "materials": ["Leather", "Synthetic", "Rubber"], "originalPrice": 125, "offers": [{"shop": "Nike", "price": 110, "shipping": 0, "url": "https://www.nike.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0, "UK": 9, "US": 14}}, {"shop": "Footlocker", "price": 118, "shipping": 4, "url": "https://www.footlocker.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 4, "RO": 4, "GR": 4, "DE": 4, "IT": 4, "FR": 4, "ES": 4, "AT": 4, "NL": 4, "BE": 4, "UK": 6, "US": 12}}, {"shop": "SNS", "price": 125, "shipping": 0, "url": "https://www.sneakersnstuff.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK"], "shippingByCountry": {"BG": 5, "RO": 5, "GR": 5, "DE": 0, "IT": 5, "FR": 5, "ES": 5, "AT": 5, "NL": 0, "BE": 5, "UK": 5}}]}, {"id": 6, "name": "Asics Gel-Kayano 14 Silver", "brand": "Asics", "category": "men", "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=640&q=80", "desc": "Максимална амортизация и стабилност.", "colors": ["Silver", "Black", "White"], "sizes": [40, 41, 42, 43, 44, 45, 46], "materials": ["Mesh", "Synthetic", "Rubber", "Textile"], "originalPrice": 190, "offers": [{"shop": "Asics", "price": 160, "shipping": 0, "url": "https://www.asics.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0, "UK": 9, "US": 14}}, {"shop": "Zalando", "price": 165, "shipping": 0, "url": "https://www.zalando.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0}}, {"shop": "SportVision", "price": 170, "shipping": 5, "url": "https://www.sportvision.bg", "shipsTo": ["BG", "RO", "GR"], "shippingByCountry": {"BG": 0, "RO": 6, "GR": 6}}]}, {"id": 7, "name": "Adidas Gazelle Pink", "brand": "Adidas", "category": "women", "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=640&q=80", "desc": "Мек велур и ежедневен силует.", "colors": ["Pink", "White", "Black"], "sizes": [36, 37.5, 38, 39, 40, 41], "materials": ["Suede", "Leather", "Rubber"], "originalPrice": 100, "offers": [{"shop": "Adidas", "price": 89, "shipping": 0, "url": "https://www.adidas.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0, "UK": 9, "US": 14}}, {"shop": "Zalando", "price": 95, "shipping": 0, "url": "https://www.zalando.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0}}, {"shop": "ASOS", "price": 99, "shipping": 3, "url": "https://www.asos.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0, "UK": 5}}]}, {"id": 8, "name": "Nike Air Max 90 Pink", "brand": "Nike", "category": "women", "image": "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=640&q=80", "desc": "Visible Air и мек комфорт.", "colors": ["Pink", "White", "Grey"], "sizes": [36, 37.5, 38, 38.5, 39, 40, 41], "materials": ["Leather", "Mesh", "Rubber"], "originalPrice": 150, "offers": [{"shop": "Nike", "price": 129, "shipping": 0, "url": "https://www.nike.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0, "UK": 9, "US": 14}}, {"shop": "Footlocker", "price": 135, "shipping": 5, "url": "https://www.footlocker.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 4, "RO": 4, "GR": 4, "DE": 4, "IT": 4, "FR": 4, "ES": 4, "AT": 4, "NL": 4, "BE": 4, "UK": 6, "US": 12}}, {"shop": "JD Sports", "price": 139, "shipping": 0, "url": "https://www.jdsports.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 4, "RO": 4, "GR": 4, "DE": 4, "IT": 4, "FR": 4, "ES": 4, "AT": 4, "NL": 4, "BE": 4, "UK": 6, "US": 12}}]}, {"id": 9, "name": "Puma Palermo Leather", "brand": "Puma", "category": "women", "image": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=640&q=80", "desc": "Терасови линии и мека кожа.", "colors": ["White", "Black", "Brown"], "sizes": [36, 37.5, 38, 39, 40], "materials": ["Leather", "Rubber"], "originalPrice": 95, "offers": [{"shop": "Puma", "price": 79, "shipping": 0, "url": "https://www.puma.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0, "UK": 9, "US": 14}}, {"shop": "Zalando", "price": 85, "shipping": 0, "url": "https://www.zalando.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0}}, {"shop": "About You", "price": 88, "shipping": 4, "url": "https://www.aboutyou.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0}}]}, {"id": 10, "name": "Nike Court Borough Kids", "brand": "Nike", "category": "kids", "image": "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=640&q=80", "desc": "Лек модел за всеки ден в училище.", "colors": ["White", "Black", "Blue"], "sizes": [36, 36.5, 37.5, 38, 38.5, 39], "materials": ["Synthetic", "Rubber"], "originalPrice": 70, "offers": [{"shop": "Nike", "price": 55, "shipping": 0, "url": "https://www.nike.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0, "UK": 9, "US": 14}}, {"shop": "JD Sports", "price": 59, "shipping": 3, "url": "https://www.jdsports.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 4, "RO": 4, "GR": 4, "DE": 4, "IT": 4, "FR": 4, "ES": 4, "AT": 4, "NL": 4, "BE": 4, "UK": 6, "US": 12}}, {"shop": "Zalando", "price": 62, "shipping": 0, "url": "https://www.zalando.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0}}]}, {"id": 11, "name": "Adidas Superstar Kids", "brand": "Adidas", "category": "kids", "image": "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=640&q=80", "desc": "Shell-toe класика в детски размер.", "colors": ["White/Black", "White", "Black"], "sizes": [36, 37.5, 38, 39, 40], "materials": ["Leather", "Rubber"], "originalPrice": 75, "offers": [{"shop": "Adidas", "price": 60, "shipping": 0, "url": "https://www.adidas.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0, "UK": 9, "US": 14}}, {"shop": "Footlocker", "price": 65, "shipping": 4, "url": "https://www.footlocker.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 4, "RO": 4, "GR": 4, "DE": 4, "IT": 4, "FR": 4, "ES": 4, "AT": 4, "NL": 4, "BE": 4, "UK": 6, "US": 12}}, {"shop": "SportVision", "price": 68, "shipping": 0, "url": "https://www.sportvision.bg", "shipsTo": ["BG", "RO", "GR"], "shippingByCountry": {"BG": 0, "RO": 6, "GR": 6}}]}, {"id": 12, "name": "New Balance 574 Classic", "brand": "New Balance", "category": "men", "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=640&q=80", "desc": "Всекидневна класика с ENCAP амортизация.", "colors": ["Grey", "Navy", "Burgundy"], "sizes": [40, 41, 42, 43, 44, 45], "materials": ["Suede", "Mesh", "Rubber"], "originalPrice": 120, "offers": [{"shop": "New Balance", "price": 99, "shipping": 0, "url": "https://www.newbalance.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE", "UK", "US"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0, "UK": 9, "US": 14}}, {"shop": "Zalando", "price": 105, "shipping": 0, "url": "https://www.zalando.com", "shipsTo": ["BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE"], "shippingByCountry": {"BG": 0, "RO": 0, "GR": 0, "DE": 0, "IT": 0, "FR": 0, "ES": 0, "AT": 0, "NL": 0, "BE": 0}}, {"shop": "Size?", "price": 110, "shipping": 5, "url": "https://www.size.co.uk", "shipsTo": ["UK", "BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE"], "shippingByCountry": {"UK": 0, "BG": 8, "RO": 8, "GR": 8, "DE": 8, "IT": 8, "FR": 8, "ES": 8, "AT": 8, "NL": 8, "BE": 8}}, {"shop": "End", "price": 112, "shipping": 0, "url": "https://www.endclothing.com", "shipsTo": ["UK", "BG", "RO", "GR", "DE", "IT", "FR", "ES", "AT", "NL", "BE"], "shippingByCountry": {"UK": 0, "BG": 7, "RO": 7, "GR": 7, "DE": 7, "IT": 7, "FR": 7, "ES": 7, "AT": 7, "NL": 7, "BE": 7}}]}];



// WISHLIST
function toggleWishlist(id, e) {
    if (e) e.stopImmediatePropagation();
    const sid = String(id);
    const stay = currentView === 'wishlist';
    wishlist = wishlist.filter(item => String(item.id) !== sid);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistButton();
    if (stay) showWishlistPage();
    else renderProducts();
}

function isInWishlist(id) {
    return wishlist.some(item => String(item.id) === String(id));
}

function openWishlistSelector(id, e) {
    if (e) e.stopImmediatePropagation();

    const p = findProductById(id);
    if (!p) return;
    try { document.getElementById('wishlist-selector-modal')?.remove(); } catch (e) {}


    // Ако вече е в любими – просто го махаме
    if (isInWishlist(id)) {
        toggleWishlist(id);
        return;
    }

    const dict = langs[currentLang] || langs.en;

    const colorList = (p.colors && p.colors.length) ? p.colors : [];
    const sizeList = (p.sizes && p.sizes.length) ? p.sizes : [];
    if (!colorList.length) selectedWishColor = 'Default';
    const colorsHTML = colorList.map(c => {
        const safe = String(c).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
        return `<button class="wish-color-btn" onclick="selectWishColor(this, '${safe}')"
                 style="padding:8px 14px; margin:4px; border:2px solid var(--border); background:var(--bg); color:var(--text); border-radius:8px; cursor:pointer; font-size:0.85rem;">${c}</button>`;
    }).join('');
    const sizesHTML = sizeList.map(s => {
        const safe = String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
        return `<button class="wish-size-btn" onclick="selectWishSize(this, '${safe}')"
                 style="min-width:48px; height:42px; padding:0 8px; margin:4px; border:2px solid var(--border); background:var(--bg); color:var(--text); border-radius:8px; cursor:pointer; font-weight:700;">${s}</button>`;
    }).join('');

    const modalHTML = `
        <div id="wishlist-selector-modal" data-pid="${p.id}" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.88); display:flex; align-items:center; justify-content:center; z-index:4200; padding:20px;">
            <div style="background:var(--card); max-width:480px; width:100%; border-radius:18px; padding:28px; position:relative;">
                
                <button onclick="closeWishlistSelector()" style="position:absolute; top:14px; right:16px; font-size:1.8rem; background:none; border:none; color:var(--text); cursor:pointer;">×</button>
                
                <div style="background:#fff; border-radius:12px; padding:20px; margin-bottom:20px; display:flex; align-items:center; justify-content:center; height:220px;">
                    <img src="${p.image}" alt="${p.name}" style="max-height:180px; max-width:100%; object-fit:contain;">
                </div>

                <h3 style="margin:0 0 4px 0; font-size:1.15rem;">${p.name}</h3>
                <p style="color:var(--gray-text); margin:0 0 18px 0; font-size:0.9rem;">${dict.choose_color_size}</p>

                <p style="font-size:0.78rem; color:var(--gray-text); margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px;">${dict.color}</p>
                <div id="wish-colors" style="display:flex; flex-wrap:wrap; margin-bottom:18px;">
                    ${colorsHTML}
                </div>

                <p style="font-size:0.78rem; color:var(--gray-text); margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px;">${dict.size_eu}</p>
                <div id="wish-sizes" style="display:flex; flex-wrap:wrap; margin-bottom:22px;">
                    ${sizesHTML}
                </div>

                <button id="confirm-wishlist-btn" onclick="confirmWishlistAdd(${jsId(p.id)})" 
                        style="width:100%; padding:14px; background:#E63946; color:white; border:none; border-radius:10px; font-weight:700; font-size:1rem; cursor:pointer; opacity:0.5;" disabled>
                    ${dict.add_to_wishlist}
                </button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const wm = document.getElementById('wishlist-selector-modal');
    if (wm) {
        wm.setAttribute('tabindex', '-1');
        a11yOpenModal(wm);
        const closeBtn = wm.querySelector('button');
        if (closeBtn) {
            closeBtn.classList.add('modal-close');
            closeBtn.setAttribute('aria-label', (langs[currentLang]||langs.en).close || 'Close');
        }
    }
}

let selectedWishColor = null;
let selectedWishSize = null;

function selectWishColor(btn, color) {
    document.querySelectorAll('.wish-color-btn').forEach(b => {
        b.style.borderColor = 'var(--border)';
        b.style.background = 'var(--bg)';
    });
    btn.style.borderColor = '#E63946';
    btn.style.background = 'rgba(230, 57, 70, 0.15)';
    selectedWishColor = color;
    const modal = document.getElementById('wishlist-selector-modal');
    const img = modal && modal.querySelector('img');
    if (img && modal) {
        const p = productsData.find(item => String(item.id) === String(modal.getAttribute('data-pid')));
        if (p) img.src = imageForColor(p, color);
    }
    checkWishlistReady();
}

function selectWishSize(btn, size) {
    document.querySelectorAll('.wish-size-btn').forEach(b => {
        b.style.borderColor = 'var(--border)';
        b.style.background = 'var(--bg)';
    });
    btn.style.borderColor = '#E63946';
    btn.style.background = 'rgba(230, 57, 70, 0.15)';
    selectedWishSize = size;
    checkWishlistReady();
}

function checkWishlistReady() {
    const btn = document.getElementById('confirm-wishlist-btn');
    if (!btn) return;
    if (selectedWishColor && selectedWishSize) {
        btn.disabled = false;
        btn.style.opacity = '1';
    } else {
        btn.disabled = true;
        btn.style.opacity = '0.5';
    }
}

function closeWishlistSelector() {
    const modal = document.getElementById('wishlist-selector-modal');
    a11yCloseModalRestore();
    if (modal) {
        modal.remove();
    }
    selectedWishColor = null;
    selectedWishSize = null;
}

function confirmWishlistAdd(id) {
    const dict = langs[currentLang] || langs.en;
    if (!selectedWishColor || !selectedWishSize) {
        alert(dict.select_color_size);
        return;
    }

    // Проверяваме дали вече няма точно същата комбинация
    const exists = wishlist.some(item => 
        item.id === id && 
        item.color === selectedWishColor && 
        item.size === selectedWishSize
    );

    if (!exists) {
        const restockEl = document.getElementById('restock-flag');
        wishlist.push({
            id: id,
            color: selectedWishColor,
            size: selectedWishSize,
            restock: !!(restockEl && restockEl.checked)
        });
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    // Затваряме прозорчето
    closeWishlistSelector();
    try { closeQuickView(); } catch (e) {}
    updateWishlistButton();
    if (currentView === 'wishlist') showWishlistPage();
    else renderProducts();
}

// ==================== FILTER + SORT + LOAD MORE ====================
let displayedCount = 0;
const PAGE_SIZES_DESKTOP = [24, 48, 72, 96];
const PAGE_SIZES_MOBILE = [24, 48];
function isMobileUi() {
    return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 900px)').matches;
}
function pageSizesForDevice() {
    return isMobileUi() ? PAGE_SIZES_MOBILE : PAGE_SIZES_DESKTOP;
}
function defaultPageSize() {
    const allowed = pageSizesForDevice();
    try {
        const saved = parseInt(localStorage.getItem('sa_page_size'), 10);
        if (allowed.includes(saved)) return saved;
    } catch (e) {}
    return isMobileUi() ? 48 : 96;
}
let productsPerLoad = defaultPageSize();
function clampPageSizeToDevice() {
    const allowed = pageSizesForDevice();
    if (!allowed.includes(productsPerLoad)) {
        productsPerLoad = allowed[allowed.length - 1];
        try { localStorage.setItem('sa_page_size', String(productsPerLoad)); } catch (e) {}
    }
}

let currentPage = 1;

function togglePageSizeDrop() {
    const drop = document.getElementById('page-size-drop');
    const sortOpts = document.getElementById('sort-options-list');
    if (sortOpts) sortOpts.classList.remove('show');
    if (drop) drop.classList.toggle('open');
}
function setPageSize(n) {
    n = parseInt(n, 10);
    if (!pageSizesForDevice().includes(n)) return;
    productsPerLoad = n;
    try { localStorage.setItem('sa_page_size', String(n)); } catch (e) {}
    const drop = document.getElementById('page-size-drop');
    if (drop) drop.classList.remove('open');
    displayedCount = 0;
    currentPage = 1;
    const container = document.getElementById('products-container');
    if (container) container.innerHTML = '';
    renderProducts(true);
    setupLoadMore();
}



const DEST_COUNTRIES = [
    { code: "BG", name: "Bulgaria" },
    { code: "RO", name: "Romania" },
    { code: "GR", name: "Greece" },
    { code: "DE", name: "Germany" },
    { code: "IT", name: "Italy" },
    { code: "FR", name: "France" },
    { code: "ES", name: "Spain" },
    { code: "AT", name: "Austria" },
    { code: "NL", name: "Netherlands" },
    { code: "BE", name: "Belgium" },
    { code: "UK", name: "United Kingdom" },
    { code: "US", name: "United States" }
];

function loadShipPrefs() {
    try {
        const m = localStorage.getItem("sa_ship_mode");
        const c = localStorage.getItem("sa_ship_country");
        if (m === "tome" || m === "ww") shipMode = m;
        if (c) currentCountry = c;
        if (shipMode === "tome" && !currentCountry) shipMode = "ww";
    } catch (e) {}
}
function saveShipPrefs() {
    try {
        localStorage.setItem("sa_ship_mode", shipMode);
        if (currentCountry) localStorage.setItem("sa_ship_country", currentCountry);
        else localStorage.removeItem("sa_ship_country");
    } catch (e) {}
}
function offerHost(offer) {
    try {
        return new URL(offer.url || '', 'https://sizeer.lt').hostname.replace(/^www\./, '');
    } catch (e) {
        return '';
    }
}
function offerShipPolicy(offer, country) {
    const table = window.SA_SHIP && window.SA_SHIP.shops;
    if (!table || !offer) return null;
    const shopName = offer.shop || 'Shop';
    const block = table[shopName] || table[Object.keys(table).find(k => k.toLowerCase() === String(shopName).toLowerCase())];
    if (!block || !block.domains) return null;
    const host = offerHost(offer);
    let row = null;
    let rowCc = '';
    Object.keys(block.domains).forEach(cc => {
        const d = block.domains[cc];
        if (d && d.host && host && host.indexOf(d.host.replace(/^www\./, '')) !== -1) {
            row = d;
            rowCc = cc;
        }
    });
    if (row) {
        row = Object.assign({ _cc: rowCc }, row);
        return row;
    }
    const keys = Object.keys(block.domains);
    if (keys.length === 1) {
        return Object.assign({ _cc: keys[0] }, block.domains[keys[0]]);
    }
    return null;
}
function offerShipsTo(offer, country) {
    if (!country) return null;
    const cc = String(country).toUpperCase();
    try {
        const shops = (window.SA_SHIP && window.SA_SHIP.shops) || {};
        const name = String((offer && offer.shop) || '');
        const block = shops[name] || shops[Object.keys(shops).find(k => k.toLowerCase() === name.toLowerCase())];
        const ddp = block && (block.ddp || block.ships || block.countries);
        if (Array.isArray(ddp) && ddp.length) {
            return ddp.map(x => String(x).toUpperCase()).includes(cc);
        }
    } catch (e) {}
    const policy = offerShipPolicy(offer, country);
    if (policy && Array.isArray(policy.ships) && policy.ships.length) {
        return policy.ships.includes(country);
    }
    const list = offer.shipsTo;
    if (!Array.isArray(list) || !list.length) return null;
    return list.includes(country);
}
function shipNote(offer, rate, symbol, dict) {
    const ship = offer._shipCost != null ? offer._shipCost : (offer.shipping || 0);
    const shipDisp = Math.round(ship * rate);
    const item = Math.round((offer.price || 0) * rate);
    const freeOver = offer.shippingFreeOver != null ? Math.round(offer.shippingFreeOver * rate) : null;
    if (freeOver && item < freeOver && shipDisp > 0) {
        return (dict.ship_plus || '+ {s} delivery').replace('{s}', symbol + shipDisp)
            + ' · ' + (dict.ship_free_over || 'free delivery over {n}').replace('{n}', symbol + freeOver);
    }
    if (offer.shipping == null && offer._shipCost == null) return dict.ship_unknown || 'Shipping at checkout';
    if (shipDisp <= 0) return dict.ship_free || 'free delivery';
    return (dict.ship_plus || '+ {s} delivery').replace('{s}', symbol + shipDisp);
}

function offerShippingCost(offer, country) {
    if (!country) return 0;
    const policy = offerShipPolicy(offer, country);
    if (policy) {
        if (Array.isArray(policy.ships) && policy.ships.length && policy.ships.indexOf(country) === -1) return null;
        const item = Number(offer.price) || 0;
        const applies = !policy.rateAppliesTo || policy.rateAppliesTo.indexOf(country) !== -1;
        if (applies && policy.freeOver != null && item >= Number(policy.freeOver) && policy.rate != null) return 0;
        if (applies && policy.rate != null) return Number(policy.rate) || 0;
        if (offer.shippingByCountry && offer.shippingByCountry[country] != null) {
            return Number(offer.shippingByCountry[country]);
        }
        return null;
    }
    if (offer.shippingByCountry && offer.shippingByCountry[country] != null) {
        return Number(offer.shippingByCountry[country]);
    }
    return null;
}

function offerTotalEUR(offer, country) {
    return (Number(offer.price) || 0) + offerShippingCost(offer, country);
}

const EU_CC = ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE'];
const VAT_PCT = {AT:20,BE:21,BG:20,HR:25,CY:19,CZ:21,DK:25,EE:24,FI:25.5,FR:20,DE:19,GR:24,HU:27,IE:23,IT:22,LV:21,LT:21,LU:17,MT:18,NL:21,PL:23,PT:23,RO:21,SK:23,SI:22,ES:21,SE:25,GB:20,UK:20,US:0};
const SHOP_META = {
    Sizeer: { origin: 'EU', vat: 'included', ddp: { LT: true, PL: true, DE: true, CZ: true, SK: true, RO: true, BG: true } },
    Oxygen: { origin: 'GB', vat: 'included', ddp: { GB: true, UK: true } },
    Queens: { origin: 'EU', vat: 'included', ddp: { FR: true, BE: true, DE: true, ES: true, IT: true, NL: true, AT: true, PT: true, IE: true, LU: true } },
    iQueens: { origin: 'EU', vat: 'included', ddp: { FR: true, BE: true, DE: true, ES: true, IT: true, NL: true, AT: true, PT: true, IE: true, LU: true } },
    Footshop: { origin: 'EU', vat: 'included', ddp: { CZ: true, SK: true, HU: true, RO: true, PL: true, DE: true, AT: true } }
};
let DUTY_TABLE = { defaultThird: 16.9, byDest: { US:12.5, GB:16.9, UK:16.9, CH:6.5, NO:10.7, CA:18, AU:5, JP:8 } };
function applyShopTables(shopFile, dutyFile) {
    try {
        if (shopFile && shopFile.shops) {
            Object.keys(shopFile.shops).forEach(name => {
                const s = shopFile.shops[name];
                const ddp = {};
                (s.ddp || []).forEach(cc => { ddp[cc] = true; });
                SHOP_META[name] = { origin: s.origin || 'EU', vat: s.vat || 'included', ddp };
            });
        }
        if (dutyFile) {
            if (dutyFile.defaultThird != null) DUTY_TABLE.defaultThird = dutyFile.defaultThird;
            if (dutyFile.byDest) DUTY_TABLE.byDest = Object.assign({}, DUTY_TABLE.byDest, dutyFile.byDest);
        }
    } catch (e) {}
}
function shopMeta(shop) {
    const raw = String(shop || '');
    if (SHOP_META[raw]) return SHOP_META[raw];
    const key = Object.keys(SHOP_META).find(k => raw.toLowerCase().includes(k.toLowerCase()));
    return (key && SHOP_META[key]) || { origin: 'EU', vat: 'included', ddp: {} };
}
function isEu(cc) {
    return !cc ? false : EU_CC.includes(String(cc).toUpperCase());
}
function shopOriginCC(shop) {
    const o = shopMeta(shop).origin;
    if (o === 'EU') return 'LT';
    if (o === 'GB' || o === 'UK') return 'GB';
    return o || '';
}
function knownDdp(shop, dest) {
    const d = shopMeta(shop).ddp || {};
    return !!(dest && (d[dest] || d[String(dest).toUpperCase()]));
}
function dutyEstimate(offer, dest) {
    if (!dest) return null;
    const shop = offer.shop || '';
    if (knownDdp(shop, dest)) return null;
    const origin = shopMeta(shop).origin;
    const destEU = isEu(dest);
    const originEU = origin === 'EU' || isEu(origin);
    const destUK = dest === 'GB' || dest === 'UK';
    const originUK = origin === 'GB' || origin === 'UK';
    if (originEU && destEU) return null;
    if (originUK && destUK) return null;
    let duty = 0;
    let vat = Number(VAT_PCT[dest] || VAT_PCT[String(dest).toUpperCase()] || 0);
    const tableRate = (DUTY_TABLE.byDest && (DUTY_TABLE.byDest[dest] || DUTY_TABLE.byDest[String(dest).toUpperCase()])) || DUTY_TABLE.defaultThird;
    if (originUK && destEU) duty = tableRate;
    else if (originEU && destUK) duty = tableRate;
    else if (!originEU && destEU) duty = tableRate;
    else if (!originEU && !destEU) duty = tableRate;
    else if (originEU && !destEU && !destUK) duty = tableRate;
    else return null;
    const combined = Math.round((duty + vat + duty * vat / 100) * 10) / 10;
    const base = Number(offer.price) || 0;
    const amount = Math.round(base * combined) / 100;
    return { pct: combined, amount: amount, duty: duty, vat: vat };
}
function landedCalcOn() {
    try { return sessionStorage.getItem('sa_landed_on') === '1'; } catch (e) { return false; }
}
function setLandedCalc(on) {
    try { sessionStorage.setItem('sa_landed_on', on ? '1' : '0'); } catch (e) {}
}
function toggleLandedCalc() {
    if (shipMode !== 'tome' || !currentCountry) {
        try { openDestPanel(); } catch (e) {}
        return;
    }
    setLandedCalc(!landedCalcOn());
    try { if (document.body.classList.contains('product-view')) initProductPage(); } catch (e) {}
    try { const q = document.getElementById('quickview-modal'); if (q) { const id = q.getAttribute('data-pid'); if (id) showQuickView(id); } } catch (e) {}
    try { if (document.getElementById('products-container') && currentView === 'products') renderProducts(true); } catch (e) {}
}
function shopPriceEUR(offer) {
    return Number(offer.price) || 0;
}
function formatMoney(n, rate, symbol) {
    return symbol + Math.round(Number(n || 0) * rate);
}
function offerBoardHTML(p, offers, rate, symbol, dict, opts) {
    opts = opts || {};
    const dest = opts.dest || ((shipMode === 'tome' && currentCountry) ? currentCountry : '');
    const calc = !!(opts.forceCalc || (dest && landedCalcOn()));
    const rows = (offers || []).map(o => {
        const shopP = shopPriceEUR(o);
        const ship = dest ? offerShippingCost(o, dest) : (Number(o.shipping) || 0);
        const est = dest ? dutyEstimate(o, dest) : null;
        const toYou = shopP + (Number(ship) || 0) + (calc && est ? est.amount : 0);
        return { o, shopP, ship, est, toYou };
    });
    if (calc) rows.sort((a, b) => a.toYou - b.toYou);
    else rows.sort((a, b) => a.shopP - b.shopP);
    return rows.map((r, i) => {
        const url = shopHref(r.o);
        const medal = calc ? (i === 0 ? 'price-gold' : i === 1 ? 'price-silver' : i === 2 ? 'price-bronze' : 'price-muted') : 'price-muted';
        const medalMark = calc ? (i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '') : '';
        let icon = '';
        if (dest) {
            const ships = r.o._ships != null ? r.o._ships : offerShipsTo(r.o, dest);
            icon = '';
        }
        const shipKnown = dest && r.ship != null;
        const shipLine = dest
            ? `<span class="offer-ship-line">${dict.ship_price || dict.ship_label || 'Shipping cost'}: ${shipKnown ? formatMoney(r.ship, rate, symbol) : (dict.shop_info || langs.en.shop_info)}</span>`
            : '';
        const taxInc = r.o.taxIncluded !== false;
        const ddp = !!(r.o.ddp || (dest && typeof knownDdp === 'function' && knownDdp(r.o.shop, dest)));
        let taxLine = '';
        if (dest) {
            if (ddp) taxLine = `<span class="offer-tax-line">${dict.ddp_included || langs.en.ddp_included}</span>`;
            else if (taxInc) {
                taxLine = `<span class="offer-tax-line">${dict.vat_included || langs.en.vat_included}</span>`;
            } else {
                const vat = Number(VAT_PCT[dest] || VAT_PCT[String(dest).toUpperCase()] || 0);
                const amt = vat ? Math.round((r.shopP * vat / 100) * rate) : 0;
                taxLine = `<span class="offer-tax-line">${dict.vat_not_included || langs.en.vat_not_included}. ${dict.vat_approx || langs.en.vat_approx}${vat ? ' ~' + vat + '% (~' + symbol + amt + ')' : ''}</span>`;
            }
        }
        const dutyLine = (!ddp && r.est && r.est.duty)
            ? `<span class="offer-duty-line">${dict.duty_approx || langs.en.duty_approx} ~${r.est.duty}% (~${formatMoney(r.est.amount, rate, symbol)}) — ${dict.shop_info || langs.en.shop_info}</span>`
            : (dest && !ddp && taxInc ? `<span class="offer-duty-line">${dict.duty_na || langs.en.duty_na}</span>` : '');
        const toYouAmt = r.shopP + (shipKnown ? (Number(r.ship) || 0) : 0) + (calc && r.est ? r.est.amount : 0);
        const toYouLine = calc
            ? `<div class="offer-est"><span class="offer-est-label">${dict.total_est || langs.en.total_est}</span><span class="offer-est-amt">${formatMoney(toYouAmt, rate, symbol)}</span><span class="offer-est-note">${shipKnown ? '' : (dict.without_ship || langs.en.without_ship) + ' · '}${dict.calc_warn || langs.en.calc_warn}</span></div>`
            : '';
        return `<div class="offer-row offer-board-row offer-stack">
            ${icon || '<span class="ship-ico-spacer"></span>'}
            <div class="offer-stack-main">
                <a href="${url}" class="offer-shop-link" target="_blank" rel="noopener sponsored noreferrer">${r.o.shop}</a>
                <a href="${url}" class="offer-price-link offer-shop-price" target="_blank" rel="noopener sponsored noreferrer">${formatMoney(r.shopP, rate, symbol)}</a>
                ${shipLine}${taxLine}${dutyLine}
            </div>
            ${toYouLine}
        </div>`;
    }).join('');
}
function calcBtnHTML(dict) {
    const dest = (shipMode === 'tome' && currentCountry) ? currentCountry : '';
    const on = landedCalcOn();
    const label = on ? (dict.calc_done || 'Hide total to you') : (dict.calc_btn || 'Calculate price to you');
    const warn = dict.calc_hint || dict.calc_warn || langs.en.calc_warn;
    return `<div class="calc-wrap"><button type="button" class="calc-toyou-btn" onclick="toggleLandedCalc()">${label}</button>${dest ? '' : `<span class="calc-need-dest">${dict.calc_need_dest || 'Pick a destination first'}</span>`}<span class="calc-warn-row">${escapeHtml(warn)}</span></div>`;
}

function relevantOffers(p) {
    const offers = [...(p.offers || [])];
    if (shipMode === "tome" && currentCountry) {
        return offers.filter(o => offerShipsTo(o, currentCountry) !== false);
    }
    return offers;
}
function productAvailableHere(p) {
    if (shipMode !== "tome" || !currentCountry) return true;
    const offers = p.offers || [];
    if (!offers.length) return true;
    const key = currentCountry;
    if (p._hereKey === key && p._here != null) return p._here;
    const flags = offers.map(o => offerShipsTo(o, currentCountry));
    const ok = !flags.every(s => s === false);
    p._hereKey = key; p._here = ok;
    return ok;
}
function cardHasAnyEuSize(card, sizes) {
    if (!card || !sizes || !sizes.length) return true;
    const listed = card.sizes || [];
    const offers = card.offers || [];
    return sizes.some(sz => {
        const want = sizeNum(sz);
        if (listed.some(s => sizeNum(s) === want || String(s) === String(sz))) return true;
        return offers.some(o => offerKnownHasSize(o, sz) === true);
    });
}
function colorwayFitsFilters(card) {
    if (!card) return true;
    const want = [];
    (selectedSizes || []).forEach(s => want.push(s));
    if (selectedProductSize != null && String(selectedProductSize) !== '') want.push(selectedProductSize);
    const uniq = [...new Set(want.map(String))];
    if (uniq.length && !cardHasAnyEuSize(card, uniq)) return false;
    if (shipMode === 'tome' && currentCountry && !productAvailableHere(card)) return false;
    return true;
}

function offersForSameColor(p) {
    const sibs = (typeof siblingColorways === 'function') ? siblingColorways(p) : [p];
    const col = colorKey((p.colorway || (p.colors || [])[0] || p.color || ''));
    const rows = (sibs && sibs.length ? sibs : [p]).filter(x => {
        const xc = colorKey(x.colorway || (x.colors || [])[0] || x.color || '');
        return !col || !xc || xc === col;
    });
    const seen = new Set();
    const out = [];
    rows.forEach(x => {
        (x.offers || x._offersBase || []).forEach(o => {
            const k = String(o.shop || '') + '|' + String(o.url || '') + '|' + String(o.price || '');
            if (seen.has(k)) return;
            seen.add(k);
            out.push(o);
        });
    });
    return out.length ? out : (p.offers || []);
}
function rankedOffers(p, checkCountry) {
    const country = (shipMode === "tome" && currentCountry) ? currentCountry : (checkCountry || null);
    const src = (typeof offersForSameColor === 'function') ? offersForSameColor(p) : (p.offers || []);
    let list = [...src].map(o => {
        const ships = country ? offerShipsTo(o, country) : null;
        const total = offerTotalEUR(o, country);
        return { ...o, _ships: ships, _total: total, _shipCost: offerShippingCost(o, country) };
    });
    if (country) {
        list = list.filter(o => o._ships !== false);
    }
    return list.sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
}

function getBestPriceEUR(p) {
    const country = (shipMode === "tome") ? currentCountry : '';
    const sz = (selectedSizes || []).join(',');
    const key = country + '|' + sz;
    if (p && p._bpKey === key && p._bp != null) return p._bp;
    let rel = p.offers || [];
    if (selectedSizes.length === 1) rel = rel.filter(o => offerHasSize(o, selectedSizes[0]));
    else if (selectedSizes.length > 1) rel = rel.filter(o => selectedSizes.some(s => offerHasSize(o, s)));
    const v = rel.length ? Math.min(...rel.map(o => offerTotalEUR(o, country || null))) : 9999;
    if (p) { p._bpKey = key; p._bp = v; }
    return v;
}


function isSoleishUrl(u) {
    const s = String(u || '').toLowerCase();
    if (/outsole|sole[-_]?view|underside|bottom[-_]?view|podoshv|podmet/.test(s)) return true;
    const z = s.match(/_z_(\d+)\.(jpg|jpeg|webp|png)/);
    if (z && Number(z[1]) >= 8) return true;
    return false;
}
function productGallery(p) {
    const list = [p && p.image, ...((p && p.images) || [])].filter(Boolean);
    const out = [];
    const seen = new Set();
    list.forEach(u => { if (!seen.has(u)) { seen.add(u); out.push(u); } });
    return out;
}
function pickLookImage(p, slot) {
    const gallery = productGallery(p).filter(u => !isSoleishUrl(u));
    const all = gallery.length ? gallery : productGallery(p);
    if (!all.length) return (p && p.image) || '';
    const i = Math.abs(Number(slot) || 0) % all.length;
    return all[i];
}

function escapeHtml(s) {
    return String(s || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
function productDescText(p) {
    const d = p && p.desc;
    if (!d) return '';
    if (typeof d === 'string') return d;
    return d[currentLang] || d.en || d.bg || Object.values(d).find(v => typeof v === 'string' && v.trim()) || '';
}
function genderKey(p) {
    const c = String((p && (p.category || p.gender)) || '').toLowerCase();
    if (/women|woman|womens|femme|dama|lady|ladies/.test(c)) return 'women';
    if (/kid|child|junior|youth|infant|toddler/.test(c)) return 'kids';
    if (/men|mens|homme|uomo|herren/.test(c)) return 'men';
    return c || 'unisex';
}
function catalogModelKey(p) {
    const filler = { trainer:1, trainers:1, sneaker:1, sneakers:1, shoe:1, shoes:1, boot:1, boots:1, mens:1, men:1, womens:1, women:1, kids:1, kid:1, the:1, and:1, og:1, new:1, wntr:1, winter:1, mid:1, low:1, hi:1, high:1, retro:1, sma:1, spw:1 };
    const colors = { black:1, white:1, grey:1, gray:1, blue:1, red:1, green:1, beige:1, brown:1, navy:1, pink:1, purple:1, orange:1, yellow:1, gold:1, silver:1, cream:1, ivory:1, khaki:1, olive:1, multi:1, gum:1, salt:1, sea:1, moss:1, bone:1, slate:1, linen:1 };
    const clean = (s) => String(s || '').toLowerCase().replace(/®/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
    const brand = clean(p && p.brand);
    let name = clean(p && p.name);
    if (brand && name.indexOf(brand) === 0) name = name.slice(brand.length).trim();
    const cw = clean((p && (p.colorway || (p.colors && p.colors[0]))) || '');
    if (cw) name = name.replace(cw, ' ');
    String((p && p.colorway) || '').split(/[\/|,]/).forEach(part => {
        const c = clean(part);
        if (c) name = name.replace(c, ' ');
    });
    name = name.replace(/\s+/g, ' ').trim();
    let toks = name.split(/\s+/).filter(t => t && !filler[t] && !colors[t] && !(/^\d+(\.\d+)?$/.test(t) && Number(t) >= 3 && Number(t) <= 16));
    const numAt = toks.findIndex(t => /^\d{3,4}r?$/.test(t));
    if (numAt >= 0) toks = toks.slice(0, numAt + 1);
    return brand + '|' + toks.join(' ');
}
function familyIsWeak(fam) {
    const part = String(fam || '').split('|')[1] || '';
    return !part;
}
function stripColorSku(c) {
    return String(c || '')
        .replace(/\s*[·•|,]\s*[A-Z0-9][A-Z0-9._/-]{3,}\s*$/i, '')
        .replace(/\s+\(?[A-Z]{0,3}\d{2,}[-A-Z0-9./]*\)?\s*$/i, '')
        .trim();
}
function colorKey(c) {
    return stripColorSku(c).toLowerCase().replace(/[^a-z0-9]+/g, '');
}
function inferOfferGender(p, o) {
    let blob = (p.name || '') + ' ' + (o.color || '') + ' ' + (p.category || '');
    try { blob += ' ' + decodeURIComponent(o.url || ''); } catch (e) { blob += ' ' + (o.url || ''); }
    blob = blob.toLowerCase();
    if (/moterims|women|woman|womens|dama|femme|donna|damskie|ladies/.test(blob)) return 'women';
    if (/vaikams|kids|\bkid\b|child|junior|youth/.test(blob)) return 'kids';
    if (/vyrams|\bmen\b|\bmens\b|uomo|homme|herren|meskie/.test(blob)) return 'men';
    const sizes = o.sizesInStock || o.sizes || [];
    const nums = sizes.map(Number).filter(n => n >= 30 && n <= 50);
    if (nums.length) {
        const mx = Math.max(...nums), mn = Math.min(...nums);
        if (mx <= 41 && mn <= 39) return 'women';
        if (mn >= 40) return 'men';
    }
    if (p.category === 'women' || p.category === 'men' || p.category === 'kids') return p.category;
    return 'men';
}
function splitCatalogByColorway(list) {
    const buckets = new Map();
    (list || []).forEach(p => {
        const offs = (p.offers && p.offers.length) ? p.offers : [];
        if (!offs.length) return;
        offs.forEach(o => {
            const g = inferOfferGender(p, o);
            const colRaw = stripColorSku(o.color || '');
            const ck = colorKey(colRaw) || 'default';
            const key = g + '::' + catalogModelKey(p) + '::' + ck;
            let t = buckets.get(key);
            if (!t) {
                t = {
                    ...p,
                    category: g,
                    colors: colRaw ? [colRaw] : [],
                    sizes: [],
                    offers: [],
                    variants: [],
                    images: p.image ? [p.image] : [],
                    _seen: new Set()
                };
                buckets.set(key, t);
            }
            const sig = [o.shop, ck, Math.round(Number(o.price) * 100)].join('|');
            if (!t._seen.has(sig)) {
                t._seen.add(sig);
                t.offers.push(o);
            }
            (o.sizesInStock || o.sizes || []).forEach(s => { if (!t.sizes.includes(s)) t.sizes.push(s); });
        });
        (p.variants || []).forEach(v => {
            const ck = colorKey(v.color);
            const g = inferOfferGender(p, { url: v.url, color: v.color, sizes: v.sizes });
            const t = buckets.get(g + '::' + catalogModelKey(p) + '::' + (ck || 'default'));
            if (!t) return;
            t.variants.push(v);
            if (v.image && !t.images.includes(v.image)) t.images.push(v.image);
            (v.sizes || []).forEach(s => { if (!t.sizes.includes(s)) t.sizes.push(s); });
        });
    });
    const out = [];
    buckets.forEach((t, key) => {
        delete t._seen;
        if (!t.offers.length) return;
        const col = colorKey((t.colors || [])[0]);
        const v = (t.variants || []).find(x => colorKey(x.color) === col);
        if (v && v.image) t.image = v.image;
        else if (t.offers[0] && t.offers[0].image) t.image = t.offers[0].image;
        t.id = String(t.id) + '-' + (t.category || 'x') + '-' + (col || 'c');
        if (!t.sizes.length) t.sizes = [...(t.offers[0].sizesInStock || t.offers[0].sizes || [])];
        out.push(t);
    });
    return out;
}
function mergeCatalogByModel(list) {
    const by = new Map();
    (list || []).forEach(p => {
        if (!p) return;
        const id = String(p.id || catalogModelKey(p) + '-' + (p.category || 'x'));
        let t = by.get(id);
        if (!t) {
            t = { ...p, offers: [], variants: [...(p.variants || [])], colors: [...(p.colors || [])], sizes: [...(p.sizes || [])], images: [...(p.images || [])], _seen: new Set() };
            if (p.image && !t.images.includes(p.image)) t.images.unshift(p.image);
            by.set(id, t);
        }
        (p.offers || []).forEach(o => {
            const sig = [o.shop, o.gtin || o.mpn || o.url, o.color || '', Math.round(Number(o.price) * 100)].join('|');
            if (t._seen.has(sig)) return;
            t._seen.add(sig);
            t.offers.push(o);
        });
        (p.variants || []).forEach(v => {
            const ck = colorKey(v.color);
            if (ck && t.variants.some(x => colorKey(x.color) === ck && (x.mpn || '') === (v.mpn || ''))) return;
            t.variants.push(v);
            if (v.color && !t.colors.includes(v.color)) t.colors.push(v.color);
            if (v.image && !t.images.includes(v.image)) t.images.push(v.image);
        });
        (p.sizes || []).forEach(s => { if (!t.sizes.includes(s)) t.sizes.push(s); });
    });
    const out = [];
    by.forEach(t => {
        delete t._seen;
        if (!t.offers.length) return;
        if (!t.image) t.image = (t.images && t.images[0]) || (t.offers[0] && t.offers[0].image) || '';
        t.sizes = (t.sizes || []).slice().sort((a, b) => a - b);
        out.push(t);
    });
    return out;
}
function productSearchBlob(p) {
    const d = p && p.desc;
    const desc = typeof d === 'string' ? d : Object.values(d || {}).join(' ');
    const shops = (p.offers || []).map(o => o.shop);
    return [p.name, p.brand, p.mpn, desc, ...(p.colors || []), ...(p.materials || []), ...shops]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
}

let _filtCacheKey = '';
let _filtCacheList = null;
function getFilteredAndSortedProducts() {
    const key = [
        selectedCategory, (selectedGenders||[]).join(','),
        (selectedSizes||[]).join(','), (selectedBrands||[]).join('|'),
        (selectedColors||[]).join(','), (selectedStyles||[]).join(','),
        (selectedMaterials||[]).join(','), (selectedPriceRanges||[]).join(','),
        searchTerm||'', shipMode, currentCountry||'', currentSort||'', maxPriceSlider||'',
        String((productsData||[]).length)
    ].join('~');
    if (_filtCacheKey === key && _filtCacheList) return _filtCacheList;
    let list = productsData || [];
    const genders = selectedGenders.length ? selectedGenders : ((selectedCategory === 'men' || selectedCategory === 'women' || selectedCategory === 'kids') ? [selectedCategory] : []);
    if (CATALOG_IDX) {
        if (selectedBrands.length) {
            const u = unionFromIndex(CATALOG_IDX.byBrand, selectedBrands);
            if (u) list = u;
        }
        if (selectedColors.length) {
            const u = unionFromIndex(CATALOG_IDX.byColor, selectedColors);
            if (u) {
                const set = new Set(u);
                list = list === productsData ? u : list.filter(p => set.has(p));
            }
        }
        if (selectedStyles.length) {
            const u = unionFromIndex(CATALOG_IDX.byStyle, selectedStyles);
            if (u) {
                const set = new Set(u);
                list = list === productsData ? u : list.filter(p => set.has(p));
            }
        }
        if (genders.length) {
            list = list.filter(p => genders.includes(p.category));
        }
    } else if (genders.length) {
        list = list.filter(p => genders.includes(p.category));
    }

    // Country: hide models no shop ships to this dest
    if (shipMode === 'tome' && currentCountry) {
        if (false && CATALOG_IDX && CATALOG_IDX.byDest) {
            const u = unionFromIndex(CATALOG_IDX.byDest, [String(currentCountry).toUpperCase()]);
            const open = CATALOG_IDX.destOpen || [];
            const allow = new Set((u || []).concat(open));
            list = list.filter(p => allow.has(p));
        } else {
            list = list.filter(productAvailableHere);
        }
    }

    // --- SEARCH ---
    if (searchTerm && searchTerm.trim()) {
        const q = searchTerm.trim().toLowerCase();
        list = list.filter(p => productSearchBlob(p).includes(q));
    }

    // --- PRICE RANGES ---
    if (selectedPriceRanges.length > 0) {
        list = list.filter(p => {
            const price = getBestPriceEUR(p);
            return selectedPriceRanges.some(range => {
                if (range === 'under100') return price < 100;
                if (range === '100-200') return price >= 100 && price <= 200;
                if (range === '200-500') return price > 200 && price <= 500;
                if (range === 'luxury') return price > 500;
                return true;
            });
        });
    }

    if (maxPriceSlider != null && maxPriceSlider < 1500) {
        list = list.filter(p => getBestPriceEUR(p) <= maxPriceSlider);
    }

    // --- SIZES (EU) — hide product if no shop has that size ---
    if (selectedSizes.length > 0) {
        if (CATALOG_IDX && CATALOG_IDX.bySize) {
            const u = unionFromIndex(CATALOG_IDX.bySize, selectedSizes.map(Number));
            if (u) {
                const set = new Set(u);
                list = list.filter(p => set.has(p));
            } else {
                list = list.filter(productHasSelectedSize);
            }
        } else {
            list = list.filter(productHasSelectedSize);
        }
    }
    if (selectedBrands.length > 0) {
        list = list.filter(p => selectedBrands.includes(p.brand));
    }
    if (selectedLines.length > 0) {
        list = list.filter(p => selectedLines.includes(p.line));
    }
    if (selectedHeights.length > 0) {
        list = list.filter(p => p.height && selectedHeights.includes(p.height));
    }

    // --- COLORS ---
    if (selectedColors.length > 0) {
        list = list.filter(p => {
            const productColors = [p.colorway, ...(p.colors || [])].map(c => String(c || '').toLowerCase());
            return selectedColors.some(sel => productColors.some(pc => pc.includes(sel)));
        });
    }

    // --- MATERIALS ---
    if (selectedMaterials.length > 0) {
        list = list.filter(p => {
            const mats = (p.materials || []).map(m => m.toLowerCase()).filter(Boolean);
            const blob = ((p.name || '') + ' ' + (p.desc || '')).toLowerCase();
            return selectedMaterials.some(sel => {
                const k = sel.toLowerCase();
                return mats.includes(k) || blob.includes(k);
            });
        });
    }

    if (selectedStyles.length > 0) {
        list = list.filter(p => selectedStyles.includes(p.style));
    }

    // --- SORT ---
    if (currentSort === 's_low') {
        list.sort((a, b) => getBestPriceEUR(a) - getBestPriceEUR(b));
    } else if (currentSort === 's_high') {
        list.sort((a, b) => getBestPriceEUR(b) - getBestPriceEUR(a));
    } else if (currentSort === 's_new') {
        list.sort((a, b) => (b.fresh || 0) - (a.fresh || 0) || (b.pop || 0) - (a.pop || 0));
    } else {
        list.sort((a, b) => (b.pop || 0) - (a.pop || 0));
    }

    _filtCacheKey = key;
    _filtCacheList = list;
    return list;
}


let _catalogRenderTimer = 0;
function scheduleCatalogRender() {
    if (_catalogRenderTimer) clearTimeout(_catalogRenderTimer);
    _catalogRenderTimer = setTimeout(function () {
        _catalogRenderTimer = 0;
        applyFiltersAndRender();
    }, 50);
}
function applyFiltersAndRender() {
    try { updateFiltersBadge(); } catch(e) {}
    try { syncFiltersToURL(); } catch(e) {}
    try { updateActiveFiltersBadge(); } catch(e) {}
    displayedCount = 0;
    currentPage = 1;
    renderProducts(true);
}


function renderProducts(reset = true) {
    currentView = 'products';
    const container = document.getElementById('products-container');
    if (!container) return;

    // Show sort + load more again
    document.body.classList.remove('view-wishlist');
    const topControls = document.querySelector('.top-controls');
    if (topControls) {
        topControls.style.display = 'flex';
        topControls.style.visibility = 'visible';
        topControls.style.height = '';
        topControls.style.overflow = '';
        topControls.style.margin = '';
        topControls.style.padding = '';
    }
    const loadMoreCont = document.getElementById('load-more-container');
    if (loadMoreCont) loadMoreCont.style.display = 'flex';

    const rate = rates[currentCurrency] || 1;
    const symbol = symbols[currentCurrency] || '€';
    const dict = langs[currentLang] || langs.en;
    const filtered = getFilteredAndSortedProducts();

    if (reset) {
        container.innerHTML = '';
        displayedCount = 0;

        // Product counter + clear filters
        const hasFilters = selectedSizes.length || selectedColors.length || selectedMaterials.length || selectedPriceRanges.length || (searchTerm && searchTerm.trim()) || maxPriceSlider < 1500;
        let meta = document.getElementById('products-meta');
        if (!meta) {
            meta = document.createElement('div');
            meta.id = 'products-meta';
            meta.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin:8px 0 12px;flex-wrap:wrap;gap:10px;';
            container.parentNode.insertBefore(meta, container);
        }
        meta.innerHTML = `
                <span style="font-size:0.85rem; color:var(--gray-text);">
                    ${dict.showing} <strong id="shown-count" style="color:var(--text);">0</strong> ${dict.of} <strong style="color:var(--text);">${filtered.length}</strong> ${dict.products}
                </span>
                ${hasFilters ? `<button onclick="clearAllFilters()" style="background:transparent; border:1px solid var(--border); color:var(--text); padding:6px 14px; border-radius:20px; font-size:0.8rem; cursor:pointer;">${dict.clear_filters}</button>` : ''}
        `;
    }

    // Load More appends; page jump sets displayedCount before call
    const toShow = filtered.slice(displayedCount, displayedCount + productsPerLoad);

    if (toShow.length === 0 && displayedCount === 0) {
        const destEmpty = shipMode === 'tome' && currentCountry && !(productsData || []).some(productAvailableHere);
        const title = destEmpty ? (dict.empty_dest || dict.no_products_filters) : (dict.no_products_filters);
        container.innerHTML = `
            <div class="empty-state" style="grid-column:1/-1;">
                <img src="logo.png" alt="" class="empty-state-logo" onerror="this.style.display='none'">
                <p class="empty-state-title">${title}</p>
                <p class="empty-state-sub">${dict.try_remove_filters}</p>
                <div class="empty-actions">
                    <button type="button" class="btn-clear-filters" onclick="clearAllFilters()">${dict.clear_filters}</button>
                    ${destEmpty ? `<button type="button" class="btn-clear-filters" onclick="setShipMode('ww')">${dict.show_worldwide}</button>` : ''}
                </div>
            </div>
        `;
    }

    toShow.forEach((p, iShow) => {
        const inWishlist = isInWishlist(p.id);

        const sortedOffers = rankedOffers(p);
        const bestOffer = sortedOffers[0] || { shop: '-', price: 0, shipping: 0, url: '#' };
        const range = formatRange(p, rate, symbol);
        const destOn = shipMode === 'tome' && !!currentCountry;
        const sizeOn = selectedSizes.length === 1;
        const landedLocked = destOn && sizeOn;
        const bestTotal = Math.round((bestOffer._total != null ? bestOffer._total : (bestOffer.price + (bestOffer.shipping||0))) * rate);
        const origPrice = p.originalPrice ? Math.round(p.originalPrice * rate) : null;
        const isDiscounted = origPrice && origPrice > (range.min || bestTotal);
        const wasHTML = isDiscounted
            ? `<span class="price-was">${symbol}${origPrice}</span>`
            : '';
        const priceMainClass = landedLocked ? (isDiscounted ? 'price-sale' : 'price-regular') : 'price-range-main';
        const priceMainHTML = landedLocked
            ? `${wasHTML}<span class="${priceMainClass}"><span class="cur-tag">${symbol}</span><span>${bestTotal}</span></span>`
            : `<span class="${priceMainClass}${isDiscounted ? ' price-sale' : ''}">${range.html}</span>`;
        const shops = uniqueShops(p);
        const shopCount = range.shops || shops.length;
        const shopLine = landedLocked
            ? `${shopCount > 1 ? (dict.from_n_shops || '').replace('{n}', String(shopCount)) : (shops[0] || '')} · ${dict.cheapest_at || dict.best_from} <a href="${shopHref(bestOffer)}" class="offer-shop-link" target="_blank" rel="noopener sponsored noreferrer">${bestOffer.shop}</a>`
            : (shopCount > 1
                ? (dict.from_n_shops || '').replace('{n}', String(shopCount))
                : (shops[0] || ''));

        const checkC = qvCheckCountry || ((shipMode === 'tome' && currentCountry) ? currentCountry : '');
        let offersHTML = '';
        const boardOffers = checkC
            ? [...(p.offers || [])].map(o => {
                const ships = offerShipsTo(o, checkC);
                const total = offerTotalEUR(o, checkC);
                return { ...o, _ships: ships, _total: total, _shipCost: offerShippingCost(o, checkC) };
              }).sort((a,b) => {
                const as = a._ships === true ? 0 : 1;
                const bs = b._ships === true ? 0 : 1;
                if (as !== bs) return as - bs;
                return a._total - b._total;
              })
            : sortedOffers;
        offersHTML = offerBoardHTML(p, boardOffers, rate, symbol, dict, { dest: checkC });

        const countryOptsCard = DEST_COUNTRIES.map(c => `<option value="${c.code}" ${checkC===c.code?'selected':''}>${c.code}</option>`).join('');
        const absIdx = displayedCount + iShow;
        const lookSlot = absIdx % 5;
        const lookHeroPos = ['left', 'mid', 'right'][Math.floor(absIdx / 5) % 3];
        const gallery = productGallery(p);
        const lookSrc = pickLookImage(p, lookSlot);

        const cardHTML = `
            <div class="card ${lookSlot === 0 ? ('look-hero look-hero-' + lookHeroPos) : 'look-cell'}" data-pid="${String(p.id).replace(/"/g,'')}" data-look-slot="${lookSlot}">
                <div class="img-box" onclick="catalogImgClick(event, ${jsId(p.id)})" style="position:relative; height:340px; background:#fff; border:none; border-radius:12px; display:flex; align-items:center; justify-content:center; padding:12px; margin-bottom:12px; overflow:hidden; cursor:pointer;">
                    <img class="shoe-img shoe-img-a" src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='logo.png';this.style.opacity='0.35'">
                    <img class="shoe-img shoe-img-look" src="${lookSrc}" alt="${p.brand || ''} ${p.name}" loading="lazy" onerror="this.style.opacity='0.2'">
                    ${(p.images && p.images[1] && p.images[1] !== p.image) ? `<img class="shoe-img shoe-img-b" src="${p.images[1]}" alt="" loading="lazy" onerror="this.remove()">` : ''}
                    <button type="button" class="img-qv-hover" onclick="event.stopPropagation(); showQuickView(${jsId(p.id)})">${dict.qv_label || 'Quick view'}</button>
                    <div class="look-cap">
                      <div class="look-top">
                        <div class="look-top-text">
                          <span class="look-brand">${p.brand || ''}</span>
                          <strong class="look-name">${p.name}</strong>
                        </div>
                        <button type="button" class="look-open" onclick="event.stopPropagation(); openProduct(${jsId(p.id)})">${dict.view || 'View'}</button>
                      </div>
                      <span class="look-from look-price-tag">${(range.min && range.max && range.min !== range.max) ? `${symbol}${range.min}–${symbol}${range.max}` : `${symbol}${range.min || bestTotal}`}</span>
                    </div>
                </div>
                <h3 class="shoe-name"><a class="shoe-link" href="${catalogFile()}?p=${encodeURIComponent(p.id)}" onclick="event.preventDefault(); openProduct(${jsId(p.id)})">${p.name}${p.colorway && String(p.name).toLowerCase().indexOf(String(p.colorway).toLowerCase()) < 0 ? ' · ' + p.colorway : ''}</a></h3>
                <p class="card-shops">${[...new Set((p.offers||[]).map(o => o.shop).filter(Boolean))].join(' · ') || ''}</p>
                ${p.colors && p.colors[0] ? `<p class="card-colors">${p.colors[0]}</p>` : ''}
                ${cardColorDotsHTML(p)}
                ${(p.sizes && p.sizes.length) ? `<p class="card-sizes">${p.sizes.slice(0, 10).join(' · ')}${p.sizes.length > 10 ? ' +' + (p.sizes.length - 10) : ''}</p>` : ''}
                <div class="price-section">
                    <div class="best-price-row" style="margin-bottom:10px;">
                        <span style="color:var(--text); font-size:0.85rem;">${p.brand}</span>
                        <div class="price-box" style="text-align:right">
                            <div class="main-price ${priceMainClass}">
                                ${priceMainHTML}
                            </div>
                            <div class="delivery-info">${shopLine}</div>
                        </div>
                    </div>

                    <label class="card-check-ship" onclick="event.stopPropagation()">
                        <span>${dict.check_ship_to}</span>
                        <select class="card-ship-select" onchange="cardSetCheckCountry(this.value)">
                            <option value="">—</option>
                            ${countryOptsCard}
                        </select>
                    </label>

                    ${offersHTML ? `<details class="card-more-offers"><summary>${dict.all_offers || dict.offer_board}</summary><div class="card-offers-label"></div>${calcBtnHTML(dict)}${offersHTML}</details>` : ''}

                    <div style="display:flex; align-items:center; justify-content:space-between; margin:12px 0 0;">
                        <label style="display:flex; align-items:center; gap:8px; font-size:0.8rem; cursor:pointer;">
                            <input type="checkbox" onchange="toggleCompare(this, ${jsId(p.id)}, '${p.name}', ${bestOffer.price}, '${p.image}')">
                            ${(langs[currentLang] || langs.en).compare}
                        </label>
                        <div class="card-actions">
                            <button type="button" class="qv-eye-btn" onclick="event.stopPropagation(); showQuickView(${jsId(p.id)})" aria-label="Quick view"><i class="fa-regular fa-eye"></i></button>
                            <button type="button" class="heart-btn${inWishlist ? ' active' : ''}" onclick="openWishlistSelector(${jsId(p.id)}, event)" aria-label="Wishlist"><i class="${inWishlist ? 'fa-solid' : 'fa-regular'} fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });

    displayedCount += toShow.length;
    currentPage = Math.max(1, Math.ceil(displayedCount / productsPerLoad));

    const shownEl = document.getElementById('shown-count');
    if (shownEl) shownEl.textContent = displayedCount;

    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = displayedCount >= filtered.length ? 'none' : 'inline-flex';
    }
    try { updatePageDots(filtered.length); } catch (e) {}
}

// МОИТЕ ЛЮБИМИ
function showWishlistPage() {
    leaveProductView();
    closeQuickView();
    currentView = 'wishlist';
    const container = document.getElementById('products-container');
    const dict = langs[currentLang] || langs.en;
    const symbol = symbols[currentCurrency] || '€';

    // Hide sort + load more on wishlist page (force)
    document.body.classList.add('view-wishlist');
    document.body.setAttribute('data-view', 'list');
    const topControls = document.querySelector('.top-controls');
    if (topControls) {
        topControls.style.display = 'none';
        topControls.style.visibility = 'hidden';
        topControls.style.height = '0';
        topControls.style.overflow = 'hidden';
        topControls.style.margin = '0';
        topControls.style.padding = '0';
    }
    const loadMoreCont = document.getElementById('load-more-container');
    if (loadMoreCont) loadMoreCont.style.display = 'none';

    container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; margin: 30px 0 40px;">
            <button onclick="renderProducts()" style="
                background: transparent;
                border: 2px solid var(--accent);
                color: var(--text);
                padding: 10px 28px;
                border-radius: 50px;
                font-weight: 700;
                cursor: pointer;
                margin-bottom: 20px;
            ">${dict.back_to_products}</button>
            
            <h2 style="margin: 0 0 8px 0;">${dict.wishlist}</h2>
            ${countReachedAlerts() ? `<p class="wish-hit-summary">${countReachedAlerts()} ${(dict.alert_hit || 'at target')}</p>` : ''}
        </div>
    `;

    if (wishlist.length === 0) {
        container.innerHTML += `
            <p style="grid-column: 1 / -1; text-align: center; color: var(--gray-text); margin-top: 40px;">
                ${dict.no_wishlist}
            </p>
        `;
        return;
    }

    wishlist.forEach(item => {
        const p = productsData.find(prod => String(prod.id) === String(item.id));
        if (!p) return;

        const rate = rates[currentCurrency] || 1;
        const sortedOffers = rankedOffers(p);
        const bestOffer = sortedOffers[0] || { price: 0, shipping: 0 };
        const bestTotal = Math.round((bestOffer._total != null ? bestOffer._total : (bestOffer.price + (bestOffer.shipping||0))) * rate);
        const targetPrice = getAlertTarget(item.id);
        const alertHit = targetPrice !== '' && targetPrice != null && Number(targetPrice) > 0 && Number(bestTotal) <= Number(targetPrice);
        const alertMeta = getAlertMeta(item.id);
        const effectiveCountry = alertMeta.country || currentCountry || null;
        const alertCountryLabel = effectiveCountry
            ? `${dict.alert_for_country} ${effectiveCountry}`
            : dict.alert_no_country;


        const html = `
            <div class="card">
                <div class="img-box" onclick="openProduct(${jsId(p.id)})" style="position:relative; height:340px; background:#fff; border:none; border-radius:12px; display:flex; align-items:center; justify-content:center; padding:12px; margin-bottom:12px; overflow:hidden; cursor:pointer;">
                    <img src="${imageForColor(p, item.color) || p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='logo.png';this.style.opacity='0.35'" style="max-width:100%; max-height:100%; object-fit:contain;">
                </div>
                <h3 class="shoe-name" style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">
                    <a class="shoe-link" href="index.html?p=${p.id}" onclick="event.preventDefault(); openProduct(${jsId(p.id)})">${p.name}</a>
                    <button type="button" class="heart-btn active wish-remove" onclick="toggleWishlist(${jsId(p.id)}, event)">${dict.wish_remove || dict.remove || 'Remove'}</button>
                </h3>
                
                <div style="font-size:0.85rem; color:var(--gray-text); margin:6px 0 12px 0;">
                    <div>${dict.color}: <strong style="color:var(--text);">${item.color}</strong></div>
                    <div>${dict.size_eu}: <strong style="color:var(--text);">${item.size}</strong></div>
                </div>

                <div class="price-section">
                    <div class="best-price-row">
                        <span style="color:var(--text); font-size:0.85rem;">${p.brand}</span>
                        <div class="price-box" style="text-align:right">
                            <div class="main-price price-gold" style="font-weight:800;${alertHit ? ' color:#C9A84C;' : ''}">
                                <span class="cur-tag">${symbol}</span><span>${bestTotal}</span>
                                ${alertHit ? `<span class="wish-at-target">${dict.alert_hit || 'at target'}</span>` : ''}
                            </div>
                        </div>
                    </div>

                    <div style="margin-top:15px; padding-top:12px; border-top:1px dashed var(--border);">
                        <label style="font-size:0.8rem; color:var(--gray-text); display:block; margin-bottom:6px;">
                             (${symbol}):
                        </label>
                        <p style="font-size:0.72rem; color:var(--gray-text); margin:0 0 6px 0;">${alertCountryLabel}</p>
                        <div style="display:flex; gap:8px;">
                            <input type="number" id="target-${item.id}" value="${targetPrice}" 
                                   placeholder="90" 
                                   style="flex:1; padding:8px 12px; border-radius:8px; border:1px solid var(--border); background:var(--bg); color:var(--text); font-size:0.9rem;">
                            <button onclick="savePriceAlert(${jsId(item.id)})" 
                                    style="padding:8px 16px; background:var(--accent); color:#000; border:none; border-radius:8px; font-weight:700; cursor:pointer;">
                                ${dict.save}
                            </button>
                        </div>
                        <div id="alert-status-${item.id}" style="font-size:0.75rem; margin-top:6px; color:var(--accent);"></div>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

function savePriceAlert(id) {
    const dict = langs[currentLang] || langs.en;
    const input = document.getElementById(`target-${id}`);
    const status = document.getElementById(`alert-status-${id}`);
    const value = parseFloat(input.value);

    if (!value || value <= 0) {
        status.textContent = dict.enter_valid_price;
        status.style.color = "#ff4444";
        return;
    }

    // Country from current selection (panel/chip). Uses shipsTo on the current offers.
    const country = currentCountry || null;
    priceAlerts[String(id)] = { price: value, country: country, currency: currentCurrency, mode: shipMode };
    localStorage.setItem('priceAlerts', JSON.stringify(priceAlerts));
    if (status) {
      const where = country ? `${dict.alert_for_country} ${country}` : dict.alert_no_country;
      status.textContent = `${dict.alert_saved} ${value} ${symbols[currentCurrency]} · ${where}`;
      status.style.color = "var(--accent)";
    }
    if (currentView === 'wishlist') showWishlistPage();
    try { updateWishlistButton(); } catch (e) {}
}

function alertKey(id) {
    const s = String(id);
    if (priceAlerts[s] != null) return s;
    if (priceAlerts[id] != null) return id;
    const hit = Object.keys(priceAlerts).find(k => String(k) === s);
    return hit || s;
}
function getAlertTarget(id) {
    const a = priceAlerts[alertKey(id)];
    if (a == null) return '';
    if (typeof a === 'number') return a;
    return a.price != null ? a.price : '';
}
function getAlertMeta(id) {
    const a = priceAlerts[alertKey(id)];
    if (a == null) return { country: null };
    if (typeof a === 'number') return { country: null, price: a };
    return a;
}

function checkPriceAlerts() {
    const dict = langs[currentLang] || langs.en;
    let alertsFound = [];

    for (const id in priceAlerts) {
        const product = productsData.find(p => p.id == id);
        if (!product) continue;

        const meta = getAlertMeta(id);
        const target = meta.price != null ? meta.price : (typeof priceAlerts[id] === 'number' ? priceAlerts[id] : null);
        if (target == null) continue;

        // Use saved alert country, else current destination
        const prevMode = shipMode, prevC = currentCountry;
        const useC = meta.country || currentCountry;
        if (useC) {
            shipMode = 'tome';
            currentCountry = useC;
        }
        const rate = rates[currentCurrency] || 1;
        const best = getBestPriceEUR(product);
        const currentPrice = Math.round(best * rate);
        shipMode = prevMode;
        currentCountry = prevC;

        if (currentPrice <= target) {
            const where = useC ? ` · ${useC}` : '';
            alertsFound.push(`${product.name} ${dict.is_now_at} ${currentPrice} ${symbols[currentCurrency]} (${dict.desired}: ${target}${where})`);
        }
    }

    if (alertsFound.length > 0) {
        alert(`🔔 ${dict.price_alerts_title}\n\n` + alertsFound.join("\n"));
    } else {
        alert(dict.no_alerts);
    }
}

function catalogFile() {
    return /home\.html/i.test(location.pathname) ? 'home.html' : 'index.html';
}
function productUrl(p) {
    return catalogFile() + '?p=' + encodeURIComponent(p.id);
}
function stashProduct(id) {
    const p = (productsData || []).find(item => String(item.id) === String(id));
    if (!p) return;
    try { sessionStorage.setItem('sa_open_product', JSON.stringify(p)); } catch (e) {}
    try { localStorage.setItem('sa_open_product', JSON.stringify(p)); } catch (e) {}
}
function openProduct(id) {
    saveCatalogSpot();
    stashProduct(id);
    if (/product\.html/i.test(location.pathname)) {
        history.pushState({ p: id }, '', 'product.html?id=' + encodeURIComponent(id));
        initProductPage();
        return;
    }
    const next = catalogFile() + '?p=' + encodeURIComponent(id);
    if (document.getElementById('products-container')) {
        history.pushState({ p: id }, '', next);
        initProductPage();
        return;
    }
    window.location.href = next;
}
function colorTokens(p) {
    const raw = (p.colors || []).join(' ').toLowerCase();
    return ['white', 'black', 'grey', 'gray', 'red', 'blue', 'green', 'yellow', 'orange', 'pink', 'purple', 'brown', 'silver', 'navy', 'chicago']
        .filter(c => raw.includes(c));
}
function similarProducts(p, limit) {
    const myColors = colorTokens(p);
    const myMats = (p.materials || []).map(m => m.toLowerCase());
    const pool = productsData.filter(x => x.id !== p.id && (x.style || 'lifestyle') === (p.style || 'lifestyle'));
    const scored = pool.map(x => {
        const cols = colorTokens(x);
        const mats = (x.materials || []).map(m => m.toLowerCase());
        const colorHit = myColors.filter(c => cols.includes(c)).length;
        const matHit = myMats.filter(m => mats.includes(m)).length;
        const sameCat = x.category === p.category ? 1 : 0;
        return { x, score: colorHit * 10 + matHit * 3 + sameCat };
    }).sort((a, b) => b.score - a.score);
    return scored.slice(0, limit || 4).map(s => s.x);
}

function imageForColor(p, color) {
    if (!p) return '';
    if (!color) return p.image || '';
    const want = String(color).toLowerCase();
    const vars = p.variants || [];
    const hit = vars.find(v => String(v.color || '').toLowerCase() === want);
    if (hit && hit.image) return hit.image;
    const sib = (productsData || []).find(x => {
        if (String(x.id) === String(p.id)) return false;
        const sameFamily = (p.slug && x.slug === p.slug) || (p.mpn && x.mpn === p.mpn) || (x.brand === p.brand && x.name === p.name);
        if (!sameFamily) return false;
        return (x.colors || []).some(c => String(c).toLowerCase() === want) || String(x.name).toLowerCase().includes(want);
    });
    if (sib && sib.image) return sib.image;
    const named = (productsData || []).find(x => x.brand === p.brand && String(x.name).toLowerCase().includes(want) && String(x.name).split(' ')[0] === String(p.name).split(' ')[0]);
    return (named && named.image) || p.image || '';
}
function variantKey(v, i) {
    return String(v.mpn || v.url || ((v.color || 'c') + '-' + i));
}
function siblingColorways(p) {
    if (p && p._sib) return p._sib;
    const key = catalogModelKey(p);
    const g = genderKey(p);
    if (!key || /\|$/.test(key) || familyIsWeak(key)) {
        p._sib = [p];
        return p._sib;
    }
    let list;
    if (CATALOG_IDX && CATALOG_IDX.bySib) list = CATALOG_IDX.bySib.get(key + '::' + g);
    if (!list) {
        list = (productsData || []).filter(x => genderKey(x) === g && catalogModelKey(x) === key);
    }
    p._sib = list && list.length ? list : [p];
    return p._sib;
}
function uniqueVariants(p) {
    const sibs = siblingColorways(p);
    if (sibs.length) {
        return sibs.map((x, i) => ({
            key: String(x.id),
            id: x.id,
            color: x.colorway || (x.colors || [])[0] || '',
            label: x.colorway || (x.colors || [])[0] || x.name,
            image: x.image,
            mpn: x.mpn,
            sizes: x.sizes || []
        }));
    }
    const vars = p.variants || [];
    const by = new Map();
    vars.forEach((v, i) => {
        const k = colorKey(v.color) || variantKey(v, i);
        if (by.has(k)) return;
        by.set(k, {
            ...v,
            key: k,
            label: stripColorSku(v.color) || v.color || ('Color ' + (i + 1))
        });
    });
    return [...by.values()];
}

function pdpWantedSize() {
    if (selectedProductSize != null && String(selectedProductSize) !== '') return selectedProductSize;
    if (selectedSizes && selectedSizes.length === 1) return selectedSizes[0];
    return null;
}
function offerSizeKnown(offer, euSize) {
    const stock = (offer && (offer.sizesInStock || offer.sizes)) || [];
    if (!Array.isArray(stock) || !stock.length) return null;
    const want = sizeNum(euSize);
    return stock.some(s => sizeNum(s) === want || String(s) === String(euSize));
}
function colorwayAvailability(card) {
    const destOn = shipMode === 'tome' && !!currentCountry;
    const want = pdpWantedSize();
    const sizeOn = want != null && String(want) !== '';
    const offers = (card && card.offers) || [];
    if (!destOn && !sizeOn) return { ok: true, noSize: false, noDest: false };
    let knownSize = false, hasSize = false;
    let knownDest = false, hasDest = false;
    let combo = false;
    offers.forEach(o => {
        const s = sizeOn ? offerSizeKnown(o, want) : true;
        const d = destOn ? offerShipsTo(o, currentCountry) : true;
        if (s !== null) knownSize = true;
        if (d !== null) knownDest = true;
        if (s === true) hasSize = true;
        if (d === true) hasDest = true;
        const sOk = !sizeOn || s === true || (s === null && !knownSize);
        const dOk = !destOn || d === true || (d === null && !knownDest);
        if ((s === true || (!sizeOn)) && (d === true || (!destOn))) combo = true;
        if (!sizeOn && d === true) combo = true;
        if (!destOn && s === true) combo = true;
        if (!sizeOn && !destOn) combo = true;
    });
    const noSize = sizeOn && knownSize && !hasSize;
    const noDest = destOn && knownDest && !hasDest;
    const ok = !noSize && !noDest && (combo || (!knownSize && !knownDest));
    return { ok: !noSize && !noDest, noSize, noDest };
}
function colorSwatchesHTML(p, dict) {
    const vars = uniqueVariants(p);
    if (vars.length < 2) return '';
    const noSizeTxt = (dict && dict.no_your_size) || tExtra('no_your_size');
    const noDestTxt = (dict && dict.no_your_dest) || tExtra('no_your_dest');
    return `<div class="p-opts"><span class="p-opts-label">${(dict && dict.opt_color) || 'Colour'}</span><div class="p-color-swatches">${vars.map(v => {
        const card = (v.id != null && findProductById(v.id)) || p;
        const av = colorwayAvailability(card);
        const on = selectedProductColor && colorKey(selectedProductColor) === colorKey(v.key) ? ' on' : '';
        const label = escapeHtml(v.label || v.color || '');
        const img = String(v.image || p.image || '').replace(/"/g, '"');
        const notes = [];
        if (av.noSize) notes.push(noSizeTxt);
        if (av.noDest) notes.push(noDestTxt);
        if (!av.ok && !notes.length) {
            if (pdpWantedSize()) notes.push(noSizeTxt);
            if (shipMode === 'tome' && currentCountry) notes.push(noDestTxt);
        }
        const fit = colorwayFitsFilters(card);
        const slash = fit ? '' : 'background-image:linear-gradient(to top left,transparent 47%,#c0392b 47%,#c0392b 53%,transparent 53%);';
        return `<button type="button" class="p-swatch${on}${fit ? '' : ' strike'}" data-color="${escapeHtml(v.key)}" style="${slash}"><span class="p-swatch-pic"><img src="${img}" alt="${label}"></span><span>${label}${fit ? '' : ' · ×'}</span></button>`;
    }).join('')}</div></div>`;
}

function closeBangTip() {
    document.querySelectorAll('.bang-tip').forEach(el => el.remove());
}
function bindBangTips(root) {
    const scope = root || document;
    scope.querySelectorAll('.p-swatch-bang').forEach(btn => {
        btn.addEventListener('click', ev => {
            ev.preventDefault();
            ev.stopPropagation();
            const exist = btn.parentElement && btn.parentElement.querySelector(':scope > .bang-tip');
            closeBangTip();
            if (exist) return;
            const tip = document.createElement('div');
            tip.className = 'bang-tip';
            tip.textContent = btn.getAttribute('data-tip') || '';
            const host = btn.closest('.p-swatch-pic') || btn.closest('.product-main-wrap') || btn.parentElement;
            if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
            host.appendChild(tip);
        });
    });
}
document.addEventListener('click', ev => {
    if (!ev.target.closest('.p-swatch-bang') && !ev.target.closest('.bang-tip')) closeBangTip();
});
function cardColorDotsHTML(p) {
    const vars = uniqueVariants(p);
    let cols = vars.length ? vars : (p.colors || []).map((c, i) => ({ key: colorKey(c) || String(i), color: c, image: imageForColor(p, c) }));
    cols = cols.filter(v => {
        const card = (v.id != null && findProductById(v.id)) || p;
        return colorwayFitsFilters(card);
    });
    if (cols.length < 2) return '';
    const shown = cols.slice(0, 8);
    const extra = cols.length - shown.length;
    const plus = extra > 0 ? `<button type="button" class="card-dot card-dot-more" title="+${extra}" data-pid="${escapeHtml(String(p.id))}">+</button>` : '';
    return `<div class="card-dots">${shown.map(v => `<button type="button" class="card-dot" title="${escapeHtml(v.color || v.label || '')}" data-pid="${escapeHtml(String(v.id || p.id))}" data-color="${escapeHtml(v.key || v.color || '')}" style="background-image:url('${String(v.image || p.image || '').replace(/'/g, '')}')"></button>`).join('')}${plus}</div>`;
}
function euFromDisplay(n, system) {
    const x = Number(n);
    const hit = sizeMapping.find(s => Number(s[system]) === x || String(s[system]) === String(n));
    return hit ? hit.eu : x;
}
function displayFromEu(eu, system) {
    const hit = sizeMapping.find(s => s.eu === Number(eu) || String(s.eu) === String(eu));
    return hit ? hit[system] : eu;
}

function findVariant(p, key) {
    const vars = uniqueVariants(p);
    if (!vars.length) return null;
    return vars.find(v => v.key === key || v.color === key || v.mpn === key || v.label === key) || vars[0];
}
function applyProductVariant(p) {
    if (!p) return p;
    if (!p._offersBase) p._offersBase = [...(p.offers || [])];
    const base = p._offersBase || p.offers || [];
    const vars = uniqueVariants(p);
    let v = null;
    if (selectedProductColor && vars.length) {
        v = findVariant(p, selectedProductColor);
        selectedProductColor = v ? v.key : selectedProductColor;
    }
    if (v && v.image) p.image = v.image;
    if (v && v.images && v.images.length) p.images = v.images;
    else if (v && v.image) p.images = [v.image, ...(p.images || []).filter(x => x !== v.image)];
    const colorOn = !!selectedProductColor;
    const sizeOn = (selectedSizes && selectedSizes.length) || (selectedProductSize != null && String(selectedProductSize) !== '');
    p.offers = base.filter(o => {
        let colorOk = true, sizeOk = true;
        if (colorOn) {
            const ck = colorKey(o.color);
            colorOk = ck === colorKey(selectedProductColor) || ck === colorKey(v && v.color) || (v && v.mpn && o.mpn && v.mpn === o.mpn);
        }
        if (sizeOn) sizeOk = (selectedSizes && selectedSizes.length) ? selectedSizes.some(sz => offerHasSize(o, sz)) : offerHasSize(o, selectedProductSize);
        if (colorOn && sizeOn) return colorOk && sizeOk;
        if (colorOn) return colorOk;
        if (sizeOn) return sizeOk;
        return true;
    });
    if (!p.offers.length) p.offers = base.slice();
    if (v && v.sizes && v.sizes.length && colorOn) p.sizes = v.sizes;
    else {
        const all = [];
        base.forEach(o => (o.sizesInStock || o.sizes || []).forEach(s => { if (!all.includes(s)) all.push(s); }));
        if (all.length) p.sizes = all.sort((a, b) => a - b);
    }
    return p;
}

async function initProductPage() {
    const root = document.getElementById('product-page');
    if (!root) return;
    const rawId = new URLSearchParams(location.search).get('p') || new URLSearchParams(location.search).get('id');
    const dict = langs[currentLang] || langs.en;
    selectedProductSize = (selectedSizes && selectedSizes.length === 1) ? selectedSizes[0] : null;
    if (!rawId) {
        root.hidden = true;
        root.innerHTML = '';
        document.body.classList.remove('product-view');
        return;
    }
    let p = findProductById(rawId);
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
            const res = await fetch('catalog/items/' + encodeURIComponent(rawId) + '.json', { cache: 'no-store' });
            if (res.ok) p = await res.json();
        } catch (e) {}
    }
    if (!p) {
        try {
            const res = await fetch('products.json', { cache: 'no-store' });
            if (res.ok) {
                const all = await res.json();
                if (Array.isArray(all)) {
                    const split = splitCatalogByColorway(all);
                    p = split.find(item => String(item.id) === String(rawId)) || null;
                }
            }
        } catch (e) {}
    }
    if (!p) {
        root.hidden = false;
        document.body.classList.add('product-view');
        root.innerHTML = `<p class="product-missing">No product. <a href="index.html">Catalog</a></p>`;
        return;
    }
    const keepY = (document.body.classList.contains('product-view') || document.body.classList.contains('product-body')) ? window.scrollY : 0;
    root.hidden = false;
    document.body.classList.add('product-view');
    applyProductVariant(p);
    document.title = ((p.brand ? p.brand + ' ' : '') + (p.name || '')).trim() + ' — Sneake® Away';
    const baseCard = Object.assign({}, p, { offers: p._offersBase || p.offers || [] });
    let rankedAll = [];
    try { rankedAll = rankedOffers(baseCard) || []; } catch (e) {
        rankedAll = (baseCard.offers || []).map(o => ({ ...o, _total: (o.price || 0) + (o.shipping || 0) }));
    }
    const wantSz = pdpWantedSize();
    const rankedSize = wantSz ? rankedAll.filter(o => offerHasSize(o, wantSz)) : rankedAll;
    const sizeMiss = !!(wantSz && rankedSize.length === 0);
    let ranked = sizeMiss ? rankedAll : rankedSize;
    const rate = rates[currentCurrency] || 1;
    const symbol = symbols[currentCurrency] || '€';
    const destLocked = shipMode === 'tome' && !!currentCountry;
    const shipRanked = destLocked ? ranked.filter(o => o._ships === true) : [];
    const otherRanked = destLocked ? ranked.filter(o => o._ships !== true) : ranked;
    const destMiss = !!(destLocked && shipRanked.length === 0 && rankedAll.some(o => o._ships === false));
    const gold = (!sizeMiss && destLocked && shipRanked.length) ? shipRanked[0]
        : (!sizeMiss && !destLocked && ranked.length) ? ranked[0]
        : (rankedAll[0] || null);
    rememberViewed(p.id);
    const rangeInfo = formatRange(baseCard, rate, symbol);
    const missBits = [];
    if (sizeMiss) missBits.push(dict.no_your_size || tExtra('no_your_size'));
    if (destMiss) missBits.push(dict.no_your_dest || tExtra('no_your_dest'));
    const missTip = missBits.join(' · ');
    const bangHTML = missTip ? `<button type="button" class="p-swatch-bang p-main-bang" data-tip="${escapeHtml(missTip)}" aria-label="${escapeHtml(missTip)}">!</button>` : '';
    const goldItem = gold ? Math.round((gold.price || 0) * rate) : '';
    const goldShipTxt = gold ? shipNote(gold, rate, symbol, dict) : '';
    const boardSrc = destLocked ? shipRanked.concat(otherRanked) : ranked;
    const rows = offerBoardHTML(p, boardSrc, rate, symbol, dict, { dest: destLocked ? currentCountry : '' });
    const extraRows = '';
    const styleLabel = dict['st_' + (p.style || '')] || p.style || '';
    const inWl = (wishlist || []).some(w => String(w.id) === String(p.id));
    const sizes = p.sizes || [];
    const colorHTML = colorSwatchesHTML(p, dict);
    const sizeHTML = sizes.length ? `<div class="p-opts"><span class="p-opts-label">${dict.opt_size || 'Size'}</span> <button type="button" class="size-guide-link" onclick="openSizeGuide()">${dict.size_guide || 'Size chart'}</button>${sizeSysTabsHTML('pdp')}<div class="p-chips">${cleanEuSizes(sizes).map(s=>`<button type="button" class="p-chip${String(selectedProductSize)===String(s)?' on':''}" data-size="${s}">${labelSize(s)}</button>`).join('')}</div></div>` : '';
    const restockHTML = `<label class="restock-row"><input type="checkbox" id="restock-flag"> ${dict.restock_alert || tExtra('restock_alert')}</label>`;
    const descTxt = productDescText(p);
    const descHTML = descTxt ? `<div class="product-desc"><h2>${dict.h_desc || ''}</h2><p>${escapeHtml(descTxt)}</p></div>` : '';
    const brandList = moreFromBrand(p, 6);
    const recentList = viewedProducts(p.id);
    const railsHTML = `<div class="product-rails">
        ${brandList.length ? `<section class="product-rail"><h2>${dict.more_brand || 'More from this brand'}</h2><div class="radar-row">${railCards(brandList, symbol, rate)}</div></section>` : ''}
        ${recentList.length ? `<section class="product-rail"><h2>${dict.recent_title || 'Recently viewed'}</h2><div class="radar-row">${railCards(recentList, symbol, rate)}</div></section>` : ''}
    </div>`;
    root.innerHTML = `
      <a class="product-back" href="index.html" onclick="event.preventDefault(); goBackFromProduct();">← ${dict.cat_all || 'All'}</a>
      <div class="product-layout">
        <div class="product-media">
          <div class="product-main-wrap${missTip ? ' miss' : ''}">
            <img id="product-main-img" src="${p.image}" alt="${p.name}" onerror="this.src='logo.png'">
            ${bangHTML}
            <button type="button" class="zoom-fab" onclick="openImageZoom(document.getElementById('product-main-img').src, '${String(p.name).replace(/'/g, '')}')" aria-label="Zoom"><i class="fas fa-search-plus"></i></button>
          </div>
          <div class="product-thumbs">${((p.images && p.images.length) ? p.images : [p.image]).filter(Boolean).slice(0, 10).map((src) => `<button type="button" class="product-thumb${src===p.image?' on':''}" data-src="${src}"><img src="${src}" alt="" loading="lazy"></button>`).join('')}</div>
        </div>
        <div class="product-info">
          <p class="product-brand">${p.brand}${styleLabel ? ' · ' + styleLabel : ''}</p>
          <h1>${p.name}</h1>
          <div class="product-gold">
            <div class="product-gold-row">
              ${gold
                ? `<a class="offer-price-link product-gold-price offer-shop-price${missTip ? ' dim-price' : ''}" href="${gold.url || '#'}" target="_blank" rel="noopener sponsored noreferrer">${symbol}${goldItem}</a>`
                : `<p class="price-range-main product-gold-price${missTip ? ' dim-price' : ''}">${rangeInfo.html || (goldItem ? symbol+goldItem : '—')}</p>`}
              <span class="dest-price-arrow" aria-hidden="true">→</span>
              <button type="button" class="select-ui dest-chip dest-chip-price" id="dest-chip-product" onclick="openDestPanel()">${''}</button>
            </div>
            <p class="product-dest-hint">${destLocked
              ? '(' + (dict.dest_hint_tome || '').replace('{c}', currentCountry) + ')'
              : '(' + (dict.dest_hint_ww || '') + ')'}</p>
            ${!colorwayFitsFilters(p) ? `<p class="product-miss-price">${escapeHtml((() => { const bits=[]; if (selectedSizes && selectedSizes.length && !productHasSelectedSize(p)) bits.push(dict.no_your_size||tExtra('no_your_size')); if (shipMode==='tome' && currentCountry && !productAvailableHere(p)) bits.push(dict.no_your_dest||tExtra('no_your_dest')); return bits.join(' · '); })())}</p>` : ''}
            <p class="product-gold-meta">${gold
                ? `<a class="offer-shop-link" href="${gold.url || '#'}" target="_blank" rel="noopener sponsored noreferrer">${gold.shop || 'Shop'}</a> · ${goldShipTxt}`
                : ''}</p>
          </div>
          ${colorHTML}
          ${sizeHTML}
          ${calcBtnHTML(dict)}
          ${!destLocked ? `<p class="product-dest-hint">${dict.dest_pick_line || 'Choose a destination for a price with shipping to you.'}</p>` : ''}
          ${rows ? `<div class="product-rest"><p class="product-rest-label">${dict.all_offers || 'Offers'}</p>${rows}</div>` : ''}
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
    bindBangTips(root);
    root.querySelectorAll('.p-chip, .p-swatch').forEach(btn => {
        btn.onclick = () => {
            const y = window.scrollY;
            if (btn.dataset.size) {
                toggleCatalogSize(btn.dataset.size); return;
                initProductPage().then(() => window.scrollTo(0, y));
                return;
            }
            if (btn.dataset.color) {
                selectedProductColor = (selectedProductColor === btn.dataset.color) ? null : btn.dataset.color;
                initProductPage().then(() => window.scrollTo(0, y));
            }
        };
    });
    if (keepY) requestAnimationFrame(() => window.scrollTo(0, keepY));
}

// ==================== QUICK VIEW ====================

function refreshQvQuiet(id) {
    const wrap = document.getElementById('quickview-modal');
    if (!wrap) return;
    wrap.querySelectorAll('.qv-opts .p-chips .p-chip[data-size]').forEach(b => {
        b.classList.toggle('on', typeof sizeIsOn === 'function' && sizeIsOn(b.getAttribute('data-size')));
    });
    try { renderDestChip(); } catch (e) {}
}

function showQuickView(id) {
    closeQuickView();
    const p = (productsData || []).find(item => String(item.id) === String(id));
    if (!p) return;
    if (!(p.images && p.images.length > 2)) { loadProductsFull().then(() => { const q=document.getElementById('quickview-modal'); if(q && q.getAttribute('data-pid')==String(id)) showQuickView(id); }); }
    applyProductVariant(p);

    const rate = rates[currentCurrency] || 1;
    const symbol = symbols[currentCurrency] || '€';
    const dict = langs[currentLang] || langs.en;

    const checkC = (shipMode === 'tome' && currentCountry) ? currentCountry : '';
    const sortedOffers = rankedOffers(p, checkC || null);
    const displayOffers = sortedOffers;
    const bestOffer = (shipMode === 'tome' ? sortedOffers[0] : displayOffers[0]) || sortedOffers[0];
    const bestTotal = Math.round((bestOffer._total != null ? bestOffer._total : (bestOffer.price + (bestOffer.shipping||0))) * rate);
    const origPrice = p.originalPrice ? Math.round(p.originalPrice * rate) : null;
    const isDiscounted = origPrice && origPrice > bestTotal;
    const wasHTML = isDiscounted
        ? `<span class="price-was" style="font-size:1.1rem; margin-right:8px;">${symbol}${origPrice}</span>`
        : '';

    const countryOpts = DEST_COUNTRIES.map(c => `<option value="${c.code}" ${checkC===c.code?'selected':''}>${c.code} — ${c.name}</option>`).join('');
    const offersHTML = calcBtnHTML(dict) + offerBoardHTML(p, displayOffers, rate, symbol, dict, { dest: checkC });

    const inWishlist = isInWishlist(p.id);

    const modalHTML = `
        <div id="quickview-modal" class="qv-sheet-wrap" data-pid="${p.id}" onclick="if(event.target.id==='quickview-modal')closeQuickView()" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.55); display:flex; align-items:flex-end; justify-content:center; z-index:3000; padding:0;">
            <div class="qv-sheet" onclick="event.stopPropagation()" style="background:var(--card); max-width:720px; width:100%; border-radius:18px 18px 0 0; overflow:hidden; position:relative; max-height:92vh; overflow-y:auto;">
                
                <button type="button" class="qv-x" onclick="closeQuickView()" aria-label="Close">×</button>

                <div class="qv-photos" style="flex:1; min-width:300px; background:#fff; padding:24px;">
                    <img id="qv-main-img" src="${p.image}" style="max-height:360px; max-width:100%; object-fit:contain; display:block; margin:0 auto;" alt="${p.name}">
                    <div class="qv-thumbs">${(p.images && p.images.length ? p.images : [p.image]).slice(0,4).map(src => `<button type="button" class="qv-thumb" onclick="document.getElementById('qv-main-img').src='${src}'"><img src="${src}" alt=""></button>`).join('')}</div>
                </div>

                <div style="flex:1; min-width:320px; padding:40px 35px;">
                    <div class="qv-head">
                        <div class="qv-head-text">
                            <p style="color:var(--gray-text); font-size:0.85rem; margin:0 0 4px 0;">${p.brand}</p>
                            <h2 style="margin:0; font-size:1.5rem; line-height:1.3; padding-right:36px;">${p.name}</h2>
                        </div>
                        <button type="button" class="heart-btn heart-btn-lg qv-heart${inWishlist ? ' active' : ''}" onclick="openWishlistSelector(${jsId(p.id)}, event)"><i class="${inWishlist ? 'fa-solid' : 'fa-regular'} fa-heart"></i></button>
                    </div>
                    ${uniqueVariants(p).length ? `<div class="qv-opts"><span>${dict.opt_color || dict.color || 'Colour'}</span><div class="p-color-swatches">${uniqueVariants(p).map(v => { const card=(v.id!=null&&findProductById(v.id))||p; const st=colorwayFitsFilters(card)?'':' strike'; return `<button type="button" class="p-swatch${selectedProductColor===v.key?' on':''}${st}" onclick="selectedProductColor='${String(v.key).replace(/'/g, "\'")}'; showQuickView(${jsId(p.id)})"><span class="p-swatch-pic"><img src="${v.image || p.image}" alt=""></span><span>${v.label}</span></button>`; }).join('')}</div></div>` : ''}
                    ${(p.sizes && p.sizes.length) ? `<div class="qv-opts"><span>${dict.opt_size || dict.size_eu || 'Size'}</span>${sizeSysTabsHTML('qv')}<div class="p-chips">${cleanEuSizes(p.sizes).map(s => `<button type="button" class="p-chip${sizeIsOn(s)?' on':''}" data-size="${s}" onclick="toggleCatalogSize('${String(s)}', function(){ refreshQvQuiet(${jsId(p.id)}); })">${labelSize(s)}</button>`).join('')}</div></div>` : ''}

                    <p class="price-gold-hero offer-shop-price" style="margin:18px 0 6px 0;">
                        ${wasHTML}<a href="${shopHref(bestOffer)}" class="offer-price-link offer-shop-price" target="_blank" rel="noopener sponsored noreferrer">${symbol}${Math.round((bestOffer.price||0)*rate)}</a>
                    </p>
                    <p style="color:var(--gray-text); font-size:0.85rem; margin:0 0 20px 0;">
                        ${dict.best_from} ${bestOffer.shop}
                    </p>

                    <div class="qv-board" style="margin-bottom:25px;">
                        <p style="font-size:0.8rem; color:var(--gray-text); text-transform:uppercase; letter-spacing:0.5px; margin-bottom:8px;">
                            ${dict.offer_board || dict.all_offers}
                        </p>
                        <div class="qv-check-ship">
                            <button type="button" class="select-ui dest-chip dest-chip-price" onclick="openDestPanel()">${typeof destChipLabel==='function'?destChipLabel():'WW'}</button>
                        </div>
                        <p class="duties-mini">${dict.duties_note}</p>
                        ${offersHTML}
                        <p class="affiliate-mini">${dict.affiliate_note}</p>
                    </div>

                    <button type="button" class="qv-go-pdp" onclick="closeQuickView(); openProduct(${jsId(p.id)})">
                        ${dict.view || 'View'}
                    </button>
                    <button onclick="addToCompareFromQuick(${jsId(p.id)}, '${p.name}', ${bestOffer.price}, '${p.image}'); closeQuickView()" 
                            style="width:100%; padding:14px; background:var(--accent); color:#000; border:none; border-radius:10px; font-weight:700; font-size:1rem; cursor:pointer; margin-bottom:12px;">
                        ${dict.compare}
                    </button>

                    <button class="qv-close-bottom" onclick="closeQuickView()" 
                            style="width:100%; padding:12px; background:transparent; color:var(--text); border:1px solid var(--border); border-radius:10px; font-weight:600; cursor:pointer;">
                        ${dict.close}
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const qv = document.getElementById('quickview-modal');
    if (qv) {
        qv.setAttribute('tabindex', '-1');
        a11yOpenModal(qv);
        const closeBtn = qv.querySelector('button');
        if (closeBtn) {
            closeBtn.classList.add('modal-close');
            closeBtn.setAttribute('aria-label', (langs[currentLang]||langs.en).close || 'Close');
        }
    }
}

function closeQuickView() {
    document.querySelectorAll('#quickview-modal, .zoom-overlay').forEach(el => el.remove());
    try { a11yCloseModalRestore(); } catch (e) {}
}
let zoomLevel = 1;
function openImageZoom(src, alt) {
    document.querySelectorAll('.zoom-overlay').forEach(el => el.remove());
    const url = src || '';
    if (!url) return;
    zoomLevel = 2;
    document.body.insertAdjacentHTML('beforeend', `
      <div class="zoom-overlay" id="zoom-overlay">
        <div class="zoom-toolbar">
          <button type="button" onclick="event.stopPropagation(); bumpZoom(-0.5)">−</button>
          <button type="button" onclick="event.stopPropagation(); bumpZoom(0.5)">+</button>
          <button type="button" class="zoom-close" onclick="event.stopPropagation(); closeImageZoom()">&times;</button>
        </div>
        <div class="zoom-stage" id="zoom-stage" onclick="if(event.target.id==='zoom-stage')closeImageZoom()">
          <img id="zoom-img" src="${url}" alt="${(alt || '').replace(/"/g, '')}" style="transform:scale(${zoomLevel})">
        </div>
      </div>`);
}
function bumpZoom(delta) {
    zoomLevel = Math.min(4, Math.max(1, +(zoomLevel + delta).toFixed(1)));
    const img = document.getElementById('zoom-img');
    if (img) img.style.transform = 'scale(' + zoomLevel + ')';
}
function closeImageZoom() {
    document.querySelectorAll('.zoom-overlay').forEach(el => el.remove());
}

function toggleCompare(checkbox, id, name, basePrice, image) {
    if (checkbox.checked) {
        if (compareList.length >= 4) {
            alert("Можете да сравнявате максимум 4 продукта!");
            checkbox.checked = false;
            return;
        }
        compareList.push({id, name, basePrice, image});
    } else {
        compareList = compareList.filter(item => item.id !== id);
    }
    updateCompareButton();
}

function addToCompareFromQuick(id, name, basePrice, image) {
    if (compareList.length >= 4) {
        alert("Можете да сравнявате максимум 4 продукта.");
        return;
    }
    if (!compareList.some(item => item.id === id)) {
        compareList.push({id, name, basePrice, image});
        updateCompareButton();
    }
}

function updateCompareButton() {
    let btn = document.getElementById('compare-floating-btn');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'compare-floating-btn';
        document.body.appendChild(btn);
    }
    const dict = langs[currentLang] || langs.en;
    btn.textContent = `${dict.compare} (${compareList.length})`;
    btn.style.cssText = 'position:fixed;bottom:90px;right:30px;background:#A8A8B0;color:#1a1a1a;padding:12px 24px;border:none;border-radius:50px;font-weight:700;box-shadow:0 5px 20px rgba(0,0,0,0.35);z-index:2500;display:' + (compareList.length > 0 ? 'block' : 'none');
    btn.onclick = showCompareModal;
    try { updateMobileDock(); } catch(e) {}
}

function showCompareModal() {
    if (compareList.length === 0) return;
    const dict = langs[currentLang] || langs.en;
    const rate = rates[currentCurrency] || 1;
    const symbol = symbols[currentCurrency] || '€';

    // Enrich with full product + best total for ranking
    const rows = compareList.map(c => {
        const p = productsData.find(x => x.id === c.id) || {};
        const offers = [...(p.offers || [])].sort((a, b) => (a.price + a.shipping) - (b.price + b.shipping));
        const best = offers[0] || { price: c.basePrice || 0, shipping: 0, shop: '-', url: '#' };
        const total = (best.price + best.shipping) * rate;
        return { ...c, p, offers, best, total };
    }).sort((a, b) => a.total - b.total);

    let html = `<div id="compare-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);display:flex;align-items:center;justify-content:center;z-index:4000;padding:16px;">`;
    html += `<div style="background:var(--card);width:95%;max-width:1100px;max-height:92vh;overflow:auto;border-radius:16px;padding:25px;position:relative;">`;
    html += `<button onclick="closeCompareModal()" style="position:absolute;top:15px;right:20px;font-size:2rem;background:none;border:none;color:var(--text);cursor:pointer;">×</button>`;
    html += `<h2 style="text-align:center;margin-bottom:20px;">${dict.compare_products} (${rows.length})</h2>`;
    html += `<div style="overflow-x:auto;"><table class="compare-table" style="width:100%;border-collapse:collapse;font-size:0.85rem;">`;
    html += `<thead><tr>
        <th style="text-align:left;padding:10px;border-bottom:1px solid var(--border);"></th>
        ${rows.map((r,i) => {
            return `<th style="padding:10px;border-bottom:1px solid var(--border);min-width:140px;"><img src="${r.image||r.p.image||''}" style="max-height:80px;object-fit:contain;margin:6px 0;"><br>${r.name}${r.p.colorway ? '<div style="font-size:0.75rem;color:var(--gray-text);">'+r.p.colorway+'</div>' : ''}</th>`;
        }).join('')}
    </tr></thead><tbody>`;
    html += `<tr><td style="padding:10px;color:var(--gray-text);">Brand</td>${rows.map(r=>`<td style="padding:10px;text-align:center;">${r.p.brand||'-'}</td>`).join('')}</tr>`;
    html += `<tr><td style="padding:10px;color:var(--gray-text);">${dict.color || 'Colour'}</td>${rows.map(r=>`<td style="padding:10px;text-align:center;">${r.p.colorway||(r.p.colors&&r.p.colors[0])||'-'}</td>`).join('')}</tr>`;
    html += `<tr><td style="padding:10px;color:var(--gray-text);">${dict.col_shop || 'Shops'}</td>${rows.map(r=>`<td style="padding:10px;text-align:center;">${[...new Set((r.p.offers||[]).map(o=>o.shop))].join(' · ')||'-'}</td>`).join('')}</tr>`;
    html += `<tr><td style="padding:10px;color:var(--gray-text);">${dict.all_offers || 'Shop price'}</td>${rows.map((r)=>{
        const url = r.best.url || '#';
        return `<td style="padding:10px;text-align:center;"><a class="offer-price-link" href="${url}" target="_blank" rel="noopener sponsored noreferrer">${symbol}${Math.round((r.best.price||0)*rate)}</a><div style="font-size:0.7rem;color:var(--gray-text);">${r.best.shop}</div></td>`;
    }).join('')}</tr>`;
    html += `<tr><td style="padding:10px;color:var(--gray-text);">${dict.shipping || 'Shipping'}</td>${rows.map(r=>`<td style="padding:10px;text-align:center;">${r.best.shipping==null ? (dict.shop_info||'Info in the shop') : symbol+Math.round((r.best.shipping||0)*rate)}</td>`).join('')}</tr>`;
    html += `<tr><td style="padding:10px;"></td>${rows.map((r)=>`<td style="padding:10px;text-align:center;"><button type="button" onclick="removeFromCompareById(${jsId(r.id)})" style="padding:6px 12px;background:#ff4444;color:#fff;border:none;border-radius:6px;cursor:pointer;">${dict.remove}</button></td>`).join('')}</tr>`;
    html += `</tbody></table></div></div></div>`;
    document.body.insertAdjacentHTML('beforeend', html);
    const cm = document.getElementById('compare-modal');
    if (cm) {
        cm.setAttribute('tabindex', '-1');
        a11yOpenModal(cm);
        const closeBtn = cm.querySelector('button');
        if (closeBtn) {
            closeBtn.classList.add('modal-close');
            closeBtn.setAttribute('aria-label', (langs[currentLang]||langs.en).close || 'Close');
        }
    }
}

function closeCompareModal() {
    const modal = document.getElementById('compare-modal');
    a11yCloseModalRestore();
    if (modal) modal.remove();
}

function removeFromCompare(index) {
    compareList.splice(index, 1);
    closeCompareModal();
    if (compareList.length > 0) showCompareModal();
    updateCompareButton();
}
function removeFromCompareById(id) {
    compareList = compareList.filter(item => String(item.id) !== String(id));
    closeCompareModal();
    if (compareList.length > 0) showCompareModal();
    updateCompareButton();
}

// ==================== ОСНОВНИ ФУНКЦИИ ====================
function fillStyleFilters() {
    const box = document.getElementById('style-list');
    if (!box) return;
    const dict = langs[currentLang] || langs.en;
    const styles = ['basketball', 'running', 'tennis', 'lifestyle'];
    box.innerHTML = styles.map(v => {
        const label = dict['st_' + v] || v;
        const checked = selectedStyles.includes(v) ? 'checked' : '';
        return `<label style="display:block; margin-bottom:5px; font-size:0.8rem; cursor:pointer;">
            <input type="checkbox" class="style-check" data-style="${v}" ${checked}> ${label}
        </label>`;
    }).join('');
    box.querySelectorAll('.style-check').forEach(cb => {
        cb.onchange = () => {
            const v = cb.dataset.style;
            if (cb.checked) { if (!selectedStyles.includes(v)) selectedStyles.push(v); }
            else selectedStyles = selectedStyles.filter(x => x !== v);
            scheduleCatalogRender();
        };
    });
}

function updateUI() {
    const langEl = document.getElementById('lang-select');
    const currEl = document.getElementById('curr-select');
    if (!langEl || !currEl) return;
    const lang = langEl.value;
    const curr = currEl.value;
    currentLang = lang;
    currentCurrency = curr;
    try { localStorage.setItem('sa_lang', lang); } catch (e) {}

    const dict = langs[lang] || langs.en;
    document.querySelectorAll('.t-key').forEach(el => {
        const key = el.getAttribute('data-key');
        if(dict[key]) el.innerText = dict[key];
    });

    const sortList = document.getElementById('sort-options-list');
    if (sortList) {
        sortList.innerHTML = `
            <div class="sort-opt" onclick="setSort('s_pop')">${dict.s_pop}</div>
            <div class="sort-opt" onclick="setSort('s_new')">${dict.s_new}</div>
            <div class="sort-opt" onclick="setSort('s_low')">${dict.s_low}</div>
            <div class="sort-opt" onclick="setSort('s_high')">${dict.s_high}</div>
        `;
    }
    const activeSort = document.getElementById('active-sort-text');
    if (activeSort) activeSort.innerText = dict.sort_by;

    fillStyleFilters();
    const matList = document.getElementById('material-list');
    if (matList) {
    matList.innerHTML = '';
    // Map translated name → English key used in product data
    const materialKeys = ["Leather", "Suede", "Mesh", "Canvas", "Gore-Tex", "Recycled", "Synthetic", "Nubuck", "Rubber", "Textile", "Primeknit"];
    dict.materials.forEach((m, i) => {
        const key = materialKeys[i];
        const checked = selectedMaterials.includes(key) ? 'checked' : '';
        matList.innerHTML += `<label style="display:block; margin-bottom:5px; font-size:0.8rem; cursor:pointer;">
            <input type="checkbox" class="material-check" data-material="${key}" ${checked}> ${m}
        </label>`;
    });
    // re-bind events
    document.querySelectorAll('.material-check').forEach(cb => {
        cb.onchange = () => {
            const mat = cb.dataset.material;
            if (cb.checked) {
                if (!selectedMaterials.includes(mat)) selectedMaterials.push(mat);
            } else {
                selectedMaterials = selectedMaterials.filter(m => m !== mat);
            }
            scheduleCatalogRender();
        };
    });
    }

    document.querySelectorAll('.cur-tag').forEach(el => el.innerText = symbols[curr] || '€');

    // Search placeholder
    const searchInput = document.getElementById('hero-search-input');
    if (searchInput && dict.search_placeholder) {
        searchInput.placeholder = dict.search_placeholder;
    }
    const mobSearch = document.getElementById('mobile-search-input');
    if (mobSearch && dict.search_placeholder) mobSearch.placeholder = dict.search_placeholder;


   if (currentView === 'wishlist') {
    showWishlistPage();
} else {
    renderProducts();
}
updateWishlistButton();
updateCompareButton();
try { renderDestChip(); } catch(e) {}
try { renderRadar(); } catch(e) {}
try { initProductPage(); } catch(e) {}

}

function updateSizeGrid(system, tabEl) {
    if (tabEl) {
        document.querySelectorAll('.sys-tab').forEach(t => t.classList.remove('active'));
        tabEl.classList.add('active');
    }

    const grid = document.getElementById('dynamic-size-grid');
    if (!grid) return;
    grid.innerHTML = '';

    sizeMapping.forEach(size => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.innerText = size[system];
        const isSelected = selectedSizes.includes(size.eu);
        btn.classList.toggle('selected', isSelected);
        btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        btn.setAttribute('aria-label', 'Size ' + size[system]);
        btn.style.cssText = `
            padding: 10px 6px;
            font-size: 0.85rem;
            font-weight: 700;
            background: ${isSelected ? 'rgba(201, 168, 76, 0.12)' : 'var(--bg)'};
            border: 2px solid ${isSelected ? 'var(--accent)' : 'var(--border)'};
            color: ${isSelected ? 'var(--accent)' : 'var(--text)'};
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
        `;

        btn.onclick = () => {
            const euSize = size.eu;
            if (selectedSizes.includes(euSize)) {
                selectedSizes = selectedSizes.filter(s => s !== euSize);
            } else {
                selectedSizes.push(euSize);
            }
            const nowSelected = selectedSizes.includes(euSize);
            btn.classList.toggle('selected', nowSelected);
            btn.setAttribute('aria-pressed', nowSelected ? 'true' : 'false');
            btn.style.borderColor = nowSelected ? 'var(--accent)' : 'var(--border)';
            btn.style.color = nowSelected ? 'var(--accent)' : 'var(--text)';
            btn.style.background = nowSelected ? 'rgba(201, 168, 76, 0.12)' : 'var(--bg)';
            scheduleCatalogRender();
        };

        grid.appendChild(btn);
    });
}

function setSort(key) {
    if (key === 's_off') key = 's_pop';
    currentSort = key;
    document.getElementById('active-sort-text').innerText = langs[currentLang][key] || key;
    const options = document.getElementById('sort-options-list');
    if (options) options.classList.remove('show');
    scheduleCatalogRender();
}

function toggleSortDropdown() {
    const options = document.getElementById('sort-options-list');
    const sizeDrop = document.getElementById('page-size-drop');
    if (sizeDrop) sizeDrop.classList.remove('open');
    if (options) {
        options.classList.toggle('show');
    }
}

// Затваряне при клик извън менюто
document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.sort-dropdown');
    const options = document.getElementById('sort-options-list');
    if (dropdown && options && !dropdown.contains(e.target)) {
        options.classList.remove('show');
    }
    const sizeDrop = document.getElementById('page-size-drop');
    if (sizeDrop && !sizeDrop.contains(e.target)) sizeDrop.classList.remove('open');
    const prodLink = e.target.closest && e.target.closest('a[href*="product.html"]');
    if (prodLink) {
        try {
            const u = new URL(prodLink.getAttribute('href'), location.href);
            const id = u.searchParams.get('id');
            if (id) stashProduct(id);
        } catch (err) {}
    }
});

function toggleOffers(btn) {
    const panel = btn.nextElementSibling;
    panel.classList.toggle('active');
    const icon = btn.querySelector('i');
    if (icon) icon.classList.toggle('fa-chevron-up');
}

const bttBtn = document.getElementById("backToTop");
if (bttBtn) {
    window.onscroll = function() {
        bttBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "flex" : "none";
    };
    bttBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}

const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    try {
        const saved = localStorage.getItem('sa_theme');
        if (saved === 'dark') document.body.classList.remove('light');
        else document.body.classList.add('light');
    } catch (e) { document.body.classList.add('light'); }
    themeBtn.onclick = () => {
        document.body.classList.toggle('light');
        try {
            localStorage.setItem('sa_theme', document.body.classList.contains('light') ? 'light' : 'dark');
        } catch (e) {}
        syncHeaderLogo();
    };
}
function syncHeaderLogo() {
    const light = document.body.classList.contains('light');
    document.querySelectorAll('img.logo-img').forEach(img => {
        img.src = light ? 'header-light.png' : 'header-gold.png';
    });
}
try { syncHeaderLogo(); } catch (e) {}

function setupLoadMore() {
    const container = document.getElementById('load-more-container');
    if (!container) return;
    const dict = langs[currentLang] || langs.en;
    const sizeOpts = document.getElementById('page-size-options');
    const sizeTrig = document.getElementById('page-size-trigger');
    if (sizeTrig) sizeTrig.textContent = String(productsPerLoad);
    if (sizeOpts) {
        sizeOpts.innerHTML = pageSizesForDevice().map((n) => `<button type="button" class="page-size-opt${n === productsPerLoad ? ' active' : ''}" onclick="setPageSize(${n})">${n}</button>`).join('');
    }
    container.innerHTML = `
    <div class="pager-wrap">
      <button type="button" id="load-more-btn" class="load-more-ui">
        <span class="t-key" data-key="btn_load_more">${dict.btn_load_more || 'Load More'}</span>
        <i class="fas fa-arrow-down"></i>
      </button>
      <div id="page-dots" class="page-dots" aria-label="Pages"></div>
    </div>`;

    const btn = document.getElementById('load-more-btn');
    if (btn) {
        btn.onclick = () => {
            btn.classList.add('loading');
            setTimeout(() => {
                renderProducts(false); // append more
                btn.classList.remove('loading');
            }, 250);
        };
    }
    try { updatePageDots(getFilteredAndSortedProducts().length); } catch (e) {}
}

/** Jump to page N: show only that page's products (from start of list through... user asked for page)
 *  Interpretation: go to page = show products for that page only, replacing grid.
 *  Load More from there continues appending after that page.
 */
function goToPage(n) {
    const filtered = getFilteredAndSortedProducts();
    const totalPages = Math.max(1, Math.ceil(filtered.length / productsPerLoad));
    currentPage = Math.min(Math.max(1, n), totalPages);
    const container = document.getElementById('products-container');
    if (!container) return;

    // Rebuild meta + only this page's items
    displayedCount = (currentPage - 1) * productsPerLoad; // start offset
    // Clear product cards but keep structure via full reset-like render for one page
    const rate = rates[currentCurrency] || 1;
    const dict = langs[currentLang] || langs.en;
    // Use renderProducts by setting offset: clear, set displayedCount to page start, append one batch
    const topControls = document.querySelector('.top-controls');
    if (topControls) topControls.style.display = 'flex';

    // Manual clear and one page
    const symbol = symbols[currentCurrency] || '€';
    container.innerHTML = '';
    const hasFilters = selectedSizes.length || selectedColors.length || selectedMaterials.length || selectedPriceRanges.length || (searchTerm && searchTerm.trim()) || maxPriceSlider < 1500 || selectedCategory;
    container.insertAdjacentHTML('beforeend', `
        <div id="products-meta" style="grid-column:1/-1; display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:10px;">
            <span style="font-size:0.85rem; color:var(--gray-text);">
                ${dict.showing} <strong id="shown-count" style="color:var(--text);">0</strong> ${dict.of} <strong style="color:var(--text);">${filtered.length}</strong> ${dict.products}
            </span>
            ${hasFilters ? `<button onclick="clearAllFilters()" style="background:transparent; border:1px solid var(--border); color:var(--text); padding:6px 14px; border-radius:20px; font-size:0.8rem; cursor:pointer;">${dict.clear_filters}</button>` : ''}
        </div>
    `);
    // render one page worth starting at offset
    renderProducts(false);
    // After append, displayedCount is pageStart + batch. Good.
    window.scrollTo({ top: (document.querySelector('.products-wrapper')?.offsetTop || 0) - 80, behavior: 'smooth' });
}

function pageDotsHTML(totalItems) {
    const totalPages = Math.max(1, Math.ceil((totalItems || 0) / productsPerLoad));
    if (totalPages <= 1) return '';
    const active = Math.min(currentPage, totalPages);
    const compact = typeof isMobileUi === 'function' && isMobileUi();
    const windowSize = compact ? 2 : 5;
    let start = Math.max(2, active - Math.floor(windowSize / 2));
    let end = start + windowSize - 1;
    if (end > totalPages - 1) {
        end = Math.max(2, totalPages - 1);
        start = Math.max(2, end - windowSize + 1);
    }
    if (compact) {
        start = 2;
        end = Math.min(3, totalPages - 1);
    } else if (totalPages <= 7) {
        start = 2;
        end = totalPages - 1;
    }
    let html = `<button type="button" class="page-dot-btn${active === 1 ? ' active' : ''}" onclick="goToPage(1)">1</button>`;
    if (start > 2) html += `<span class="page-gap">…</span>`;
    for (let i = start; i <= end; i++) {
        if (i <= 1 || i >= totalPages) continue;
        html += `<button type="button" class="page-dot-btn${i === active ? ' active' : ''}" onclick="goToPage(${i})">${i}</button>`;
    }
    if (end < totalPages - 1) html += `<span class="page-gap">…</span>`;
    if (totalPages > 1) {
        html += `<button type="button" class="page-dot-btn page-last${active === totalPages ? ' active' : ''}" onclick="goToPage(${totalPages})" title="Last page">${totalPages}</button>`;
    }
    return html;
}
function updatePageDots(totalItems) {
    const html = pageDotsHTML(totalItems);
    ['page-dots', 'page-dots-top'].forEach((id) => {
        const dots = document.getElementById(id);
        if (!dots) return;
        if (!html) {
            dots.innerHTML = '';
            dots.style.display = 'none';
            return;
        }
        dots.style.display = 'flex';
        dots.innerHTML = html;
    });
}
function openFiltersSheet() {
    const side = document.querySelector('.sidebar');
    const bd = document.getElementById('filters-sheet-backdrop');
    if (!side) return;
    side.classList.add('sheet-open');
    if (bd) { bd.hidden = false; bd.classList.add('show'); }
    document.body.classList.add('filters-open');
}
function closeFiltersSheet() {
    const side = document.querySelector('.sidebar');
    const bd = document.getElementById('filters-sheet-backdrop');
    if (side) side.classList.remove('sheet-open');
    if (bd) { bd.hidden = true; bd.classList.remove('show'); }
    document.body.classList.remove('filters-open');
}

function pinMobileTools() {
    const header = document.querySelector('header');
    const bar = document.getElementById('mobile-tools-bar');
    if (!header || !bar) return;
    if (window.innerWidth > 900) {
        bar.style.position = '';
        bar.style.top = '';
        bar.style.left = '';
        bar.style.right = '';
        bar.style.display = '';
        document.body.style.paddingTop = '';
        return;
    }
    const bottom = Math.round(header.getBoundingClientRect().bottom);
    bar.style.display = 'block';
    bar.style.position = 'fixed';
    bar.style.top = bottom + 'px';
    bar.style.left = '0';
    bar.style.right = '0';
    bar.style.zIndex = '1002';
    bar.style.margin = '0';
    const h = bar.offsetHeight || 52;
    document.body.style.paddingTop = (bottom + h) + 'px';
}

function hideSearchSuggest() {
    document.querySelectorAll('.search-suggest').forEach(el => el.remove());
}
function searchSuggestList(q) {
    q = String(q || '').trim().toLowerCase();
    if (q.length < 2 || !productsData) return [];
    const scored = [];
    productsData.forEach(p => {
        const name = String(p.name || '').toLowerCase();
        const brand = String(p.brand || '').toLowerCase();
        let s = -1;
        if (name.startsWith(q) || brand.startsWith(q)) s = 3;
        else if (name.includes(q) || brand.includes(q)) s = 2;
        else if (productSearchBlob(p).includes(q)) s = 1;
        if (s > 0) scored.push({ p, s });
    });
    scored.sort((a, b) => b.s - a.s);
    return scored.slice(0, 8).map(x => x.p);
}
function showSearchSuggest(input) {
    hideSearchSuggest();
    const items = searchSuggestList(input.value);
    if (!items.length) return;
    const box = document.createElement('div');
    box.className = 'search-suggest';
    box.setAttribute('role', 'listbox');
    box.innerHTML = items.map(p => {
        const shops = [...new Set((p.offers || []).map(o => o.shop).filter(Boolean))].join(' · ');
        return `<button type="button" class="search-suggest-item" data-id="${p.id}">
            <img src="${p.image || 'logo.png'}" alt="" width="40" height="40">
            <span><strong>${escapeHtml(p.brand || '')}</strong> ${escapeHtml(p.name || '')}<small>${escapeHtml(shops)}</small></span>
        </button>`;
    }).join('');
    document.body.appendChild(box);
    const r = input.getBoundingClientRect();
    const width = Math.max(r.width, 280);
    box.style.position = 'fixed';
    box.style.left = Math.max(8, Math.min(r.left, window.innerWidth - width - 8)) + 'px';
    box.style.top = (r.bottom + 6) + 'px';
    box.style.width = width + 'px';
    box.style.zIndex = '5000';
    box.querySelectorAll('.search-suggest-item').forEach(btn => {
        btn.addEventListener('mousedown', (e) => e.preventDefault());
        btn.addEventListener('click', () => {
            hideSearchSuggest();
            openProduct(btn.getAttribute('data-id'));
        });
    });
}
function fitSearchWidth(input) {
    if (!input) return;
    const extra = 48;
    const max = 180;
    const min = 110;
    const probe = fitSearchWidth._probe || (fitSearchWidth._probe = document.createElement('span'));
    probe.style.cssText = 'position:absolute;left:-9999px;visibility:hidden;white-space:pre;font:' + getComputedStyle(input).font;
    probe.textContent = input.value || input.placeholder || '';
    document.body.appendChild(probe);
    const w = Math.min(max, Math.max(min, probe.offsetWidth + extra));
    input.style.width = w + 'px';
}
function applyTypedSearch(value) {
    searchTerm = value || '';
    ['mobile-search-input', 'hero-search-input', 'header-search-input', 'pdp-search-input'].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.value !== searchTerm) el.value = searchTerm;
    });
    if (document.body.classList.contains('product-view')) return;
    if (document.getElementById('products-container')) scheduleCatalogRender();
}
function goCatalogSearch(value) {
    const q = String(value || '').trim();
    const file = /product\.html/i.test(location.pathname) ? catalogFile() : catalogFile();
    location.href = q ? (file + '?q=' + encodeURIComponent(q)) : file;
}

function submitCatalogSearch(value) {
    const q = String(value || '').trim();
    searchTerm = q;
    ['mobile-search-input', 'hero-search-input', 'header-search-input', 'pdp-search-input'].forEach(id => {
        const el = document.getElementById(id);
        if (el && el.value !== q) el.value = q;
    });
    const wasPdp = document.body.classList.contains('product-view');
    if (wasPdp) leaveProductView();
    const url = catalogFile() + (q ? ('?q=' + encodeURIComponent(q)) : '');
    try { history.pushState({ view: 'catalog' }, '', url); } catch (e) {}
    scheduleCatalogRender();
    document.querySelector('.products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function setupMobileSearch() {
    const ids = ['mobile-search-input', 'hero-search-input', 'header-search-input', 'pdp-search-input'];
    ids.forEach(id => {
        const src = document.getElementById(id);
        if (!src || src.dataset.bound === '1') return;
        src.dataset.bound = '1';
        src.addEventListener('input', () => {
            fitSearchWidth(src);
            showSearchSuggest(src);
        });
        src.addEventListener('focus', () => {
            fitSearchWidth(src);
            if (src.value.trim().length >= 2) showSearchSuggest(src);
        });
        src.addEventListener('blur', () => setTimeout(hideSearchSuggest, 180));
        src.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') hideSearchSuggest();
            if (e.key === 'Enter') {
                e.preventDefault();
                hideSearchSuggest();
                const q = src.value;
                if (document.getElementById('products-container')) {
                    submitCatalogSearch(q);
                } else {
                    goCatalogSearch(q);
                }
            }
        });
        fitSearchWidth(src);
    });
    window.addEventListener('scroll', hideSearchSuggest, { passive: true });
    window.addEventListener('resize', hideSearchSuggest);
    if (!document.body.dataset.dotsBound) {
        document.body.dataset.dotsBound = '1';
        document.addEventListener('click', (e) => {
            const dot = e.target.closest && e.target.closest('.card-dot');
            if (!dot) return;
            e.preventDefault();
            e.stopPropagation();
            selectedProductColor = dot.getAttribute('data-color') || null;
            const id = dot.getAttribute('data-pid');
            if (id) openProduct(id);
        });
    }
}
function updateFiltersBadge() {
    const n = selectedSizes.length + selectedColors.length + selectedMaterials.length + selectedPriceRanges.length
        + selectedStyles.length
        + (searchTerm ? 1 : 0) + (selectedCategory ? 1 : 0);
    const badge = document.getElementById('filters-badge');
    if (badge) {
        if (n > 0) { badge.style.display = 'inline-flex'; badge.textContent = String(n); }
        else { badge.style.display = 'none'; }
    }
}

function updateMobileDock() {
    let dock = document.getElementById('mobile-dock');
    if (!dock) {
        dock = document.createElement('div');
        dock.id = 'mobile-dock';
        dock.className = 'mobile-dock';
        document.body.appendChild(dock);
    }
    const dict = langs[currentLang] || langs.en;
    const w = wishlist.length;
    const c = compareList.length;
    if (w === 0 && c === 0) {
        dock.classList.remove('visible');
        dock.innerHTML = '';
        return;
    }
    dock.classList.add('visible');
    dock.innerHTML = `
      ${w ? `<button type="button" class="dock-btn dock-wish" onclick="showWishlistPage()"><i class="fa-solid fa-heart"></i> ${dict.wishlist} (${w})</button>` : ''}
      ${c ? `<button type="button" class="dock-btn dock-compare" onclick="showCompareModal()"><i class="fas fa-exchange-alt"></i> ${dict.compare} (${c})</button>` : ''}
    `;
}


function countReachedAlerts() {
    let n = 0;
    const rate = (typeof rates !== 'undefined' && rates[currentCurrency]) ? rates[currentCurrency] : 1;
    (wishlist || []).forEach(item => {
        const id = item && item.id;
        if (id == null) return;
        const target = typeof getAlertTarget === 'function' ? getAlertTarget(id) : '';
        if (target === '' || target == null || Number(target) <= 0) return;
        const p = typeof findProductById === 'function' ? findProductById(id) : (productsData || []).find(x => String(x.id) === String(id));
        if (!p) return;
        let best = 0;
        try {
            const sorted = typeof rankedOffers === 'function' ? rankedOffers(p) : (p.offers || []);
            const off = sorted[0] || {};
            const eur = (off._total != null ? off._total : ((off.price || 0) + (off.shipping || 0)));
            best = Math.round(Number(eur) * rate);
        } catch (e) { return; }
        if (best > 0 && Number(best) <= Number(target)) n++;
    });
    return n;
}
function updateWishlistButton() {
    const old = document.getElementById('wishlist-floating-btn');
    if (old) old.remove();
    const btn = document.getElementById('header-wish-btn');
    const icon = btn ? btn.querySelector('i') : document.querySelector('#header-wish-btn i');
    const has = !!(wishlist && wishlist.length);
    if (icon) icon.className = (has ? 'fa-solid' : 'fa-regular') + ' fa-heart';
    if (btn) btn.classList.toggle('active', has);
    const bell = document.getElementById('header-bell-btn');
    const countEl = document.getElementById('header-bell-count');
    const hits = has ? countReachedAlerts() : 0;
    if (bell) {
        bell.classList.toggle('on', hits > 0);
        const ic = bell.querySelector('i');
        if (ic) ic.className = (hits ? 'fa-solid' : 'fa-regular') + ' fa-bell';
    }
    if (countEl) {
        countEl.textContent = hits ? String(hits) : '';
        countEl.hidden = hits < 1;
    }
    try { updateMobileDock(); } catch(e) {}
}

function setupFilters() {
    // Price range checkboxes
    document.querySelectorAll('.price-check').forEach(cb => {
        cb.onchange = () => {
            selectedPriceRanges = Array.from(document.querySelectorAll('.price-check:checked'))
                .map(c => c.dataset.range);
            scheduleCatalogRender();
        };
    });

    // Price slider
    const slider = document.getElementById('price-slider');
    const sliderVal = document.getElementById('slider-value');
    if (slider) {
        slider.oninput = () => {
            maxPriceSlider = parseInt(slider.value, 10);
            if (sliderVal) sliderVal.textContent = maxPriceSlider;
            scheduleCatalogRender();
        };
    }

    // Color circles filled by fillColorFilters()
}

// ==================== HERO SLIDER ====================
const heroSlides = [
    "hero-basket-v2.jpg",
    "hero-airmax.jpg",
    "hero-neon.jpg",
    "hero-running.jpg",
    "hero-lineup.jpg",
    "hero-store-v2.jpg"
];
const heroSlidesMobile = [
    "hero-basket-m-v2.jpg",
    "hero-airmax-m.jpg",
    "hero-neon-m.jpg",
    "hero-running-m.jpg",
    "hero-lineup-m.jpg",
    "hero-store-m-v2.jpg"
];
let currentSlide = 0;

function isMobileHero() {
    return window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
}
function heroSrc(i) {
    const set = isMobileHero() ? heroSlidesMobile : heroSlides;
    return set[i] || heroSlides[i];
}

function showSlide(index) {
    const img = document.getElementById('hero-image');
    if (!img) return;
    currentSlide = (index + heroSlides.length) % heroSlides.length;
    const src = heroSrc(currentSlide);
    img.style.opacity = '0';
    img.onerror = () => {
        // skip missing files instead of blank hero
        img.onerror = null;
        showSlide(currentSlide + 1);
    };
    setTimeout(() => {
        img.src = src;
        img.onload = () => { img.style.opacity = '1'; };
        const nxt = heroSrc((currentSlide + 1) % heroSlides.length);
        const pre = new Image();
        pre.src = nxt;
    }, 200);
    updateDots();
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }

function updateDots() {
    const dots = document.getElementById('hero-dots');
    if (!dots) return;
    dots.innerHTML = '';
    heroSlides.forEach((_, i) => {
        const d = document.createElement('div');
        d.className = 'hero-dot' + (i === currentSlide ? ' active' : '');
        d.onclick = () => showSlide(i);
        dots.appendChild(d);
    });
}

function initHeroSlider() {
    updateDots();
    const img = document.getElementById('hero-image');
    if (img && heroSlides[0]) {
        img.src = heroSrc(0);
        img.style.opacity = '1';
    }
    setupHeroSwipe();
    if (!window.__heroResizeBound) {
        window.__heroResizeBound = true;
        let t;
        window.addEventListener('resize', () => {
            clearTimeout(t);
            t = setTimeout(() => {
                const el = document.getElementById('hero-image');
                if (el) el.src = heroSrc(currentSlide);
            }, 200);
        });
    }
}

function setupHeroSwipe() {
    const el = document.querySelector('.hero-slider') || document.querySelector('.hero');
    if (!el || el.dataset.swipeBound === '1') return;
    el.dataset.swipeBound = '1';
    let x0 = null;
    let y0 = null;
    el.addEventListener('touchstart', (e) => {
        if (!e.changedTouches || !e.changedTouches[0]) return;
        x0 = e.changedTouches[0].clientX;
        y0 = e.changedTouches[0].clientY;
    }, { passive: true });
    el.addEventListener('touchend', (e) => {
        if (x0 == null || !e.changedTouches || !e.changedTouches[0]) return;
        const x1 = e.changedTouches[0].clientX;
        const y1 = e.changedTouches[0].clientY;
        const dx = x1 - x0;
        const dy = y1 - y0;
        x0 = null;
        y0 = null;
        if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return; // ignore vertical scroll
        if (dx < 0) nextSlide();
        else prevSlide();
    }, { passive: true });
}


// ===== Mobile menu, categories, URL filters, story, home =====
function goHome() {
    selectedCategory = '';
    selectedGenders = [];
    searchTerm = '';
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active-cat'));
    ['hero-search-input', 'header-search-input', 'pdp-search-input', 'mobile-search-input'].forEach(id => {
        const el = document.getElementById(id); if (el) el.value = '';
    });
    currentView = 'products';
    document.body.classList.remove('view-wishlist');
    leaveProductView();
    closeQuickView();
    try { history.pushState({ view: 'catalog' }, '', catalogFile()); } catch (e) {}
    scheduleCatalogRender();
    closeMobileNav();
    window.scrollTo(0, 0);
}


function toggleMobileSort() {
    const existing = document.getElementById('sort-sheet');
    if (existing) { existing.remove(); return; }
    const dict = langs[currentLang] || langs.en;
    const keys = ['s_pop','s_new','s_low','s_high'];
    const items = keys.map(k => `<button type="button" class="sort-sheet-item${currentSort===k?' active':''}" onclick="setSort('${k}'); document.getElementById('sort-sheet')?.remove()">${dict[k]}</button>`).join('');
    document.body.insertAdjacentHTML('beforeend', `<div id="sort-sheet" class="sort-sheet" onclick="if(event.target.id==='sort-sheet') this.remove()"><div class="sort-sheet-card">${items}</div></div>`);
}

function injectNavSettings() {
    const nav = document.getElementById('main-nav');
    const extra = document.getElementById('header-tools-extra');
    if (!nav || !extra) return;
    let box = document.getElementById('nav-settings');
    if (!box) {
        box = document.createElement('div');
        box.id = 'nav-settings';
        box.className = 'nav-settings';
        nav.appendChild(box);
    }
    const dict = langs[currentLang] || langs.en;
    box.innerHTML = `<p class="nav-settings-label">${dict.settings || 'Settings'}</p>`;
}

function closeMobileNav() {
    const nav = document.getElementById('main-nav');
    const btn = document.getElementById('menu-toggle');
    if (nav) nav.classList.remove('open');
    if (btn) {
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    document.body.classList.remove('nav-open');
}


function placeHeaderTools() {
    const extra = document.getElementById('header-tools-extra');
    const bar = document.getElementById('util-bar');
    const left = bar && bar.querySelector('.util-bar-left');
    const theme = document.getElementById('theme-toggle');
    if (!extra || !bar) return;
    if (extra.parentElement !== bar) bar.appendChild(extra);
    extra.classList.remove('in-nav');
    const mobile = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
    if (theme && left) {
        if (mobile) left.appendChild(theme);
        else extra.appendChild(theme);
    }
}

function setupMobileMenu() {
    const btn = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    if (!btn || !nav) return;
    btn.setAttribute('aria-controls', 'main-nav');
    btn.setAttribute('aria-expanded', 'false');
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Main');
    placeHeaderTools();
    window.addEventListener('resize', placeHeaderTools);
    btn.onclick = () => {
        const open = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
        btn.innerHTML = open ? '<i class="fas fa-times" aria-hidden="true"></i>' : '<i class="fas fa-bars" aria-hidden="true"></i>';
        document.body.classList.toggle('nav-open', open);
        if (open) {
            const first = nav.querySelector('a');
            if (first) first.focus();
        }
    };
    nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href') || '';
            if (href && !href.startsWith('#')) {
                closeMobileNav();
                return; // real page
            }
            e.preventDefault();
            const cat = link.getAttribute('data-cat') || '';
            if (cat === 'brands') {
                closeMobileNav();
                return;
            }
            leaveProductView();
            selectedCategory = cat;
            selectedGenders = cat ? [cat] : [];
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active-cat'));
            link.classList.add('active-cat');
            currentView = 'products';
            document.body.classList.remove('view-wishlist');
            history.pushState({}, '', cat ? ('index.html?cat=' + encodeURIComponent(cat)) : 'index.html');
            scheduleCatalogRender();
            closeMobileNav();
        });
    });
}

function toggleGender(g) {
    if (selectedGenders.includes(g)) selectedGenders = selectedGenders.filter(x => x !== g);
    else selectedGenders.push(g);
    selectedCategory = selectedGenders.length === 1 ? selectedGenders[0] : '';
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active-cat', l.getAttribute('data-cat') === selectedCategory && selectedCategory);
    });
    scheduleCatalogRender();
}
function fillExtraFilters() {
    const gEl = document.getElementById('gender-list');
    if (gEl) {
        const dict = langs[currentLang] || langs.en;
        const opts = [['men', dict.cat_men || 'Men'],['women', dict.cat_women || 'Women'],['kids', dict.cat_kids || 'Kids']];
        gEl.innerHTML = opts.map(([k, lab]) => {
            const on = selectedGenders.includes(k) || selectedCategory === k;
            return `<label class="filter-check-row"><input type="checkbox" ${on ? 'checked' : ''} onchange="toggleGender('${k}')"> ${lab}</label>`;
        }).join('');
    }
    const brands = [...new Set(productsData.map(p => p.brand).filter(Boolean))];
    const lines = [...new Set(productsData.map(p => p.line).filter(Boolean))];
    const bEl = document.getElementById('brand-list');
    const lEl = document.getElementById('line-list');
    const hEl = document.getElementById('height-list');
    if (bEl) {
        brands.sort((a, b) => a.localeCompare(b));
        bEl.innerHTML = brands.map(b => {
            const safe = String(b).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
            const checked = selectedBrands.includes(b) ? 'checked' : '';
            return `<label class="filter-check-row"><input type="checkbox" class="material-check" ${checked} onchange="toggleBrand('${safe}')"> ${b}</label>`;
        }).join('');
    }
    if (lEl) lEl.innerHTML = lines.map(b => `<label><input type="checkbox" ${selectedLines.includes(b)?'checked':''} onchange="toggleLine('${b.replace(/'/g,'')}')"> ${b}</label>`).join('');
    if (hEl) {
        const dict = langs[currentLang] || langs.en;
        const opts = [['low', dict.ht_low || 'Low'],['mid', dict.ht_mid || 'Mid'],['high', dict.ht_high || 'High']];
        hEl.innerHTML = opts.map(([k,lab]) => `<label><input type="checkbox" ${selectedHeights.includes(k)?'checked':''} onchange="toggleHeight('${k}')"> ${lab}</label>`).join('');
    }
    fillColorFilters();
}
const COLOR_SWATCH = {
    black:'#111', white:'#fff', grey:'#8a8a8a', gray:'#8a8a8a', red:'#c0392b',
    blue:'#2980b9', navy:'#1a365d', green:'#27ae60', yellow:'#f1c40f',
    orange:'#e67e22', pink:'#ff7eb3', purple:'#8e44ad', brown:'#8b5a2b',
    beige:'#d8c3a5', silver:'#c0c0c0', gold:'#c9a84c', cream:'#f5e6c8',
    burgundy:'#6d1a2c', khaki:'#9a8b4f', multi:'#ccc'
};
function fillColorFilters() {
    const el = document.getElementById('color-list');
    if (!el) return;
    const counts = {};
    if (CATALOG_IDX && CATALOG_IDX.byColor) {
        CATALOG_IDX.byColor.forEach((arr, k) => { counts[k] = arr.length; });
    } else {
    (productsData || []).forEach(p => {
        [p.colorway, ...(p.colors || [])].forEach(raw => {
            const tt = String(raw || '').toLowerCase();
            Object.keys(COLOR_SWATCH).forEach(k => {
                if (k === 'gray') return;
                if (tt.includes(k) || (k === 'grey' && tt.includes('gray'))) counts[k] = (counts[k] || 0) + 1;
            });
        });
    });
    }
    const labels = { black:'Black', white:'White', grey:'Grey', red:'Red', blue:'Blue', navy:'Navy', green:'Green', yellow:'Yellow', orange:'Orange', pink:'Pink', purple:'Purple', brown:'Brown', beige:'Beige', silver:'Silver', gold:'Gold', cream:'Cream', burgundy:'Burgundy', khaki:'Khaki', multi:'Multi' };
    const keys = Object.keys(labels).filter(k => counts[k]);
    el.innerHTML = keys.map(k => {
        const on = selectedColors.includes(k) ? ' on' : '';
        const bg = COLOR_SWATCH[k];
        const border = (k === 'white' || k === 'cream') ? 'border:1px solid #bbb;' : '';
        return `<button type="button" class="color-row${on}" data-color="${k}" onclick="toggleColorFilter('${k}')"><i class="color-circle" style="background:${bg};${border}"></i><span>${labels[k]}</span></button>`;
    }).join('');
}
function toggleColorFilter(color) {
    if (selectedColors.includes(color)) selectedColors = selectedColors.filter(c => c !== color);
    else selectedColors.push(color);
    fillColorFilters();
    scheduleCatalogRender();
}
function toggleBrand(b) {
    if (selectedBrands.includes(b)) selectedBrands = selectedBrands.filter(x => x !== b);
    else selectedBrands.push(b);
    scheduleCatalogRender();
}
function toggleLine(b) {
    if (selectedLines.includes(b)) selectedLines = selectedLines.filter(x => x !== b);
    else selectedLines.push(b);
    scheduleCatalogRender();
}
function toggleHeight(b) {
    if (selectedHeights.includes(b)) selectedHeights = selectedHeights.filter(x => x !== b);
    else selectedHeights.push(b);
    scheduleCatalogRender();
}

function clearAllFilters() {
    try { closeFiltersSheet(); } catch(e) {}
    selectedSizes = [];
    selectedColors = [];
    selectedMaterials = [];
    selectedStyles = [];
    selectedBrands = [];
    selectedLines = [];
    selectedHeights = [];
    selectedPriceRanges = [];
    selectedCategory = '';
    selectedGenders = [];
    maxPriceSlider = 1500;
    searchTerm = '';
    const slider = document.getElementById('price-slider');
    if (slider) { slider.value = 1500; }
    const sv = document.getElementById('slider-value');
    if (sv) sv.textContent = '1500';
    document.querySelectorAll('.price-check').forEach(c => { c.checked = false; });
    document.querySelectorAll('.color-row, .color-circle').forEach(c => {
        c.classList.remove('on');
        c.style.outline = 'none';
        c.style.transform = 'scale(1)';
    });
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active-cat'));
    document.querySelectorAll('#brand-list input, #style-list input, #material-list input, #gender-list input').forEach(c => { c.checked = false; });
    ['hero-search-input', 'mobile-search-input', 'header-search-input'].forEach(id => {
        const el = document.getElementById(id); if (el) el.value = '';
    });
    updateSizeGrid('eu');
    try { fillExtraFilters(); } catch (e) {}
    scheduleCatalogRender();
    syncFiltersToURL();
}

function leaveProductView() {
    try { document.title = window.HOME_DOC_TITLE || 'Sneake® Away — compare sneaker prices'; } catch (e) {}

    document.body.classList.remove('product-view');
    const root = document.getElementById('product-page');
    if (root) {
        root.hidden = true;
        root.innerHTML = '';
    }
}
function catalogSearchString(includeProduct) {
    const params = new URLSearchParams();
    if (includeProduct && document.body.classList.contains('product-view')) {
        const openId = new URLSearchParams(location.search).get('p') || new URLSearchParams(location.search).get('id');
        if (openId) params.set('p', openId);
    }
    if (selectedCategory) params.set('cat', selectedCategory);
    if (selectedSizes.length) params.set('size', selectedSizes.join(','));
    if (selectedColors.length) params.set('color', selectedColors.join(','));
    if (selectedMaterials.length) params.set('mat', selectedMaterials.join(','));
    if (searchTerm) params.set('q', searchTerm);
    if (currentSort && currentSort !== 's_pop') params.set('sort', currentSort);
    const qs = params.toString();
    return qs ? ('?' + qs) : (location.pathname || catalogFile());
}
function goBackFromProduct() {
    leaveProductView();
    const url = catalogFile() + (catalogSearchString(false).startsWith('?') ? catalogSearchString(false) : '');
    try { history.pushState({ view: 'catalog' }, '', url === catalogFile() ? catalogFile() : url); } catch (e) {}
    const alive = document.getElementById('products-container') && document.getElementById('products-container').querySelector('.card');
    if (!alive) scheduleCatalogRender();
}
function syncFiltersToURL() {
    try {
        if (document.body.classList.contains('product-view')) return;
        const qs = catalogSearchString(false);
        const next = qs.startsWith('?') ? (location.pathname + qs) : catalogFile();
        history.replaceState({ view: 'catalog' }, '', next);
    } catch (e) {}
}

function loadFiltersFromURL() {
    try {
        const params = new URLSearchParams(location.search);
        selectedCategory = params.get('cat') || '';
        selectedSizes = params.get('size') ? params.get('size').split(',').map(Number).filter(Boolean) : [];
        selectedColors = params.get('color') ? params.get('color').split(',').filter(Boolean) : [];
        selectedMaterials = params.get('mat') ? params.get('mat').split(',').filter(Boolean) : [];
        searchTerm = params.get('q') || '';
        ['hero-search-input', 'header-search-input', 'pdp-search-input', 'mobile-search-input'].forEach(id => {
            const si = document.getElementById(id);
            if (si) si.value = searchTerm;
        });
        currentSort = params.get('sort') || 's_pop';
        selectedGenders = selectedCategory ? [selectedCategory] : [];
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.toggle('active-cat', !!(selectedCategory && l.getAttribute('data-cat') === selectedCategory));
        });
    } catch (e) {}
}

const STORY_SCENES = [
    { t: 'В началото беше…', d: 'Космически взрив в тъмнината.' },
    { t: '…се роди облакът Sneake® Away', d: 'Светеща мъглявина с форма на кец.' },
    { t: 'Той се превърна в астероид…', d: 'Древен надпис Sneake® Away в камъка.' },
    { t: '…и полетя към Земята.', d: 'Огнена опашка през атмосферата.' },
    { t: 'Раздроби се…', d: 'Парчета към четири континента.' },
    { t: '…и се разпръсна по света.', d: 'Пирамиди, джунгли, Колизеум, храмове.' },
    { t: 'Хората ги намериха…', d: 'Фараон, жрец, легионер, воин.' },
    { t: '…някои цивилизации изчезнаха.', d: 'Прах, светкавици, светещи парчета.' },
    { t: '…други създадоха религии около тях.', d: 'Замъци, кораби, дворци.' },
    { t: 'Дойде модерната епоха…', d: 'Улици, неон, маратонки Sneake® Away.' },
    { t: '…и човечеството тръгна към звездите.', d: 'Ракети с логото на борда.' },
    { t: 'Sneake® Away', d: 'Свързващото ниво между минало, настояще и бъдеще.' }
];

function openStory() {
    const dict = langs[currentLang] || langs.en;
    let i = 0;
    const overlay = document.createElement('div');
    overlay.id = 'story-overlay';
    overlay.innerHTML = `
      <div class="story-inner">
        <button type="button" class="story-skip" id="story-skip">${dict.skip_story || 'Skip'}</button>
        <p class="story-title" id="story-title"></p>
        <p class="story-desc" id="story-desc"></p>
        <div class="story-progress"><div class="story-bar" id="story-bar"></div></div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', (langs[currentLang]||langs.en).watch_story || 'Story');
    overlay.setAttribute('tabindex', '-1');
    a11yOpenModal(overlay);
    const title = overlay.querySelector('#story-title');
    const desc = overlay.querySelector('#story-desc');
    const bar = overlay.querySelector('#story-bar');
    let timer;
    const show = () => {
        if (i >= STORY_SCENES.length) { closeStory(); return; }
        const s = STORY_SCENES[i];
        title.textContent = s.t;
        desc.textContent = s.d;
        bar.style.width = ((i + 1) / STORY_SCENES.length * 100) + '%';
        i++;
        timer = setTimeout(show, 2200);
    };
    overlay.querySelector('#story-skip').onclick = closeStory;
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeStory(); });
    show();
    window.__storyTimer = timer;
}
function closeStory() {
    clearTimeout(window.__storyTimer);
    const el = document.getElementById('story-overlay');
    if (el) el.remove();
    a11yCloseModalRestore();
}
function setupStoryButton() {
    const b = document.getElementById('btn-watch-story');
    if (b) b.onclick = openStory;
}

// Hook sync into applyFiltersAndRender


function updateActiveFiltersBadge() {
    const n =
        selectedSizes.length +
        selectedColors.length +
        selectedMaterials.length +
        selectedPriceRanges.length +
        (selectedCategory ? 1 : 0) +
        (searchTerm ? 1 : 0);
    let el = document.getElementById('active-filters-badge');
    if (!el) {
        const side = document.querySelector('.sidebar');
        if (!side) return;
        el = document.createElement('div');
        el.id = 'active-filters-badge';
        el.className = 'active-filters-badge';
        el.onclick = clearAllFilters;
        side.insertBefore(el, side.firstChild);
    }
    if (n > 0) {
        el.style.display = 'flex';
        el.innerHTML = `<span>${n}</span> <span class="t-key" data-key="clear_filters">Clear filters</span>`;
    } else {
        el.style.display = 'none';
    }
}


let productsFull = null;

async function loadProductsLiteRest() {
    if (window.__saRestLoaded) return;
    try {
        const res = await fetch('products-lite.json', { cache: 'force-cache' });
        if (!res.ok) return;
        const more = await res.json();
        if (!Array.isArray(more) || !more.length) return;
        const have = new Set((productsData || []).map(p => String(p.id)));
        const add = more.filter(p => !have.has(String(p.id)));
        if (add.length) productsData = (productsData || []).concat(add);
        _filtCacheKey = '';
        _filtCacheList = null;
        window.__saRestLoaded = true;
        try { buildCatalogIndex(); } catch (e) {}
        try { fillExtraFilters(); fillColorFilters(); fillStyleFilters(); } catch (e) {}
        if (document.body && document.body.classList.contains('product-view')) return;
        try {
            const total = (typeof getFilteredAndSortedProducts === 'function' ? getFilteredAndSortedProducts() : (productsData||[])).length;
            const el = document.getElementById('shown-count');
            if (el && el.parentElement) {
                const strongs = el.parentElement.querySelectorAll('strong');
                if (strongs[1]) strongs[1].textContent = String(total);
            }
        } catch (e) {}
        try { updateWishlistButton(); } catch (e) {}
    } catch (e) {}
}

async function loadProductsFull() {
    if (productsFull) return productsFull;
    try {
        const res = await fetch('products.json', { cache: 'force-cache' });
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length) {
                productsFull = data;
                const by = new Map(data.map(p => [String(p.id), p]));
                (productsData || []).forEach((p, i) => {
                    const f = by.get(String(p.id));
                    if (f) productsData[i] = Object.assign(p, {
                        images: f.images || p.images,
                        variants: f.variants || p.variants,
                        desc: f.desc || p.desc,
                        offers: f.offers || p.offers
                    });
                });
            }
        }
    } catch (e) {}
    return productsFull;
}

let CATALOG_IDX = null;
function inferStyle(p) {
    const b = ((p.style || '') + ' ' + (p.name || '') + ' ' + (p.family || '')).toLowerCase();
    if (/basket|jordan|lebron|kobe|harden|dunk|blazer/.test(b)) return 'basketball';
    if (/run|pegasus|vomero|ultraboost|zoomx|bound/.test(b)) return 'running';
    if (/tennis|court|open/.test(b)) return 'tennis';
    return p.style || 'lifestyle';
}
function buildCatalogIndex() {
    const byBrand = new Map();
    const byCat = new Map();
    const byColor = new Map();
    const byStyle = new Map();
    const bySize = new Map();
    const byDest = new Map();
    const destOpen = [];
    const bySib = new Map();
    (productsData || []).forEach(p => {
        if (!p._sizeSet) p._sizeSet = new Set((p.sizes || []).map(Number));
        const b = p.brand || '';
        if (b) { if (!byBrand.has(b)) byBrand.set(b, []); byBrand.get(b).push(p); }
        const c = p.category || '';
        if (c) { if (!byCat.has(c)) byCat.set(c, []); byCat.get(c).push(p); }
        const st = inferStyle(p);
        p.style = p.style || st;
        if (!byStyle.has(st)) byStyle.set(st, []);
        byStyle.get(st).push(p);
        const blob = ((p.colorway || '') + ' ' + (p.colors || []).join(' ')).toLowerCase();
        Object.keys(COLOR_SWATCH || {}).forEach(k => {
            if (k === 'gray') return;
            if (blob.includes(k) || (k === 'grey' && blob.includes('gray'))) {
                if (!byColor.has(k)) byColor.set(k, []);
                byColor.get(k).push(p);
            }
        });
        const szs = new Set((p.sizes || []).map(Number).filter(n => !isNaN(n)));
        (p.offers || []).forEach(o => (o.sizes || o.sizesInStock || []).forEach(s => {
            const n = Number(s);
            if (!isNaN(n)) szs.add(n);
        }));
        p._sizeSet = szs;
        szs.forEach(n => {
            if (!bySize.has(n)) bySize.set(n, []);
            bySize.get(n).push(p);
        });
        const offers = p.offers || [];
        if (!offers.length) destOpen.push(p);
        else {
            const countries = new Set();
            let open = false;
            offers.forEach(o => {
                const list = o.shipsTo;
                if (!list || !list.length) { open = true; return; }
                list.forEach(cc => countries.add(String(cc).toUpperCase()));
            });
            if (open) destOpen.push(p);
            countries.forEach(cc => {
                if (!byDest.has(cc)) byDest.set(cc, []);
                byDest.get(cc).push(p);
            });
        }
        const sk = catalogModelKey(p) + '::' + genderKey(p);
        if (!bySib.has(sk)) bySib.set(sk, []);
        bySib.get(sk).push(p);
    });
    CATALOG_IDX = { byBrand, byCat, byColor, byStyle, bySize, byDest, destOpen, bySib };
}
function unionFromIndex(map, keys) {
    if (!keys.length || !map) return null;
    const seen = new Set();
    const out = [];
    keys.forEach(k => {
        (map.get(k) || []).forEach(p => {
            if (seen.has(p)) return;
            seen.add(p);
            out.push(p);
        });
    });
    return out;
}
async function loadProducts() {
    let data = null;
    try {
        const res = await fetch('catalog/first.json', { cache: 'force-cache' });
        if (res.ok) {
            const parsed = await res.json();
            if (Array.isArray(parsed) && parsed.length) data = parsed;
        }
    } catch (e) {}
    if (!data) {
        try {
            const res = await fetch('products-lite.json', { cache: 'force-cache' });
            if (res.ok) {
                const parsed = await res.json();
                if (Array.isArray(parsed) && parsed.length) data = parsed;
            }
        } catch (e) {}
    }
    productsData = data && data.length ? data : interleaveByShop(FALLBACK_PRODUCTS || []);
    try { buildCatalogIndex(); } catch (e) {}
    try { fillExtraFilters(); fillColorFilters(); fillStyleFilters(); } catch (e) {}
    window.__saProductsReady = true;
    window.__saRestLoaded = false;
    setTimeout(function () { loadProductsLiteRest(); }, 400);
    window.__saKickFullGallery = function () {
        if (window.__saFullKick) return;
        window.__saFullKick = true;
        loadProductsFull().then(function () {
            try { refreshLookCardImages(); } catch (e) {}
            try { updateWishlistButton(); } catch (e) {}
        });
    };
    setTimeout(function () {
        if (typeof window.__saKickFullGallery === 'function') window.__saKickFullGallery();
    }, 1800);
    window.addEventListener('scroll', function () {
        if (typeof window.__saKickFullGallery === 'function') window.__saKickFullGallery();
    }, { once: true, passive: true });
}
function refreshLookCardImages() {
    if (!document.body || document.body.getAttribute('data-view') !== 'look') return;
    document.querySelectorAll('#products-container .card[data-pid]').forEach(function (card) {
        const p = typeof findProductById === 'function' ? findProductById(card.getAttribute('data-pid')) : null;
        if (!p) return;
        const slot = Number(card.getAttribute('data-look-slot') || 0);
        const url = pickLookImage(p, slot);
        const img = card.querySelector('img.shoe-img-look');
        if (img && url && img.getAttribute('src') !== url) img.setAttribute('src', url);
    });
}
async function loadProductsRest() {
    return;
    if (window.__saRestLoaded) return;
    try {
        const res = await fetch('catalog/rest.json', { cache: 'force-cache' });
        if (!res.ok) return;
        const more = await res.json();
        if (!Array.isArray(more) || !more.length) return;
        const have = new Set((productsData || []).map(p => String(p.id)));
        const add = more.filter(p => !have.has(String(p.id)));
        if (!add.length) return;
        productsData = (productsData || []).concat(add);
        window.__saRestLoaded = true;
        try { buildCatalogIndex(); } catch (e) {}
        try { fillExtraFilters(); fillColorFilters(); fillStyleFilters(); } catch (e) {}
        if (document.body.classList.contains('product-view')) return;
        if (typeof applyFiltersAndRender === 'function') applyFiltersAndRender();
    } catch (e) {}
}
function interleaveByShop(list) {
    if (!Array.isArray(list) || list.length < 2) return list || [];
    const both = [], oxy = [], other = [];
    list.forEach(p => {
        const shops = new Set((p.offers || []).map(o => o.shop));
        if (shops.has('Oxygen') && shops.size > 1) both.push(p);
        else if (shops.has('Oxygen')) oxy.push(p);
        else other.push(p);
    });
    const out = [...both];
    let i = 0, j = 0;
    while (i < other.length || j < oxy.length) {
        if (i < other.length) out.push(other[i++]);
        if (j < oxy.length) out.push(oxy[j++]);
    }
    return out;
}



// === Accessibility helpers ===
let __a11yLastFocus = null;

function a11yOpenModal(modalEl) {
    if (!modalEl) return;
    __a11yLastFocus = document.activeElement;
    modalEl.setAttribute('role', 'dialog');
    modalEl.setAttribute('aria-modal', 'true');
    // focus first close button or modal itself
    const focusable = modalEl.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    setTimeout(() => { (focusable || modalEl).focus?.(); }, 30);
}

function a11yCloseModalRestore() {
    if (__a11yLastFocus && typeof __a11yLastFocus.focus === 'function') {
        try { __a11yLastFocus.focus(); } catch (e) {}
    }
    __a11yLastFocus = null;
}

function setupA11yKeys() {
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (document.getElementById('story-overlay')) { closeStory(); return; }
        if (document.getElementById('quickview-modal')) { closeQuickView(); return; }
        if (document.getElementById('compare-modal')) { closeCompareModal(); return; }
        if (document.getElementById('wishlist-selector-modal')) { closeWishlistSelector(); return; }
        if (document.getElementById('dest-panel')) { closeDestPanel(); return; }
        if (document.body.classList.contains('filters-open')) { closeFiltersSheet(); return; }
        const nav = document.getElementById('main-nav');
        if (nav && nav.classList.contains('open')) closeMobileNav();
    });
}

function renderBrandTicker() {
    const track = document.getElementById('brand-ticker-track');
    if (!track) return;
    const brands = [...new Set((productsData || []).map(p => p.brand).filter(Boolean))].sort();
    if (!brands.length) return;
    const mk = (list) => list.map(b => `<button type="button" onclick="filterBrand('${String(b).replace(/'/g, "\\'")}')">${b}</button>`).join('');
    track.innerHTML = mk(brands) + mk(brands) + mk(brands);
}
function filterBrand(brand) {
    searchTerm = brand;
    const inputs = ['hero-search-input', 'mobile-search-input', 'header-search-input'];
    inputs.forEach(id => { const el = document.getElementById(id); if (el) el.value = brand; });
    scheduleCatalogRender();
    document.querySelector('.products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function openAccountSheet() {
    document.getElementById('account-sheet')?.remove();
    const dict = langs[currentLang] || langs.en;
    document.body.insertAdjacentHTML('beforeend', `
      <div id="account-sheet" class="zoom-overlay" onclick="if(event.target.id==='account-sheet')this.remove()">
        <div class="dest-panel-card" style="max-width:360px;margin:auto;background:var(--card);padding:24px;border-radius:16px;" onclick="event.stopPropagation()">
          <h3 style="margin:0 0 8px">${dict.account_title || 'Account'}</h3>
          <p style="color:var(--gray-text);font-size:0.9rem;">${dict.account_soon || 'Sign in will arrive with saved lists. Wishlist stays on this device for now.'}</p>
          <button type="button" class="select-ui" onclick="document.getElementById('account-sheet').remove()">${dict.close || 'Close'}</button>
        </div>
      </div>`);
}
function rememberViewed(id) {
    try {
        const raw = JSON.parse(localStorage.getItem('sa_recent') || '[]');
        const next = [String(id), ...raw.filter(x => String(x) !== String(id))].slice(0, 8);
        localStorage.setItem('sa_recent', JSON.stringify(next));
    } catch (e) {}
}
function viewedProducts(exceptId) {
    try {
        const ids = JSON.parse(localStorage.getItem('sa_recent') || '[]');
        return ids.map(id => (productsData || []).find(p => String(p.id) === String(id))).filter(p => p && String(p.id) !== String(exceptId)).slice(0, 6);
    } catch (e) { return []; }
}
function moreFromBrand(p, limit) {
    const g = genderKey(p);
    return (productsData || []).filter(x => x.brand === p.brand && String(x.id) !== String(p.id) && genderKey(x) === g).slice(0, limit || 6);
}
function railCards(list, symbol, rate) {
    return list.map(s => {
        let tot = '';
        let sale = false;
        try {
            const off = (s.offers || [])[0];
            tot = off ? Math.round(((off.price || 0) + (off.shipping || 0)) * rate) : '';
            const was = Number((off && off.wasPrice) || s.originalPrice || 0);
            sale = !!(off && was && was > Number(off.price || 0));
        } catch (e) {}
        return `<a class="radar-card" href="index.html?p=${s.id}" onclick="event.preventDefault(); openProduct(${jsId(s.id)})">
            <img src="${s.image}" alt="${s.name}" loading="lazy" width="160" height="120">
            <span class="radar-card-name">${s.name}</span>
            <span class="radar-card-price${sale ? ' is-sale' : ''}">${symbol}${tot}</span>
        </a>`;
    }).join('');
}
function renderRadar() {
    try { renderBrandTicker(); } catch (e) {}
    const row = document.getElementById('radar-row');
    const chips = document.getElementById('radar-chips');
    if (!row || !productsData.length) return;
    const dict = langs[currentLang] || langs.en;
    if (chips) {
        const map = [
            ['men', dict.radar_court || 'Court'],
            ['women', dict.radar_city || 'City'],
            ['kids', dict.radar_kids || 'Kids'],
            ['price', dict.radar_under || 'Under 150']
        ];
        chips.querySelectorAll('.radar-chip').forEach((btn, i) => {
            if (map[i]) btn.textContent = map[i][1];
        });
        if (!chips.dataset.bound) {
            chips.dataset.bound = '1';
            chips.addEventListener('click', (e) => {
                const btn = e.target.closest('.radar-chip');
                if (!btn) return;
                const key = btn.getAttribute('data-radar');
                chips.querySelectorAll('.radar-chip').forEach(b => b.classList.toggle('active', b === btn));
                if (key === 'price') {
                    selectedCategory = '';
                    const slider = document.getElementById('price-range');
                    if (slider) { slider.value = 150; maxPriceSlider = 150; }
                } else {
                    selectedCategory = key;
                }
                scheduleCatalogRender();
                document.getElementById('product-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
    }
    const list = productsData.slice(0, 8);
    const rate = rates[currentCurrency] || 1;
    const symbol = symbols[currentCurrency] || '€';
    row.innerHTML = list.map(p => {
        const ranked = rankedOffers(p);
        const best = ranked && ranked[0];
        const total = best ? Math.round((best._total != null ? best._total : (best.price + (best.shipping || 0))) * rate) : '';
        const shops = (p.offers || []).length;
        return `<button type="button" class="radar-card" onclick="openProduct(${jsId(p.id)})">
            <img src="${p.image}" alt="" loading="lazy" width="160" height="120">
            <span class="radar-card-name">${p.name}</span>
            <span class="radar-card-price">${symbol}${total}</span>
            <span class="radar-card-shops">${shops}</span>
        </button>`;
    }).join('');
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================


window.addEventListener('popstate', () => {
    try {
        const p = new URLSearchParams(location.search).get('p') || new URLSearchParams(location.search).get('id');
        if (p) {
            initProductPage();
        } else {
            if (typeof leaveProductView === 'function') leaveProductView();
            const alive = document.getElementById('products-container')?.querySelector('.card');
            if (!alive) {
                if (typeof loadFiltersFromURL === 'function') loadFiltersFromURL();
                if (typeof applyFiltersAndRender === 'function') scheduleCatalogRender();
            }
        }
    } catch (e) {}
});
window.onload = async () => {
    console.log("✅ Страницата се зареди");
    try { sizeChipSystem = localStorage.getItem('sa_size_sys') || sizeChipSystem || 'eu'; } catch (e) {}
    try {
        const savedSz = JSON.parse(localStorage.getItem('sa_fit_eus') || '[]');
        if (Array.isArray(savedSz) && savedSz.length) selectedSizes = savedSz.map(Number).filter(n => !isNaN(n));
    } catch (e) {}
    if (/product\.html/i.test(location.pathname)) {
        try { await loadProducts(); } catch (e) { console.error('loadProducts', e); productsData = FALLBACK_PRODUCTS; }
        if (!productsData || !productsData.length) productsData = mergeCatalogByModel(FALLBACK_PRODUCTS || []);
        try { setupMobileSearch(); } catch (e) { console.error('search bind', e); }
        try { await initProductPage(); } catch (e) { console.error('initProductPage', e); }
        try { loadShipPrefs(); renderDestChip(); } catch (e) {}
        try { updateUI(); } catch (e) {}
        try { syncHeaderLogo(); } catch (e) {}
        return;
    }
    try {
        const [ship, shopTab, dutyTab, zoneTab, lasts] = await Promise.all([
            fetch('data/shipping.json', { cache: 'no-store' }).then(r => r.ok ? r.json() : null).catch(() => null),
            fetch('data/shops.json', { cache: 'no-store' }).then(r => r.ok ? r.json() : null).catch(() => null),
            fetch('data/duties.json', { cache: 'no-store' }).then(r => r.ok ? r.json() : null).catch(() => null),
            fetch('data/zones.json', { cache: 'no-store' }).then(r => r.ok ? r.json() : null).catch(() => null),
            fetch('data/lasts.json', { cache: 'no-store' }).then(r => r.ok ? r.json() : null).catch(() => null)
        ]);
        if (ship) window.SA_SHIP = ship;
        if (lasts) window.SA_LASTS = lasts;
        if (zoneTab) window.SA_ZONES = zoneTab;
        applyShopTables(shopTab, dutyTab);
    } catch (e) {}
    try { await loadProducts(); } catch (e) { console.error('loadProducts', e); productsData = FALLBACK_PRODUCTS; }
    if (!productsData || !productsData.length) productsData = mergeCatalogByModel(FALLBACK_PRODUCTS || []);
    if (document.getElementById('product-page')) {
        try { await initProductPage(); } catch (e) { console.error('initProductPage early', e); }
    }
    try { loadFiltersFromURL(); } catch (e) { console.error('loadFiltersFromURL', e); }
    try { scheduleCatalogRender(); } catch (e) { console.error('render after load', e); }
    try { updateUI(); } catch (e) { console.error('updateUI', e); }
    try { updateSizeGrid('eu'); } catch (e) { console.error('updateSizeGrid', e); }
    try { setupLoadMore(); } catch (e) { console.error('setupLoadMore', e); }
    try { setupFilters(); } catch (e) { console.error('setupFilters', e); }
    try { initHeroSlider(); } catch (e) { console.error('initHeroSlider', e); }
    try { renderRadar(); } catch (e) { console.error('renderRadar', e); }
    try { restoreCatalogSpot(); } catch (e) {}
    try { fillExtraFilters(); } catch (e) {}
    try { await initProductPage(); } catch (e) { console.error('initProductPage', e); }
    try { setupMobileMenu(); } catch (e) { console.error('setupMobileMenu', e); }
    try { clampPageSizeToDevice(); } catch (e) {}
    try { setupMobileSearch(); } catch (e) { console.error('search bind', e); }
    try { pinMobileTools(); window.addEventListener('resize', pinMobileTools); window.addEventListener('scroll', pinMobileTools, {passive:true}); } catch (e) {}
    try { updateFiltersBadge(); } catch (e) {}
    try { setupA11yKeys(); } catch (e) { console.error('a11y', e); }
    try { setupStoryButton(); } catch (e) { console.error('setupStoryButton', e); }
    try { loadShipPrefs(); renderDestChip(); maybeShowDestGate(); } catch (e) { console.error('dest', e); }
    try {
        const bar = document.getElementById('cookie-bar');
        const ok = document.getElementById('cookie-ok');
        if (bar && !localStorage.getItem('sa_cookie_ok')) bar.hidden = false;
        if (ok && bar) ok.onclick = () => { localStorage.setItem('sa_cookie_ok','1'); bar.hidden = true; };
    } catch (e) {}

    try { detectLocation(); } catch (e) { console.error('detectLocation', e); }
    try { updateWishlistButton(); } catch (e) { console.error('updateWishlistButton', e); }
    try { updateMobileDock(); } catch (e) {}
};


function qvSetCheckCountry(code, productId) {
    qvCheckCountry = code || '';
    closeQuickView();
    showQuickView(productId);
}
function cardSetCheckCountry(code) {
    qvCheckCountry = code || '';
    scheduleCatalogRender();
}

function destChipLabel() {
    const dict = langs[currentLang] || langs.en;
    const mobile = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;
    if (shipMode === 'tome' && currentCountry) {
        return '<i class="fas fa-location-dot dest-globe" aria-hidden="true"></i> ' + currentCountry + (mobile ? '' : ' ▾');
    }
    if (mobile) return '<i class="fas fa-globe dest-globe" aria-hidden="true"></i> WW';
    return '<i class="fas fa-globe dest-globe" aria-hidden="true"></i> ' + (dict.mode_ww || 'Worldwide') + ' ▾';
}

function renderDestChip() {
    const html = destChipLabel();
    ['dest-chip', 'dest-chip-product'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.innerHTML = html;
        el.classList.toggle('dest-chip-icon', false);
        el.onclick = openDestPanel;
    });
    document.querySelectorAll('.qv-check-ship .dest-chip').forEach(el => {
        el.innerHTML = html;
        el.onclick = openDestPanel;
    });
    const btnT = document.getElementById('mode-btn-tome');
    const btnW = document.getElementById('mode-btn-ww');
    if (btnT) btnT.classList.toggle('active', shipMode === 'tome' && !!currentCountry);
    if (btnW) btnW.classList.toggle('active', shipMode !== 'tome' || !currentCountry);
}
function setShipMode(mode) {
    if (mode === 'tome') {
        if (!currentCountry) {
            openDestPanel();
            return;
        }
        shipMode = 'tome';
    } else {
        shipMode = 'ww';
    }
    saveShipPrefs();
    renderDestChip();
    scheduleCatalogRender();
    try { if (document.body.classList.contains('product-view')) initProductPage(); } catch (e) {}
}

function openDestPanel() {
    const existing = document.getElementById('dest-panel');
    if (existing) existing.remove();
    const dict = langs[currentLang] || langs.en;
    const opts = DEST_COUNTRIES.map(c => `<option value="${c.code}" ${currentCountry===c.code?'selected':''}>${c.code} — ${c.name}</option>`).join('');
    document.body.insertAdjacentHTML('beforeend', `
      <div id="dest-panel" class="dest-panel" role="dialog" aria-modal="true">
        <div class="dest-panel-card">
          <h3>${dict.dest_choose}</h3>
          <select id="dest-panel-select">${opts}</select>
          <p class="dest-stars">${dict.dest_note_ww}</p>
          <p class="dest-stars">${dict.dest_note_tome}</p>
          <div class="dest-panel-actions">
            <button type="button" class="dest-btn-primary" onclick="applyDestFromPanel()">${dict.dest_apply}</button>
            <button type="button" class="dest-btn-ghost" onclick="continueWorldwide()">${dict.dest_continue_ww}</button>
          </div>
        </div>
      </div>`);
    a11yOpenModal(document.getElementById('dest-panel'));
}

function applyDestFromPanel() {
    const sel = document.getElementById('dest-panel-select');
    currentCountry = sel && sel.value ? sel.value : currentCountry;
    shipMode = currentCountry ? 'tome' : 'ww';
    saveShipPrefs();
    try { localStorage.setItem('sa_dest_seen','1'); } catch(e) {}
    closeDestPanel();
    renderDestChip();
    scheduleCatalogRender();
    try { if (document.body.classList.contains('product-view')) initProductPage(); } catch (e) {}
}
function continueWorldwide() {
    shipMode = 'ww';
    saveShipPrefs();
    try { localStorage.setItem('sa_dest_seen','1'); } catch(e) {}
    closeDestPanel();
    renderDestChip();
    scheduleCatalogRender();
    try { if (document.body.classList.contains('product-view')) initProductPage(); } catch (e) {}
}
function closeDestPanel() {
    const el = document.getElementById('dest-panel');
    if (el) el.remove();
    a11yCloseModalRestore();
}

function maybeShowDestGate() {
    loadShipPrefs();
    renderDestChip();
    let seen = false;
    try { seen = localStorage.getItem('sa_dest_seen') === '1'; } catch(e) {}
    // Do not block first visit with a modal. Country is opt-in via chip.
}


async function detectLocation() {
    return; // privacy + CSP: no IP lookup
    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        const code = data.country_code;
        const currencyMap = { BG:'EUR', DE:'EUR', FR:'EUR', IT:'EUR', ES:'EUR', US:'USD', GB:'GBP', UK:'GBP', RO:'EUR', GR:'EUR', AT:'EUR', NL:'EUR', BE:'EUR' };
        if (!localStorage.getItem('sa_curr_touched') && code && currencyMap[code]) {
            currentCurrency = currencyMap[code];
            const sel = document.getElementById('curr-select');
            if (sel) sel.value = currentCurrency;
        }
    } catch(e) {}
}




