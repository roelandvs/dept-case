const nav = document.querySelector('nav');
const navButton = document.querySelector('.overlay-icon');

function openNav() {
    nav.classList.toggle('open');
};

// window.onscroll is bad for performance
window.onscroll = () => {
    if (window.scrollY > 10) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
};

navButton.addEventListener('click', openNav);