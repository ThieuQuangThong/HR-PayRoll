// VACATION DAYS
var xValues = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var yValues1 = [12,12,12,12,12,12,12,12,12,12,12,12];
var yValues2 = [4,10,5,4,6,7,4,5,4,5,5,5];

new Chart("vacationChart", {
    type: "line",
    data: 
      {labels: xValues,
      datasets: [{
        fill:false,
        lineTension: 0,
        borderColor: "rgba(25, 230, 160, 1)",
        data: yValues1,
      },
      {
        fill:false,
        lineTension: 0,
        borderColor: "rgba(25, 154, 251, 1)",
        data: yValues2,
      },
        ]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "VACATION DAYS",
        fontSize: 20,
      },
      scales: {
        yAxes: [{ticks: {min: 0, max:30}}],
      },
    }
  });
// -----------------------------------------------------//
//GENDER CHART
var xValuesGender = ["M","FM"];
var yValuesGender = [300,60];
var barColors = [
  "#00aba9",
  "#b91d47"
];

new Chart("genderChartVC", {
  type: "pie",
  data: {
    labels: xValuesGender,
    datasets: [{
      backgroundColor: barColors,
      data: yValuesGender
    }]
  },
  options: {
    legend:{
      display:false
    },
    title: {
      display: true,
      text: "GENDER"
    }
  }
});
// // ----------------------------------------------------//
// // PART-TIME FULL-TIME CHART
var xValuesPTFT = ["P-T","F-T"];
var yValuesPTFT = [60,300];
var barColors = [
  "#F2B035",
  "#011C40"
];

new Chart("PTFTChartVC", {
  type: "pie",
  data: {
    labels: xValuesPTFT,
    datasets: [{
      backgroundColor: barColors,
      data: yValuesPTFT
    }]
  },
  options: {
    legend:{
      display:false,
    },
    title: {
      display: true,
      text: "PART-TIME/FULL-TIME"
    }
  }
});