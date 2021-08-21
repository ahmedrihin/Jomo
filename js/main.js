$(document).ready(function(){

    $('.stickymenu').waypoint(function (direction) {
      if (direction == 'down') {
        $('#nav').addClass('sticky');
      }
      else {
        $('#nav').removeClass('sticky');
      }
    })
    $('.center').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
})