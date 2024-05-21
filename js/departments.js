let department = document.getElementById("department");
let resizeAmount = 0;
let shrink = 0;
let position = 50;
let newPosition = 0;

window.addEventListener("scroll", (e) => {
  let scrollAmount = window.scrollY;
  console.log(scrollAmount);
  resizeAmount = scrollAmount / 1000;
  shrink = 1 - resizeAmount;

  if (shrink >= 0.5) {
    if (scrollAmount + position <= 120) {
      position = position + scrollAmount;
    }
    department.style.transform = `translate(-${position}%, -${position}%) scale(${shrink})`;
  }
});
