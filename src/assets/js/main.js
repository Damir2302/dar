$(document).ready(function() {

    // SLIDER TOGGLE MENU (HEADER & FOOTER)
    if ($(window).width() < 991) {

      $('.header__menu-mobile').on('click', function() {
        $(this).find('i').toggleClass('active');
        $('.nav__inner').slideToggle();
      });

      $('.down-arrow').on('click', function() {
          $(this).parent().parent().find('.navbar__submenu, .menu-subcat, .footer__menu-subcat').slideToggle();
      });

    }

    // ABOUT
    if ($('.about-license').length) {
        let about_license = new Swiper('.about-license', {
          direction: 'horizontal',
          loop: true,
          spaceBetween: 30,
          slidesPerView: 1,

          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },

          navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev'
          }

        });
    }

    // REVIEWS FORM
    let inputAge = 0;
    $('#minusBtn').on('click', function(e) {
      e.preventDefault();

      if ($('#inputAge').val() != 14) {
        inputAge = $('#inputAge').val();
        inputAge--;
        $('#inputAge').val(inputAge)
      }

    });

    $('#plusBtn').on('click', function(e) {
      e.preventDefault();

      if ($('#inputAge').val() != 99) {
        inputAge = $('#inputAge').val();
        inputAge++;
        $('#inputAge').val(inputAge)
      }

    });

});