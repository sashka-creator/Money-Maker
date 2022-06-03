var swiper = new Swiper('.slider .swiper-container', {
    
    slidesPerView: 5,
    spaceBetween: 20,

    autoplay: {
        delay: 1000,
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1250: {
        slidesPerView: 5,
      }
      
  },

  });


$(document).ready(function() {
  $('.faq__plus-1').click(function(event) {
    $('.faq__answer-1, .faq__plus-1').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.faq__plus-2').click(function(event) {
    $('.faq__answer-2, .faq__plus-2').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.faq__plus-3').click(function(event) {
    $('.faq__answer-3, .faq__plus-3').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.faq__plus-4').click(function(event) {
    $('.faq__answer-4, .faq__plus-4').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.faq__plus-5').click(function(event) {
    $('.faq__answer-5, .faq__plus-5').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.faq__plus-6').click(function(event) {
    $('.faq__answer-6, .faq__plus-6').toggleClass('active');
  });
});

$(document).ready(function() {
  $("a.nav__item").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
});
