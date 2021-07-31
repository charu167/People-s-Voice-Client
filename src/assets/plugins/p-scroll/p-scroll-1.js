(function($) {
	"use strict";
	
	//P-scrolling
	const ps = new PerfectScrollbar('.sidebar-right', {
	  useBothWheelAxes:true,
	  suppressScrollX:true,
	});
	
	//P-scrolling
	const ps10 = new PerfectScrollbar('.app-sidebar', {
	  useBothWheelAxes:true,
	  suppressScrollX:true,
	});
	
})(jQuery);