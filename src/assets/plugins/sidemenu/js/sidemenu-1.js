(function () {
	"use strict";

	var slideMenu = $('.side-menu');
	$('.app').addClass('sidedemo-menu');

	// Toggle Sidebar
	$('[data-toggle="sidebar"]').on("click", function(event) {
		event.preventDefault();
		$('.app').toggleClass('sidenav-toggled');
	});
	

$(window).on('load resize',function(){
        if($(window).width() < 739){
            $('.app-sidebar').hover(function(event) {
				event.preventDefault();
				$('.app').addClass('sidenav-toggled');
			});
		}
		if($(window).width() > 739){
			$('.app-sidebar').hover(function(event) {
				event.preventDefault();
				$('.app').removeClass('sidenav-toggled');
			});
		}
    });
	
	// Toggle Sidebar
	$('[data-toggle="slide"]').click(function(event) {
		event.preventDefault();
		$('.app').toggleClass('sidenav-toggled');
	});

	$(window).on('load resize',function(){
        if($(window).width() < 739){
            $('.app-sidebar').hover(function(event) {
			event.preventDefault();
			$('.app').addClass('sidenav-toggled');
			});
					}
			if($(window).width() > 739){
			$('.app-sidebar').hover(function(event) {
			event.preventDefault();
			$('.app').removeClass('sidenav-toggled');
			});
			}
		});
		
		// ______________Active Class
	    $(".app-sidebar li a").each(function() {
		var pageUrl = window.location.href.split(/[?#]/)[0];
		if (this.href == pageUrl) {
			$(this).addClass("active");
			$(this).parent().addClass("active"); // add active to li of the current link
			$(this).parent().parent().prev().addClass("active"); // add active class to an anchor
			$(this).parent().parent().prev().click(); // click the item to make it drop
		}
	});

	//Activate bootstrip tooltips
	$("[data-toggle='tooltip']").tooltip();

})();
