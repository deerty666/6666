
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
