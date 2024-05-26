let window_height = window.innerHeight;
window_height = Math.round(window_height / 1.1);
let delayTime = 0;
// GETTING ALL THE ELEMENTS WITH A FADE UP CLASS IN IT
let fade_up_elements = document.querySelectorAll(".fade-up");

fade_up_elements.forEach((element) => {
  element.setAttribute("style", "transition:all 0.7s ease");
});

if (fade_up_elements.length > 0) {
  for (let i = 0; i < fade_up_elements.length; i++) {
    let distance = fade_up_elements[i].getBoundingClientRect().top;

    if (distance > window_height) {
      fade_up_elements[i].style.transform = "translateY(50px)";
      fade_up_elements[i].style.opacity = "0";
    }
  }
} else {
  console.log("You have not added any element to fade up queue");
}

window.addEventListener("scroll", () => {
  // APPLYING FADE UP ANIMATION ONCE THE ELEMENT HIT BOTTOM OF SCREEN
  if (fade_up_elements.length > 0) {
    for (let i = 0; i < fade_up_elements.length; i++) {
      let distance = fade_up_elements[i].getBoundingClientRect().top;

      if (distance < window_height) {
        fade_up_elements[i].style.transform = "translateY(0px)";
        fade_up_elements[i].style.opacity = "1";
      }
      if (distance > window_height) {
        fade_up_elements[i].style.transform = "translateY(50px)";
        fade_up_elements[i].style.opacity = "0";
      }
    }
  }
});

// FADE UP WITH TRANSITION DELAY FOR ELEMENTS THAT BELONG TO THE SAME FATHER
let fade_up_parents = document.querySelectorAll(".fade-up-parent");

fade_up_parents.forEach((parent) => {
  let children = parent.querySelectorAll(".fade-up");

  children.forEach((child, i) => {
    let delay = `0.${i}s`;
    child.style.transitionDelay = delay;
  });
});
