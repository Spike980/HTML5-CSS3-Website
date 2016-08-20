
$(document).ready(function(){
$("#name").val("Please enter full name");
$("#email").val("xyz@abc.com");
$("#sugg").val("Please enter a valid query related to the website");
$("#subscribe").prop("checked",true);
$("input, textarea").focus(function(){
$(this).select();
});

$('.coursegallery').each(function() {
  $(this).hover(function(){
	$('p.coursegallery').slideDown('medium');	
  }, function() {
	$('p.coursegallery').slideUp('medium');
});

});
});
