"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// Handle click on "contact me" button on home
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener("click", () => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// const numSteps = 20.0;

// let boxElement;
// let prevRatio = 0.0;

// // Set things up
// window.addEventListener(
//   "load",
//   (event) => {
//     boxElement = document.querySelector(".home__container");

//     createObserver();
//   },
//   false
// );

// function createObserver() {
//   let observer;

//   let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: buildThresholdList(),
//     trackVisibility: true,
//   };

//   observer = new IntersectionObserver(handleIntersect, options);
//   observer.observe(boxElement);
// }

// function buildThresholdList() {
//   let thresholds = [];
//   let numSteps = 20;

//   for (let i = 1.0; i <= numSteps; i++) {
//     let ratio = i / numSteps;
//     thresholds.push(ratio);
//   }

//   thresholds.push(0);
//   return thresholds;
// }

// function handleIntersect(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > prevRatio) {
//       entry.target.style.opacity = entry.intersectionRatio;
//     } else {
//       entry.target.style.opacity = entry.intersectionRatio;
//     }
//     prevRatio = entry.intersectionRatio;
//   });
// }

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// // Show "arrow up" button when scrolling down
// const showUpArea = document.querySelectorAll(".arrow-up-area");
// const arrowUp = document.querySelector(".arrow-up");
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > 0) {
//       arrowUp.classList.add("visible");
//     } else {
//       arrowUp.classList.remove("visible");
//     }
//   });
// });

// showUpArea.forEach((area) => {
//   observer.observe(area);
// });

// Handle click on "Arrow Up" button on home
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});
