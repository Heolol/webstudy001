const toggleBtn = document.querySelector('.nav__toggleBtn');
const menu = document.querySelector('.nav__menu');
const site = document.querySelector('.nav__site');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  site.classList.toggle('active');
});