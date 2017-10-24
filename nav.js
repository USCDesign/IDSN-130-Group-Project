$(document).ready(function() {

    // Nav Dropdown
    $(function() {
        $('nav li ul').hide().removeClass('fallback');
        $('nav li').hover(function() {
            $('ul', this).stop().slideToggle(200);
        });
    });

    (function($) {
        var $window = $(window),
            $nav = $('nav');

        // Add class 'mobile' to nav when < 600px size scren

        function resize() {
            if ($window.width() < 600) {
                return $nav.addClass('mobile-nav');
            }

            $nav.removeClass('mobile-nav');
        }

        $window
            .resize(resize)
            .trigger('resize');
    })(jQuery);

    /* Adds clicked class to nav to expand on mobile */

    $('nav').on("click", ".icon", function() {
        $('nav').addClass('clicked');
        $('.icon').addClass('clicked-icon');
    });

    $('nav').on("click", ".clicked-icon", function() {
        $('nav').removeClass('clicked');
        $('.icon').removeClass('clicked-icon');
    });

});
