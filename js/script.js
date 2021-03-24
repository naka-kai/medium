
$(function () {

  //ハンバーガーメニュー
  $('.btn-gNav').on("click", function () {
    $(this).toggleClass('open');
    $('#gNav').toggleClass('open');
  });

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
});

// ハンバーガーメニュー
$('#hamburger').on('click', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).text('MENU');
    $('.header-sp-nav-wrapper').removeClass('open');
    $('.header-sp-nav-background').removeClass('open');
  } else {
    $(this).addClass('active');
    $(this).text('CLOSE');
    $('.header-sp-nav-wrapper').addClass('open');
    $('.header-sp-nav-background').addClass('open');
  }
});
