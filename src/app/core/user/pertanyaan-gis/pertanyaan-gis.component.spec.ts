import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PertanyaanGisComponent } from './pertanyaan-gis.component';

describe('PertanyaanGisComponent', () => {
  let component: PertanyaanGisComponent;
  let fixture: ComponentFixture<PertanyaanGisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PertanyaanGisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PertanyaanGisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
