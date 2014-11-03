chartjs-directive
=================

Provides a chartjs directive to create different types of Chartjs like : 

Line charts
Bart charts
Radar charts
Polar charts
Pie charts
Dougnut charts

Simply create a chart like the following : 

<chart class="chartjs" data-data="chartjsLine" data-type="Line" value="myChart"></chart>

Data is provided in the controller scope like this : 

<pre>$scope.chartjsLine = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(38,147,233,0.2)",
                        strokeColor: "rgba(38,147,233,1)",
                        pointColor: "rgba(38,147,233,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(245,135,44,0.2)",
                        strokeColor: "rgba(245,135,44,1)",
                        pointColor: "rgba(245,135,44,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            }</pre>

<a href="http://www.chartjs.org/">The chart js documentation<a/>
