var fields = [
  ["p.first-name-error", "#first", "Cannot be blank. Please enter your First Name."],
  ["p.last-name-error", "#last", "Please enter a Last Name."],
  ["p.email-error", "#email", "Enter a vaild email."],
  ["p.password-error", "#password", "Password cannot be blank.", 
  "Password must be 8 characters or more.", 
  "Password must have at least one each: capital, special, and lowercase character."]
];

function error(ele, message, id) {
  $(ele).html(message);
  $(id).addClass('error');
}

function reset() {
  for (x in fields) {
    $(fields[x][0]).html("");
    $(fields[x][1]).removeClass('error');
  }
}

var main = function() {
  $('form').submit(function(event) {
    reset();
    for (i in fields) {
      var p_class = fields[i][0];
      var input_id = fields[i][1];
      var value = $(input_id).val();
      var message = fields[i][2];

       if (value == "")
      {   
        $(p_class).html(message);
        $(input_id).addClass('error');
      }
      if (i==2 && value==="ericgfx01@gmail.com")
        $(p_class).html("Email already in system.");
        $(input_id).addClass('error');
      
      if (i==3 && 0 < value.length && value.length < 8)
        $(p_class).html(fields[3][3]);
        $(input_id).addClass('error');
      }
    /*I really want to understand this regular expression thing */
      if(i==3 && value > 7 && /^[a-zA-Z0-9- ]*$/.test(value) == true) {
        $(p_class).html(fields[3][4]);
        $(input_id).addClass('error');
/*    alert('Your password needs a special character.');  */
      }
     return false;
    });
};

$(document).ready(main);

