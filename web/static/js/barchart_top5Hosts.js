new Chart(document.getElementById("bar-chart"), {
    type: barChartHorizontal,
    data: {
    labels: topfiveHostLabel,
    datasets: [
        {
        // label: chartTitle,
        barPercentage: 0.5,
        // backgroundColor: ["#de425b", "#8e5ea2","#ff6361","#bc5090","#ffa600"],
        backgroundColor: ["rgba(222, 66, 91,0.6)", "#8e5ea2","#ff6361","#bc5090","#ffa600"],                
        data: hostresult
        }
    ]
    },
    options: {
        legend: {
            display: false,
            labels: {                
                // fontColor: "white",
                // fontSize: 16,
                
            }
        },
    scales: {
        xAxes: [{
            ticks: {
                fontColor: "white",
            },
            gridLines: {
                offsetGridLines: true
            }
        }],
        yAxes: [{
            ticks: {
                fontColor: "white",
            }
        }]
    }
    }
});