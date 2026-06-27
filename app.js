// ==========================================
// 1️⃣ إرسال استفسار مباشر عن منتج واحد إلى الواتساب
// ==========================================
function askAboutProduct(productName) {
    // صياغة رسالة مخصصة وواضحة للمنتج المختار
    let message = `*استفسار عن منتج من (هدايا بيش للتجارة)*\n\n`;
    message += `السلام عليكم، أود الاستفسار عن تفاصيل وتوفر هذا المنتج:\n`;
    message += `🎁 *${productName}*\n\n`;
    message += `أرجو إفادتي بالسعر والمدة المطلوبة للتجهيز. شكراً لكم!`;

    // ترميز الرسالة بشكل آمن للروابط
    let encodedMessage = encodeURIComponent(message);
    
    // رابط الواتساب المباشر مع رقمك والرسالة
    let whatsappUrl = `https://wa.me/966505305996?text=${encodedMessage}`;
    
    // فتح الرابط في نافذة جديدة
    window.open(whatsappUrl, '_blank');
}

// ==========================================
// 2️⃣ إعدادات تطبيق الـ PWA وتثبيته (اختياري)
// ==========================================
window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').then(() => console.log('SW Registered'));
    }
});
