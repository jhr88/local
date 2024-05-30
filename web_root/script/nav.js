//nav
$(document).ready(function () {
  function navPCToggle() {
    $(".menu > li").mouseover(function (e) {
      e.preventDefault();
      $(this).find(".submenu").addClass("on");
      $(".mainBanner").css("z-index", "-999");
    });

    $(".menu > li").mouseleave(function (e) {
      e.preventDefault();
      $(this).find(".submenu").removeClass("on");
      $(".mainBanner").css("z-index", "initial");
    });
  }

  //nav_mb
  function navMBToggle() {
    $(".ham:first").click(function () {
      $(".ham").toggleClass("on");
      $(".nav_mb > .menu").toggleClass("on");
      $(".deem").toggleClass("on");

      if (!$(".ham").hasClass("on")) {
        $(".nav_mb .menu > li").removeClass("on");
      }

      if ($(".ham").hasClass("on")) {
        $(".mainBanner").css("z-index", "-999");
        $(".mainBanner > img").css("z-index", "-999");
        $(".main_btn").css("z-index", "-999");
      } else {
        setTimeout(function () {
          $(".mainBanner").css("z-index", "initial");
          $(".mainBanner > img").css("z-index", "-1;");
          $(".main_btn").css("z-index", "initial");
        }, 1000);
      }
    });

    $(".nav_mb .menu > li")
      .eq(0)
      .click(function () {
        $(this).toggleClass("on");
        $(this).next().toggleClass("on");
      });

    $(".nav_mb .menu > li")
      .eq(2)
      .click(function () {
        $(this).toggleClass("on");
        $(this).next().toggleClass("on");
      });
  }

  //logo
  function logo() {
    $(".logo").click(function () {
      window.location.href = "../index.html";
    });
  }

  navPCToggle();
  navMBToggle();
  logo();

  // nav resize
  $(window).resize(function () {
    $(".ham").removeClass("on");
    $(".nav_mb > .menu").removeClass("on");
    $(".deem").removeClass("on");
    $(".nav_mb .menu > li").removeClass("on");
  });
});
