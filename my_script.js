$(document).ready( function() {
 
 $("div").each( function(i) {
  $(this).append("<img src='images/"+(++i)+".jpg' width='79' height='79' />");	
 });
 
});