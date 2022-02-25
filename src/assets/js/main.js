$(document).ready(function() {

    if ($(window).width() < 991) {

        $('.nav__item-menu').on('click', function() {
            $('.navbar__submenu').slideToggle();
        });

        $('.down-arrow').on('click', function() {
            $(this).parent().parent().find('.menu-subcat').slideToggle();
        });
    }

});