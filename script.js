// script.js
$(document).ready(function () {
  // Collapse navbar on link click if navbar is expanded
  var collapseNavBar = function () {
    $(".navbar-collapse").collapse("hide");
  };

  $(".navbar-nav>li>a, .navbar-brand").click(collapseNavBar);

  // Collapse navbar when clicking outside of it
  $(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("show");
    if (_opened === true && !clickover.closest(".navbar").length) {
      $(".navbar-toggler").click();
    }
  });

  // Function to check if element is in view
  function isInView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return elemTop <= docViewBottom;
  }

  // Check each element with class .fade-in
  $(".fade-in").each(function () {
    var $elem = $(this);
    if (isInView($elem)) {
      $elem.addClass("fade-in-visible");
    }
  });

  // Fade-in elements on scroll
  $(window).scroll(function () {
    $(".fade-in").each(function () {
      var $elem = $(this);
      if (isInView($elem)) {
        $elem.addClass("fade-in-visible");
      }
    });
  });
});
