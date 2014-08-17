$(function() {
    $('#install').click( function() { 
      $.ajax({ url: "source/install.html",  type:"GET", cache: false,
        success: function(msg){
          document.getElementById("content").innerHTML=msg;
        }});
      });
    
    $('#startghPages').click( function() {
      $.ajax({ url: "source/startghPages.html",  type:"GET", cache: false,
        success: function(msg){
          document.getElementById("content").innerHTML=msg;
        }});
    });
    
 }) ;