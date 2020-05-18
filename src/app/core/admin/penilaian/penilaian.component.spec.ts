import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenilaianComponent } from './penilaian.component';

describe('PenilaianComponent', () => {
  let component: PenilaianComponent;
  let fixture: ComponentFixture<PenilaianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenilaianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenilaianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
