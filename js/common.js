$(document).ready(function () {
  $(".menu-button").click(function () {
    $(".menu").toggleClass("menu-active");
  });

  $(window).load(function () {
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

  $('a[href*="#"]').on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 120 + "px"
    }, 777);
    e.preventDefault();
    return false;
  });

  $('[type="tel"]').mask("+7 (999) 999-99-99");

  $('.reviews__list').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
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
          slidesToScroll: 1
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
  });

  //Lazy load карты
  YaMapsShown = false;

  $(window).scroll(function() {
    if (!YaMapsShown){
     if($(window).scrollTop() + $(window).height() > $(document).height() - 1000) {      
      showYaMaps();
      YaMapsShown = true;
     }
    }
 });

 function showYaMaps(){
  var script   = document.createElement("script");
  script.type  = "text/javascript";
  script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Abbf232ef6d35a44755867800c393cd0de404dd284e0bbbd49dd468c03b058cbb&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false";
  document.getElementById("YaMaps").appendChild(script);
  console.log("Карта");
  
 }
 
});