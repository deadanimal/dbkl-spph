import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusanBantahanComponent } from './pengurusan-bantahan.component';

describe('PengurusanBantahanComponent', () => {
  let component: PengurusanBantahanComponent;
  let fixture: ComponentFixture<PengurusanBantahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengurusanBantahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusanBantahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
