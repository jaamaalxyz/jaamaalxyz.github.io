// Author: Md. Jamal Uddin

/*
// call for making bigger some element
$(document).ready(function() {
  var elem = '.skill-img, img, input, textarea, button';
   $(elem).mouseenter(function() {
       $(this).animate({
           height: '+=10px',
           width: '+=10px;'
       });
   });
   $(elem).mouseleave(function() {
       $(this).animate({
           height: '-=10px',
           width: '-=10px;'
       }); 
   });
});

*/


// scroll to top button
$(document).ready(function(){
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      $('#scroll-to-top').fadeIn();
    } else {
      $('#scroll-to-top').fadeOut();
    }
  });
  
  $('#scroll-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});

