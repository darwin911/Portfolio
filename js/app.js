$(document).ready(function() {
  // Scroll the whole document
  $.localScroll({
    target: "body",
    duration: 220,
    // Offeset for NavBar
    offset: -72
  });
});

const web = document.querySelector(".hero-title");
const navHeader = document.querySelector(".nav-header");
const navLinks = document.querySelectorAll(".nav-item a, .logo");
const hamburgerBtn = document.querySelector(".nav-toggle-label span");
const words = ["Web", "Full Stack", "Front End"];

const changeText = () => {
  if (web.textContent === words[0]) {
    web.textContent = words[1];
  } else if (web.textContent === words[1]) {
    web.textContent = words[2];
  } else {
    web.textContent = words[0];
  }
  return;
  // }
};

const changeNavBg = () => {
  if (window.scrollY > 10) {
    navHeader.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    navLinks.forEach(link => (link.style.color = "rgb(0, 0, 0)"));
    hamburgerBtn.style.backgroundColor = "black";
  } else {
    navHeader.style.backgroundColor = "rgba(246, 246, 246, 0)";
    navLinks.forEach(link => (link.style.color = "rgb(255, 255, 255)"));
    hamburgerBtn.style.backgroundColor = "rgba(255, 255, 255, 1)";
  }
};

setInterval(changeText, 4000);

window.addEventListener("scroll", changeNavBg);
