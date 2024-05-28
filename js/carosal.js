// AT FIRST WE GET ALL CAROSALS AVAILABLE IN THE DOCUMENT
let carosals = document.querySelectorAll(".carosal");

// LOOPING INSIDE EACH CAROSAL TO INITIALIZE FIRST STAGE
carosals.forEach((carosal) => {
  let images = carosal.querySelectorAll(".c-image");
  let prevBtn = carosal.querySelector(".prev");
  let outOf = carosal.querySelector(".out-of");

  outOf.innerHTML = images.length;

  prevBtn.classList.add("inactive-pn");
});
