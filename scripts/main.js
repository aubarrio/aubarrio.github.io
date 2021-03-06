
function simplePlot() {
    Highcharts.chart('container', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Comparison of Wins: Top Six Teams vs. Rest of Teams<br>2014-15 Premier League Season'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>:<br>{point.percentage:.1f} %<br>Wins: {point.y}'
                },
                showInLegend: true
            }
        },
        legend: {
            borderWidth: 1,
            borderColor: '#cccccc',
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'top'
        },
        series: [{
            name: 'Wins',
            data: [{
                name: 'Top Six',
                y: 129,
                color: '#ffcccb',
                legendIndex: 1
            }, {
                name: 'Rest of Teams',
                y: 158,
                color: '#add8e6',
            }]
        }]
    });
}

function simplePlot2() {
    Highcharts.chart('container2', {
        chart: {
            defaultSeriesType: 'line',
            marginTop: 100
        },
        title: {
            text: 'Comparison of League Standings to Bet Winnings Standings<br>For The 2014-15 Premier League Season'
        },
        legend: {
            enabled: false
        },
        tooltip: {
            formatter: function () {
                if (this.x == 'Bet Standings') {
                    d = {
                        20: '$230.40',
                        19: '$228.20',
                        18: '$148.40',
                        17: '$54.80',
                        16: '$54.30',
                        15: '$31.40',
                        14: '$6.10',
                        13: '$2.90',
                        12: '-$4.60',
                        11: '-$11.30',
                        10: '-$11.80',
                        9: '-$41.30',
                        8: '-$42.40',
                        7: '-$52.60',
                        6: '-$58.60',
                        5: '-$63.00',
                        4: '-$116.30',
                        3: '-$122.40',
                        2: '-$137.00',
                        1: '-$142.40'
                    }
                    return 'Profit: ' + d[this.y];
                } else {
                    d = { 1: 20, 2: 19, 3: 18, 4: 17, 5: 16, 6: 15, 7: 14, 8: 13, 9: 12, 10: 11, 11: 10, 12: 9, 13: 8, 14: 7, 15: 6, 16: 5, 17: 4, 18: 3, 19: 2, 20: 1 }
                    return "League Position: " + d[this.y];
                }
            }
        },
        xAxis: {
            opposite: true,
            lineColor: '#999',
            categories: ['League Standings', 'Bet Standings'],
            title: {
                text: ''
            },
            labels: {
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        yAxis: {
            gridLineWidth: 0,
            labels: {
                enabled: false,
            },
            title: {
                text: '',
            }
        },
        plotOptions: {
            line: {
                lineWidth: 2,
                shadow: false,
                color: '#666',
                marker: {
                    radius: 2,
                    symbol: 'circle'
                },
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    x: 10,
                    y: 0,
                    formatter: function () {
                        if (this.x == 'Bet Standings') {
                            dict = { 1: 20, 2: 19, 3: 18, 4: 17, 5: 16, 6: 15, 7: 14, 8: 13, 9: 12, 10: 11, 11: 10, 12: 9, 13: 8, 14: 7, 15: 6, 16: 5, 17: 4, 18: 3, 19: 2, 20: 1 }
                            return dict[this.y] + '. ' + this.series.name;
                        }
                    }
                }
            },
            scatter: {
                shadow: false,
                color: '#666',
                marker: {
                    radius: 2
                },
                dataLabels: {
                    enabled: true,
                    align: 'right',
                    x: -10,
                    y: 0,
                    formatter: function () {
                        dict = { 1: 20, 2: 19, 3: 18, 4: 17, 5: 16, 6: 15, 7: 14, 8: 13, 9: 12, 10: 11, 11: 10, 12: 9, 13: 8, 14: 7, 15: 6, 16: 5, 17: 4, 18: 3, 19: 2, 20: 1 }
                        return dict[this.y] + '. ' + this.point.name;
                    }
                }
            }
        },
        series: [{
            name: 'Chelsea',
            data: [20, 13]
        }, {
            name: 'Manchester City',
            data: [19, 11]
        }, {
            name: 'Arsenal',
            data: [18, 12]
        }, {
            name: 'Manchester United',
            data: [17, 10]
        }, {
            name: 'Tottenham',
            data: [16, 17]
        }, {
            name: 'Liverpool',
            data: [15, 9]
        }, {
            name: 'Southampton',
            data: [14, 14]
        }, {
            name: 'Swansea',
            data: [13, 20]
        }, {
            name: 'Stoke City',
            data: [12, 19]
        }, {
            name: 'Crystal Palace',
            data: [11, 18]
        }, {
            name: 'Everton',
            data: [10, 4]
        }, {
            name: 'West Ham',
            data: [9, 8]
        }, {
            name: 'West Brom',
            data: [8, 16]
        }, {
            name: 'Leicester City',
            data: [7, 6]
        }, {
            name: 'Newcastle',
            data: [6, 7]
        }, {
            name: 'Sunderland',
            data: [5, 2]
        }, {
            name: 'Aston Villa',
            data: [4, 15]
        }, {
            name: 'Hull',
            data: [3, 3]
        }, {
            name: 'Burnley',
            data: [2, 5]
        }, {
            name: 'QPR',
            data: [1, 1]
        }, {
            type: 'scatter',
            data: [{ 'x': 0, 'y': 20, 'name': 'Chelsea' },
            { 'x': 0, 'y': 19, 'name': 'Manchester City' },
            { 'x': 0, 'y': 18, 'name': 'Arsenal' },
            { 'x': 0, 'y': 17, 'name': 'Manchester United' },
            { 'x': 0, 'y': 16, 'name': 'Tottenham' },
            { 'x': 0, 'y': 15, 'name': 'Liverpool' },
            { 'x': 0, 'y': 14, 'name': 'Southampton' },
            { 'x': 0, 'y': 13, 'name': 'Swansea' },
            { 'x': 0, 'y': 12, 'name': 'Stoke City' },
            { 'x': 0, 'y': 11, 'name': 'Crystal Palace' },
            { 'x': 0, 'y': 10, 'name': 'Everton' },
            { 'x': 0, 'y': 9, 'name': 'West Ham' },
            { 'x': 0, 'y': 8, 'name': 'West Brom' },
            { 'x': 0, 'y': 7, 'name': 'Leicester City' },
            { 'x': 0, 'y': 6, 'name': 'Newcastle' },
            { 'x': 0, 'y': 5, 'name': 'Sunderland' },
            { 'x': 0, 'y': 4, 'name': 'Aston Villa' },
            { 'x': 0, 'y': 3, 'name': 'Hull' },
            { 'x': 0, 'y': 2, 'name': 'Burnley' },
            { 'x': 0, 'y': 1, 'name': 'QPR' }]
        }]
    });
}

function simplePlot3() {
    Highcharts.chart('container3', {
        title: {
            text: 'Comparison of Decimal Odds: Chelsea vs. Swansea'
        },

        subtitle: {
            text: '2014-15 Premier League Season'
        },

        yAxis: {
            title: {
                text: 'Decimal Odds For Matchday'
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
            },
            title: {
                text: 'Matchday'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1
            }
        },

        series: global['data'],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });
}

function plots(data) {

    global = data;

    simplePlot();
    simplePlot2();
    simplePlot3();
}

async function loadJSON(path) {
    let response = await fetch(path);
    let dataset = await response.json();
    return dataset;
}

function init() {

    dataPromise = loadJSON('./data/data.json');
    dataPromise.then(function (data) {
        plots(data);
    });
}

document.addEventListener('DOMContentLoaded', init, false);