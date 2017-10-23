$(document).ready(function(){
    $("#timeline-button").click(function(){
        $('#timeline-section').show();
        $('#crosstown-section').hide();
        $('#victory-section').hide();
		$("#two:before").css("height", "630%");
		$("#rivalryheader").css("background-image", "url(images/top-1600.svg), url(images/overlay.png), url(images/oldticket.jpg)");

    });
    $("#crosstown-button").click(function(){
        $('#timeline-section').hide();
        $('#crosstown-section').show();
        $('#victory-section').hide();
		$("#two:before").css("height", "100%");
		$("#rivalryheader").css("background-image", "url(images/top-1600.svg), url(images/overlay2.png), url(images/crosstowncup.jpg)");
    });
    $("#victory-button").click(function(){
        $('#timeline-section').hide();
        $('#crosstown-section').hide();
        $('#victory-section').show();
		$("#two:before").css("height", "100%");
		$("#rivalryheader").css("background-image", "url(images/top-1600.svg), url(images/overlay.png), url(images/uclavictorybell.jpg)");
    });

    $("#timeline-page-button").click(function(){
        $('#timeline-section').show();
        $('#crosstown-section').hide();
        $('#victory-section').hide();
		    $("#two:before").css("height", "630%");
    });
    $("#crosstown-page-button").click(function(){
        $('#timeline-section').hide();
        $('#crosstown-section').show();
        $('#victory-section').hide();
		    $("#two:before").css("height", "100%");
    });
    $("#victory-page-button").click(function(){
        $('#timeline-section').hide();
        $('#crosstown-section').hide();
        $('#victory-section').show();
		    $("#two:before").css("height", "100%");
    });

});
