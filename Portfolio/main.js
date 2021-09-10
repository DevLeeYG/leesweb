"use strict";
//navbar
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height; //세로길이
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//handle scroll
const homeContactButton = document.querySelector(".home__contact");
const navbarMenu = document.querySelector(".navbar__menu");
navbar.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link === undefined) {
    return;
  }
  scrollIntoView(link);
});

homeContactButton.addEventListener("click", (event) => {
  scrollIntoView("#contact");
});

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight; // 위로올라가면 1 밑으로 내려가면 0
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
