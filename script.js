// var s = skrollr.init();

jQuery(document).ready(function($){

  function openChat(){
    // $('#lp').addClass('hide');
    // $('#chat').removeClass('hide');
    $("html, body").animate({ scrollTop: 0 });
    $('body').addClass('x');
  }

  function closeChat(){
    $('#lp').removeClass('hide');
    $('#chat').addClass('hide');
    $('body').removeClass('x');
    $('#br').removeClass('shut');
  }

  $('.inv').on('click', function(){
    $('#br').addClass('shut');
    openChat();
  });

  $('#back').on('click', function(){
    $('#br').addClass('shut');
    closeChat();
  });

});
