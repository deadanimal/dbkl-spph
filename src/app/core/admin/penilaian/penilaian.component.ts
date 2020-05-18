import { Component, OnInit, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-penilaian',
  templateUrl: './penilaian.component.html',
  styleUrls: ['./penilaian.component.scss']
})
export class PenilaianComponent implements OnInit {

  chart: any
  chart1: any

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.getChart()
    })
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
    })
  }

  getChart() {
    let chart = am4core.create("penilaianchartdiv", am4charts.XYChart);
    chart.paddingRight = 20;

    chart.data = generateChartData();

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      "timeUnit": "minute",
      "count": 1
    };
    dateAxis.tooltipDateFormat = "HH:mm, d MMMM";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.title.text = "Unique visitors";

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "visits";
    series.tooltipText = "[bold]{valueY}[/]";
    series.fillOpacity = 0.3;


    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;


    dateAxis.start = 0.8;
    dateAxis.keepSelection = true;



    function generateChartData() {
      let chartData = [];
      // current date
      let firstDate = new Date();
      // now set 500 minutes back
      firstDate.setMinutes(firstDate.getDate() - 500);

      // and generate 500 data items
      let visits = 500;
      for (var i = 0; i < 500; i++) {
        let newDate = new Date(firstDate);
        // each time we add one minute
        newDate.setMinutes(newDate.getMinutes() + i);
        // some random number
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        // add data item to the array
        chartData.push({
          date: newDate,
          visits: visits
        });
      }
      return chartData;
    }
  }

}
