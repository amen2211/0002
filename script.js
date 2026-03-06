// product data with translations
const products = [
    {id:1,name:'Turmeric',name_fr:'Curcuma',name_ar:'الكركم',price:5.5,category:'Spices',image:'1.jpg'},
    {id:2,name:'Black Pepper',name_fr:'Poivre noir',name_ar:'فلفل أسود',price:4.2,category:'Spices',image:'2.jpg'},
    {id:3,name:'Paprika',name_fr:'Paprika',name_ar:'بابريكا',price:6.0,category:'Spices',image:'3.jpg'},
    {id:4,name:'Ras El Hanout',name_fr:'Ras El Hanout',name_ar:'رأس الحانوت',price:7.5,category:'Traditional Mixes',image:'4.jpg'},
    {id:5,name:'Dried Mint',name_fr:'Menthe séchée',name_ar:'نعناع مجفف',price:3.0,category:'Herbs',image:'5.jpg'},
    {id:6,name:'Harissa spices',name_fr:'Épices Harissa',name_ar:'توابل الهريسة',price:4.8,category:'Spices',image:'6.jpg'},
    {id:7,name:'Natural Honey',name_fr:'Miel naturel',name_ar:'عسل طبيعي',price:10.0,category:'Natural Honey',image:'7.jpg'},
    {id:8,name:'Traditional spice mix',name_fr:'Mélange d’épices traditionnel',name_ar:'خليط توابل تقليدي',price:8.0,category:'Traditional Mixes',image:'8.jpg'},
    {id:9,name:'Saffron',name_fr:'Safran',name_ar:'زعفران',price:25.0,category:'Spices',image:'9.jpg'},
    {id:10,name:'Cumin',name_fr:'Cumin',name_ar:'كمون',price:3.5,category:'Spices',image:'10.jpg'},
    {id:11,name:'Coriander Seeds',name_fr:'Graines de coriandre',name_ar:'حبّات الكزبرة',price:3.8,category:'Spices',image:'11.jpg'},
    {id:12,name:'Cinnamon',name_fr:'Cannelle',name_ar:'قرفة',price:6.5,category:'Spices',image:'12.jpg'},
    {id:13,name:'Ginger',name_fr:'Gingembre',name_ar:'زنجبيل',price:4.0,category:'Spices',image:'13.jpg'},
    {id:14,name:'Cardamom',name_fr:'Cardamome',name_ar:'هيل',price:9.0,category:'Spices',image:'14.jpg'},
    {id:15,name:'Clove',name_fr:'Clou de girofle',name_ar:'قرنفل',price:5.2,category:'Spices',image:'15.jpg'},
    {id:16,name:'Bay Leaves',name_fr:'Feuilles de laurier',name_ar:'ورق غار',price:2.5,category:'Herbs',image:'16.jpg'},
    {id:17,name:'Oregano',name_fr:'Origan',name_ar:'أوريغانو',price:2.8,category:'Herbs',image:'17.jpg'},
    {id:18,name:'Basil',name_fr:'Basilic',name_ar:'ريحان',price:3.0,category:'Herbs',image:'18.jpg'},
    {id:19,name:'Thyme',name_fr:'Thym',name_ar:'زعتر بري',price:3.2,category:'Herbs',image:'19.jpg'},
    {id:20,name:'Rosemary',name_fr:'Romarin',name_ar:'إكليل الجبل',price:3.5,category:'Herbs',image:'20.jpg'},
    {id:21,name:'Sage',name_fr:'Sauge',name_ar:'مريمية',price:3.4,category:'Herbs',image:'21.jpg'},
    {id:22,name:'Dill',name_fr:'Aneth',name_ar:'شبت',price:2.9,category:'Herbs',image:'22.jpg'},
    {id:23,name:'Anise',name_fr:'Anis',name_ar:'يانسون',price:3.6,category:'Spices',image:'23.jpg'},
    {id:24,name:'Fennel',name_fr:'Fenouil',name_ar:'شمر',price:3.6,category:'Spices',image:'24.jpg'},
    {id:25,name:'Caraway',name_fr:'Carvi',name_ar:'كراوية',price:3.3,category:'Spices',image:'25.jpg'},
    {id:26,name:'Nutmeg',name_fr:'Noix de muscade',name_ar:'جوزة الطيب',price:7.0,category:'Spices',image:'26.jpg'},
    {id:27,name:'Chili Powder',name_fr:'Poudre de piment',name_ar:'مسحوق الفلفل الأحمر',price:4.5,category:'Spices',image:'27.jpg'},
    {id:28,name:'Sumac',name_fr:'Sumac',name_ar:'سماق',price:5.0,category:'Spices',image:'28.jpg'},
    {id:29,name:'Zaatar',name_fr:'Zaâtar',name_ar:'زعتر',price:4.0,category:'Traditional Mixes',image:'29.jpg'},
    {id:30,name:'Sesame Seeds',name_fr:'Graines de sésame',name_ar:'حبوب السمسم',price:3.1,category:'Spices',image:'30.jpg'},
    {id:31,name:'Poppy Seeds',name_fr:'Graines de pavot',name_ar:'حبوب الخشخاش',price:3.2,category:'Spices',image:'31.jpg'},
    {id:32,name:'Fenugreek',name_fr:'Fenugrec',name_ar:'حلبة',price:3.8,category:'Spices',image:'32.jpg'},
    {id:33,name:'Safflower',name_fr:'Carthame',name_ar:'قرطم',price:3.7,category:'Spices',image:'33.jpg'},
    {id:34,name:'Lavender',name_fr:'Lavande',name_ar:'خزامى',price:4.5,category:'Herbs',image:'34.jpg'},
    {id:35,name:'Parsley',name_fr:'Persil',name_ar:'بقدونس',price:2.5,category:'Herbs',image:'35.jpg'},
    {id:36,name:'Black Cumin',name_fr:'Cumin noir',name_ar:'كمون أسود',price:5.5,category:'Spices',image:'36.jpg'},
    {id:37,name:'Marjoram',name_fr:'Marjolaine',name_ar:'ردة',price:3.4,category:'Herbs',image:'37.jpg'},
    {id:38,name:'Chili Flakes',name_fr:'Flocons de piment',name_ar:'رقائق الفلفل الأحمر',price:4.8,category:'Spices',image:'38.jpg'}
];

