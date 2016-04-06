jQuery(document).ready(function($){

  var s = skrollr.init();
  var titles = ['Photography', 'Events', 'Community'];
  var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: '.swiper-pagination',
      paginationClickable: true,
      paginationBulletRender: function (index, className) {
          return '<span class="' + className + '">' + titles[index] + '</span>';
      }

    });


  function openChat(){
    // $('#lp').addClass('hide');
    // $('#chat').removeClass('hide');
    $("html, body").animate({ scrollTop: 0 });
    $('body').addClass('x');
  }

  function closeChat(){
    // $('#lp').removeClass('hide');
    // $('#chat').addClass('hide');
    $('body').removeClass('x');
    $('#br').removeClass('shut');
  }

  $('.inv').on('click', function(){
    $('#br').addClass('shut');
    setTimeout(openChat, 2000);
  });

  $('#back').on('click', function(){
    $('#br').addClass('shut');
    setTimeout(closeChat, 10);
  });

});
