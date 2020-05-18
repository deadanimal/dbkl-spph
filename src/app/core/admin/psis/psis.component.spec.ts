import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsisComponent } from './psis.component';

describe('PsisComponent', () => {
  let component: PsisComponent;
  let fixture: ComponentFixture<PsisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
