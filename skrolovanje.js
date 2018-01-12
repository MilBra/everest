
$("document").ready(function($){
    var x = $('#navigation');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 125) {
            x.addClass("header-scroll");
        } else {
            x.removeClass("header-scroll");
        }
    });
});