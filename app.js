const hamburgerActive = document.querySelector('.hamburger');
const navItemsActive = document.querySelector('.nav__items');
const navBar = document.querySelector('.header');
const navigators = document.querySelectorAll('.nav__item');
hamburgerActive.addEventListener('click', () => {
  hamburgerActive.classList.toggle('active');
  navItemsActive.classList.toggle('active');
});

navigators.forEach((navigator) => {
  navigator.addEventListener('click', () => {
    navItemsActive.classList.remove('active');
    hamburgerActive.classList.remove('active');
  });
});

document.addEventListener('scroll', () => {
  const scroll_Y = window.scrollY;
  if (scroll_Y > 100) {
    navBar.style.backgroundColor = '#111111';
    navBar.style.opacity = 0.9;
  } else {
    navBar.style.backgroundColor = 'transparent';
  }
});
