import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTaksiranComponent } from './data-taksiran.component';

describe('DataTaksiranComponent', () => {
  let component: DataTaksiranComponent;
  let fixture: ComponentFixture<DataTaksiranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTaksiranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTaksiranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
