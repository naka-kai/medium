
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
    breakpoints: {

      // 320px以上の場合
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // 768px以上の場合
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // 980px以上の場合
      1000: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // 1200px以上の場合
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
    },
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
  $('.ham').on('click', function () {
    $('.header-sp-nav, .ham, .ham-list1, .ham-list2, .ham-list3').toggleClass('open');
  })



});
