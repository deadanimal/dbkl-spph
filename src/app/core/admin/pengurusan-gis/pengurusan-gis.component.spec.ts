import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanGisComponent } from './pengurusan-gis.component';

describe('PengurusanGisComponent', () => {
  let component: PengurusanGisComponent;
  let fixture: ComponentFixture<PengurusanGisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanGisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanGisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
