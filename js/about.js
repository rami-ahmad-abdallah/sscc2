let tiles = document.querySelector(".tiles");
let links = tiles.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    if (
      link.classList[0] == "infra" ||
      link.classList[0] == "supply" ||
      link.classList[0] == "manage" ||
      link.classList[0] == "interior"
    ) {
      link.classList.add("active-tile-link");
      link.querySelector("video").play();
    }
  });

  link.addEventListener("mouseleave", () => {
    if (
      link.classList[0] == "infra" ||
      link.classList[0] == "supply" ||
      link.classList[0] == "manage" ||
      link.classList[0] == "interior"
    ) {
      link.classList.remove("active-tile-link");
      link.querySelector("video").pause();
    }
  });
});
