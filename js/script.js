
$(function () {

  //FAQ
  $('dd:not(:first)').hide();
  $('.faq-list dt').click(function () {
    $(this).next('dd').slideToggle()
  });

  // swiper
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

  // お問い合わせへのスムーススクロール
  var headerHight = 80;
  $('a[href^="#"]').click(function () {
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - headerHight;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // ハンバーガーメニュー
  $('.ham').on('click', function() {
    $('.header-sp-nav, .ham, .ham-list1, .ham-list2, .ham-list3').toggleClass('open');
  })



});
