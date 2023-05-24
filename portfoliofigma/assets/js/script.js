const icon = document.querySelector('.icon');
const menu = document.querySelector('.navbar-menu');

icon.addEventListener('click', () => {
 icon.classList.toggle('active');
  menu.classList.toggle('active');
});
