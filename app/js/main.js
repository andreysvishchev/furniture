$(function () {

  $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  new WOW().init();

});