$(document).ready(function() {
    var teamstatus = localStorage.getItem('team');
    if (teamstatus == 'usc') {

        //Set Nav Styles
        $("nav").addClass('usc');
        $("nav").removeClass('ucla');

        //Set Footer Styles
        $("footer").addClass('usc');
        $("footer").removeClass('ucla');
        $("footer *").css({
            'color': 'white'
        });
    } else if (teamstatus == 'ucla') {

        //Set Nav Styles
        $("nav").addClass('ucla');
        $("nav").removeClass('usc');

        //Set Footer Styles
        $("footer").addClass('ucla');
        $("footer").removeClass('usc');
        $("footer *").css({
            'color': 'white'
        });
    }

    $('.button-usc')
        .click(function() {

            //Set Nav Styles
            $("nav").addClass('usc');
            $("nav").removeClass('ucla');

            //Set Footer Styles
            $("footer").addClass('usc');
            $("footer").removeClass('ucla');
            $("footer *").css({
                'color': 'white'
            });

            // set the value upon clicking
            window.localStorage.setItem('team', 'usc')
        });

    $('.button-ucla')
        .click(function() {

            //Set Nav Styles
            $("nav").addClass('ucla');
            $("nav").removeClass('usc');

            //Set Nave Styles
            $("footer").addClass('ucla');
            $("footer").removeClass('usc');
            $("footer *").css({
                'color': 'white'
            });

            // store the value upon clicking
            window.localStorage.setItem('team', 'ucla')
        });
});
