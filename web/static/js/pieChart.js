
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: chartLabels,
      datasets: [
        {
        backgroundColor: ChartColours,

          data: pieChartData
        }
      ]
    },
    options: {
        
        legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 12
                }
            },        
      title: {
        display: true,
        fontSize: 16,
        fontColor: "white",
        text: pieTitle
      }
    }
});