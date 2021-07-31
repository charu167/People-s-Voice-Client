(function($) {
	"use strict";
	
	const ps5 = new PerfectScrollbar('.content', {
	  useBothWheelAxes:true,
	  suppressScrollX:true,
	});
	
	const ps6 = new PerfectScrollbar('.content-1', {
	  useBothWheelAxes:true,
	  suppressScrollX:true,
	});
	
	const ps12 = new PerfectScrollbar('#content-5', {
		useBothWheelAxes:true,
	});
	
})(jQuery);