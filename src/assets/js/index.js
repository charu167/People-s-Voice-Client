(function($) {
    "use strict";

	/*----Echart2----*/
	var chartdata = [{
		name: 'Vistors',
		type: 'bar',
		data: [10, 15, 9, 18, 10, 15]
	}, {
		name: 'PageViews',
		type: 'line',
		smooth: true,
		data: [8, 5, 25, 10, 10]
	}, {
		name: 'Clients',
		type: 'bar',
		data: [10, 14, 10, 15, 9, 25]
	}];
	var chart = document.getElementById('echart1');
	var barChart = echarts.init(chart);
	var option = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '25',
		},
		xAxis: {
			data: ['2014', '2015', '2016', '2017', '2018'],
			axisLine: {
				lineStyle: {
				  color: 'rgba(187, 193, 202, 0.3)',
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#bbc1ca'
			}
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer: {
				label: {
					show: false,
				}
			}
		},
		 yAxis: {
			splitLine: {
				lineStyle: {
				  color: 'rgba(187, 193, 202, 0.3)',
				}
			},
			axisLine: {
				lineStyle: {
				  color: 'rgba(187, 193, 202, 0.3)',
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#bbc1ca'
			}
		},
		series: chartdata,
		color: ['#089e60', '#ff9933', '#1396cc', ]
	};
	barChart.setOption(option);

	//Team chart
    var ctx = document.getElementById( "team-chart" );
	 ctx.height = 235;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "M", "T", "W", "TH", "F", "SA", "S" ],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [ {
                data: [ 0, 7, 3, 5, 2, 10, 7 ],
                label: "Task",
                backgroundColor: 'rgba(8, 158, 96,0.8)',
                borderColor: 'rgba(187, 193, 202, 0.3)',
                borderWidth: 3.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(8, 158, 96,0.5)',
                    }, ]
        },
        options: {
            responsive: true,
			maintainAspectRatio: false,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },
            },
            scales: {
                xAxes: [ {
					ticks: {
						fontColor: "#bbc1ca",
					},
                    display: true,
                    gridLines: {
                        display: true,
						color:'rgba(187, 193, 202,0.2)',
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month',
						fontColor: "#bbc1ca",
                    }
                } ],
                  yAxes: [ {
					ticks: {
						fontColor: "#bbc1ca",
					},
                    display: true,
                    gridLines: {
                        display: true,
						color:'rgba(187, 193, 202,0.2)',
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value',
						fontColor: "#bbc1ca",
                    }
                } ]
            },
            title: {
                display: false,
            }
        }
	 } );
	/*-----AreaChart1-----*/
    var ctx = document.getElementById( "AreaChart1" );
	ctx.height = 100;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            type: 'line',
            datasets: [ {
                data: [45, 55, 32, 67, 49, 72, 52],
                label: 'Profit',
                backgroundColor: 'rgba(208, 238, 251, 0.2)',
                borderColor: 'rgba(208, 238, 251, 0.5)',

            }
			]
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
	
	$('.resp-tabs-list .home-spanner').addClass('active');
    $('.second-sidemenu .home-spanner').addClass('resp-tab-content-active');

})(jQuery);

