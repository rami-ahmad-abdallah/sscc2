let window_height = window.innerHeight;
window_height = Math.round(window_height / 1.1);

let fade_up_elements = document.querySelectorAll(".fade-up");

fade_up_elements.forEach((element) => {
  element.setAttribute("style", "transition:all 0.7s ease");
});

// let fade_left_elements = $(".fade-left");
// $(".fade-left").css("transition", "all 0.7s ease");

// let fade_right_elements = $(".fade-right");
// $(".fade-right").css("transition", "all 0.7s ease");

// FADE UP ELEMENTS INITIALIZING PHASE
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

// // FADE LEFT ELEMENTS INITIALIZING PHASE
// if (fade_left_elements.length > 0) {
//   for (let i = 0; i < fade_left_elements.length; i++) {
//     let distance = fade_left_elements[i].getBoundingClientRect().top;

//     if (distance > window_height) {
//       fade_left_elements[i].style.transform = "translateX(-50px)";
//       fade_left_elements[i].style.opacity = "0";
//     }
//   }
// } else {
//   console.log("You have not added any element to fade left queue");
// }
// // FADE RIGHT ELEMENTS INITIALIZING PHASE
// if (fade_right_elements.length > 0) {
//   for (let i = 0; i < fade_right_elements.length; i++) {
//     let distance = fade_right_elements[i].getBoundingClientRect().top;

//     if (distance > window_height) {
//       fade_right_elements[i].style.transform = "translateX(50px)";
//       fade_right_elements[i].style.opacity = "0";
//     }
//   }
// } else {
//   console.log("You have not added any element to fade right queue");
// }

window.addEventListener("scroll", () => {
  // APPLYING FADE UP ANIMATION ONCE THE ELEMENT HIT  BOTTOM OF SCREEN
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
// $(window).scroll(function () {
//   // APPLYING FADE LEFT ANIMATION ONCE THE ELEMENT HIT BOTTOM OF SCREEN
//   if (fade_left_elements.length > 0) {
//     for (let i = 0; i < fade_left_elements.length; i++) {
//       let distance = fade_left_elements[i].getBoundingClientRect().top;

//       if (distance < window_height) {
//         fade_left_elements[i].style.transform = "translateX(0px)";
//         fade_left_elements[i].style.opacity = "1";
//       }
//       if (distance > window_height) {
//         fade_left_elements[i].style.transform = "translateX(-50px)";
//         fade_left_elements[i].style.opacity = "0";
//       }
//     }
//   }

//   // APPLYING FADE RIGHT ANIMATION ONCE THE ELEMENT HIT BOTTOM OF SCREEN
//   if (fade_right_elements.length > 0) {
//     for (let i = 0; i < fade_right_elements.length; i++) {
//       let distance = fade_right_elements[i].getBoundingClientRect().top;

//       if (distance < window_height) {
//         fade_right_elements[i].style.transform = "translateX(0px)";
//         fade_right_elements[i].style.opacity = "1";
//       }
//       if (distance > window_height) {
//         fade_right_elements[i].style.transform = "translateX(50px)";
//         fade_right_elements[i].style.opacity = "0";
//       }
//     }
//   }
// });
