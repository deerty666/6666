// ==========================================
// 1️⃣ الشاشة الترحيبية (تختفي بعد 5 ثوانٍ)
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    // نحدد عنصر الشاشة الترحيبية في الصفحة
    const splash = document.getElementById('splash-screen');
    if (splash) {
        setTimeout(() => {
            splash.style.opacity = '0';
            setTimeout(() => {
                splash.style.display = 'none';
            }, 500); // وقت إضافي لتأثير الاختفاء السلس
        }, 5000); // الانتظار لمدة 5 ثوانٍ كاملة
    }
});

// ==========================================
// 2️⃣ إرسال استفسار مباشر إلى الواتساب
// ==========================================
function askAboutProduct(productName) {
    // صياغة رسالة واضحة للمنتج المختار
    let message = `*استفسار عن منتج من (هدايا بيش للتجارة)*\n\n`;
    message += `السلام عليكم، أود الاستفسار عن تفاصيل وتوفر هذا المنتج:\n`;
    message += `🎁 *${productName}*\n\n`;
    message += `أرجو إفادتي بالسعر والمدة المطلوبة للتجهيز. شكراً لكم!`;

    // ترميز الرسالة بشكل آمن للروابط
    let encodedMessage = encodeURIComponent(message);
    
    // رابط الواتساب المباشر مع رقمك
    let whatsappUrl = `https://wa.me/966505305996?text=${encodedMessage}`;
    
    // فتح الرابط في نافذة جديدة
    window.open(whatsappUrl, '_blank');
}

// ==========================================
// 3️⃣ إعدادات تطبيق الـ PWA وتثبيته
// ==========================================
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // منع المتصفح من إظهار التثبيت التلقائي
    e.preventDefault();
    deferredPrompt = e;
    // إظهار لوحة التثبيت الخاصة بنا في الموقع
    const installBanner = document.getElementById('pwa-install-banner');
    if (installBanner) {
        installBanner.style.display = 'block';
    }
});

// برمجة زر "تثبيت الآن" داخل اللوحة
document.addEventListener('DOMContentLoaded', () => {
    const installBtn = document.getElementById('btn-install-now');
    if (installBtn) {
        installBtn.addEventListener('click', () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                    }
                    deferredPrompt = null;
                    dismissInstall();
                });
            }
        });
    }
});

// دالة إغلاق لوحة التثبيت عند الضغط على علامة ×
function dismissInstall() {
    const installBanner = document.getElementById('pwa-install-banner');
    if (installBanner) {
        installBanner.style.display = 'none';
    }
}

// تسجيل الـ Service Worker
window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(() => console.log('SW Registered'));
    }
});
