
$(function () {

  $('dd:not(:first)').hide();
  $('.faq-list dt').click(function() {
    $(this).next('dd').slideToggle()
  });

  var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 3.5,
    spaceBetween: 40,
    initialSlide: 1,
  });
});
