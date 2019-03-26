$( document ).ready(function() {
  $(".menu-button").click(function(){
    $(".menu").toggleClass("menu-active");
  });

  $(window).load(function() {
    $(".before-after__item").twentytwenty({
      before_label: 'Без скинали', // Set a custom before label
      after_label: 'С скинали', // Set a custom after label
    });
  });

  $('.before-after__slider').slick({
    draggable: false,
    dots: true,
    swipe: false,
  });

 /* $('.reviews__list').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });*/
});