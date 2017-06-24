var main = function() {    
  var availableTags = [
      "Oakland",
      "New York City",
      "San Francisco",
      "Tulsa",
      "Atlanta",
      "Phoenix",
      "Berkeley",
      "Sausalito",
      "Alameda",
      "San Jose",
      "Marin City",
      "Half Moon Bay",
      "Mountain View",
      "Silicon Valley",
      "Seattle",
      "Portland",
      "Mulege",
      "Cabo San Lucas",
      "Lake Tahoe"
    ];
    $( "#search" ).autocomplete({
      source: availableTags
    });

};
 
$(document).ready(main);