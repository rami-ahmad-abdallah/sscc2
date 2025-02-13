window.onload = function () {
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

  if (window.scrollY > 500) {
    department.style.transform = `scale(0.5)`;
  }

  // SHOWING THE LIST BUTTON IS TOGGLE BUTTON
  let toggleBtn = document.querySelector(".toggle-btn");

  toggleBtn.addEventListener("mouseover", () => {
    console.log("hey");
    toggleBtn.classList.add("hover-over-toggle");
  });

  // ADDING CLICK EVENT ON THE LIST TOGGLER
  toggleBtn.addEventListener("click", () => {
    if (!closeListBtn.parentElement.classList.contains("active-list")) {
      closeListBtn.parentElement.classList.add("active-list");
    }
  });

  let closeListBtn = document.querySelector(".close-list");

  closeListBtn.addEventListener("click", () => {
    if (closeListBtn.parentElement.classList.contains("active-list")) {
      closeListBtn.parentElement.classList.remove("active-list");
    } else {
      closeListBtn.parentElement.classList.add("active-list");
    }
  });
};
