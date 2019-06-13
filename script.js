$(document).ready(function($) {

	setTimeout(function() {
		      $('.preloader').fadeOut("slow");
	}, 1500);	 

	$(".about_me").each(function(index) {
		$(this).delay(500 * index).fadeIn(10);
	});

    $('#games').click(function() { 
        // Отображаем скрытый блок 
        $('#invisible').fadeIn("slow"); // fadeIn - плавное появление
    }); // end of click()

    $('#finish').click(function() { 
        // Отображаем скрытый блок 
        $('#invisible').fadeOut("slow"); // fadeIn - плавное появление
    }); // end of click()

    $('#exe').click(function() { 
        // Отображаем скрытый блок 
        $('#code_file').fadeIn("slow"); // fadeIn - плавное появление
    }); // end of click()

     $('#anexe').click(function() { 
        // Отображаем скрытый блок 
        $('#code_file').fadeIn("slow"); // fadeIn - плавное появление
    }); // end of click()

    $('#close').click(function() { 
        // Отображаем скрытый блок 
        $('#code_file').fadeOut("slow"); // fadeIn - плавное появление
    }); // end of click()
});
