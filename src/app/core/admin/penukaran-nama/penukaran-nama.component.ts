import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import { MocksService } from 'src/app/shared/services/mocks/mocks.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_animated);

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-penukaran-nama',
  templateUrl: './penukaran-nama.component.html',
  styleUrls: ['./penukaran-nama.component.scss']
})
export class PenukaranNamaComponent implements OnInit {

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = []
  SelectionType = SelectionType;

  // Chart
  private chart: any

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
    this.zone.runOutsideAngular(
      () => {
        if (this.chart) {
          console.log('Chart disposed')
          this.chart.dispose()
        }
      }
    )
  }

  getData() {
    this.mockService.getAll('user/penukaran.data.json').subscribe(
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
    let container = am4core.create("chartdiv", am4core.Container);
    container.layout = "grid";
    container.fixedWidthGrid = false;
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);

    // Color set
    let colors = new am4core.ColorSet();

    // Functions that create various sparklines
    function createLine(title, data, color) {

      let chart = container.createChild(am4charts.XYChart);
      chart.width = am4core.percent(45);
      chart.height = 70;

      chart.data = data;

      chart.titles.template.fontSize = 10;
      chart.titles.template.textAlign = "start";
      chart.titles.template.isMeasured = false;
      chart.titles.create().text = title;

      chart.padding(20, 5, 2, 5);

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.renderer.labels.template.disabled = true;
      dateAxis.startLocation = 0.5;
      dateAxis.endLocation = 0.7;
      dateAxis.cursorTooltipEnabled = false;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.baseGrid.disabled = true;
      valueAxis.renderer.labels.template.disabled = true;
      valueAxis.cursorTooltipEnabled = false;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.lineY.disabled = true;
      chart.cursor.behavior = "none";

      let series = chart.series.push(new am4charts.LineSeries());
      series.tooltipText = "{date}: [bold]{value}";
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";
      series.tensionX = 0.8;
      series.strokeWidth = 2;
      series.stroke = color;

      // render data points as bullets
      let bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.opacity = 0;
      bullet.circle.fill = color;
      bullet.circle.propertyFields.opacity = "opacity";
      bullet.circle.radius = 3;

      return chart;
    }

    function createColumn(title, data, color) {

      let chart = container.createChild(am4charts.XYChart);
      chart.width = am4core.percent(45);
      chart.height = 70;

      chart.data = data;

      chart.titles.template.fontSize = 10;
      chart.titles.template.textAlign = "start";
      chart.titles.template.isMeasured = false;
      chart.titles.create().text = title;

      chart.padding(20, 5, 2, 5);

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.renderer.labels.template.disabled = true;
      dateAxis.cursorTooltipEnabled = false;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.baseGrid.disabled = true;
      valueAxis.renderer.labels.template.disabled = true;
      valueAxis.cursorTooltipEnabled = false;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.lineY.disabled = true;

      let series = chart.series.push(new am4charts.ColumnSeries());
      series.tooltipText = "{date}: [bold]{value}";
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";
      series.strokeWidth = 0;
      series.fillOpacity = 0.5;
      series.columns.template.propertyFields.fillOpacity = "opacity";
      series.columns.template.fill = color;

      return chart;
    }

    function createPie(data, color) {

      let chart = container.createChild(am4charts.PieChart);
      chart.width = am4core.percent(10);
      chart.height = 70;
      chart.padding(20, 0, 2, 0);

      chart.data = data;

      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "value";
      pieSeries.dataFields.category = "category";
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;
      pieSeries.slices.template.fill = color;
      pieSeries.slices.template.adapter.add("fill", function (fill: any, target) {
        return fill.lighten(0.1 * target.dataItem.index);
      });
      pieSeries.slices.template.stroke = am4core.color("#fff");

      // chart.chartContainer.minHeight = 40;
      // chart.chartContainer.minWidth = 40;

      return chart;
    }


    createLine("()", [
      { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 57 },
      { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 27 },
      { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 24 },
      { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 59 },
      { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 33 },
      { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 46 },
      { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 20 },
      { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 42 },
      { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 59, "opacity": 1 }
    ], colors.getIndex(0));

    createColumn("()", [
      { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 22 },
      { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 25 },
      { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 40 },
      { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 35 },
      { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 29 },
      { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 1 },
      { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 15 },
      { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 29 },
      { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 33, "opacity": 1 }
    ], colors.getIndex(0));

    createPie([
      { "category": "Marketing", "value": 501 },
      { "category": "Research", "value": 301 },
      { "category": "Sales", "value": 201 },
      { "category": "HR", "value": 165 }
    ], colors.getIndex(0));

    createLine("()", [
      { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 22 },
      { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 25 },
      { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 40 },
      { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 35 },
      { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 29 },
      { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 1 },
      { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 15 },
      { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 29 },
      { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 33, "opacity": 1 }
    ], colors.getIndex(1));

    createColumn("()", [
      { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 57 },
      { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 27 },
      { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 24 },
      { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 59 },
      { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 33 },
      { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 46 },
      { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 20 },
      { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 42 },
      { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 59, "opacity": 1 }
    ], colors.getIndex(1));

    createPie([
      { "category": "Data 1", "value": 130 },
      { "category": "Data 2", "value": 450 },
      { "category": "Data 3", "value": 400 },
      { "category": "Data 4", "value": 200 }
    ], colors.getIndex(1));

    createLine("()", [
      { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 16 },
      { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 62 },
      { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 55 },
      { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 34 },
      { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 29 },
      { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 29 },
      { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 28 },
      { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 32 },
      { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 30, "opacity": 1 }
    ], colors.getIndex(2));

    createColumn("()", [
      { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 50 },
      { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 51 },
      { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 62 },
      { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 60 },
      { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 25 },
      { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 20 },
      { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 70 },
      { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 42 },
      { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 33, "opacity": 1 }
    ], colors.getIndex(2));

    createPie([
      { "category": "Data 1", "value": 220 },
      { "category": "Data 2", "value": 200 },
      { "category": "Data 3", "value": 150 },
      { "category": "Data 4", "value": 125 }
    ], colors.getIndex(2));

    // FB

    createLine("()", [
      { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 52 },
      { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 55 },
      { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 35 },
      { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 34 },
      { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 39 },
      { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 42 },
      { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 29 },
      { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 22 },
      { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 15, "opacity": 1 }
    ], colors.getIndex(3));

    createColumn("()", [
      { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 20 },
      { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 20 },
      { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 25 },
      { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 26 },
      { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 29 },
      { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 27 },
      { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 25 },
      { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 32 },
      { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 30, "opacity": 1 }
    ], colors.getIndex(3));

    createPie([
      { "category": "Data 1", "value": 120 },
      { "category": "Data 2", "value": 150 },
      { "category": "Data 3", "value": 125 },
      { "category": "Data 4", "value": 250 }
    ], colors.getIndex(3));

    this.chart = container
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

}
