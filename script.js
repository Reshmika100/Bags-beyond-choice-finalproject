const themeToggle = document.querySelector('[data-theme-toggle]');
const html = document.documentElement;
const openButtons = document.querySelectorAll('[data-open-signup]');
const closeButton = document.querySelector('[data-close-signup]');
const popup = document.querySelector('.popup');
const backdrop = document.querySelector('.popup-backdrop');

let currentTheme = 'light';

themeToggle?.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', currentTheme);
});

function openPopup() {
  popup.hidden = false;
  backdrop.hidden = false;
}

function closePopup() {
  popup.hidden = true;
  backdrop.hidden = true;
}

openButtons.forEach(button => {
  button.addEventListener('click', openPopup);
});

closeButton?.addEventListener('click', closePopup);
backdrop?.addEventListener('click', closePopup);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !popup.hidden) {
    closePopup();
  }
});
