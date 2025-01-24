// Typing Animation
const textArray = [
    "Hello, I AM SARIK...",
    "I AM PASSIONATE about DATA SCIENCE...",
    "THIS IS MY PORTFOLIO..."
];

const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 500;
let textIndex = 0;
let charIndex = 0;

function typeText() {
    const typingElement = document.querySelector(".typing-text");
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingDelay);
    } else {
        setTimeout(eraseText, newTextDelay);
    }
}

function eraseText() {
    const typingElement = document.querySelector(".typing-text");
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingDelay);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", () => setTimeout(typeText, 100));

// Menu Toggle
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));
}

if (navClose) {
    navClose.addEventListener("click", () => navMenu.classList.remove("show-menu"));
}

// Close Menu on Link Click
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(link => link.addEventListener("click", () => navMenu.classList.remove("show-menu")));

// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");

        const link = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add("active-link");
        } else {
            link.classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", updateActiveLink);

// Change Header Background on Scroll
function toggleHeaderBackground() {
    const header = document.getElementById("header");
    header.classList.toggle("scroll-header", window.scrollY >= 80);
}
window.addEventListener("scroll", toggleHeaderBackground);

// Show Scroll-Up Button
function toggleScrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    scrollUp.classList.toggle("show-scroll", window.scrollY >= 560);
}
window.addEventListener("scroll", toggleScrollUp);

// Dark/Light Theme Toggle
const themeButton = document.getElementById("theme-button");
const darkThemeClass = "dark-theme";
const iconThemeClass = "uil-sun";

const savedTheme = localStorage.getItem("selected-theme");
const savedIcon = localStorage.getItem("selected-icon");

if (savedTheme) {
    document.body.classList.toggle(darkThemeClass, savedTheme === "dark");
    themeButton.classList.toggle(iconThemeClass, savedIcon === "uil-moon");
}

themeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle(darkThemeClass);
    themeButton.classList.toggle(iconThemeClass, isDark);

    localStorage.setItem("selected-theme", isDark ? "dark" : "light");
    localStorage.setItem("selected-icon", isDark ? "uil-moon" : "uil-sun");
});