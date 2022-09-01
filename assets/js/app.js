$(function() {

    /* Smooth scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);

        $("#nav").toggleClass("active");
        $("#nav_toggle").toggleClass("active");
        $("#header__inner").toggleClass("active");
        $("#container").toggleClass("active");
        $("#header__logo").toggleClass("active");

    });

    /*Menu nav toggle*/
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $("#nav").toggleClass("active");
        $("#nav_toggle").toggleClass("active");
        $("#header__inner").toggleClass("active");
        $("#container").toggleClass("active");
        $("#header__logo").toggleClass("active");

    });

});
