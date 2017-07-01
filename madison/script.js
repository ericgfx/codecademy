var main=function(){
  $('.cart').click(function(){  /*grrr forgot "function" */
    $('.cart .dropdown-menu').toggle(); /*grrr failed to leave a space between parent and child */
    $('.account .dropdown-menu').hide();
    $('.help .dropdown-menu').hide();
  });
    $('.account').click(function(){  
    $('.account .dropdown-menu').toggle();
    $('.cart .dropdown-menu').hide();
    $('.help .dropdown-menu').hide();
  });
    $('.help').click(function(){  
    $('.help .dropdown-menu').toggle();
    $('.cart .dropdown-menu').hide();
    $('.account .dropdown-menu').hide();
  });
  
};

$(document).ready(main); 


