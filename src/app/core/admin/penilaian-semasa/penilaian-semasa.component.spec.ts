import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenilaianSemasaComponent } from './penilaian-semasa.component';

describe('PenilaianSemasaComponent', () => {
  let component: PenilaianSemasaComponent;
  let fixture: ComponentFixture<PenilaianSemasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenilaianSemasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenilaianSemasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