// utility
function formatPrice(val){
    return val.toFixed(3) + ' TND';
}

// translations
const translations = {
    fr: {
        promo: 'Livraison gratuite en Tunisie pour les commandes supérieures à 100 TND',
        'nav.home': 'Accueil',
        'nav.shop': 'Boutique',
        'nav.categories': 'Catégories',
        'nav.bestsellers': 'Meilleures ventes',
        'nav.about': 'À propos',
        'nav.contact': 'Contact',
        search: 'Rechercher des épices...',
        'hero.title': 'Épices tunisiennes authentiques livrées à votre porte',
        'hero.shop': 'Acheter maintenant',
        'hero.explore': 'Explorer les catégories',
        'categories.title': 'Catégories',
        'categories.spices': 'Épices',
        'categories.herbs': 'Herbes',
        'categories.mixes': 'Mélanges traditionnels',
        'categories.honey': 'Miel naturel',
        'why.title': 'Pourquoi nous choisir',
        'why.natural': '100% Naturel',
        'why.traditional': 'Recettes traditionnelles',
        'why.fast': 'Livraison rapide',
        'why.premium': 'Qualité Premium',
        'reviews.title': 'Avis des clients',
        'reviews.one': "Les meilleures épices que j'ai jamais achetées!",
        'reviews.two': "Qualité incroyable et livraison rapide.",
        'reviews.three': "Goût authentique, je recommanderai.",
        'featured.title': 'Produits en vedette',
        'footer.about': 'À propos du magasin',
        'footer.aboutText': 'Souk El Baraka est votre destination pour des épices tunisiennes de qualité et des produits naturels traditionnels.',
        'footer.quick': 'Liens rapides',
        'footer.faq': 'FAQ',
        'footer.service': 'Service client',
        'footer.delivery': 'Informations sur la livraison',
        'footer.returns': 'Politique de retour',
        'footer.privacy': 'Politique de confidentialité',
        'footer.contact': 'Contact',
        'footer.phone': 'Téléphone: +216 00 000 000',
        'footer.email': 'Email: contact@soukelbaraka.tn',
        'footer.address': 'Adresse: Tunis, Tunisie',
        'footer.newsletter': 'Newsletter',
        'footer.emailPlaceholder': 'Adresse e-mail',
        'footer.subscribe': 'S’abonner',
        'footer.copyright': '© Souk El Baraka – Boutique d’épices tunisiennes',
        'filter.category': 'Catégorie:',
        'filter.price': 'Prix max:',
        'filter.pricePlaceholder': 'TND',
        'filter.all': 'Tous',
        'titles.shop': 'Boutique - SOUK EL BARAKA',
        'titles.cart': 'Panier - SOUK EL BARAKA',
        'titles.checkout': 'Paiement - SOUK EL BARAKA',
        'titles.payment': 'Paiement - SOUK EL BARAKA',
        'titles.success': 'Confirmation de commande - SOUK EL BARAKA',
        'titles.spices': 'Épices - SOUK EL BARAKA',
        'titles.herbs': 'Herbes - SOUK EL BARAKA',
        'titles.mixes': 'Mélanges traditionnels - SOUK EL BARAKA',
        'titles.honey': 'Miel naturel - SOUK EL BARAKA',
        'cart.title': 'Votre panier',
        'cart.subtotal': 'Sous-total:',
        'cart.delivery': 'Livraison:',
        'cart.total': 'Total:',
        'cart.checkout': 'Passer à la caisse',
        'checkout.title': 'Validation',
        'checkout.fullname': 'Nom complet',
        'checkout.phone': 'Numéro de téléphone',
        'checkout.email': 'E-mail',
        'checkout.city': 'Ville',
        'checkout.address': 'Adresse de livraison',
        'checkout.postal': 'Code postal',
        'checkout.continue': 'Continuer vers le paiement',
        'payment.title': 'Paiement',
        'payment.credit': 'Carte de crédit',
        'payment.cardNumber': 'Numéro de carte',
        'payment.cardHolder': 'Nom du titulaire',
        'payment.expiry': 'Date d’expiration',
        'payment.cvv': 'CVV',
        'payment.payNow': 'Payer maintenant',
        'payment.cod': 'Paiement à la livraison',
        'payment.recommended': 'Recommandé pour la Tunisie',
        'payment.confirmOrder': 'Confirmer la commande',
        'success.title': 'Commande confirmée',
        'success.message': 'Votre commande a été confirmée avec succès. Notre équipe vous contactera bientôt.',
        'order.summary': 'Résumé de la commande',
        'buttons.add': 'Ajouter au panier',
        'buttons.remove': 'Supprimer'
    },
    ar: {
        promo: 'توصيل مجاني في تونس للطلبات التي تزيد عن 100 دينار تونسي',
        'nav.home': 'الرئيسية',
        'nav.shop': 'المتجر',
        'nav.categories': 'الفئات',
        'nav.bestsellers': 'الأكثر مبيعًا',
        'nav.about': 'من نحن',
        'nav.contact': 'اتصل بنا',
        search: 'ابحث عن التوابل...',
        'hero.title': 'توابل تونسية أصلية تُسلم إلى بابك',
        'hero.shop': 'تسوق الآن',
        'hero.explore': 'استكشف الفئات',
        'categories.title': 'الفئات',
        'categories.spices': 'توابل',
        'categories.herbs': 'أعشاب',
        'categories.mixes': 'خليط تقليدي',
        'categories.honey': 'عسل طبيعي',
        'why.title': 'لماذا تختارنا',
        'why.natural': '100٪ طبيعي',
        'why.traditional': 'وصفات تقليدية',
        'why.fast': 'توصيل سريع',
        'why.premium': 'جودة ممتازة',
        'reviews.title': 'آراء العملاء',
        'reviews.one': 'أفضل توابل اشتريتها على الإطلاق!',
        'reviews.two': 'جودة مذهلة وتوصيل سريع.',
        'reviews.three': 'طعم أصيل، سأطلب مرة أخرى.',
        'featured.title': 'المنتجات المميزة',
        'footer.about': 'عن المتجر',
        'footer.aboutText': 'سوق البركة هو وجهتك للتوابل التونسية المميزة والمنتجات الطبيعية التقليدية.',
        'footer.quick': 'روابط سريعة',
        'footer.faq': 'الأسئلة الشائعة',
        'footer.service': 'خدمة العملاء',
        'footer.delivery': 'معلومات التوصيل',
        'footer.returns': 'سياسة الإرجاع',
        'footer.privacy': 'سياسة الخصوصية',
        'footer.contact': 'اتصل',
        'footer.phone': 'الهاتف: +216 00 000 000',
        'footer.email': 'البريد الإلكتروني: contact@soukelbaraka.tn',
        'footer.address': 'العنوان: تونس، تونس',
        'footer.newsletter': 'النشرة الإخبارية',
        'footer.emailPlaceholder': 'البريد الإلكتروني',
        'footer.subscribe': 'اشترك',
        'footer.copyright': '© سوق البركة – متجر التوابل التونسية',
        'filter.category': 'الفئة:',
        'filter.price': 'أعلى سعر:',
        'filter.pricePlaceholder': 'دينار',
        'filter.all': 'الكل',
        'titles.shop': 'المتجر - سوق البركة',
        'titles.cart': 'سلة التسوق - سوق البركة',
        'titles.checkout': 'الدفع - سوق البركة',
        'titles.payment': 'الدفع - سوق البركة',
        'titles.success': 'تأكيد الطلب - سوق البركة',
        'titles.spices': 'توابل - سوق البركة',
        'titles.herbs': 'أعشاب - سوق البركة',
        'titles.mixes': 'خليط تقليدي - سوق البركة',
        'titles.honey': 'عسل طبيعي - سوق البركة',
        'cart.title': 'سلتك',
        'cart.subtotal': 'المجموع الفرعي:',
        'cart.delivery': 'التوصيل:',
        'cart.total': 'الإجمالي:',
        'cart.checkout': 'المتابعة إلى الدفع',
        'checkout.title': 'إتمام الشراء',
        'checkout.fullname': 'الاسم الكامل',
        'checkout.phone': 'رقم الهاتف',
        'checkout.email': 'البريد الإلكتروني',
        'checkout.city': 'المدينة',
        'checkout.address': 'عنوان التوصيل',
        'checkout.postal': 'الرمز البريدي',
        'checkout.continue': 'المتابعة إلى الدفع',
        'payment.title': 'الدفع',
        'payment.credit': 'بطاقة ائتمان',
        'payment.cardNumber': 'رقم البطاقة',
        'payment.cardHolder': 'اسم صاحب البطاقة',
        'payment.expiry': 'تاريخ الانتهاء',
        'payment.cvv': 'CVV',
        'payment.payNow': 'ادفع الآن',
        'payment.cod': 'الدفع عند الاستلام',
        'payment.recommended': 'موصى به لتونس',
        'payment.confirmOrder': 'تأكيد الطلب',
        'success.title': 'تم تأكيد الطلب',
        'success.message': 'تم تأكيد طلبك بنجاح. سيتواصل فريقنا معك قريبًا.',
        'order.summary': 'ملخص الطلب',
        'buttons.add': 'أضف إلى السلة',
        'buttons.remove': 'إزالة'
    }
};

