 /*var myHide = function(cat) {
  myArray = [".thumb .consumer",".thumb .mobile",".thumb .commerce",".thumb .enterprise"];
  category=cat;
  for (i=0; i<4; i++) {
if (category != myArray[i]) {
  $(myArray[i]).hide(500);
} else {
  $(myArray[i]).show(500);
}   
  }
}; */

var main = function() {
  $('.nav li').click(function() {
    var category = $(this).attr('class');
    $('.nav li').removeClass('active');
    $(this).addClass('active');
   
    switch (category){
      case "nav-consumer":
        $(".thumb.consumer").show(500);
        $(".thumb.mobile").hide(500);
        $(".thumb.commerce").hide(500);
        $(".thumb.enterprise").hide(500);
        break;
      case "nav-mobile":
        $(".thumb.consumer").hide(500);
        $(".thumb.mobile").show(500);
        $(".thumb.commerce").hide(500);
        $(".thumb.enterprise").hide(500);
        break;
      case "nav-commerce":
        $(".thumb.consumer").hide(500);
        $(".thumb.mobile").hide(500);
        $(".thumb.commerce").show(500);
        $(".thumb.enterprise").hide(500);
        break;
      case "nav-enterprise":
        $(".thumb.consumer").hide(500);
        $(".thumb.mobile").hide(500);
        $(".thumb.commerce").hide(500);
        $(".thumb.enterprise").show(500);
        break;
      default:
        $(".thumb").show(500);
            };    
  });
};
 
$(document).ready(main);