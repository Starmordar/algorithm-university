const ctx = document.getElementById('canvas').getContext('2d');

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1 element', '10 element', '100 element', '1000 element', '3000 element', '5000 element', '8000 element', '10000 element'],
        datasets: [{
            label: 'Check if number is even (ms)',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0.072, 0.078, 6.075, 14.68, 83.387, 211.56, 498.125, 866.51],
            fill: false,
        },
        {
            label: 'Create 2D random matrix (ms)',
            backgroundColor: 'rgb(0, 0, 255)',
            borderColor: 'rgb(0, 0, 255)',
            data: [0.090, 0.134, 2.005, 62.145, 600.779, 1649.577, 3659.787, 7464.98],
            fill: false,
        }
    ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Elements amount'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Algorithm running time (ms)'
                }
            }]
        }
    }
});