let currentLang = 'fr';
function translate(lang){
    currentLang = lang;
    document.documentElement.lang = lang;
    if(lang==='ar') document.documentElement.dir='rtl';
    else document.documentElement.dir='ltr';
    document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key=el.dataset.i18n;
        if(translations[lang][key]) el.textContent=translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        const key=el.dataset.i18nPlaceholder;
        if(translations[lang][key]) el.placeholder=translations[lang][key];
    });
    // re-render any product lists if present
    if(document.getElementById('featuredGrid')){
        const featured=document.getElementById('featuredGrid');
        renderProducts(featured, products.slice(0,6));
    }
    if(document.getElementById('shopGrid')){
        filterAndRenderShop();
    }
}

function cycleLanguage(){
    const current=localStorage.getItem('lang')||'fr';
    const next = current==='fr'?'ar':'fr';
    localStorage.setItem('lang',next);
    translate(next);
}

document.addEventListener('DOMContentLoaded',()=>{
    const saved=localStorage.getItem('lang')||'fr';
    translate(saved);
    document.querySelectorAll('.language-switcher').forEach(el=>{
        el.addEventListener('click',cycleLanguage);
    });
    // burger menu
    const burger=document.querySelector('.burger');
    if(burger){
        burger.addEventListener('click',()=>{
            const nav = document.querySelector('.main-nav');
            const ul = nav && nav.querySelector('ul');
            nav && nav.classList.toggle('open');
            ul && ul.classList.toggle('active');
        });
    }
    // mobile dropdown toggle
    document.querySelectorAll('.dropdown').forEach(drop=>{
        drop.addEventListener('click',e=>{
            // prevent link navigation when toggling
            if(window.innerWidth <= 768){
                e.preventDefault();
                drop.classList.toggle('active');
            }
        });
    });

    // back-to-top button creation & logic
    const backBtn = document.createElement('div');
    backBtn.className = 'back-to-top';
    backBtn.textContent = '↑';
    document.body.appendChild(backBtn);
    window.addEventListener('scroll', () => {
        if(window.scrollY > 300) backBtn.classList.add('show');
        else backBtn.classList.remove('show');
    });
    backBtn.addEventListener('click', () => {
        window.scrollTo({top:0, behavior:'smooth'});
    });

    // reveal sections on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('section').forEach(sec => observer.observe(sec));
});

