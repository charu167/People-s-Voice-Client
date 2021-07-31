( function ( $ ) {
    "use strict";

    //Team chart
    var ctx = document.getElementById( "team-chart" );
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2010", "2011", "2012", "2013", "2014", "2015", "2016" ],
            type: 'line',
            defaultFontFamily: 'Montserrat',
            datasets: [ {
                data: [ 0, 7, 3, 5, 2, 10, 7 ],
                label: "Expense",
                backgroundColor: 'rgba(19, 150, 204,.6)',
                borderColor: 'rgba(19, 150, 204,0.6)',
                borderWidth: 3.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: 'transparent',
                pointBackgroundColor: 'rgba(19, 150, 204,0.9)',
                    }, ]
        },
        options: {
            responsive: true,
			maintainAspectRatio: false,
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
                    display: true,
                    gridLines: {
                        display: true,
                        drawBorder: false,
						color: 'rgba(187, 193, 202, 0.3)',
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                        } ],
                yAxes: [ {
                    display: true,
                    gridLines: {
                        display: true,
                        drawBorder: false,
						color: 'rgba(187, 193, 202, 0.3)',
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                        } ]
            },
            title: {
                display: false,
            }
        }
    } );


    //Sales chart
    var ctx = document.getElementById( "sales-chart" );
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "2010", "2011", "2012", "2013", "2014", "2015", "2016" ],
            type: 'line',
            defaultFontFamily: 'Montserrat',
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
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    fontFamily: 'Montserrat',
                },
            },
            scales: {
                xAxes: [ {
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false,
						color: 'rgba(187, 193, 202, 0.3)'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                        } ],
                yAxes: [ {
                    display: true,
                    gridLines: {
                        display: true,
                        drawBorder: false,
						color: 'rgba(187, 193, 202, 0.3)'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                        } ]
            },
            title: {
                display: false,
                text: 'Normal Legend'
            }
        }
    } );


    //line chart
    var ctx = document.getElementById( "lineChart" );
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: [ "January", "February", "March", "April", "May", "June", "July" ],
            datasets: [
                {
                    label: "My First dataset",
                    borderColor: "rgba(8, 158, 96,.9)",
                    borderWidth: "1",
                    backgroundColor: "rgba(8, 158, 96,.7)",
                    data: [ 22, 44, 67, 43, 76, 45, 12 ]
                            },
                {
                    label: "My Second dataset",
                    borderColor: "rgba(19, 150, 204, 0.9)",
                    borderWidth: "1",
                    backgroundColor: "rgba(19, 150, 204, 0.7)",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [ 16, 32, 18, 26, 42, 33, 44 ]
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
			scales: {
                xAxes: [ {
                    display: true,
                    gridLines: {
						color: 'rgba(187, 193, 202, 0.3)'
                    },
                        } ],
                yAxes: [ {
                    display: true,
                    gridLines: {
                        display: true,
                        drawBorder: false,
						color: 'rgba(187, 193, 202, 0.3)'
                    },
                } ]
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }

        }
    } );


    //bar chart
    var ctx = document.getElementById( "barChart" );
    //    ctx.height = 200;
    var myChart = new Chart( ctx, {
        type: 'horizontalBar',
        data: {
            labels: [ "January", "February", "March", "April", "May", "June", "July" ],
            datasets: [
                {
                    label: "My First dataset",
                    data: [ 65, 59, 80, 81, 56, 55, 40 ],
                    borderColor: "rgba(19, 150, 204, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(19, 150, 204, 0.7)"
                            },
                {
                    label: "My Second dataset",
                    data: [ 28, 48, 40, 19, 86, 27, 90 ],
                    borderColor: "rgba(8, 158, 96,0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(8, 158, 96,0.7)"
                            }
                        ]
        },
        options: {
			responsive: true,
			maintainAspectRatio: false,
            scales: {
				xAxes: [ {
                    display: true,
                    gridLines: {
						color: 'rgba(187, 193, 202, 0.3)'
                    },
                    } ],
                yAxes: [ {
                    ticks: {
                        beginAtZero: true
                    },
					 gridLines: {
                        display: true,
                        drawBorder: false,
						color: 'rgba(187, 193, 202, 0.3)'
                    },
                } ]
            }
        }
    } );

    //radar chart
    var ctx = document.getElementById( "radarChart" );
    ctx.height = 160;
    var myChart = new Chart( ctx, {
        type: 'radar',
        data: {
            labels: [ [ "Eating", "Dinner" ], [ "Drinking", "Water" ], "Sleeping", [ "Designing", "Graphics" ], "Coding", "Cycling", "Running" ],
            datasets: [
                {
                    label: "My First dataset",
                    data: [ 65, 59, 66, 45, 56, 55, 40 ],
                    borderColor: "rgba(19, 150, 204, 0.6)",
                    borderWidth: "1",
                    backgroundColor: "rgba(19, 150, 204, 0.4)"
                            },
                {
                    label: "My Second dataset",
                    data: [ 28, 12, 40, 19, 63, 27, 87 ],
                    borderColor: "rgba(8, 158, 96, 0.7",
                    borderWidth: "1",
                    backgroundColor: "rgba(8, 158, 96, 0.8)"
                            }
                        ]
        },
        options: {
			responsive: true,
			maintainAspectRatio: false,
            legend: {
                position: 'top'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    } );


    //pie chart
    var ctx = document.getElementById( "pieChart" );
    ctx.height = 300;
    var myChart = new Chart( ctx, {
        type: 'pie',
        data: {
            datasets: [ {
                data: [ 45, 25, 20, 10 ],
                backgroundColor: [
                                    "#cc66ff",
                                    "#089e60",
                                    "#1396cc",
                                    "#ff9933"
                                ],
                hoverBackgroundColor: [
                                    "#cc66ff",
                                    "#089e60",
                                    "#1396cc",
                                    "#ff9933"
                                ]

                            } ],
            labels: [
                            "Server 1",
                            "Server 2",
                            "Server 3",
							"Server 4",
                        ]
        },
        options: {
           responsive: true,
			maintainAspectRatio: false,
        }
    } );

    //doughut chart
    var ctx = document.getElementById( "doughutChart" );
    ctx.height = 150;
    var myChart = new Chart( ctx, {
        type: 'doughnut',
        data: {
            datasets: [ {
                data: [ 45, 25, 20, 10 ],
                backgroundColor: [
                                    "#cc66ff",
                                    "#089e60",
                                    "#1396cc",
                                    "#ff9933"
                                ],
                hoverBackgroundColor: [
                                    "#cc66ff",
                                    "#089e60",
                                    "#1396cc",
                                    "#ff9933"
                                ]

                            } ],
            labels: [
                            "Server 1",
                            "Server 2",
                            "Server 3",
                            "Server 4",
                        ]
        },
        options: {
            responsive: true,
			maintainAspectRatio: false,
        }
    } );

    //polar chart
    var ctx = document.getElementById( "polarChart" );
    var myChart = new Chart( ctx, {
        type: 'polarArea',
        data: {
            datasets: [ {
                data: [ 15, 18, 9, 6, 19 ],
                backgroundColor: [
                                    "#cc66ff",
                                    "#089e60",
                                    "#1396cc",
                                    "#ff9933",
									"#ec6e09"
                                ]

                            } ],
            labels: [
                            "Data1",
                            "Data2",
                            "Data3",
                            "Data4",
                            "Data5"
                        ]
        },
        options: {
            responsive: true,
			maintainAspectRatio: false,
        }
    } );

    // single bar chart
    var ctx = document.getElementById( "singelBarChart" );
    ctx.height = 100;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: [ "Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat" ],
            datasets: [
                {
                    label: "My First dataset",
                    data: [ 40, 55, 75, 81, 56, 55, 40 ],
                    borderColor: "rgba(19, 150, 204, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(19, 150, 204, 0.8)"
                        }
                    ]
        },
        options: {
			responsive: true,
			maintainAspectRatio: false,
            scales: {
				xAxes: [ {
                    display: true,
                    gridLines: {
						color: 'rgba(187, 193, 202, 0.3)'
                    },
                    } ],
                yAxes: [ {
                    ticks: {
                        beginAtZero: true
                    },
					 gridLines: {
                        display: true,
                        drawBorder: false,
						color: 'rgba(187, 193, 202, 0.3)'
                    },
                } ]
            }
        }
    } );

} )( jQuery );