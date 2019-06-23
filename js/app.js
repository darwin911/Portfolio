$(document).ready(function() {
  // Scroll the whole document
  $.localScroll({
    target: "body",
    duration: 220,
    // Offeset for NavBar
    offset: -72
  });
});

const title = document.querySelector(".hero-title");
const navHeader = document.querySelector(".nav-header");
const navLinks = document.querySelectorAll(".nav-item a, .logo");
const hamburgerBtn = document.querySelector(".nav-toggle-label span");
const words = ["Web", "Full Stack", "Front End"];

const changeText = () => {
  if (title.textContent === words[0]) {
    title.textContent = words[1];
  } else if (title.textContent === words[1]) {
    title.textContent = words[2];
  } else {
    title.textContent = words[0];
  }
  return;
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

const projects = document.querySelectorAll(".row");
const icons = document.querySelectorAll(".icon-size");

const observerOptions = {
  root: null,
  threshold: 0.25,
  rootMargin: "0px"
};

const projectsObserver = new IntersectionObserver(
  (entries, projectsObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // console.log("intersecting");
        entry.target.classList.add("in-view");
      }
    });
  },
  observerOptions
);

const sectionObserver = new IntersectionObserver(
  (entries, sectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // console.log("Intersecting");
        entry.target.classList.add("in-view");
      }
    });
  },
  {
    threshold: 0.1
  }
);

const aboutSection = document.querySelector(".about");

sectionObserver.observe(aboutSection);

projects.forEach(project => {
  projectsObserver.observe(project);
});

icons.forEach(icon => {
  projectsObserver.observe(icon);
});
