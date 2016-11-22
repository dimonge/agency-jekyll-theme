$(function() {

  $("#contactForm").submit(function(e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      $('#thanks').html('<p>Thanks for signing up, we will notify you once we launch</p>')
      $('#name').val('');
      $('#email').val('');
      $('#phone').val('');
      $('#message').val('');
    });
  });
});
