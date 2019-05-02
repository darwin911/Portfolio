$(document).ready(function () {
    // Scroll the whole document
    $.localScroll({
        target: 'body',
        duration: 220,
        // Offeset for NavBar
        offset: -72
    });
});

const web =  document.querySelector('.hero-title');
const navHeader =  document.querySelector('.nav-header');
// const navLinks = document.querySelectorAll('.nav-item a');
const words = ["Web", "Full Stack", "Front-End"]

const changeText = () => {
    for (let i = 0; i < words.length; i++) {
        web.textContent = words[Math.floor(Math.random() * 3)];
        return;
    }
}

const changeNavBg = () => {
    if (window.scrollY > 10) {
        navHeader.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    } else {
        navHeader.style.backgroundColor = "rgb(246, 246, 246)";
    }
}

window.addEventListener('scroll', changeNavBg)
document.querySelector('.hero-text-container').addEventListener('mouseover', changeText);