$(document).ready(function(){
    $("#timeline-button").click(function(){
        $('#timeline-section').show();
        $('#crosstown-section').hide();
        $('#victory-section').hide();
		$("#two:before").css("height", "630%");
    });
    $("#crosstown-button").click(function(){
        $('#timeline-section').hide();
        $('#crosstown-section').show();
        $('#victory-section').hide();
		$("#two:before").css("height", "100%");
    });
    $("#victory-button").click(function(){
        $('#timeline-section').hide();
        $('#crosstown-section').hide();
        $('#victory-section').show();
		$("#two:before").css("height", "100%");
    });
});
