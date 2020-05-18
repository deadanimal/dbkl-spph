import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import * as moment from 'moment';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { MocksService } from 'src/app/shared/services/mocks/mocks.service';
am4core.useTheme(am4themes_animated);

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-percetakan-dinamik',
  templateUrl: './percetakan-dinamik.component.html',
  styleUrls: ['./percetakan-dinamik.component.scss']
})
export class PercetakanDinamikComponent implements OnInit {

  // Chart
  chart: any

  // Datepicker
  bsDConfig = {
    isAnimated: true,
    containerClass: 'theme-dark-blue'
  }

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = []
  SelectionType = SelectionType;

  constructor(
    private mockService: MocksService,
    private zone: NgZone
  ) { 
    this.getData()
  }

  ngOnInit() {
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
    })
  }

  getData() {
    this.mockService.getAll('user-dinamik/dinamik.data.json').subscribe(
      (res) => {
        // Success
        this.tableRows = [...res]
        this.tableTemp = this.tableRows.map((prop, key) => {
          return {
            ...prop,
            id: key
          };
        });
        // Unsuccess
      },
      () => {
        // Unsuccess
      },
      () => {
        // After that
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart()
    })
  }

  getChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [{
      "date": "2019-03-01",
      "amount": 20
    }, {
      "date": "2019-03-02",
      "amount": 75
    }, {
      "date": "2019-03-03",
      "amount": 15
    }, {
      "date": "2019-03-04",
      "amount": 75
    }, {
      "date": "2019-03-05",
      "amount": 158
    }, {
      "date": "2019-03-06",
      "amount": 57
    }, {
      "date": "2019-03-07",
      "amount": 107
    }, {
      "date": "2019-03-08",
      "amount": 89
    }, {
      "date": "2019-03-09",
      "amount": 75
    }, {
      "date": "2019-03-10",
      "amount": 132
    }, {
      "date": "2019-03-11",
      "amount": 380
    }, {
      "date": "2019-03-12",
      "amount": 56
    }, {
      "date": "2019-03-13",
      "amount": 169
    }, {
      "date": "2019-03-14",
      "amount": 24
    }, {
      "date": "2019-03-15",
      "amount": 147
    }];

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 50;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.logarithmic = true;
    valueAxis.renderer.minGridDistance = 20;

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "amount";
    series.dataFields.dateX = "date";
    series.tensionX = 0.8;
    series.strokeWidth = 3;

    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.fill = am4core.color("#fff");
    bullet.circle.strokeWidth = 3;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.fullWidthLineX = true;
    chart.cursor.xAxis = dateAxis;
    chart.cursor.lineX.strokeWidth = 0;
    chart.cursor.lineX.fill = am4core.color("#000");
    chart.cursor.lineX.fillOpacity = 0.1;

    // Add scrollbar
    chart.scrollbarX = new am4core.Scrollbar();

    // Add a guide
    let range = valueAxis.axisRanges.create();
    range.value = 90.4;
    range.grid.stroke = am4core.color("#396478");
    range.grid.strokeWidth = 1;
    range.grid.strokeOpacity = 1;
    range.grid.strokeDasharray = "3,3";
    range.label.inside = true;
    range.label.text = "Average";
    range.label.fill = range.grid.stroke;
    range.label.verticalCenter = "bottom";

    this.chart = chart
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.tableTemp = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

}
