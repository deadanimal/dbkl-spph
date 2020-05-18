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
  selector: 'app-caj-pembangunan',
  templateUrl: './caj-pembangunan.component.html',
  styleUrls: ['./caj-pembangunan.component.scss']
})
export class CajPembangunanComponent implements OnInit, OnDestroy {

  // Chart
  chart: any
  chart1: any
  chart2: any
  chart3: any

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
      if (this.chart1) {
        this.chart1.dispose()
      }
      if (this.chart2) {
        this.chart2.dispose()
      }
      if (this.chart3) {
        this.chart3.dispose()
      }
    })
  }

  getData() {
    this.mockService.getAll('user/pembangunan.data.json').subscribe(
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
      this.getChart1()
      this.getChart2()
      this.getChart3()
    })
  }

  getChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [{
      "date": "2019-07-27",
      "value": 13
    }, {
      "date": "2019-07-28",
      "value": 11
    }, {
      "date": "2019-07-29",
      "value": 15
    }, {
      "date": "2019-07-30",
      "value": 16
    }, {
      "date": "2019-07-31",
      "value": 18
    }, {
      "date": "2019-08-01",
      "value": 13
    }, {
      "date": "2019-08-02",
      "value": 22
    }, {
      "date": "2019-08-03",
      "value": 23
    }, {
      "date": "2019-08-04",
      "value": 20
    }, {
      "date": "2019-08-05",
      "value": 17
    }, {
      "date": "2019-08-06",
      "value": 16
    }, {
      "date": "2019-08-07",
      "value": 18
    }, {
      "date": "2019-08-08",
      "value": 21
    }, {
      "date": "2019-08-09",
      "value": 26
    }, {
      "date": "2019-08-10",
      "value": 24
    }, {
      "date": "2019-08-11",
      "value": 29
    }, {
      "date": "2019-08-12",
      "value": 32
    }, {
      "date": "2019-08-13",
      "value": 18
    }, {
      "date": "2019-08-14",
      "value": 24
    }, {
      "date": "2019-08-15",
      "value": 22
    }, {
      "date": "2019-08-16",
      "value": 18
    }, {
      "date": "2019-08-17",
      "value": 19
    }, {
      "date": "2019-08-18",
      "value": 14
    }, {
      "date": "2019-08-19",
      "value": 15
    }, {
      "date": "2019-08-20",
      "value": 12
    }, {
      "date": "2019-08-21",
      "value": 8
    }, {
      "date": "2019-08-22",
      "value": 9
    }, {
      "date": "2019-08-23",
      "value": 8
    }, {
      "date": "2019-08-24",
      "value": 7
    }, {
      "date": "2019-08-25",
      "value": 5
    }, {
      "date": "2019-08-26",
      "value": 11
    }, {
      "date": "2019-08-27",
      "value": 13
    }, {
      "date": "2019-08-28",
      "value": 18
    }, {
      "date": "2019-08-29",
      "value": 20
    }, {
      "date": "2019-08-30",
      "value": 29
    }, {
      "date": "2019-08-31",
      "value": 33
    }, {
      "date": "2019-09-01",
      "value": 42
    }, {
      "date": "2019-09-02",
      "value": 35
    }, {
      "date": "2019-09-03",
      "value": 31
    }, {
      "date": "2019-09-04",
      "value": 47
    }, {
      "date": "2019-09-05",
      "value": 52
    }, {
      "date": "2019-09-06",
      "value": 46
    }, {
      "date": "2019-09-07",
      "value": 41
    }, {
      "date": "2019-09-08",
      "value": 43
    }, {
      "date": "2019-09-09",
      "value": 40
    }, {
      "date": "2019-09-10",
      "value": 39
    }, {
      "date": "2019-09-11",
      "value": 34
    }, {
      "date": "2019-09-12",
      "value": 29
    }, {
      "date": "2019-09-13",
      "value": 34
    }, {
      "date": "2019-09-14",
      "value": 37
    }, {
      "date": "2019-09-15",
      "value": 42
    }, {
      "date": "2019-09-16",
      "value": 49
    }, {
      "date": "2019-09-17",
      "value": 46
    }, {
      "date": "2019-09-18",
      "value": 47
    }, {
      "date": "2019-09-19",
      "value": 55
    }, {
      "date": "2019-09-20",
      "value": 59
    }, {
      "date": "2019-09-21",
      "value": 58
    }, {
      "date": "2019-09-22",
      "value": 57
    }, {
      "date": "2019-09-23",
      "value": 61
    }, {
      "date": "2019-09-24",
      "value": 59
    }, {
      "date": "2019-09-25",
      "value": 67
    }, {
      "date": "2019-09-26",
      "value": 65
    }, {
      "date": "2019-09-27",
      "value": 61
    }, {
      "date": "2019-09-28",
      "value": 66
    }, {
      "date": "2019-09-29",
      "value": 69
    }, {
      "date": "2019-09-30",
      "value": 71
    }, {
      "date": "2019-10-01",
      "value": 67
    }, {
      "date": "2019-10-02",
      "value": 63
    }, {
      "date": "2019-10-03",
      "value": 46
    }, {
      "date": "2019-10-04",
      "value": 32
    }, {
      "date": "2019-10-05",
      "value": 21
    }, {
      "date": "2019-10-06",
      "value": 18
    }, {
      "date": "2019-10-07",
      "value": 21
    }, {
      "date": "2019-10-08",
      "value": 28
    }, {
      "date": "2019-10-09",
      "value": 27
    }, {
      "date": "2019-10-10",
      "value": 36
    }, {
      "date": "2019-10-11",
      "value": 33
    }, {
      "date": "2019-10-12",
      "value": 31
    }, {
      "date": "2019-10-13",
      "value": 30
    }, {
      "date": "2019-10-14",
      "value": 34
    }, {
      "date": "2019-10-15",
      "value": 38
    }, {
      "date": "2019-10-16",
      "value": 37
    }, {
      "date": "2019-10-17",
      "value": 44
    }, {
      "date": "2019-10-18",
      "value": 49
    }, {
      "date": "2019-10-19",
      "value": 53
    }, {
      "date": "2019-10-20",
      "value": 57
    }, {
      "date": "2019-10-21",
      "value": 60
    }, {
      "date": "2019-10-22",
      "value": 61
    }, {
      "date": "2019-10-23",
      "value": 69
    }, {
      "date": "2019-10-24",
      "value": 67
    }, {
      "date": "2019-10-25",
      "value": 72
    }, {
      "date": "2019-10-26",
      "value": 77
    }, {
      "date": "2019-10-27",
      "value": 75
    }, {
      "date": "2019-10-28",
      "value": 70
    }, {
      "date": "2019-10-29",
      "value": 72
    }, {
      "date": "2019-10-30",
      "value": 70
    }, {
      "date": "2019-10-31",
      "value": 72
    }, {
      "date": "2019-11-01",
      "value": 73
    }, {
      "date": "2019-11-02",
      "value": 67
    }, {
      "date": "2019-11-03",
      "value": 68
    }, {
      "date": "2019-11-04",
      "value": 65
    }, {
      "date": "2019-11-05",
      "value": 71
    }, {
      "date": "2019-11-06",
      "value": 75
    }, {
      "date": "2019-11-07",
      "value": 74
    }, {
      "date": "2019-11-08",
      "value": 71
    }, {
      "date": "2019-11-09",
      "value": 76
    }, {
      "date": "2019-11-10",
      "value": 77
    }, {
      "date": "2019-11-11",
      "value": 81
    }, {
      "date": "2019-11-12",
      "value": 83
    }, {
      "date": "2019-11-13",
      "value": 80
    }, {
      "date": "2019-11-14",
      "value": 81
    }, {
      "date": "2019-11-15",
      "value": 87
    }, {
      "date": "2019-11-16",
      "value": 82
    }, {
      "date": "2019-11-17",
      "value": 86
    }, {
      "date": "2019-11-18",
      "value": 80
    }, {
      "date": "2019-11-19",
      "value": 87
    }, {
      "date": "2019-11-20",
      "value": 83
    }, {
      "date": "2019-11-21",
      "value": 85
    }, {
      "date": "2019-11-22",
      "value": 84
    }, {
      "date": "2019-11-23",
      "value": 82
    }, {
      "date": "2019-11-24",
      "value": 73
    }, {
      "date": "2019-11-25",
      "value": 71
    }, {
      "date": "2019-11-26",
      "value": 75
    }, {
      "date": "2019-11-27",
      "value": 79
    }, {
      "date": "2019-11-28",
      "value": 70
    }, {
      "date": "2019-11-29",
      "value": 73
    }, {
      "date": "2019-11-30",
      "value": 61
    }, {
      "date": "2019-12-01",
      "value": 62
    }, {
      "date": "2019-12-02",
      "value": 66
    }, {
      "date": "2019-12-03",
      "value": 65
    }, {
      "date": "2019-12-04",
      "value": 73
    }, {
      "date": "2019-12-05",
      "value": 79
    }, {
      "date": "2019-12-06",
      "value": 78
    }, {
      "date": "2019-12-07",
      "value": 78
    }, {
      "date": "2019-12-08",
      "value": 78
    }, {
      "date": "2019-12-09",
      "value": 74
    }, {
      "date": "2019-12-10",
      "value": 73
    }, {
      "date": "2019-12-11",
      "value": 75
    }, {
      "date": "2019-12-12",
      "value": 70
    }, {
      "date": "2019-12-13",
      "value": 77
    }, {
      "date": "2019-12-14",
      "value": 67
    }, {
      "date": "2019-12-15",
      "value": 62
    }, {
      "date": "2019-12-16",
      "value": 64
    }, {
      "date": "2019-12-17",
      "value": 61
    }, {
      "date": "2019-12-18",
      "value": 59
    }, {
      "date": "2019-12-19",
      "value": 53
    }, {
      "date": "2019-12-20",
      "value": 54
    }, {
      "date": "2019-12-21",
      "value": 56
    }, {
      "date": "2019-12-22",
      "value": 59
    }, {
      "date": "2019-12-23",
      "value": 58
    }, {
      "date": "2019-12-24",
      "value": 55
    }, {
      "date": "2019-12-25",
      "value": 52
    }, {
      "date": "2019-12-26",
      "value": 54
    }, {
      "date": "2019-12-27",
      "value": 50
    }, {
      "date": "2019-12-28",
      "value": 50
    }, {
      "date": "2019-12-29",
      "value": 51
    }, {
      "date": "2019-12-30",
      "value": 52
    }, {
      "date": "2019-12-31",
      "value": 58
    }, {
      "date": "2020-01-01",
      "value": 60
    }, {
      "date": "2020-01-02",
      "value": 67
    }, {
      "date": "2020-01-03",
      "value": 64
    }, {
      "date": "2020-01-04",
      "value": 66
    }, {
      "date": "2020-01-05",
      "value": 60
    }, {
      "date": "2020-01-06",
      "value": 63
    }, {
      "date": "2020-01-07",
      "value": 61
    }, {
      "date": "2020-01-08",
      "value": 60
    }, {
      "date": "2020-01-09",
      "value": 65
    }, {
      "date": "2020-01-10",
      "value": 75
    }, {
      "date": "2020-01-11",
      "value": 77
    }, {
      "date": "2020-01-12",
      "value": 78
    }, {
      "date": "2020-01-13",
      "value": 70
    }, {
      "date": "2020-01-14",
      "value": 70
    }, {
      "date": "2020-01-15",
      "value": 73
    }, {
      "date": "2020-01-16",
      "value": 71
    }, {
      "date": "2020-01-17",
      "value": 74
    }, {
      "date": "2020-01-18",
      "value": 78
    }, {
      "date": "2020-01-19",
      "value": 85
    }, {
      "date": "2020-01-20",
      "value": 82
    }, {
      "date": "2020-01-21",
      "value": 83
    }, {
      "date": "2020-01-22",
      "value": 88
    }, {
      "date": "2020-01-23",
      "value": 85
    }, {
      "date": "2020-01-24",
      "value": 85
    }, {
      "date": "2020-01-25",
      "value": 80
    }, {
      "date": "2020-01-26",
      "value": 87
    }, {
      "date": "2020-01-27",
      "value": 84
    }, {
      "date": "2020-01-28",
      "value": 83
    }, {
      "date": "2020-01-29",
      "value": 84
    }, {
      "date": "2020-01-30",
      "value": 81
    }];

    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}"
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

    // Make bullets grow on hover
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    let bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;

    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();

    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;

    this.chart = chart
  }

  getChart1() {
    let chart = am4core.create("chartdiv1", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [{
      "country": "Jan",
      "visits": 3025
    }, {
      "country": "Feb",
      "visits": 1882
    }, {
      "country": "Mar",
      "visits": 1809
    }, {
      "country": "Apr",
      "visits": 1322
    }, {
      "country": "May",
      "visits": 1122
    }, {
      "country": "Jun",
      "visits": 1114
    }, {
      "country": "Jul",
      "visits": 984
    }, {
      "country": "Aug",
      "visits": 711
    }, {
      "country": "Sep",
      "visits": 665
    }, {
      "country": "Oct",
      "visits": 580
    }, {
      "country": "Nov",
      "visits": 443
    }, {
      "country": "Dec",
      "visits": 441
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();

    this.chart1 = chart
  }

  getChart2() {
    let chart = am4core.create("chartdiv2", am4charts.XYChart);

    // Add data
    chart.data = [{
      "country": "Jan",
      "visits": 2025
    }, {
      "country": "Feb",
      "visits": 1882
    }, {
      "country": "Mar",
      "visits": 1809
    }, {
      "country": "Apr",
      "visits": 1322
    }, {
      "country": "May",
      "visits": 1122
    }];

    // Create axes

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
      if (target.dataItem && target.dataItem.index && 2 == 2) {
        return dy + 25;
      }
      return dy;
    });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    this.chart2 = chart
  }

  getChart3() {
    let chart = am4core.create("chartdiv3", am4charts.PieChart);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(30);

    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template
      // change the cursor on hover to make it apparent the object can be interacted with
      .cursorOverStyle = [
        {
          "property": "cursor",
          "value": "pointer"
        }
      ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);

    pieSeries.ticks.template.disabled = true;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    chart.legend = new am4charts.Legend();

    chart.data = [{
      "country": "Perumahan",
      "litres": 501
    }, {
      "country": "Lot Kedai",
      "litres": 165
    }, {
      "country": "Tapak Jualan",
      "litres": 139
    }, {
      "country": "Dewan",
      "litres": 128
    }];

    this.chart3 = chart
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
