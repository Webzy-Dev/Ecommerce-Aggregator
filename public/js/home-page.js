new Chart(document.getElementById("myChart"), {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{ 
          data: [24,14,16,16,7,11,13],
          label: "Theory of Everything",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [28,35,41,5,6,8,7],
          label: "Big Bang Theory 1",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: [16,17,18,19,23,26,8],
          label: "Big Bang Theory 2",
          borderColor: "#3cba9f",
          fill: false
        }, { 
          data: [40,20,10,16,24,38,74],
          label: "Big Bang Theory 3",
          borderColor: "#e8c3b9",
          fill: false
        }, { 
          data: [6,3,2,2,7,26,28],
          label: "Big Bang Theory 4",
          borderColor: "#c45850",
          fill: false
        }
      ]
    }
  });
