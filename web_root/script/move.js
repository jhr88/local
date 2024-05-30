window.addEventListener("load", function () {
  // main - openSource
  $(".opS_btn").click(function () {
    let openNewWindow = window.open("about:blank");
    openNewWindow.location.href = "https://github.com/onycom-ankus/ankus_lite";
  });

  // main - dasus / planner
  $(".cont_main > div img:first").click(function () {
    window.location.href = "../dasus.html";
  });

  $(".cont_main > div img:last").click(function () {
    window.location.href = "../dasplanner.html";
  });

  // DASOps - down
  $(".down_go_btn").click(function () {
    window.location.href = "../download.html";
  });

  // DASOps - dasus / planner
  $(".dasus_go_btn").click(function () {
    window.location.href = "../dasus.html";
  });

  $(".dp_go_btn").click(function () {
    window.location.href = "../dasplanner.html";
  });

  //down - US manual
  $(".menu_us_go_btn").click(function () {
    let openNewWindow = window.open("about:blank");
    openNewWindow.location.href = "https://wikidocs.net/book/9595";
  });

  //down - planner manual
  $(".menu_dp_go_btn").click(function () {
    let openNewWindow = window.open("about:blank");
    openNewWindow.location.href = "https://wikidocs.net/book/9594";
  });

  //down - contact
  $(".contact_go_btn").click(function () {
    window.location.href = "../contact.html";
  });
});
