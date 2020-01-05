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
  slideShow();

  function slideShow() {
    count++;
    if (count === img.length) {
      count = 0;
    }
    slide.src = img[count];
    slide.style.opacity = 1;
    setTimeout(() => {
      slide.style.opacity = 0;
      setTimeout(() => {
        slideShow();
      }, 1500);
    }, 7000);
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
