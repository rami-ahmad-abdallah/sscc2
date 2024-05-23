let department = document.getElementById("department");
let resizeAmount = 0;
let shrink = 0;

window.addEventListener("scroll", (e) => {
  let scrollAmount = window.scrollY;

  resizeAmount = scrollAmount / 1000;

  if (window.innerWidth <= 500) {
    shrink = 0.9 - resizeAmount;
  } else {
    shrink = 1 - resizeAmount;
  }

  if (shrink >= 0.5) {
    department.style.transform = `scale(${shrink})`;
  }
});
