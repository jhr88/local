// swiper
window.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    breakpoints: {
      1024: {
        slidesPerView: "4",
        spaceBetween: 50,
        allowSlideNext: false,
        allowSlidePrev: false,
        grid: {
          rows: 0,
        },
      },

      768: {
        slidesPerView: "2",
        spaceBetween: 0,
        allowSlideNext: false,
        allowSlidePrev: false,
      },

      280: {
        slidesPerView: "1",
        spaceBetween: 0,
        allowSlideNext: true,
        allowSlidePrev: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // loop: true,
      },
    },
  });

//banner
function bannerResize() {
  let banner_big = document.querySelectorAll(".banner_big img");
  let MainDU = document.querySelectorAll(".dasUS_main img");
  let MainDP = document.querySelectorAll(".dasPlanner_main img");

  if (window.innerWidth <= 480) {
    banner_big.forEach(function (img) {
      let src = img.src;
      let newSrc = src.replace("banner.png", "banner_mb.png");
      img.src = newSrc;
    });

    MainDU.forEach(function (img) {
      let src = img.src;
      let newSrc = src.replace("Dasus.png", "Dasus_mb.png");
      img.src = newSrc;
    });

    MainDP.forEach(function (img) {
      let src = img.src;
      let newSrc = src.replace("Dasplanner.png", "Dasplanner_mb.png");
      img.src = newSrc;
    });
  } else {
    banner_big.forEach(function (img) {
      let src = img.src;
      let newSrc = src.replace("banner_mb.png", "banner.png");
      img.src = newSrc;
    });

    MainDU.forEach(function (img) {
      let src = img.src;
      let newSrc = src.replace("Dasus_mb.png", "Dasus.png");
      img.src = newSrc;
    });

    MainDP.forEach(function (img) {
      let src = img.src;
      let newSrc = src.replace("Dasplanner_mb.png", "Dasplanner.png");
      img.src = newSrc;
    });
  }
}

window.addEventListener("load", function () {
  bannerResize();
});

window.addEventListener("resize", function () {
  bannerResize();
});



  // partners
  const allLogo = document.querySelector(".logos");
  var logoLi = allLogo.querySelectorAll("li");

  function resizeHandler() {
    for (let i = 0; i < logoLi.length; i++) {
      allLogo.style.animation = "move 50s linear infinite";
    }
  }

  resizeHandler();

  function clone() {
    const clone = allLogo.cloneNode(true);
    allLogo.after(clone);
  }
  clone();
});

