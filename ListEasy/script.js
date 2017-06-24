var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var checkstrike = function(x){
  if ($(x).siblings().is(':checked'))
 {  $(x).siblings().prop('checked', false);
    $(x).removeClass('strike');
 } else {
  $(x).siblings().prop('checked', true);
     $(x).addClass('strike');
 }
};

var main = function() {
  $('form').submit(function() {
    var text=$('#todo').val();
    if (text !== "") {
    $('.list').append(template(text));
    $(todo).val(''); }
    return false;  
  });
  
  $(document).on('click','.glyphicon-star',function() {
        $(this).toggleClass('active');      
     });
  $(document).on('click','.glyphicon-remove',function() {
        $(this).parent().remove();      
     });
  $(document).on('click','span',function() {
    checkstrike(this);
  });  
  
  };

$(document).ready(main);