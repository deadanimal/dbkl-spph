import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajPembangunanComponent } from './caj-pembangunan.component';

describe('CajPembangunanComponent', () => {
  let component: CajPembangunanComponent;
  let fixture: ComponentFixture<CajPembangunanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajPembangunanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajPembangunanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
