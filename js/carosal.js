window.onload = function () {
  // AT FIRST WE GET ALL CAROSALS AVAILABLE IN THE DOCUMENT
  let carosals = document.querySelectorAll(".carosal");

  // LOOPING INSIDE EACH CAROSAL TO INITIALIZE AND ADD EVENT LISTENERS
  carosals.forEach((carosal) => {
    let imagesHolder = carosal.querySelector(".carosal-images");
    let previousBtn = carosal.querySelector(".prev");
    let nextBtn = carosal.querySelector(".next");
    let images = carosal.querySelectorAll(".c-image");
    let picsAnchor = 1;
    let num = carosal.querySelector(".num");
    let outOf = carosal.querySelector(".out-of");

    // SETTING THE NUMBER OF THE PICTURES INSIDE THE CAROSAL ON THE TOTAL NUMBER DISPLAY
    outOf.innerHTML = images.length;

    // HIDING THE PREVIOUS BUTTON AT THE LOAD TIME
    previousBtn.classList.add("inactive-pn");

    nextBtn.addEventListener("click", () => {
      console.log("Next Button Clicked");

      imagesHolder.scrollBy(360, 0);

      previousBtn.classList.remove("inactive-pn");

      picsAnchor++;

      num.innerHTML = picsAnchor;

      if (picsAnchor == images.length) {
        nextBtn.classList.add("inactive-pn");
      }
    });

    previousBtn.addEventListener("click", () => {
      console.log("Previous Button Clicked");

      nextBtn.classList.remove("inactive-pn");

      imagesHolder.scrollBy(-360, 0);

      picsAnchor--;

      num.innerHTML = picsAnchor;

      if (picsAnchor == 1) {
        previousBtn.classList.add("inactive-pn");
      }
    });
  });
};
