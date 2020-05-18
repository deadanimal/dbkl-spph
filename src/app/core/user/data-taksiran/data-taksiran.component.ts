import { Component, OnInit, OnDestroy, NgZone, TemplateRef  } from '@angular/core';
import { MocksService } from 'src/app/shared/services/mocks/mocks.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-data-taksiran',
  templateUrl: './data-taksiran.component.html',
  styleUrls: ['./data-taksiran.component.scss']
})
export class DataTaksiranComponent implements OnInit {

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = []
  SelectionType = SelectionType;

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  // Datepicker
  bsDConfig = {
    isAnimated: true,
    containerClass: 'theme-dark-blue'
  }
  
  constructor(
    private mockService: MocksService,
    private modalService: BsModalService
  ) { 
    this.getData()
  }

  ngOnInit() {
  }

  getData() {
    this.mockService.getAll('user-taksiran/taksiran.data.json').subscribe(
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

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
  }

}
