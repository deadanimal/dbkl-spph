import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratDigitalComponent } from './surat-digital.component';

describe('SuratDigitalComponent', () => {
  let component: SuratDigitalComponent;
  let fixture: ComponentFixture<SuratDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuratDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuratDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
