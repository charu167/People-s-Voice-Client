(function($) {
    "use strict";

	/*----ApexCharts----*/
	var options = {
		chart: {
			height: 300,
			type: 'bar',
		},
		plotOptions: {
			bar: {
				horizontal: false,
				endingShape: 'rounded',
				columnWidth: '55%',
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		series: [{
			name: 'Credits',

			data: [65, 59, 80, 81, 56, 55, 40]
		}, {
			name: 'Debits',

			data: [28, 48, 40, 19, 86, 27, 90]
		},
		{
			name: 'Income',
			data: [70, 68, 95, 120, 69, 64, 78]
		}, 		{
			name: 'Net Profit',
			data: [80, 78, 120, 114, 85, 76, 69 ]
		}],
		xaxis: {
			categories: ["January", "February", "March", "April", "May", "June", "July"],
		},
		yaxis: {

		},
		fill: {
			opacity: 1

		},
		grid: {
                borderColor: 'rgba(187, 193, 202,0.3)', 
            },
		colors: ['#089e60', '#1396cc', '#cc66ff', '#ff9933'],
		tooltip: {
			y: {
				formatter: function (val) {
					return "$ " + val + " "
				}
			}
		}
	}

	var chart = new ApexCharts(
		document.querySelector("#chart"),
		options
	);
	chart.render();

	
	
})(jQuery);