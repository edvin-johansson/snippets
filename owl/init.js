$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 30,
          autoplayHoverPause: true
      },
    );
    $('.full-width').owlCarousel({
        loop: true,
        margin: 30,
        autoplayHoverPause: true,
        items: 1
    },
  );
});
$('.slider-nav-left').on('click', function() {
    setTimeout(function() {
      $('.owl-prev').triggerHandler('click');
    });
  });
  $('.slider-nav-right').on('click', function() {
      setTimeout(function() {
        $('.owl-next').triggerHandler('click');
  })
})