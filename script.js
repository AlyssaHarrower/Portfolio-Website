const toggleBtn = document.getElementById('theme-toggle');
const toggleImg = document.getElementById('theme-toggle-img'); // Image inside the button
const body = document.body;

// Load saved mode
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleImg.src = 'https://github.com/AlyssaHarrower/Portfolio-Website/blob/main/images/sun-icon.png'; // Light mode icon (shown when in dark mode)
} else {
  toggleImg.src = 'https://github.com/AlyssaHarrower/Portfolio-Website/blob/main/images/moon-icon.png';
}
//Listens for a button click and toggles to light or dark mode accordingly
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode'); // Sets isDark value
  toggleImg.src = isDark ? 'https://github.com/AlyssaHarrower/Portfolio-Website/blob/main/images/sun-icon.png' : 'https://github.com/AlyssaHarrower/Portfolio-Website/blob/main/images/moon-icon.png'; // Sets image
  localStorage.setItem('theme', isDark ? 'dark' : 'light'); // Sets saved mode
});