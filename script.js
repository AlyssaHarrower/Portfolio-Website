const toggleBtn = document.getElementById('theme-toggle');
const toggleImg = document.getElementById('theme-toggle-img'); // Image inside the button
const body = document.body;

// Load saved mode
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleImg.src = '../images/sun-icon.png'; // Light mode icon (shown when in dark mode)
} else {
  toggleImg.src = '../images/moon-icon.png';
}
//Listens for a button click and toggles to light or dark mode accordingly
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode'); // Sets isDark value
  toggleImg.src = isDark ? '../images/sun-icon.png' : '../images/moon-icon.png'; // Sets image
  localStorage.setItem('theme', isDark ? 'dark' : 'light'); // Sets saved mode
});