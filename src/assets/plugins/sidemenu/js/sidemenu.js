(function () {
	"use strict";

	var slideMenu = $('.side-menu');

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
	
	// Activate sidebar slide toggle
	$('[data-toggle="slide"]').on('click', function(e) {
		var $this = $(this);
		var checkElement = $this.next();
		var animationSpeed = 300,
		slideMenuSelector = '.slide-menu';
		if (checkElement.is(slideMenuSelector) && checkElement.is(':visible')) {
		  checkElement.slideUp(animationSpeed, function() {
			checkElement.removeClass('open');
		  });
		  checkElement.parent("li").removeClass("is-expanded");
		}
		 else if ((checkElement.is(slideMenuSelector)) && (!checkElement.is(':visible'))) {
		  var parent = $this.parents('ul').first();
		  var ul = parent.find('ul:visible').slideUp(animationSpeed);
		  ul.removeClass('open');
		  var parent_li = $this.parent("li");
		  checkElement.slideDown(animationSpeed, function() {
			checkElement.addClass('open');
			parent.find('li.is-expanded').removeClass('is-expanded');
			parent_li.addClass('is-expanded');
		  });
		}
		if (checkElement.is(slideMenuSelector)) {
		  e.preventDefault();
		}
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
			$(this).parent().parent().parent().parent().prev().addClass("active"); 
			$(this).parent().parent().parent().parent().parent().addClass("is-expanded"); 
			$(this).parent().parent().prev().click(); // click the item to make it drop
		}
	});

	//Activate bootstrip tooltips
	$("[data-toggle='tooltip']").tooltip();

})();
