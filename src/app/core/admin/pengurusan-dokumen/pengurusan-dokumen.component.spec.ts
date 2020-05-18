import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanDokumenComponent } from './pengurusan-dokumen.component';

describe('PengurusanDokumenComponent', () => {
  let component: PengurusanDokumenComponent;
  let fixture: ComponentFixture<PengurusanDokumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanDokumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanDokumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
