import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NilaiPasaranComponent } from './nilai-pasaran.component';

describe('NilaiPasaranComponent', () => {
  let component: NilaiPasaranComponent;
  let fixture: ComponentFixture<NilaiPasaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NilaiPasaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NilaiPasaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
