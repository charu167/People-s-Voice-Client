(function($) {
    "use strict";
	
	// ______________ PAGE LOADING
	$(window).on("load", function(e) {
		$("#global-loader").fadeOut("slow");
	})


	// ______________Full Screen
	$(document).on("click",".fullscreen-button", function toggleFullScreen() {
		if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
			  document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
			  document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
			  document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			} else if (document.documentElement.msRequestFullscreen) {
			  document.documentElement.msRequestFullscreen();
			}
		} else {
			if (document.cancelFullScreen) {
			  document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
			  document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
			  document.webkitCancelFullScreen();
			} else if (document.msExitFullscreen) {
			  document.msExitFullscreen();
			}
		}
	})

	// ______________Updated Chart
    var updatingChart = $(".updating-chart").peity("line", { width: "100%",height:100 ,fill: "#089e60",  stroke: "#531270"})
    setInterval(function() {
        var random = Math.round(Math.random() * 30)
        var values = updatingChart.text().split(",")
        values.shift()
        values.push(random)

        updatingChart
            .text(values.join(","))
            .change()
    }, 1000)

	 // ______________Headerfixed
	$(window).on("scroll", function(e){
		if ($(window).scrollTop() >= 66) {
			$('header').addClass('fixed-header');
		}
		else {
			$('.header').removeClass('fixed-header');
		}
    });
	

	// ______________ Chart Circle
	if ($('.chart-circle').length) {
		$('.chart-circle').each(function() {
			let $this = $(this);

			$this.circleProgress({
			  fill: {
				color: $this.attr('data-color')
			  },
			  size: $this.height(),
			  startAngle: -Math.PI / 4 * 2,
			  emptyFill: '#e9eaf3',
			  lineCap: 'round'
			});
		});
	}

	// ______________Cover Image
	$(".cover-image").each(function() {
		var attr = $(this).attr('data-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center');
		}
	});

	

	
	// ______________ CountUp
	$('.counter').countUp();

	// ______________ BACK TO TOP BUTTON
	$(window).on("scroll", function(e) {
    	if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn('slow');
        } else {
            $('#back-to-top').fadeOut('slow');
        }
    });

    $("#back-to-top").on("click", function(e){
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

	// ______________ Start rating
	var ratingOptions = {
		selectors: {
			starsSelector: '.rating-stars',
			starSelector: '.rating-star',
			starActiveClass: 'is--active',
			starHoverClass: 'is--hover',
			starNoHoverClass: 'is--no-hover',
			targetFormElementSelector: '.rating-value'
		}
	};
	$(".rating-stars").ratingStars(ratingOptions);


	//Increment & Decrement
	var quantitiy=0;
	$('.quantity-right-plus').on('click', function(e){
		e.preventDefault();
		var quantity = parseInt($('.quantity').val());
		$('.quantity').val(quantity + 1);

	});
	$('.quantity-left-minus').on('click', function(e){
		e.preventDefault();
		var quantity = parseInt($('.quantity').val());
		if(quantity>0){
			$('.quantity').val(quantity - 1);
		}
	});

	

	//horizontalmenu
	$("a[data-theme]").on("click", function(e) {
		$("head link#theme").attr("href", $(this).data("theme"));
		$(this).toggleClass('active').siblings().removeClass('active');
	});
	$("a[data-effect]").on("click", function(e) {
		$("head link#effect").attr("href", $(this).data("effect"));
		$(this).toggleClass('active').siblings().removeClass('active');
	});

	//calender2
	$('#calendar').tuiCalendar;

	/*----GlobalSearch----*/
	$(document).on("click", "[data-toggle='search']", function(e) {
		var body = $("body");

		if(body.hasClass('search-gone')) {
			body.addClass('search-gone');
			body.removeClass('search-show');
		}else{
			body.removeClass('search-gone');
			body.addClass('search-show');
		}
	});
	var toggleSidebar = function() {
		var w = $(window);
		if(w.outerWidth() <= 1024) {
			$("body").addClass("sidebar-gone");
			$(document).off("click", "body").on("click", "body", function(e) {
				if($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
					$("body").removeClass("sidebar-show");
					$("body").addClass("sidebar-gone");
					$("body").removeClass("search-show");
				}
			});
		}else{
			$("body").removeClass("sidebar-gone");
		}
	}
	toggleSidebar();
	$(window).resize(toggleSidebar);

	$(document).ready(function(){
		$(".slide-toggle").click(function(){
            $(".right-sidebarbox").animate({
                width: "toggle"
            });
        });
	});
	
	/*Defalut Switcher*/
	$('#myonoffswitch').click(function () {    
		if (this.checked) {
			$('body').addClass('default-menu');
			$('body').removeClass('light-menu');
			$('body').removeClass('image-menu');
			$('body').removeClass('image-menu1');
			localStorage.setItem("default-menu", "True");
		}
		else {
			$('body').removeClass('default-menu');
			localStorage.setItem("default-menu", "false");
		}
	});
	$('#myonoffswitch1').click(function () {    
		if (this.checked) {
			$('body').addClass('light-menu');
			$('body').removeClass('default-menu');
			$('body').removeClass('image-menu');
			$('body').removeClass('image-menu1');
			localStorage.setItem("light-menu", "True");
		}
		else {
			$('body').removeClass('light-menu');
			localStorage.setItem("light-menu", "false");
		}
	});	
	$('#myonoffswitch2').click(function () {    
		if (this.checked) {
			$('body').addClass('image-menu');
			$('body').removeClass('default-menu');
			$('body').removeClass('light-menu');
			$('body').removeClass('image-menu1');
			localStorage.setItem("image-menu", "True");
		}
		else {
			$('body').removeClass('image-menu');
			localStorage.setItem("image-menu", "false");
		}
	});	
	$('#myonoffswitch3').click(function () {    
		if (this.checked) {
			$('body').addClass('image-menu1');
			$('body').removeClass('default-menu');
			$('body').removeClass('light-menu');
			$('body').removeClass('image-menu');
			localStorage.setItem("image-menu1", "True");
		}
		else {
			$('body').removeClass('image-menu1');
			localStorage.setItem("image-menu1", "false");
		}
	});	
	
	/*Left-menu Styles*/
	$('#myonoffswitch').click(function () {    
		if (this.checked) {
			$('body').addClass('default-menu');
			$('body').removeClass('light-leftmenu');
			$('body').removeClass('image-leftmenu');
			$('body').removeClass('image-leftmenu1');
			localStorage.setItem("default-menu", "True");
		}
		else {
			$('body').removeClass('default-menu');
			localStorage.setItem("default-menu", "false");
		}
	});
	$('#myonoffswitch4').click(function () {    
		if (this.checked) {
			$('body').addClass('light-leftmenu');
			$('body').removeClass('default-menu');
			$('body').removeClass('image-leftmenu');
			$('body').removeClass('image-leftmenu1');
			localStorage.setItem("light-leftmenu", "True");
		}
		else {
			$('body').removeClass('light-leftmenu');
			localStorage.setItem("light-leftmenu", "false");
		}
	});
	$('#myonoffswitch5').click(function () {    
		if (this.checked) {
			$('body').addClass('image-leftmenu');
			$('body').removeClass('default-menu');
			$('body').removeClass('light-leftmenu');
			$('body').removeClass('image-leftmenu1');
			localStorage.setItem("image-leftmenu", "True");
		}
		else {
			$('body').removeClass('image-leftmenu');
			localStorage.setItem("image-leftmenu", "false");
		}
	});
	$('#myonoffswitch6').click(function () {    
		if (this.checked) {
			$('body').addClass('image-leftmenu1');
			$('body').removeClass('default-menu');
			$('body').removeClass('image-leftmenu');
			$('body').removeClass('light-leftmenu');
			localStorage.setItem("image-leftmenu1", "True");
		}
		else {
			$('body').removeClass('image-leftmenu1');
			localStorage.setItem("image-leftmenu1", "false");
		}
	});
	
	/*Horizontal-menu */
	$('#myonoffswitch7').click(function () {    
		if (this.checked) {
			$('body').addClass('hor-default');
			$('body').removeClass('hor-light');
			$('body').removeClass('hor-image');
			$('body').removeClass('hor-image1');
			localStorage.setItem("hor-default", "True");
		}
		else {
			$('body').removeClass('hor-default');
			localStorage.setItem("hor-default", "false");
		}
	});
	$('#myonoffswitch8').click(function () {    
		if (this.checked) {
			$('body').addClass('hor-light');
			$('body').removeClass('hor-default');
			$('body').removeClass('hor-image');
			$('body').removeClass('hor-image1');
			localStorage.setItem("hor-light", "True");
		}
		else {
			$('body').removeClass('hor-light');
			localStorage.setItem("hor-light", "false");
		}
	});
	$('#myonoffswitch9').click(function () {    
		if (this.checked) {
			$('body').addClass('hor-image');
			$('body').removeClass('hor-light');
			$('body').removeClass('hor-default');
			$('body').removeClass('hor-image1');
			localStorage.setItem("hor-image", "True");
		}
		else {
			$('body').removeClass('hor-image');
			localStorage.setItem("hor-image", "false");
		}
	});
	$('#myonoffswitch10').click(function () {    
		if (this.checked) {
			$('body').addClass('hor-image1');
			$('body').removeClass('hor-light');
			$('body').removeClass('hor-image');
			$('body').removeClass('hor-default');
			localStorage.setItem("hor-image1", "True");
		}
		else {
			$('body').removeClass('hor-image');
			localStorage.setItem("hor-image", "false");
		}
	});
	
	// ______________Light Mode
	$(document).on('click', '#myonoffswitch11', function(e){
		if (this.checked) {
			$('body').addClass('light-mode');
			$('body').removeClass('dark-mode');
		}
		else {
			$('body').removeClass('light-mode');
			localStorage.setItem("light-mode", "false");
		}
	});
	
	// ______________Dark Mode
	$(document).on('click', '#myonoffswitch12', function(e){
		if (this.checked) {
			$('body').addClass('dark-mode');
			$('body').removeClass('light-mode');
		}
		else {
			$('body').removeClass('dark-mode');
			localStorage.setItem("dark-mode", "false");
		}
	});
	
	
	// ______________Boxed
	$(document).on('click', '#myonoffswitch14', function(e){
		if (this.checked) {
			$('body').addClass('boxed');
			$('body').removeClass('default');
		}
		else {
			$('body').removeClass('boxed');
			localStorage.setItem("boxed", "false");
		}
	});
	
	// ______________Boxed
	$(document).on('click', '#myonoffswitch15', function(e){
		if (this.checked) {
			$('body').addClass('default');
			$('body').removeClass('boxed');
		}
		else {
			$('body').removeClass('default');
			localStorage.setItem("default", "false");
		}
	});
	
	// ______________Skins
	
	/*//////////////////// Default-left skins  //////////////////////*/
	
	//$('body').addClass("default-menu"); // 
	
	// $('body').addClass("light-menu"); //
	
	// $('body').addClass("image-menu"); //
	
	// $('body').addClass("image-menu1"); //
	
	
	/*//////////////////// Left-menu Style1 skins //////////////////////*/
	
	//$('body').addClass("default-menu");  //
	
	//$('body').addClass("light-leftmenu");  //
	
	//$('body').addClass("image-leftmenu");  //
	
	//$('body').addClass("image-leftmenu1");  //
	
	
	/*//////////////////// Horizontal-menu skins  //////////////////////*/
	
	//$('body').addClass("hor-default"); // 
	
	//$('body').addClass("hor-light"); // 
	
	//$('body').addClass("hor-image"); // 
	
	//$('body').addClass("hor-image1"); // 


})(jQuery);

$(function(e) {
		  /** Constant div card */
	  const DIV_CARD = 'div.card';
	  /** Initialize tooltips */
	  $('[data-toggle="tooltip"]').tooltip();

	  /** Initialize popovers */
	  $('[data-toggle="popover"]').popover({
		html: true
	  });
			 /** Function for remove card */
	  $('[data-toggle="card-remove"]').on('click', function(e) {
		let $card = $(this).closest(DIV_CARD);

		$card.remove();

		e.preventDefault();
		return false;
	  });

	  /** Function for collapse card */
	  $('[data-toggle="card-collapse"]').on('click', function(e) {
		let $card = $(this).closest(DIV_CARD);

		$card.toggleClass('card-collapsed');

		e.preventDefault();
		return false;
	  });
	  $('[data-toggle="card-fullscreen"]').on('click', function(e) {
		let $card = $(this).closest(DIV_CARD);

		$card.toggleClass('card-fullscreen').removeClass('card-collapsed');

		e.preventDefault();
		return false;
	  });
  });


