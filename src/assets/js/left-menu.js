(function($) {
	"use strict";
	
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
	
	//Active Class
	$(".app-sidebar li a").each(function() {
		var pageUrl = window.location.href.split(/[?#]/)[0];
		if (this.href == pageUrl) {
			$(this).addClass("active");
			$(this).parent().addClass("active"); // add active to li of the current link
			$(this).parent().addClass("resp-tab-content-active"); // add active to li of the current link
			$(this).parent().parent().parent().prev().addClass("active"); // add active class to an anchor
			$(this).parent().parent().parent().prev().click(); // click the item to make it drop
		}
	});
	
	$(".submenu-list li a").each(function() {
		var pageUrl = window.location.href.split(/[?#]/)[0];
		if (this.href == pageUrl) {
			$(this).addClass("active");
			$(this).parent().parent().parent().parent().parent().addClass("active"); // add active to li of the current link
			$(this).parent().parent().parent().parent().parent().addClass("resp-tab-content-active"); // add active to li of the current link
			$(this).parent().parent().parent().prev().addClass("active"); // add active class to an anchor
			$(this).parent().parent().parent().prev().click(); // click the item to make it drop
		}
	});
	
	
	$(document).ready(function(){	
	
		if ($('.home-spanner.active').hasClass('active'))
        $('li.home-spanner').addClass('active');
	
		if ($('.widgets-spanner.active').hasClass('active'))
        $('li.widgets-spanner').addClass('active');
	
		if ($('.components-spanner.active').hasClass('active'))
        $('li.components-spanner').addClass('active');
	
		if ($('.charts-spanner.active').hasClass('active'))
        $('li.charts-spanner').addClass('active');
	
		if ($('.elements-spanner.active').hasClass('active'))
        $('li.elements-spanner').addClass('active');
		
		if ($('.pages-spanner.active').hasClass('active'))
        $('li.pages-spanner').addClass('active');
	
		if ($('.icons-spanner.active').hasClass('active'))
        $('li.icons-spanner').addClass('active');
	
		if ($('.forms-spanner.active').hasClass('active'))
        $('li.forms-spanner').addClass('active');
	
		if ($('.ecommerce-spanner.active').hasClass('active'))
        $('li.ecommerce-spanner').addClass('active');
	
		if ($('.custom-spanner.active').hasClass('active'))
        $('li.custom-spanner').addClass('active');
	
	
	});
	
	// VerticalTab
	$('#sidemenu-Tab').easyResponsiveTabs({
		type: 'vertical',
		width: 'auto', 
		fit: true, 
		closed: 'accordion',
		tabidentify: 'hor_1',
		activate: function(event) {
			var $tab = $(this);
			var $info = $('#nested-tabInfo2');
			var $name = $('span', $info);
			$name.text($tab.text());
			$info.show();
		}
	});
	
	
})(jQuery);