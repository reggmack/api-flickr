$(document).ready(function() {
   
    "use strict";
    $('button').click(function () {
        $("button").removeClass("selected");
        $(this).addClass("selected");
    });
    
});// end ready