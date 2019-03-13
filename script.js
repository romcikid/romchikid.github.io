$(document).ready(function($) {

	setTimeout(function() {
		      $('.preloader').fadeOut("slow");
	}, 1500);	 

	$(".about_me").each(function(index) {
		$(this).delay(500 * index).fadeIn(10);
	});

});