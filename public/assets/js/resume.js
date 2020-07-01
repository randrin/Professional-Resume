// Go to Top Page & Scroll Navbar Effet
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 260) {
      $("body").find("#scroll-top").addClass("scroll").fadeIn();
      $(".pt-wrapper").addClass("pt-wrapper-scroll");
    } else {
      $("body").find("#scroll-top").removeClass("scroll").fadeOut();
      $(".pt-wrapper").removeClass("pt-wrapper-scroll");
    }
  });
  $("#scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  $(".site-main-menu").find("li.resume-blog").click(function () {
    console.log(".pt-trigger.resume-blog");

    $(window).trigger("resize");
  });
  var $currentHeight = $(window).height();
  console.log("After: ", $currentHeight);
  $("*").click(function () {
    $currentHeight++;
    console.log("Before: ", $currentHeight);
  });
});
