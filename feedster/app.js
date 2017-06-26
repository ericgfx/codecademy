var main = function() { /*first time using .class img*/
  $('.notification img').click( function() {
    $('.notification-menu').toggle();
  });
  $('.post .btn').click( function(){ 
  	$(this).toggleClass('btn-like'); 
  }); 
  /*this i wrote the wrong syntax $('this'). */
};

$(document).ready(main);