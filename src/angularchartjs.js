/**************************
Angular JS - Chartjs directive
Creates a chartjs directive to be used with angular.
Also examplifies how to make a controller to provide data to the directive
**************************/

angular.module("app.chart.ctrls", []).controller("chartjsCtrl", ["$scope",
        function($scope) {
            return $scope.chartjsLine = {
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
            },$scope.chartjsBar = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(38,147,233,0.5)",
                        strokeColor: "rgba(38,147,233,0.8)",
                        highlightFill: "rgba(38,147,233,0.75)",
                        highlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(245,135,44,0.5)",
                        strokeColor: "rgba(245,135,44,0.8)",
                        highlightFill: "rgba(245,135,44,0.75)",
                        highlightStroke: "rgba(151,187,205,1)",
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            },$scope.chartjsRadar = {
                labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(38,147,233,0.8)",
                        strokeColor: "rgba(204,204,204,1)",
                        pointColor: "rgba(38,147,233,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(38,147,233,1)",
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(245,134,44,0.8)",
                        strokeColor: "rgba(204,204,204,1)",
                        pointColor: "rgba(245,134,44,0.8)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(245,134,44,0.8)",
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            },$scope.chartjsPolarArea = [{
                value: 300,
                color:"#2693E9",
                highlight: "#2693E9",
                label: "Blue"
            },
                {
                    value: 50,
                    color: "#F5862C",
                    highlight: "#F5862C",
                    label: "Orange"
                },
                {
                    value: 100,
                    color: "#43B040",
                    highlight: "#43B040",
                    label: "Green"
                },
                {
                    value: 40,
                    color: "#949FB1",
                    highlight: "#A8B3C5",
                    label: "Grey"
                },
                {
                    value: 120,
                    color: "#4D5360",
                    highlight: "#616774",
                    label: "Dark Grey"
                }],$scope.chartjsPie = [{
                value: 300,
                color:"#2693E9",
                highlight: "#2693E9",
                label: "Blue"
            },
                {
                    value: 50,
                    color: "#F5862C",
                    highlight: "#F5862C",
                    label: "Orange"
                },
                {
                    value: 100,
                    color: "#43B040",
                    highlight: "#43B040",
                    label: "Green"
                }],$scope.chartjsDoughnut = [{
                value: 300,
                color:"#2693E9",
                highlight: "#2693E9",
                label: "Blue"
            },
                {
                    value: 50,
                    color: "#F5862C",
                    highlight: "#F5862C",
                    label: "Orange"
                },
                {
                    value: 100,
                    color: "#43B040",
                    highlight: "#43B040",
                    label: "Green"
                }];
        }
    ]).directive('chart', function () {
        var baseWidth = 600;
        var baseHeight = 400;

        return {
            restrict: 'E',
            template: '<canvas></canvas>',
            scope: {
                chartObject: "=value",
                data: "="
            },
            link: function (scope, element, attrs) {
                var canvas  = element.find('canvas')[0],
                    context = canvas.getContext('2d'),
                    chart;

                var options = {
                    type:   attrs.type   || "Line",
                    width:  attrs.width  || baseWidth,
                    height: attrs.height || baseHeight
                };
                canvas.width = options.width;
                canvas.height = options.height;
                chart = new Chart(context);

                var chartType = attrs.type;

                console.log(scope.data);
                chart[chartType](scope.data, options);

                //Update when charts data changes
                scope.$watch(function() { return scope.chartObject; }, function(value) {
                    if(!value) return;
                    var chartType = options.type;
                    chart[chartType](scope.chartObject.data, scope.chartObject.options);
                });
            }
        };
    }).directive("flotChart", [
        function() {
            return {
                restrict: "A",
                scope: {
                    data: "=",
                    options: "="
                },
                link: function(scope, ele) {
                    var data, options, plot;
                    return data = scope.data, options = scope.options, plot = $.plot(ele[0], data, options);
                }
            };
        }
    ]);