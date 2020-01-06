"use strict";
{
  // slideshow------------------------------
  const slide = document.getElementById("slide");
  const img = new Array(
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
    if (count === img.length) {
      count = 0;
    }
    slide.src = img[count];
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
  const nav = document.getElementById("nav");
  const bar = document.getElementById("bar");
  const close = document.getElementById("close");

  bar.addEventListener("click", () => {
    nav.classList.add("isVisible");
  });

  close.addEventListener("click", () => {
    nav.classList.remove("isVisible");
  });
}
