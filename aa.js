// Show "arrow up" button when scrolling down
const showUpArea = document.querySelectorAll(".arrow-up-area");
const arrowUp = document.querySelector(".arrow-up");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      arrowUp.classList.add("visible");
    } else {
      arrowUp.classList.remove("visible");
    }
  });
});

showUpArea.forEach((area) => {
  observer.observe(area);
});
