import { Component, OnInit, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-emv',
  templateUrl: './emv.component.html',
  styleUrls: ['./emv.component.scss']
})
export class EmvComponent implements OnInit, OnDestroy {

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
    let chart = am4core.create("emvchartdiv", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "Perbandingan Terus",
        value: 260
      },
      {
        country: "Kos",
        value: 230
      },
      {
        country: "Pelaburan",
        value: 200
      },
      {
        country: "Keuntungan",
        value: 165
      },
      {
        country: "Nilai Baki",
        value: 139
      },
      {
        country: "Discounted Cash Flow",
        value: 128
      }
    ];

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.radiusValue = "value";
    series.dataFields.category = "country";
    series.slices.template.cornerRadius = 6;
    series.colors.step = 3;

    series.hiddenState.properties.endAngle = -90;

    chart.legend = new am4charts.Legend();


  }

}