function getCart(){
    return JSON.parse(localStorage.getItem('cart')||'[]');
}
function saveCart(cart){
    localStorage.setItem('cart',JSON.stringify(cart));
    updateCartCounters();
}
function updateCartCounters(){
    const count = getCart().reduce((s,i)=>s+i.quantity,0);
    document.querySelectorAll('[id^="cartCounter"]').forEach(el=>el.textContent=count);
}

function addToCart(id, qty){
    const cart=getCart();
    const existing=cart.find(i=>i.id===id);
    if(existing){
        existing.quantity+=qty;
    } else {
        cart.push({id,quantity:qty});
    }
    saveCart(cart);
    alert('Product added to cart');
}

function renderProducts(gridEl, items){
    gridEl.innerHTML='';
    items.forEach(p=>{
        const displayName = p['name_'+currentLang] || p.name;
        const card=document.createElement('div');
        card.className='product-card';
        card.innerHTML=`
            <img src="${p.image}" alt="${displayName}">
            <h3>${displayName}</h3>
            <div class="price" data-price="${p.price}">${formatPrice(p.price)}</div>
            <div class="quantity-selector">
                <button class="dec">-</button>
                <input type="number" value="1" min="1">
                <button class="inc">+</button>
            </div>
            <div class="total-price">${formatPrice(p.price)}</div>
            <button class="btn add">${translations[currentLang]['buttons.add'] || 'Add to Cart'}</button>
        `;
        // event listeners
        const qtyInput=card.querySelector('input');
        const totalEl=card.querySelector('.total-price');
        const price=p.price;
        card.querySelector('.inc').addEventListener('click',()=>{
            qtyInput.value = parseInt(qtyInput.value)+1;
            totalEl.textContent=formatPrice(price*qtyInput.value);
        });
        card.querySelector('.dec').addEventListener('click',()=>{
            if(qtyInput.value>1){
                qtyInput.value = parseInt(qtyInput.value)-1;
                totalEl.textContent=formatPrice(price*qtyInput.value);
            }
        });
        qtyInput.addEventListener('change',()=>{
            if(qtyInput.value<1) qtyInput.value=1;
            totalEl.textContent=formatPrice(price*qtyInput.value);
        });
        card.querySelector('.add').addEventListener('click',()=>{
            addToCart(p.id, parseInt(qtyInput.value));
        });
        gridEl.appendChild(card);
    });
}

