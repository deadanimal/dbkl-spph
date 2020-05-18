import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemFailComponent } from './sistem-fail.component';

describe('SistemFailComponent', () => {
  let component: SistemFailComponent;
  let fixture: ComponentFixture<SistemFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
