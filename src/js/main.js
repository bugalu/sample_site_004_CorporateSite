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
  /* Font Size Change
   ------------------------------------------------------ */
  var btnFontMedium = document.getElementById('btnFontMedium');
  var btnFontXLarge = document.getElementById('btnFontXLarge');
  var btnFontXXLarge = document.getElementById('btnFontXXLarge');

  //文字サイズ2倍時のp-ir__header内の英文を改行
  var irEnglish = document.getElementById('p-ir__english');
  function XXLargeRemove() {
    if (irEnglish.classList.contains('XXLarge')) {
      irEnglish.classList.remove('XXLarge');
    }
  }

  //標準
  btnFontMedium.addEventListener('click', function () {
    body.style.fontSize = '16px';
    //英文の改行を解消
    XXLargeRemove();
  });
  //1.5倍
  btnFontXLarge.addEventListener('click', function () {
    body.style.fontSize = '24px';
    //英文を改行
    irEnglish.classList.add('XXLarge');
  });
  //2倍
  btnFontXXLarge.addEventListener('click', function () {
    body.style.fontSize = '32px';
    //英文を改行
    irEnglish.classList.add('XXLarge');
  });

  /* Page Top (Return Top)
     ------------------------------------------------------ */
  var pageTop = document.getElementById("js-returnNav__pageTop");
  pageTop.addEventListener('click', function (e) {
    e.preventDefault();
    var timer = setInterval(function () {
      if (window.scrollY <= 0 || window.pageYOffset <= 0) {
        clearInterval(timer);
      }
      window.scrollBy(0, -20);
    }, 1);
  });

  /* News
   ------------------------------------------------------ */
  /* 一つ目のお知らせの日付を「今日」に固定 */
  var topNewsDate = document.getElementById("topNewsDate");
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  topNewsDate.setAttribute("datetime", year + "-" + month + "-" + day);
  topNewsDate.textContent = year + "." + month + "." + day;
}