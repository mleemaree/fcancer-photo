// var s = skrollr.init();

jQuery(document).ready(function($){

  function openChat(){
    $('#lp').addClass('hide');
    $('#chat').removeClass('hide');
    $("html, body").animate({ scrollTop: 0 });
    $('body').addClass('x');
    $('#br').removeClass('shut');
  }

  function closeChat(){
    $('#lp').removeClass('hide');
    $('#chat').addClass('hide');
    $('body').removeClass('x');
    $('#br').removeClass('shut');
  }

  $('.inv').on('click', function(){
    $('#br').addClass('shut');
    setTimeout(openChat, 2700);
  });

  $('#back').on('click', function(){
    $('#br').addClass('shut');
    setTimeout(closeChat, 2700);
  });

});
