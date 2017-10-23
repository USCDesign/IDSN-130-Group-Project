$(document).ready(function() {
  if (location.hash == "#timeline-page"){
      $("#timeline-section").show();
      $("#crosstown-section").hide();
      $("#victory-section").hide();
      $("#two:before").css("height", "630%");
      $("#rivalryheader").css("background-image", "url(images/top-1600.svg), url(images/overlay.png), url(images/oldticket.jpg)");

  };

  if (location.hash == "#crosstown-page"){
      $("#timeline-section").hide();
      $("#crosstown-section").show();
      $("#victory-section").hide();
      $("#two:before").css("height", "100%");
      $("#rivalryheader").css("background-image", "url(images/top-1600.svg), url(images/overlay2.png), url(images/crosstowncup.jpg)");
  };

  if (location.hash == "#victory-page"){
      $("#timeline-section").hide();
      $("#crosstown-section").hide();
      $("#victory-section").show();
      $("#two:before").css("height", "100%");
      $("#rivalryheader").css("background-image", "url(images/top-1600.svg), url(images/overlay.png), url(images/uclavictorybell.jpg)");
  };


});
    //
    // if (location.hash == "#timeline-page"){
    //     $("#timeline-section").show();
    //     $("#crosstown-section").hide();
    //     $("#victory-section").hide();
    //     $("#two:before").css("height", "630%");
    // });
    // else if (location.hash == "#crosstown"){
    //     $("#timeline-section").hide();
    //     $("#crosstown-section").show();
    //     $("#victory-section").hide();
    //     $("#two:before").css("height", "100%");
    // });
    // else if (location.hash == "#victory"){
    //     $("#timeline-section").hide();
    //     $("#crosstown-section").hide();
    //     $("#victory-section").show();
    //     $("#two:before").css("height", "100%");
    // });
    // else {
    //     $("#timeline-section").hide();
    //     $("#crosstown-section").hide();
    //     $("#victory-section").show();
    //     $("#two:before").css("height", "100%");
    // });
