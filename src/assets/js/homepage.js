// HERO SLIDER
if ($('.hero__slider').length) {
    let hero_slider = new Swiper('.hero__slider', {
      direction: 'horizontal',
      loop: true,

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }

    });
}

// HOMEPAGE SPECIALISTES SLIDER
if ($('.specialistes__slider').length) {
  let specialistes__slider = new Swiper('.specialistes__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,

    breakpoints: {
      470: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1180: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    navigation: {
      nextEl: '.specialistes-section .button-next',
      prevEl: '.specialistes-section .button-prev',
    }

  });
}

// HOMEPAGE OTHER-S
if ($('.other-s').length && $(window).width() < 991) {
  let other_s = new Swiper('.other-s', {
    direction: 'horizontal',
    spaceBetween: 15,
    slidesPerView: 1,

    breakpoints: {
      470: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      }
    }

  });
}

// HOMEPAGE GALLERY SLIDER
if ($('.gallery__slider').length) {
  let gallery__slider = new Swiper('.gallery__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    breakpoints: {

      576: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

      1180: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    navigation: {
      nextEl: '.gallery-section .button-next',
      prevEl: '.gallery-section .button-prev',
    }

  });
}

// HOMEPAGE LICENSE SLIDER
if ($('.license__slider').length) {
  let license__slider = new Swiper('.license__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    breakpoints: {

      576: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

      1180: {
        slidesPerView: 4,
        spaceBetween: 30,
      }
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    navigation: {
      nextEl: '.license-section .button-next',
      prevEl: '.license-section .button-prev',
    }

  });
}

// HOMEPAGE QUESTION SLIDER
if ($('.question__slider').length) {
  let question__slider = new Swiper('.question__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    breakpoints: {

      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      1180: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    navigation: {
      nextEl: '.question-section .button-next',
      prevEl: '.question-section .button-prev'
    }

  });
}