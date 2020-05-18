import { Component, OnInit, OnDestroy, NgZone, TemplateRef  } from '@angular/core';
import { MocksService } from 'src/app/shared/services/mocks/mocks.service';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-penukaran-alamat',
  templateUrl: './penukaran-alamat.component.html',
  styleUrls: ['./penukaran-alamat.component.scss']
})
export class PenukaranAlamatComponent implements OnInit {

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = []
  SelectionType = SelectionType;

  constructor(
    private mockService: MocksService
  ) { 
    this.getData()
  }

  ngOnInit() {
  }

  getData() {
    this.mockService.getAll('user/alamat.data.json').subscribe(
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
