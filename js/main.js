
function loadFonts(){      
  Cufon.replace('h1, h2, .work-title, ul.font-family', { color: '#413F3F', fontFamily: 'Helvetica Neue LT Std'}); 
  Cufon.replace('.helvetica li', { color: '#ddd', fontFamily: 'Helvetica Neue LT Std'}); 
  Cufon.replace('.link-color', { color: '#4693F0', fontFamily: 'Helvetica Neue LT Std'}); 
  Cufon.replace('.project-title', { color: '#413F3F', fontSize: '20px', fontFamily: 'Helvetica Neue LT Std'}); 
};


function scrollTo(){    
 $("a.scroll-up").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
  });
}

$('nav a').click(function(){	
		var div = $(this).attr('class').split(" ")[0];
		
		var top = $('#'+div).position().top;
		 $("html, body").animate({ scrollTop: top }, 800);
	});

$("ul.show-data li" ).hover(
  function() {  	 
  	var value = $(this).data('display');
    $( this ).append( $( "<span>" + value +"</span>" ) ).fadeIn( 500 );
  }, function() {  	
    $( this ).find( "span:last" ).remove();   
  }
);

var _mediaPlayer;

function changeButtonType(btn, value) {
   btn.attr('title',value);  
   btn.removeClass('pause').removeClass('play');
   btn.addClass(value);
}

$('.play').click(function(){
    _mediaPlayer ="";  
    var btn = $(this);
   var data = btn.data('video');
  var stop = btn.next();
   _mediaPlayer = $('.' + data)[0];
   
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

$('.stop').click(function(){
    _mediaPlayer.pause();
   _mediaPlayer.currentTime = 0;
   var btn = $(this).prev();
   changeButtonType(btn, 'play');
   btn.addClass('play');
   $(this).addClass('hide');
});

$(function() {
    loadFonts();
    //http://www.creativebloq.com/html5/build-custom-html5-video-player-9134473
  
    
});
