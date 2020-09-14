/* Slide Show
   ------------------------------------------------------ */
const slide = document.getElementById("slide");
const slides: string[] = [
  "./img/top-image1.jpg",
  "./img/top-image2.jpg",
  "./img/top-image3.jpg",
  "./img/top-image4.jpg"
];
let count: number = -1;
slide.style.opacity = '0';
slideShow();

function slideShow() {
  count++;
  if (count === slides.length) {
    count = 0;
  }
  slide.setAttribute('src', slides[count]);
  setTimeout(function () {
    slide.style.opacity = '1';
  }, 300);
  setTimeout(function () {
    slide.style.opacity = '0';
  }, 9200);
  setTimeout(function () {
    slideShow();
  }, 10000);
}
/* Drawer Menu
   ------------------------------------------------------ */
const body = document.getElementById("body");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.createElement("div")

/* ハンバーガーボタンクリック時の動作 */
openBtn.addEventListener("click", function () {
  body.classList.add("isVisible");
  if (openBtn.getAttribute("aria-expanded") == "false") {
    openBtn.setAttribute("aria-expanded", 'true');
  } else {
    openBtn.setAttribute("aria-expanded", 'false');
  };
  body.appendChild(overlay);
  overlay.classList.add("c-nav__overlay");
  setTimeout(function () {
    overlay.classList.add("fadeIn");
  }, 100);
});
/* 閉じるボタンクリック時の動作 */
closeBtn.addEventListener("click", function () {
  body.classList.remove("isVisible");
  if (openBtn.getAttribute("aria-expanded") == "false") {
    openBtn.setAttribute("aria-expanded", 'true');
  } else {
    openBtn.setAttribute("aria-expanded", 'false');
  };
  overlay.classList.remove("fadeIn");
  setTimeout(function () {
    body.removeChild(overlay);
  }, 1000);
});
/* Font Size Change
 ------------------------------------------------------ */
const btnFontMedium = document.getElementById('btnFontMedium');
const btnFontXLarge = document.getElementById('btnFontXLarge');
const btnFontXXLarge = document.getElementById('btnFontXXLarge');

//文字サイズ2倍時のp-ir__header内の英文を改行
const irEnglish = document.getElementById('p-ir__english');
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
const pageTop = document.getElementById("js-returnNav__pageTop");
pageTop.addEventListener('click', function (e) {
  e.preventDefault();
  let timer = setInterval(function () {
    if (window.scrollY <= 0 || window.pageYOffset <= 0) {
      clearInterval(timer);
    }
    window.scrollBy(0, -20);
  }, 1);
});

/* News
 ------------------------------------------------------ */
/* 一つ目のお知らせの日付を「今日」に固定 */
const topNewsDate = document.getElementById("topNewsDate");
const date = new Date();
const year: number = date.getFullYear();
const month: number = date.getMonth() + 1;
const day: number = date.getDate();
topNewsDate.setAttribute("datetime", year + "-" + month + "-" + day);
topNewsDate.textContent = year + "." + month + "." + day;