const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger__icon");
const modalBg = document.querySelector(".modal-background");
const body = document.querySelector("body");
const navlist = document.querySelector(".navlist");

hamburger.addEventListener("click", function () {
  modalBg.classList.toggle("hidden");

  if (modalBg.classList.contains("hidden")) {
    hamburgerIcon.src = "images/icon-hamburger.svg";
    body.classList.remove("modal-open");
    navlist.classList.remove("mobile");
  } else {
    hamburgerIcon.src = "images/icon-close.svg";
    body.classList.add("modal-open");
    navlist.classList.add("mobile");
  }
});
