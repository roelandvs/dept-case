const nav = document.querySelector('nav');
const navButton = document.querySelector('.overlay-icon');

function openNav() {
    nav.classList.toggle('open');
};

navButton.addEventListener('click', openNav);