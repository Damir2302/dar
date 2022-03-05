$(document).ready(function() {

    if ($(window).width() < 991) {

        $('.nav__item-menu').on('click', function() {
            $('.navbar__submenu').slideToggle();
        });

        $('.down-arrow').on('click', function() {
            $(this).parent().parent().find('.menu-subcat, .footer__menu-subcat').slideToggle();
        });
    }

    $(function () {
        $(document).on("click", ".doc-inner-license_img", function () {
          $(this).cpLightimg();
        });
      });

});