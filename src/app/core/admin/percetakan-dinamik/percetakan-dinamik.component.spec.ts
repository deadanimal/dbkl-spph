import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercetakanDinamikComponent } from './percetakan-dinamik.component';

describe('PercetakanDinamikComponent', () => {
  let component: PercetakanDinamikComponent;
  let fixture: ComponentFixture<PercetakanDinamikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercetakanDinamikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercetakanDinamikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
