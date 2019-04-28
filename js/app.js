$(document).ready(function () {
    // Scroll the whole document
    $.localScroll({
        target: 'body',
        duration: 200,
        offset: -72
    });
});
const web =  document.querySelector('.hero-title');
const words = ["Web", "Full Stack", "Front-End"]

const changeText = () => {
    console.log('changeText')
    for (let i = 0; i < words.length; i++) {
        web.textContent = words[Math.floor(Math.random() * 3)];
        return;
    }
}

document.querySelector('.hero-text-container').addEventListener('mouseover', changeText);