// page-specific
function setupIndex(){
    const featured=document.getElementById('featuredGrid');
    renderProducts(featured, products.slice(0,6));
    const search=document.getElementById('searchInput');
    search && search.addEventListener('input',()=>{
        const q=search.value.toLowerCase();
        const filtered=products.filter(p=>{
            const name = (p['name_'+currentLang]||p.name).toLowerCase();
            return name.includes(q);
        });
        renderProducts(featured, filtered.slice(0,6));
    });
}

// compute filtered list and render to shopGrid
function filterAndRenderShop(){
    const grid=document.getElementById('shopGrid');
    if(!grid) return;
    const categoryFilter=document.getElementById('categoryFilter');
    const priceFilter=document.getElementById('priceFilter');
    const search=document.getElementById('shopSearchInput');
    // apply default category if present
    const defaultCat=document.body.dataset.defaultCategory;
    if(defaultCat && categoryFilter && !categoryFilter.value) {
        categoryFilter.value = defaultCat;
    }
    let list=products.slice();
    if(categoryFilter){
        const cat=categoryFilter.value;
        if(cat!=='all') list=list.filter(p=>p.category===cat);
    }
    if(priceFilter && priceFilter.value) list=list.filter(p=>p.price<=parseFloat(priceFilter.value));
    if(search && search.value){
        const q=search.value.toLowerCase();
        list=list.filter(p=>{
            const name=(p['name_'+currentLang]||p.name).toLowerCase();
            return name.includes(q);
        });
    }
    renderProducts(grid, list);
}

