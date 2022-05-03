// TOTAL EARNING
var xValues = [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];
var yValues = [200000,400000,450000,460000,500000,560000,620000,750000,,];

new Chart("totalChart", {
  type: "line",
  data: 
    {labels: xValues,
    datasets: [{
      fill:false,
      lineTension: 0,
      borderColor: "purple",
      data: yValues,
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "TOTAL EARNING",
      fontSize: 20,
    },
    scales: {
      yAxes: [{ticks: {min: 200000, max:1200000}}],
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

new Chart("genderChart", {
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
      text: "GENDER",

    }
  }
});
// ----------------------------------------------------//
// PART-TIME FULL-TIME CHART
var xValuesPTFT = ["P-T","F-T"];
var yValuesPTFT = [60,300];
var barColors = [
  "#F2B035",
  "#011C40"
];

new Chart("PTFTChart", {
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
      display:false
    },
    title: {
      display: true,
      text: "PART-TIME/FULL-TIME"
    }
  }
});