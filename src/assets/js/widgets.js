(function($) {
    "use strict";

	$(".sparkline_bar1").sparkline([5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 2], {
		type: 'bar',
		height: 50,
		width:180,
		barSpacing: 5,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#089e60'
	});
	
	$(".sparkline_bar2").sparkline([5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 2], {
		type: 'bar',
		height: 50,
		width:180,
		barSpacing: 5,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#1396cc'
	});
	
	$(".sparkline_bar3").sparkline([5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 2], {
		type: 'bar',
		height: 50,
		width:180,
		barSpacing: 5,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#cc66ff'
	});
	
	$(".sparkline_bar4").sparkline([5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 2], {
		type: 'bar',
		height: 50,
		width:180,
		barSpacing: 5,
		colorMap: {
			'9': '#a1a1a1'
		},
		barColor: '#ff9933'
	});
	
	
	
})(jQuery);