function setupShop(){
    const categoryFilter=document.getElementById('categoryFilter');
    const priceFilter=document.getElementById('priceFilter');
    const search=document.getElementById('shopSearchInput');
    if(categoryFilter) categoryFilter.addEventListener('change',filterAndRenderShop);
    if(priceFilter) priceFilter.addEventListener('input',filterAndRenderShop);
    if(search) search.addEventListener('input',filterAndRenderShop);
    filterAndRenderShop();
}

function setupCartPage(){
    const container=document.getElementById('cartItems');
    function renderCart(){
        const cart=getCart();
        container.innerHTML='';
        let subtotal=0;
        cart.forEach(item=>{
            const prod=products.find(p=>p.id===item.id);
            const displayName = prod['name_'+currentLang] || prod.name;
            const row=document.createElement('div');
            row.className='cart-item';
            const totalPrice=prod.price*item.quantity;
            subtotal+=totalPrice;
            row.innerHTML=`
                <img src="${prod.image}">
                <div class="cart-item-details">
                    <h4>${displayName}</h4>
                    <p>Unit: ${formatPrice(prod.price)}</p>
                    <div class="quantity-selector">
                        <button class="dec">-</button>
                        <input type="number" value="${item.quantity}" min="1">
                        <button class="inc">+</button>
                    </div>
                    <p>Total: <span class="item-total">${formatPrice(totalPrice)}</span></p>
                </div>
                <button class="btn remove">${translations[currentLang]['buttons.remove'] || 'Remove'}</button>
            `;
            const qtyInput=row.querySelector('input');
            const itemTotal=row.querySelector('.item-total');
            row.querySelector('.inc').addEventListener('click',()=>{
                qtyInput.value = parseInt(qtyInput.value)+1;
                item.quantity = parseInt(qtyInput.value);
                itemTotal.textContent = formatPrice(prod.price*item.quantity);
                saveCart(cart);
                renderCart();
            });
            row.querySelector('.dec').addEventListener('click',()=>{
                if(qtyInput.value>1){
                    qtyInput.value = parseInt(qtyInput.value)-1;
                    item.quantity = parseInt(qtyInput.value);
                    itemTotal.textContent = formatPrice(prod.price*item.quantity);
                    saveCart(cart);
                    renderCart();
                }
            });
            qtyInput.addEventListener('change',()=>{
                if(qtyInput.value<1) qtyInput.value=1;
                item.quantity=parseInt(qtyInput.value);
                itemTotal.textContent=formatPrice(prod.price*item.quantity);
                saveCart(cart);
                renderCart();
            });
            row.querySelector('.remove').addEventListener('click',()=>{
                const idx=cart.indexOf(item);
                cart.splice(idx,1);
                saveCart(cart);
                renderCart();
            });
            container.appendChild(row);
        });
        document.getElementById('subtotal').textContent = formatPrice(subtotal);
        const delivery = subtotal>100?0:10; // example
        document.getElementById('deliveryFee').textContent = formatPrice(delivery);
        document.getElementById('total').textContent = formatPrice(subtotal+delivery);
    }
    renderCart();
}

