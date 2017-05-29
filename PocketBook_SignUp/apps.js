var fields=[
["p.first-name-error","#first","Cannot be blank. Please enter your First Name."],
["p.last-name-error","#last","Please enter a Last Name."],
["p.email-error","#email","Enter a vaild email."],
["p.password-error","#password","Password cannot be blank.","Password must be 8 characters or more.", "Password must have at least one each: capital, special, and lowercase character."]];


function fieldCheck(i) {
	var p_class = fields[i][0];
	var input_id = fields[i][1];
	var value = $(input_id).val();
	var error_message = fields [i][2];

	alert(value);
}

var main = function() {
    $('form').submit(function() {
	for (i=0; i<4; i++) {
		fieldCheck(i);
   }
      return false;
    });
}


/*function error(ele,message,id) {
	$(ele).html(message);
  $(id).addClass('error');
}
function reset() {
  for (x in fields) {
  	$(fields[x][0]).removeClass('error');
    $(fields[x][1]).html("");
}
}

/* var main = function() {
  $('form').submit(function() {
      reset();
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var email = $('#email').val();
    var password = $('#password').val();
    
    if (firstName === "") {
      error('p.first-name-error','Please enter your First Name to create account','#first');
    }    
    if(lastName ==="") {error('p.last-name-error','Please enter your Last Name','#last'); }
    if(email ==="") {error('p.email-error','Enter your email','#email'); 
      } else if ( email === "a@g") { error('p.email-error','Email already used','#email'); }

    if(password.length < 8) {error('p.password-error','Need a better password than that mate.','#password'); }
    return false;
  });
} 
*/

$(document).ready(main);