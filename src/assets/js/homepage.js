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

if ($('.specialistes__slider').length) {
  let specialistes__slider = new Swiper('.specialistes__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,

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

// if ($('.other-s').length) {
//   let other_s = new Swiper('.other-s', {
//     direction: 'horizontal',
//     loop: true,
//     spaceBetween: 30,
//     slidesPerView: 4,

//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true
//     },

//     navigation: {
//       nextEl: '.button-next',
//       prevEl: '.button-prev',
//     }

//   });
// }

if ($('.gallery__slider').length) {
  let gallery__slider = new Swiper('.gallery__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,

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

if ($('.license__slider').length) {
  let license__slider = new Swiper('.license__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,

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

if ($('.question__slider').length) {
  let question__slider = new Swiper('.question__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,

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