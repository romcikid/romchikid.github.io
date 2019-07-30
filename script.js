function now_you_see_me()
{
    $(".about_me").each(function(index) {
        $(this).delay(500 * index).fadeIn(10);
    });
}

$(document).ready(function($) {

	setTimeout(function() {
		      $('.preloader').fadeOut("slow");
	}, 1500);	 

	now_you_see_me();

    $('#games').click(function() { 

        $('#invisible').fadeIn("slow");
    });

    $('#finish').click(function() { 
        $('#invisible').fadeOut("slow");
    });

    $('#exe').click(function() {
        $('.thanos_snap').fadeIn("slow");
    });

     $('#anexe').click(function() {
        $('.thanos_snap').fadeIn("slow");
        $('#exe').fadeIn("slow");
        now_you_see_me();
    });

    $('#roll').click(function() {
        $('.thanos_snap').fadeOut("slow");
    });

    $('#close').click(function() {
        $('.thanos_snap').fadeOut("slow");
        $(".about_me").each(function(index) {
            $(this).fadeOut();
        });
        $('#exe').fadeOut("slow");
    });

     $('#folder').click(function() {
        $('#wallpaper').fadeOut();
        $('.error_95').fadeIn();
    });
});
