
// ===============================
// Menu System
// ===============================

const currentBranch = localStorage.getItem("branch") || "branch1";

const menuList = document.getElementById("menuList");
const sections = document.getElementById("sections");

let currentSection = "الكل";
// ===============================
// Render Sections
// ===============================

function renderSections() {

    sections.innerHTML = "";

    menuData.forEach(section => {

        const card = document.createElement("div");
        card.className = "section-card";

        card.innerHTML = `
            <img src="${section.sectionImg}" alt="${section.section}">
            <span>${section.section}</span>
        `;

        card.onclick = () => {

            currentSection = section.section;

            document
                .querySelectorAll(".section-card")
                .forEach(c => c.classList.remove("active"));

            card.classList.add("active");

            renderMenu();
        };

        sections.appendChild(card);

    });

    sections.firstElementChild.classList.add("active");

}
// ===============================
// Render Menu
// ===============================

function renderMenu() {

    menuList.innerHTML = "";

    let products = [];

    menuData.forEach(section => {

        if (
            currentSection === "الكل" ||
            section.section === currentSection
        ) {

            section.items.forEach(item => {

                if (
                    !item.availableIn ||
                    item.availableIn.includes(currentBranch)
                ) {

                    products.push(item);

                }

            });

        }

    });

    products.forEach(item => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">

                <img src="${item.img}" alt="${item.name}">

                ${
                    item.isBestSeller
                    ? '<div class="badge">🏆 الأكثر مبيعاً</div>'
                    : ''
                }

            </div>

            <div class="product-info">

                <h3>${item.name}</h3>

                <p>${item.nameEn}</p>

                <div class="price">

                    ${item.basePrice} ريال

                </div>

                <button class="add-btn">
                    أضف للسلة
                </button>

            </div>
        `;

        menuList.appendChild(card);

    });

}
