let cart = [];
let total = 0;
let deferredPrompt;

// 1. إدارة السلة والطلبات
function addToCart(name, price) {
    cart.push({name: name, price: price});
    total += price;
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cartCount').innerText = `السلة: ${cart.length} عناصر`;
    document.getElementById('cartTotal').innerText = `${total} ر.س`;
}

function sendWhatsAppOrder() {
    if(cart.length === 0) {
        alert('الرجاء إضافة أصناف إلى السلة أولاً!');
        return;
    }

    let location = document.getElementById('customerLocation').value.trim();
    if(location === "") {
        alert('الرجاء إدخال موقعك أو اسم الحي لتسهيل عملية التوصيل/الاستلام!');
        return;
    }

    let message = `*طلب جديد من منيو (هدايا بيش للتجارة)*\n\n`;
    
    let itemCounts = {};
    cart.forEach(item => {
        itemCounts[item.name] = (itemCounts[item.name] || 0) + 1;
    });

    message += `*🎁 الأصناف المطلوبة:*\n`;
    for (let name in itemCounts) {
        message += `- ${name} (العدد: ${itemCounts[name]})\n`;
    }

    message += `\n*💰 المجموع الإجمالي:* ${total} ر.س\n`;
    message += `*📍 موقع العميل:* ${location}\n\n`;
    message += `شكراً لتعاملكم معنا!`;

    let encodedMessage = encodeURIComponent(message);
    let whatsappUrl = `https://wa.me/966505305996?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// تبديل الأزرار النشطة في شريط التنقل
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(button => {
    button.addEventListener('click', function() {
        navButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// 2. كود الـ PWA للتعرف وتثبيت التطبيق على الآيفون والـ Android تكتيكياً
window.addEventListener('load', () => {
    // تسجيل السيرفس وركر
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log('Service Worker Registered'));
    }
    
    detectAndShowInstallBanner();
});

function detectAndShowInstallBanner() {
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    
    // إذا كان التطبيق مثبتاً بالفعل فلا داعي لإظهار الإعلان
    if (isStandalone) return;

    const banner = document.getElementById('pwa-install-banner');
    const instructions = document.getElementById('install-instructions');
    const installBtn = document.getElementById('btn-install-now');

    if (isIos) {
        // إذا كان آيفون (iOS لا يدعم التثبيت البرمجي بضغطة زر، بل يحتاج إرشاد العميل)
        banner.style.display = 'block';
        instructions.innerText = 'لتثبيت التطبيق على الآيفون: اضغط على زر المشاركة بالأسفل ⎋ ثم اختر "إضافة إلى الشاشة الرئيسية ⊕".';
        installBtn.style.display = 'none'; // نخفي الزر ونبقي النص الإرشادي
    }
}

// معالجة أنظمة الأندرويد والكروم
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // إظهار البنار للأندرويد
    const banner = document.getElementById('pwa-install-banner');
    banner.style.display = 'block';

    const installBtn = document.getElementById('btn-install-now');
    installBtn.addEventListener('click', () => {
        banner.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
        });
    });
});

function dismissInstall() {
    document.getElementById('pwa-install-banner').style.display = 'none';
}
