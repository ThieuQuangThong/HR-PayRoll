// BENEFIT PAID
var xValues = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var yValues = [12000,20000,40000,48000,56000,62000,70000,74000,78000,80000,85000,120000];

new Chart("benefitPaidChart", {
    type: "line",
    data: 
      {labels: xValues,
      datasets: [{
        fill:false,
        lineTension: 0,
        borderColor: "rgba(59, 141, 208, 1)",
        data: yValues,
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "BENEFIT PAID",
        fontSize: 20,
      },
      scales: {
        yAxes: [{ticks: {min: 0, max:200000}}],
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

new Chart("genderChartBP", {
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

new Chart("PTFTChartBP", {
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