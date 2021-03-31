
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
    slidesPerView: 'auto',
    spaceBetween: 40,
    initialSlide: 1,
  });


  // お問い合わせへのスムーススクロール

  jQuery(document).ready(function ($) {
    //600px以上の場合
    if (window.matchMedia('(min-width: 768px)').matches) {
      $(function () {
        var headerHight = 94;
        $('a[href^="#"]').click(function () {
          let speed = 500;
          let href = $(this).attr("href");
          let target = $(href == "#" || href == "" ? 'html' : href);
          let position = target.offset().top - headerHight;
          $("html, body").animate({ scrollTop: position }, speed, "swing");
          return false;
        });
      });
      //600px以下の場合
    } else if (window.matchMedia('(max-width: 768px)').matches) {
      $(function () {
        var headerHight = 70;
        $('a[href^="#"]').click(function () {
          let speed = 500;
          let href = $(this).attr("href");
          let target = $(href == "#" || href == "" ? 'html' : href);
          let position = target.offset().top - headerHight;
          $("html, body").animate({ scrollTop: position }, speed, "swing");
          return false;
        });;
      });
    };
  });

  // ハンバーガーメニュー
  $('.ham').on('click', function () {
    $('.header-sp-nav, .ham, .ham-list1, .ham-list2, .ham-list3').toggleClass('open');
  })

  //ハンバーガーメニューのナビリンククリック後自動で閉じる
  $('.menu-list a').on('click', function () {
    $('.ham').click();
  });

  //お問い合わせフォームのバリデーション
  //始めにjQueryで送信ボタンを無効化する
  $('#submit').prop("disabled", true);
  //始めにjQueryで必須欄を加工する
  $('form input:required').each(function () {
    $(this).prev("label").addClass("required");
  });
  //入力欄の操作時
  $('form input,textarea:required').change(function () {
    //必須項目が空かどうかフラグ
    let flag = true;
    //必須項目をひとつずつチェック
    $('form input:required').each(function (e) {
      //もし必須項目が空なら
      if ($('form input,textarea:required').eq(e).val() === "") {
        flag = false;
      }
    });
    //全て埋まっていたら
    if (flag) {
      //送信ボタンを復活
      $('#submit').prop("disabled", false);
    }
    else {
      //送信ボタンを閉じる
      $('#submit').prop("disabled", true);
    }
  });




});
