const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement; // Refers to <html>

// Function to apply theme and update image sources
function setTheme(isDark) {
  root.classList.toggle('dark-mode', isDark);

  const toggleImg = document.getElementById('theme-toggle-img');
  const toggleHeaderImg = document.getElementById('theme-toggle-header-img');
  const toggleHeroImg = document.getElementById('theme-toggle-hero-img');

  if (toggleImg) {
    toggleImg.src = isDark ? 'images/sun-icon.png' : 'images/moon-icon.png';
  }
  if (toggleHeaderImg) {
    toggleHeaderImg.src = isDark ? 'images/topicon-website.png' : 'images/topicon-website-lightmode.png';
  }
  if (toggleHeroImg) {
    toggleHeroImg.src = isDark ? 'images/hero-image.png' : 'images/hero-image-lightmode.png';
  }

  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize theme and preload images ASAP to prevent flashing
(function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

  if (isDark) {
    root.classList.add('dark-mode');
  }

  const toggleImg = document.getElementById('theme-toggle-img');
  const toggleHeaderImg = document.getElementById('theme-toggle-header-img');
  const toggleHeroImg = document.getElementById('theme-toggle-hero-img');
  

  if (toggleImg) {
    toggleImg.src = isDark ? 'images/sun-icon.png' : 'images/moon-icon.png';
  }
  if (toggleHeaderImg) {
    toggleHeaderImg.src = isDark ? 'images/topicon-website.png' : 'images/topicon-website-lightmode.png';
  }
  if (toggleHeroImg) {
    toggleHeroImg.src = isDark ? 'images/hero-image.png' : 'images/hero-image-lightmode.png';
  }
})();

// Toggle theme on button click
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const isDark = !root.classList.contains('dark-mode');
    setTheme(isDark);
  });
}

// Remove 'slide-up' class after animation ends
document.querySelectorAll('.slide-up').forEach((el) => {
  el.addEventListener('animationend', () => {
    el.classList.remove('slide-up');
  });
});

// Prevent reloading if already on the same page
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
    const currentPage = window.location.pathname.replace(/^.*[\\/]/, '');
    const targetPage = link.getAttribute('href');

    if (currentPage === targetPage) {
      e.preventDefault();
    }
  });
});