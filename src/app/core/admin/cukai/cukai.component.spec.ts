import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CukaiComponent } from './cukai.component';

describe('CukaiComponent', () => {
  let component: CukaiComponent;
  let fixture: ComponentFixture<CukaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CukaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CukaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
