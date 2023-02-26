const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.menu-close');
const header = document.querySelector('.header');

burgerMenu.addEventListener('click', menu);
closeMenu.addEventListener('click', menu);

function menu() {
    header.classList.toggle('display');
    mobileMenu.classList.toggle('display');
} 
