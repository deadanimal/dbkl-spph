import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulanganBalikHasilComponent } from './pulangan-balik-hasil.component';

describe('PulanganBalikHasilComponent', () => {
  let component: PulanganBalikHasilComponent;
  let fixture: ComponentFixture<PulanganBalikHasilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulanganBalikHasilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulanganBalikHasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
