import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarianMaklumatComponent } from './carian-maklumat.component';

describe('CarianMaklumatComponent', () => {
  let component: CarianMaklumatComponent;
  let fixture: ComponentFixture<CarianMaklumatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarianMaklumatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarianMaklumatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
