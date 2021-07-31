(function($) {
    "use strict";
	
	 //bar chart
    var ctx = document.getElementById( "customerChart" );
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2012", "2013", "2014", "2015", "2016", "2017", "2018" ],
            datasets: [ {
                label: "New Customers",
                data: [ 0, 30, 10, 120, 50, 63, 10 ],
                backgroundColor: 'transparent',
                borderColor: 'rgba(8, 158, 96,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(8, 158, 96,0.75)',
                    }, {
                label: "Visiting Customers",
                data: [ 0, 50, 40, 80, 40, 79, 120 ],
                backgroundColor: 'transparent',
                borderColor: 'rgba(19, 150, 204,0.75)',
                borderWidth: 3,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(19, 150, 204,0.75)',
                    } ]
        },
        options: {
			responsive: true,
			maintainAspectRatio: false,
			barRoundness: 1,
            scales: {
                yAxes: [ {
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
						display: true,
						color:'rgba(187, 193, 202,0.3)',
					}
				}]
            }
        }
    } );
	
	
	/*-----AreaChart2-----*/
    var ctx = document.getElementById( "AreaChart2" );
	ctx.height = 70;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            type: 'line',
            datasets: [ {
                data: [0, 83, 43, 67, 35, 76, 0],
                label: 'Total Income',
                backgroundColor: 'rgba(8, 158, 96,0.3)',
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'transparent',
                borderColor: 'rgba(8, 158, 96)',
            }, ]
        },
        options: {

            maintainAspectRatio: false,
            legend: {
                display: false
            },
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#7886a0',
                bodyFontColor: '#7886a0',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
                    }
                } ]
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    } );
	
	
		/*-----AreaChart4-----*/
    var ctx = document.getElementById( "AreaChart4" );
	ctx.height = 70;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            type: 'line',
            datasets: [ {
                data: [0, 46, 55, 76, 63, 23,0],
                label: 'Total Balance',
                backgroundColor: 'rgba(213, 109, 252,0.3)',
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'transparent',
                borderColor: 'rgba(213, 109, 252)',
            }, ]
        },
        options: {

            maintainAspectRatio: false,
            legend: {
                display: false
            },
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#7886a0',
                bodyFontColor: '#7886a0',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
                    }
                } ]
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    } );
	
	
	/*-----AreaChart3-----*/
    var ctx = document.getElementById( "AreaChart3" );
	ctx.height = 70;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            type: 'line',
            datasets: [ {
                data: [0, 67, 76, 83 ,35, 43, 0],
                label: 'Total Earnings',
                backgroundColor: 'rgba(19, 150, 204,0.3)',
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'transparent',
                borderColor: 'rgba(19, 150, 204)',
            }, ]
        },
        options: {

            maintainAspectRatio: false,
            legend: {
                display: false
            },
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#7886a0',
                bodyFontColor: '#7886a0',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
                    }
                } ]
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    } );
})(jQuery);

