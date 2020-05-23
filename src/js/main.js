"use strict";
{
  // slideshow------------------------------
  const slide = document.getElementById("slide");
  const slides = new Array(
    "./img/top-image1.jpg",
    "./img/top-image2.jpg",
    "./img/top-image3.jpg",
    "./img/top-image4.jpg"
  );
  let count = -1;
  slide.style.opacity = 0;
  slideShow();

  function slideShow() {
    count++;
    if (count === slides.length) {
      count = 0;
    }
    slide.src = slides[count];
    setTimeout(() => {
      slide.style.opacity = 1;
    }, 300);
    setTimeout(() => {
      slide.style.opacity = 0;
    }, 9200);
    setTimeout(() => {
      slideShow();
    }, 10000);
  }
  // drawer-menu
  const body = document.getElementById("body");
  const nav = document.getElementById("nav");
  const bar = document.getElementById("bar");
  const close = document.getElementById("close");

  bar.addEventListener("click", () => {
    body.classList.add("isVisible");
  });

  close.addEventListener("click", () => {
    body.classList.remove("isVisible");
  });
}
