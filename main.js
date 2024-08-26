$(document).ready(function () {
  /*
  $("#search, #icon").mouseenter(function () {
    $(".logo").hide();
  });

  $("#search, #icon").mouseleave(function () {
    $(".logo").show();
  });
  */

  $(".fa-bars").click(function () {
    $(".navbar").toggle();
  });

  function hideElementsOnWidth() {
    if ($(window).width() <= 768) {
      $(".navbar").hide(); // Replace with your class name
      $(".navbar, .navbar a").click(function () {
        $(".navbar").hide();
      });
    } else {
      $(".navbar").show(); // Replace with your class name
    }
  }

  // Listen for resize events
  $(window).resize(hideElementsOnWidth);

  // Initial check
  $(document).ready(hideElementsOnWidth);

  const truck = $("#truck");
  setInterval(function () {
    truck.toggleClass("start");
    truck.toggleClass("end");
  }, 5000);

  //Animation In Removals Section
});
