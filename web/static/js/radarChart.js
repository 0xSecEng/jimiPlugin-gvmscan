    // scaleShowLabels : false,
    Chart.defaults.global.defaultFontColor = "white";
    new Chart(document.getElementById("test-chart"), {
        type: 'radar',
        data: {
          labels: ["Database", "FileTransfer", "Other", "RDP", "UnsecureProtocols", "WebServer"],
          datasets: [
            {
              label: "High",
              fill: true,
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",          
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgba(255,99,132,1)",
              data: highVals
            }, 
            {
              label: "Medium",
              fill: true,
              backgroundColor: "rgb(215, 161, 45,0.2)",
              borderColor: "rgb(224, 187, 106,1)",   //rgba(179,181,198,1)",
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgb(224, 187, 106,1)",
              data: mediumVals
            }
          ]
        },
        options: {
          
          title: {
            display: false,
            fontSize: 16,

            text: "Distribution of vulnerabilities by port (High / Medium)",
            },
            scale: {
                // gridLines: {
                //     color: "white",
                // },
                ticks: {
                    display: false
                }        
            }    
        }
    });
    