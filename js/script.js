
$(function () {

  //ハンバーガーメニュー
  $('.btn-gNav').on("click", function () {
    $(this).toggleClass('open');
    $('#gNav').toggleClass('open');
  });

  //FAQ
  $('dd:not(:first)').hide();
  $('.faq-list dt').click(function() {
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
});




// // 追従ナビ・スマホでハンバーガーメニューになる
// (function ($) {
//   $(function () {
//     var $header = $('#head_wrap');
//     // Nav Fixed
//     $(window).scroll(function () {
//       if ($(window).scrollTop() > 350) {
//         $header.addClass('fixed');
//       } else {
//         $header.removeClass('fixed');
//       }
//     });
//     // Nav Toggle Button
//     $('#nav-toggle, #global-nav ul li a').click(function () {
//       $header.toggleClass('open');
//     });
//   });
// })(jQuery);

// // ゆっくりスクロールする
// $(function () {
//   $('a[href^="#"]').click(function () {
//     var adjust = 0;
//     var speed = 1200;
//     var href = $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top + adjust;
//     $('body,html').animate({ scrollTop: position }, speed, 'swing');
//     return false;
//   });
// });
