"use strict";
{
  /* Slide Show
     ------------------------------------------------------ */
  var slide = document.getElementById("slide");
  var slides = new Array(
    "./img/top-image1.jpg",
    "./img/top-image2.jpg",
    "./img/top-image3.jpg",
    "./img/top-image4.jpg"
  );
  var count = -1;
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
  /* Drawer Menu
     ------------------------------------------------------ */
  var body = document.getElementById("body");
  var bar = document.getElementById("bar");
  var close = document.getElementById("close");

  bar.addEventListener("click", function () {
    body.classList.add("isVisible");
  });

  close.addEventListener("click", function () {
    body.classList.remove("isVisible");
  });
}
