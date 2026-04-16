const root = document.documentElement;
const themeBtn = document.querySelector("[data-theme-toggle]");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const popup = document.querySelector(".popup");
const popupBackdrop = document.querySelector(".popup-backdrop");
const openButtons = document.querySelectorAll("[data-open-signup]");
const closeButton = document.querySelector("[data-close-signup]");
const popupForm = document.getElementById("popupForm");
const inlineForm = document.getElementById("inlineForm");
const toast = document.getElementById("toast");

let currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
root.setAttribute("data-theme", currentTheme);

function renderThemeIcon(theme) {
  if (!themeBtn) return;
  themeBtn.innerHTML = theme === "dark" ? "☾" : "◐";
}

renderThemeIcon(currentTheme);

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", currentTheme);
    renderThemeIcon(currentTheme);
  });
}

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

function openPopup() {
  popup.hidden = false;
  popupBackdrop.hidden = false;
}

function closePopup() {
  popup.hidden = true;
  popupBackdrop.hidden = true;
}

openButtons.forEach((button) => {
  button.addEventListener("click", openPopup);
});

if (closeButton) {
  closeButton.addEventListener("click", closePopup);
}

if (popupBackdrop) {
  popupBackdrop.addEventListener("click", closePopup);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closePopup();
});

function showToast() {
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

if (popupForm) {
  popupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast();
    popupForm.reset();
    closePopup();
  });
}

if (inlineForm) {
  inlineForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast();
    inlineForm.reset();
  });
}
