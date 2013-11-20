$(document).ready(function() {
  getVisualData()
});

function getVisualData() {  
  var executive_summary_1_data = [];
  var executive_summary_2_drc_data = [];
  var executive_summary_2_car_data = [];  

  var get_executive_summary_1_data = $.getJSON( 'http://lra.herokuapp.com/metrics/incidents.json?callback=?&type=attacks&start_date=2011-01-01&end_date=2013-09-01&duration=quarter&group=civilian_fatalities', function (data) {
      for(var i = 0; i < data.periods.length; i++) { 
        executive_summary_1_data.push([data.periods[i].unix_start_datetime * 1000, data.periods[i].count])
      }
  });
  var get_executive_summary_2_drc_data = $.getJSON( 'http://lra.herokuapp.com/metrics/incidents.json?callback=?&type=attacks&start_date=2011-01-01&end_date=2013-09-01&duration=quarter&country=DRC', function (data) {
      for(var i = 0; i < data.periods.length; i++) { 
        executive_summary_2_drc_data.push([data.periods[i].unix_start_datetime * 1000, data.periods[i].count])
      }
  });
  var get_executive_summary_2_car_data = $.getJSON( 'http://lra.herokuapp.com/metrics/incidents.json?callback=?&type=attacks&start_date=2011-01-01&end_date=2013-09-01&duration=quarter&country=CAR', function (data) {
      for(var i = 0; i < data.length; i++) { 
        executive_summary_2_car_data.periods.push([data.periods[i].unix_start_datetime * 1000, data.periods[i].count])
      }
  });
  $.when(get_executive_summary_1_data, get_executive_summary_2_drc_data, get_executive_summary_2_car_data).done(function() {
    buildExecutiveSummary1(executive_summary_1_data)
    buildExecutiveSummary2(executive_summary_2_drc_data, executive_summary_2_car_data)
  });
};

function buildExecutiveSummary1(executive_summary_1_data) {
  $('#executive-summary-1').highcharts({
    chart: {
      type: 'line'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    title: {
        text: "LRA Fatalities"
    },
    subtitle: {
        text: "January 2010-September 2013"
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%b %y'
      }
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
      formatter: function() {
        return '<b>'+ this.series.name +'</b><br/>'+
        Highcharts.dateFormat('%e. %b, %y', this.x) +': '+ this.y;
      }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: "LRA Fatalities",
        data: executive_summary_1_data
    }]
  });
};

function buildExecutiveSummary2(executive_summary_2_drc_data, executive_summary_2_car_data) {
  $('#executive-summary-2').highcharts({
    chart: {
        type: 'column'
    },
    colors: ["#2f7ed8",'#0d233a', '#525252', '#910000'],
    title: {
        text: "LRA Attacks by Country"
    },
    subtitle: {
        text: "January 2010-September 2013"
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%b %y'
      }
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
      formatter: function() {
        return '<b>'+ this.series.name +'</b><br/>'+
        Highcharts.dateFormat('%e. %b, %y', this.x) +': '+ this.y;
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },
    credits: {
      enabled: false
    },
    series: [{
        name: "LRA Attacks in DRC",
        data: executive_summary_2_car_data
    }, {
        name: "LRA Attacks in CAR",
        data: executive_summary_2_drc_data
    }]
  });
};