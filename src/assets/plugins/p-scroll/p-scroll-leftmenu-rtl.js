(function($) {
	"use strict";
	
	//P-scrolling
	const ps2 = new PerfectScrollbar('.sidebar-left', {
	  useBothWheelAxes:false,
	});
	const ps = new PerfectScrollbar('.first-sidemenu', {
	  useBothWheelAxes:true,
	  suppressScrollX:true,
	});
	const ps1 = new PerfectScrollbar('.second-sidemenu', {
	  useBothWheelAxes:true,
	  suppressScrollX:true,
	});
})(jQuery);