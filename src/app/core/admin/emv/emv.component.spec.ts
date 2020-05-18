import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmvComponent } from './emv.component';

describe('EmvComponent', () => {
  let component: EmvComponent;
  let fixture: ComponentFixture<EmvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
