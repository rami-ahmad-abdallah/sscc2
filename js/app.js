window.onload = function () {
  let VideosWrapper = document.querySelectorAll(".videoo");

  VideosWrapper.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.filter = "brightness(0.9)";
      el.querySelector("video").play();

      if (el.classList.contains("first-video")) {
        document.getElementById("bv1").classList.add("active-bv");
        document.getElementById("bv1").play();
        document.getElementById("bvbg").style.background =
          "rgb(247 214 26 / 70%)";
        document.getElementById("fvt").classList.add("active-video-title");
      } else if (el.classList.contains("second-video")) {
        document.getElementById("bv2").classList.add("active-bv");
        document.getElementById("bv2").play();
        document.getElementById("bvbg").style.background =
          "linear-gradient(180deg, rgb(57 70 125 / 70%), rgb(66 140 195 / 70%))";
        document.getElementById("svt").classList.add("active-video-title");
      } else if (el.classList.contains("third-video")) {
        document.getElementById("bv3").classList.add("active-bv");
        document.getElementById("bv3").play();
        document.getElementById("bvbg").style.background =
          "rgb(174 168 171 / 70%)";
        document.getElementById("tvt").classList.add("active-video-title");
      } else if (el.classList.contains("fourth-video")) {
        document.getElementById("bv4").classList.add("active-bv");
        document.getElementById("bv4").play();
        document.getElementById("bvbg").style.background =
          "rgb(255 146 0 / 70%)";
        document.getElementById("fovt").classList.add("active-video-title");
      }
    });

    el.addEventListener("mouseleave", () => {
      el.style.filter = "brightness(0.5)";
      el.querySelector("video").pause();

      if (el.classList.contains("first-video")) {
        document.getElementById("bv1").classList.remove("active-bv");
        document.getElementById("bv1").pause();
        document.getElementById("bvbg").style.background = "#ffffff38";
        document.getElementById("fvt").classList.remove("active-video-title");
      } else if (el.classList.contains("second-video")) {
        document.getElementById("bv2").classList.remove("active-bv");
        document.getElementById("bv2").pause();
        document.getElementById("bvbg").style.background = "#ffffff38";
        document.getElementById("svt").classList.remove("active-video-title");
      } else if (el.classList.contains("third-video")) {
        document.getElementById("bv3").classList.remove("active-bv");
        document.getElementById("bv3").pause();
        document.getElementById("bvbg").style.background = "#ffffff38";
        document.getElementById("tvt").classList.remove("active-video-title");
      } else if (el.classList.contains("fourth-video")) {
        document.getElementById("bv4").classList.remove("active-bv");
        document.getElementById("bv4").pause();
        document.getElementById("bvbg").style.background = "#ffffff38";
        document.getElementById("fovt").classList.remove("active-video-title");
      }
    });

    el.addEventListener("click", () => {
      if (el.classList.contains("first-video")) {
        window.location = "./infrastructure.html";
      } else if (el.classList.contains("second-video")) {
        window.location = "./management.html";
      } else if (el.classList.contains("third-video")) {
        window.location = "./supplies.html";
      } else if (el.classList.contains("fourth-video")) {
        window.location = "./interior.html";
      }
    });
  });
};
