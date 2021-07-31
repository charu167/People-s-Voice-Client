(function($) {
    "use strict";

	/*----ApexCharts----*/
	var options = {
            chart: {
                height: 325,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    endingShape: 'rounded',
                    columnWidth: '70%',
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

                name: 'likes',

                data: [286, 498, 834, 589, 426, 683, 489, 289]
            }, {
                name: 'Clicks',

                data: [734, 392, 528, 628, 839, 382, 489, 894]
            }, {
                name: 'Comments',
                data: [163, 493, 836, 389, 592, 653, 894, 482]
            }],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            },
            yaxis: {

            },
            fill: {
                opacity: 1

            },
			grid: {
                borderColor: 'rgba(187, 193, 202,0.3)', 
            },
			colors: ['#089e60', '#1396cc', '#ff9933'],
            tooltip: {
                y: {
                    formatter: function (val) {
                        return " " + val + " "
                    }
                }
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#social"),
            options
        );

        chart.render();

	
})(jQuery);