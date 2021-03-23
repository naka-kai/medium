
$(function () {

  $('dd:not(:first)').hide();
  $('.faq-list dt').click(function() {
    $(this).next('dd').slideToggle()
  })
});
