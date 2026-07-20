// حفظ الفرع والانتقال للمنيو

const buttons = document.querySelectorAll(".branch-card");

// إذا كان الفرع محفوظاً افتح المنيو مباشرة
const savedBranch = localStorage.getItem("branch");

if (savedBranch) {
    window.location.href = "menu.html";
}

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // إزالة التحديد من الجميع
        buttons.forEach(btn => btn.classList.remove("active"));

        // تحديد البطاقة الحالية
        button.classList.add("active");

        // حفظ الفرع
        localStorage.setItem("branch", button.dataset.branch);

        // فتح المنيو بعد حركة بسيطة
        setTimeout(() => {

            window.location.href = "menu.html";

        },500);

    });

});