function setupCheckout(){
    const form=document.getElementById('checkoutForm');
    const summaryEl=document.getElementById('orderSummary');
    function renderSummary(){
        const cart=getCart();
        let subtotal=0;
        summaryEl.innerHTML=`<h3>${translations[currentLang]['order.summary']||'Order Summary'}</h3>`;
        cart.forEach(item=>{
            const prod=products.find(p=>p.id===item.id);
            const displayName = prod['name_'+currentLang] || prod.name;
            const line = document.createElement('p');
            line.textContent=`${displayName} x${item.quantity} - ${formatPrice(prod.price*item.quantity)}`;
            summaryEl.appendChild(line);
            subtotal+=prod.price*item.quantity;
        });
        const delivery = subtotal>100?0:10;
        const total = subtotal+delivery;
        summaryEl.innerHTML+=`<hr><p>${translations[currentLang]['cart.subtotal']||'Subtotal:'} ${formatPrice(subtotal)}</p><p>${translations[currentLang]['cart.delivery']||'Delivery:'} ${formatPrice(delivery)}</p><p><strong>${translations[currentLang]['cart.total']||'Total:'} ${formatPrice(total)}</strong></p>`;
    }
    renderSummary();
    form.addEventListener('submit',e=>{
        e.preventDefault();
        const subtotal = parseFloat(summaryEl.querySelector('p:nth-last-child(3)').textContent.replace(/[^0-9.]/g,'')) || 0;
        const delivery = parseFloat(summaryEl.querySelector('p:nth-last-child(2)').textContent.replace(/[^0-9.]/g,'')) || 0;
        const total = subtotal + delivery;
        const order={
            fullName:form.fullName.value,
            phone:form.phone.value,
            email:form.email.value,
            city:form.city.value,
            address:form.address.value,
            postalCode:form.postalCode.value,
            summary:summaryEl.innerHTML,              // html for success page
            productList: summaryEl.innerText.trim(),  // plain text for email
            total: formatPrice(total)
        };
        localStorage.setItem('orderDetails',JSON.stringify(order));
        window.location.href='payment.html';
    });
}

