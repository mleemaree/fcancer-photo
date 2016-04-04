$(function(){

  var waypoint = new Waypoint({
    element: document.getElementById('logo'),
    handler: function(direction) {
      if(direction === 'down'){
        $('html, body').animate({
          scrollTop: $("#insp").offset().top
        }, 600);
      }
    }
  });

  var waypoint2 = new Waypoint({
    element: document.getElementById('samples'),
    handler: function(direction) {
      if(direction === 'down'){
        $('html, body').animate({
          scrollTop: $("#about").offset().top
        }, 600);
      }
    }
  });

  $('.navbar').on('click', function(){
    $('#menu').slideToggle();
  });

  $('.rw').on("mouseenter", function(e){
    $('#tit')
      .fadeOut(300,function(){
        $(this)
          .html('Join Now')
          .addClass('go');
      })
      .fadeIn(300)
      .on('click', function(){
        console.log('go to chat');
      });
  });

  $('.rw').on('mouseleave' || 'focusout', function(e){
    $('#tit')
      .fadeOut(300, function(){
        $(this)
        .html('Recent')
        .removeClass('go');
      })
      .fadeIn(300);
  });

  $('.involved').on('click', function(){
    console.log('go to chat');
  });

  function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top}, 600);
  }

  $("#r").click(function() {
   scrollToAnchor('recent');
   waypoint.disable();
  });
  $("#a").click(function() {
   scrollToAnchor('about');
   waypoint.disable();
   waypoint2.disable();
  });


});
