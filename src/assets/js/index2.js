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
	
	
	//line chart
    var ctx = document.getElementById( "lineChart" );
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun" ],
            datasets: [
                {
                    label: "Visitors",
                    borderColor: "rgba(8,158,96,0.9)",
                    borderWidth: "2",
                    backgroundColor: "rgba(8,158,96,0.5)",
                    data: [ 10, 60, 30, 90, 120, 76, 35]
                            },
                {
                    label: "Returning Visitors",
                    borderColor: "rgba(19, 150, 204,0.9)",
                    borderWidth: "2",
                    backgroundColor: "rgba(19, 150, 204,0.5)",
                    pointHighlightStroke: "rgb(19, 150, 204)",
                    data: [22, 88, 68, 140, 60, 80, 95]
                            }
                        ]
        },
        options: {
            responsive: true,
			maintainAspectRatio: false,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
						fontColor: "#bbc1ca",
					},
					gridLines: {
						color:'rgba(187, 193, 202,0.3)',
					}
				}],

				xAxes: [{
					ticks: {
						display: true,
						fontColor: "#bbc1ca",
					},
					gridLines: {
						display: false,
						color:'rgba(187, 193, 202,0.3)',
					}
				}]
			},

        }
    } );


	//pie chart
    var ctx = document.getElementById( "pieChart" );
    ctx.height = 290;
    var myChart = new Chart( ctx, {
        type: 'pie',
        data: {
            datasets: [ {
                data: [ 85, 48, 59, 37 ],
				borderWidth:0,
				borderColor:'#000',
                backgroundColor: [
                                    "#089e60",
                                    "#1396cc",
                                    "#cc66ff",
                                    "#ff9933"
                                ],
                hoverBackgroundColor: [
                                    "#089e60",
                                    "#1396cc",
                                    "#cc66ff",
                                    "#ff9933"
                                ]

                            } ],
            labels: [
                            "Google",
                            "IE",
                            "Firefox",
							"Opera"
                        ]
        },
        options: {
            responsive: true,
			maintainAspectRatio: false,
			segmentShowStroke: false,
			 legend: {
				labels: {
					fontColor: "#909090",
					fontSize: 12
				}
			},
        }
    } );

	/*---Morris (#graph5)---*/
	Morris.Bar({
		barGap:4,
		barSizeRatio:0.33,
		element: 'graph5',
		data: [{
			x: '2012',
			y: 3407,
			z: 2660
		}, {
			x: '2013',
			y: 3351,
			z: 3629
		}, {
			x: '2014',
			y: 3269,
			z: 2618
		}, {
			x: '2015',
			y: 3246,
			z: 1661
		}, {
			x: '2016',
			y: 3517,
			z: 2660
		}, {
			x: '2017',
			y: 3051,
			z: 2620

		}, {
			x: '2018',
			y: 3276,
			z: 2661
		}],
		barThickness : 10,
		xkey: 'x',
		ykeys: ['y', 'z'],
		labels: ['Expenses', 'Earning'],
		barColors: ['#089e60', '#1396cc']
	});
	/*---Morris (#graph5) closed---*/

})(jQuery);

