function loadFonts(){      
    Cufon.replace('h1, h2, .work-title, ul.font-family', { color: '#413F3F', fontFamily: 'Helvetica Neue LT Std'}); 
    Cufon.replace('.helvetica li', { color: '#ddd', fontFamily: 'Helvetica Neue LT Std'}); 
    Cufon.replace('.link-color', { color: '#4693F0', fontFamily: 'Helvetica Neue LT Std'}); 
    Cufon.replace('.project-title', { color: '#413F3F', fontSize: '20px', fontFamily: 'Helvetica Neue LT Std'}); 
  };
  
  
  function scrollTo(){    
   jQuery("a.scroll-up").click(function() {
    jQuery("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
    });
  }
  
  function menuNav(){
  jQuery('nav a').click(function(){			
          var div = jQuery(this).attr('title');
                  var section = jQuery('.menu-item-'+div);
                  if(section.length > 0){
           var top = jQuery('.menu-item-'+div).position().top;                 
           jQuery("html, body").animate({ scrollTop: top - 30 }, 800);
                  }else{
                   window.location = 'http://lucianabruscino.com/';
                  }
      });
  }
  
  function hoverContact(){
   jQuery("ul.show-data li" ).hover( function() {  	 
        var value = jQuery(this).data('display');
          jQuery( this ).append( jQuery( "<span>" + value +"</span>" ) ).fadeIn( 500 );
          }, function() { jQuery( this ).find( "span:last" ).remove(); }).click(function(){
              window.location = jQuery(this).find('a').attr('href'); 
   });
  }
  
  var _mediaPlayer;
  
  function changeButtonType(btn, value) {
     btn.attr('title',value);  
     btn.removeClass('pause').removeClass('play');
     btn.addClass(value);
  }
  
  function playVideosControls(){
  jQuery('.play').click(function(){
      _mediaPlayer ="";  
      var btn = jQuery(this);
     var data = btn.data('video');
    var stop = btn.next();
     _mediaPlayer = jQuery('.' + data)[0];
     
     if (_mediaPlayer.paused || _mediaPlayer.ended) {
        changeButtonType(btn, 'pause');
        
        stop.removeClass('hide');
        _mediaPlayer.play();
     }
     else {
        changeButtonType(btn, 'play');
        stop.addClass('hide');
        _mediaPlayer.pause();
     }
  });
  
  jQuery('.stop').click(function(){
      _mediaPlayer.pause();
     _mediaPlayer.currentTime = 0;
     var btn = jQuery(this).prev();
     changeButtonType(btn, 'play');
     btn.addClass('play');
     jQuery(this).addClass('hide');
  });
  
  }
  
  jQuery(function() {
      loadFonts();
      menuNav();
      hoverContact();
      playVideosControls();
      //http://www.creativebloq.com/html5/build-custom-html5-video-player-9134473
    
      
  });