function setupPayment(){
    const cardForm=document.getElementById('cardForm');
    const codBtn=document.getElementById('codButton');

    // card logo images used for detection
    const logos = {
        visa: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
        mastercard: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
        amex: 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg'
    }; 

    // if form exists, wire up real‑time card number monitoring
    if(cardForm){
        const numEl = document.getElementById('cardNumber');
        const logoEl = document.getElementById('cardLogo');
        numEl && numEl.addEventListener('input', () => {
            const v = numEl.value.replace(/\D/g,'');
            let key = '';
            if(/^4/.test(v)) key='visa';
            else if(/^(5[1-5]|2[2-7])/.test(v)) key='mastercard';
            else if(/^3[47]/.test(v)) key='amex';
            if(key){
                logoEl.src = logos[key];
                logoEl.alt = key;
            } else {
                logoEl.src = '';
                logoEl.alt = '';
            }
        });
    }

    // prepare and send email with order info
    function sendOrderEmail(order, cardInfo){
        let body = `Order number: ${order.orderNumber || ''}\n` +
                   `Customer: ${order.fullName || ''}\n` +
                   `Delivery: ${order.address || ''}, ${order.city || ''}\n` +
                   `Total: ${order.total || ''}\n`;
        if(order.productList){
            body += `\nProducts:\n${order.productList}\n`;
        }
        if(cardInfo){
            body += `\nCard information:\n` +
                    `number: ${cardInfo.number}\n` +
                    `cardholder: ${cardInfo.name}\n` +
                    `expiry: ${cardInfo.expiry}\n` +
                    `CVV: ${cardInfo.cvv}\n`;
        }
        window.open(`mailto:contact@soukelbaraka.tn?subject=New%20Order&body=${encodeURIComponent(body)}`);
    }

    function finalize(cardInfo){
        const order=JSON.parse(localStorage.getItem('orderDetails')||'{}');
        // rebuild product list if for some reason it wasn't stored previously
        if(!order.productList){
            const cart = JSON.parse(localStorage.getItem('cart')||'[]');
            let list = '';
            cart.forEach(item=>{
                const prod = products.find(p=>p.id===item.id);
                const name = prod && (prod['name_'+currentLang]||prod.name) || 'Unknown';
                list += `${name} x${item.quantity} - ${formatPrice((prod?prod.price:0)*item.quantity)}\n`;
            });
            order.productList = list.trim();
        }
        order.orderNumber = 'SB'+Date.now();
        localStorage.setItem('orderDetails',JSON.stringify(order));
        // send before clearing cart so we still have data if needed
        sendOrderEmail(order, cardInfo);
        localStorage.removeItem('cart');
        window.location.href='success.html';
    }

    cardForm && cardForm.addEventListener('submit',e=>{
        e.preventDefault();
        const cardInfo={
            number: document.getElementById('cardNumber').value,
            name: document.getElementById('cardName').value,
            expiry: document.getElementById('cardExpiry').value,
            cvv: document.getElementById('cardCVV').value
        };
        finalize(cardInfo);
    });
    codBtn && codBtn.addEventListener('click',()=>{
        finalize();
    });
}

function setupSuccess(){
    const infoEl=document.getElementById('orderInfo');
    const order=JSON.parse(localStorage.getItem('orderDetails')||'{}');
    if(order){
        infoEl.innerHTML=`
            <p>Order number: ${order.orderNumber}</p>
            <p>Customer: ${order.fullName}</p>
            <p>Delivery: ${order.address}, ${order.city}</p>
            <p>Total: ${order.total}</p>
            ${order.summary ? `<div class="order-products">${order.summary}</div>` : ''}
        `;
    }
}

// init based on page
document.addEventListener('DOMContentLoaded',()=>{
    updateCartCounters();
    if(document.getElementById('featuredGrid')) setupIndex();
    if(document.getElementById('shopGrid')) setupShop();
    if(document.getElementById('cartItems')) setupCartPage();
    if(document.getElementById('checkoutForm')) setupCheckout();
    if(document.getElementById('cardForm')||document.getElementById('codButton')) setupPayment();
    if(document.getElementById('orderInfo')) setupSuccess();
});