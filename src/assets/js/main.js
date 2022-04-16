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

    // SERVICE PAGE ASIDE MENU
    $('.arrow-down').on('click', function() {
      $(this).closest('.service__menu-item').toggleClass('active');
      $(this).closest('.service__menu-item').find('.service__submenu').slideToggle();
    });

    // SERVICE PAGE REVIEWS
    if ($('.reviews__slider').length) {
      let reviews_slider = new Swiper('.reviews__slider', {
        direction: 'horizontal',
        autoplay: true,
        slidesPerView: 1,

        breakpoints: {
          768: {
            autoplay: false
          }
        },

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },

      });
    }

    // SERVICE PAGE QUESTION
    if ($('.service-question__slider').length) {
      let service_question = new Swiper('.service-question__slider', {
        direction: 'horizontal',
        autoplay: true,
        slidesPerView: 1,

        breakpoints: {
          768: {
            autoplay: false,
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },

      });
    }

    // SERVICE PAGE SPECIALISTS
    if ($('.service-specialistes__slider').length) {
      let service_spec = new Swiper('.service-specialistes__slider', {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 1,

        breakpoints: {
          470: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 26,
          },
        },

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },

      });
    }

    // CATEGORY REVIEWS
    if ($('.testimonial__slider').length) {
      let about_license = new Swiper('.testimonial__slider', {
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        spaceBetween: 20,
        slidesPerView: 1,

        breakpoints: {
          768: {
            autoplay: false,
            spaceBetween: 30,
            slidesPerView: 2,
          }
        },

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },

        navigation: {
          nextEl: '.testimonial-section .button-next',
          prevEl: '.testimonial-section .button-prev'
        }

      });
  }

  // INPUT PHONE MASK
  $('input[type="tel"]').inputmask({"mask": "+7 (999) 99-99-99"});

});