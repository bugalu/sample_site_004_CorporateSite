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
    setTimeout(function () {
      slide.style.opacity = 1;
    }, 300);
    setTimeout(function () {
      slide.style.opacity = 0;
    }, 9200);
    setTimeout(function () {
      slideShow();
    }, 10000);
  }
  /* Drawer Menu
     ------------------------------------------------------ */
  var body = document.getElementById("body");
  var open = document.getElementById("open");
  var close = document.getElementById("close");
  var overlay = document.createElement("div")

  /* ハンバーガーボタンクリック時の動作 */
  open.addEventListener("click", function () {
    body.classList.add("isVisible");
    if (open.getAttribute("aria-expanded") == "false") {
      open.setAttribute("aria-expanded", true);
    } else {
      open.setAttribute("aria-expanded", false);
    };
    body.appendChild(overlay);
    overlay.classList.add("c-nav__overlay");
    setTimeout(function () {
      overlay.classList.add("fadeIn");
    }, 100);
  });
  /* 閉じるボタンクリック時の動作 */
  close.addEventListener("click", function () {
    body.classList.remove("isVisible");
    if (open.getAttribute("aria-expanded") == "false") {
      open.setAttribute("aria-expanded", true);
    } else {
      open.setAttribute("aria-expanded", false);
    };
    overlay.classList.remove("fadeIn");
    setTimeout(function () {
      body.removeChild(overlay);
    }, 1000);
  });
  /* News
   ------------------------------------------------------ */
  /* 一つ目のお知らせの日付を「今日」に固定 */
  var today = document.getElementById("today");
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  today.textContent = year + "." + month + "." + day;
}
