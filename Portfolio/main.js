"use strict";
//navbar
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//handle scroll

const navbarMenu = document.querySelector(".navbar__menu");
navbar.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link === undefined) {
    return;
  } else {
    console.log(event.target.dataset.link);
  }
  const scrollId = document.querySelector(link);
  scrollId.scrollIntoView({ behavior: "smooth" });
});
