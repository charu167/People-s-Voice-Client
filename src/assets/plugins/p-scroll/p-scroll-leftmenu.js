(function($) {
	"use strict";
	
	//P-scrolling
	const ps2 = new PerfectScrollbar('.sidebar-right', {
	  useBothWheelAxes:true,
	  suppressScrollX:true,
	});
	const ps = new PerfectScrollbar('.first-sidemenu', {
	  useBothWheelAxes:true,
	  suppressScrollX:true,
	});
	
	const ps1 = new PerfectScrollbar('.second-sidemenu', {
	  useBothWheelAxes:true,
	  suppressScrollX:true,
	});
	
	const ps3 = new PerfectScrollbar('.right-sidebar', {
	  useBothWheelAxes:true,
	  suppressScrollX:true,
	});
	
})(jQuery);