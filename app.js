let cart = [];
let total = 0;
let userCoordinatesLink = ""; 
let deferredPrompt;

// إضافة المنتجات وحساب السعر بدقة
function addToCart(name, price) {
    cart.push({name: name, price: price});
    total += price;
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cartCount').innerText = `السلة: ${cart.length} عناصر`;
    document.getElementById('cartTotal').innerText = `${total} ر.س`;
}

// جلب موقع العميل عبر الـ GPS لجواله
function getLocation() {
    const statusDiv = document.getElementById('geo-status');
    if (!navigator.geolocation) {
        statusDiv.style.color = "red";
        statusDiv.innerText = "متصفحك لا يدعم تحديد الموقع التلقائي.";
        return;
    }
    statusDiv.style.color = "orange";
    statusDiv.innerText = "جاري تحديد موقعك الحالي...";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            userCoordinatesLink = `https://maps.google.com/?q=${lat},${lng}`;
            statusDiv.style.color = "green";
            statusDiv.innerText = "🎯 تم تحديد موقعك بنجاح وسيتم إرساله في الرسالة!";
        },
        (error) => {
            statusDiv.style.color = "red";
            statusDiv.innerText = "فشل تحديد الموقع. تأكد من تفعيل الـ GPS في جوالك.";
        }
    );
}

function sendWhatsAppOrder() {
    if(cart.length === 0) {
        alert('الرجاء إضافة أصناف إلى السلة أولاً!');
        return;
    }

    let textLocation = document.getElementById('customerLocation').value.trim();
    
    // التحقق من أن العميل اختار تحديد تلقائي أو كتب عنوانه يدوياً
    if(textLocation === "" && userCoordinatesLink === "") {
        alert('الرجاء تحديد موقعك تلقائياً أو كتابة العنوان يدوياً لتسهيل التوصيل!');
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

    message += `\n*💰 المجموع الإجمالي الفعلي:* ${total} ر.س\n`;
    
    if(userCoordinatesLink !== "") {
        message += `*📍 موقع الخريطة (GPS):* ${userCoordinatesLink}\n`;
    }
    if(textLocation !== "") {
        message += `*🏠 تفاصيل العنوان المكتوب:* ${textLocation}\n`;
    }

    message += `\nشكراً لتعاملكم معنا!`;

    let encodedMessage = encodeURIComponent(message);
    let whatsappUrl = `https://wa.me/966505305996?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// كود الـ PWA لدعوة التثبيت
window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(() => console.log('SW Registered'));
    }
    detectAndShowInstallBanner();
});

function detectAndShowInstallBanner() {
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    
    if (isStandalone) return;

    const banner = document.getElementById('pwa-install-banner');
    const instructions = document.getElementById('install-instructions');
    const installBtn = document.getElementById('btn-install-now');

    if (isIos) {
        banner.style.display = 'block';
        instructions.innerText = 'لتثبيت التطبيق على الآيفون: اضغط على زر المشاركة بالأسفل ⎋ ثم اختر "إضافة إلى الشاشة الرئيسية ⊕".';
        installBtn.style.display = 'none';
    }
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const banner = document.getElementById('pwa-install-banner');
    banner.style.display = 'block';

    document.getElementById('btn-install-now').addEventListener('click', () => {
        banner.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt = null;
    });
});

function dismissInstall() {
    document.getElementById('pwa-install-banner').style.display = 'none';
}
