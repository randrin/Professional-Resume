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
});
