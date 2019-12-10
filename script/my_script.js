$(document).ready( function() {
 
 $("div").each( function(i) {
  $(this).append("<img src='..images/"+(++i)+".png' width='79' height='79' />");	
 });
 
});