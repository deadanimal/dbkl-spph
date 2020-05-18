import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LakaranComponent } from './lakaran.component';

describe('LakaranComponent', () => {
  let component: LakaranComponent;
  let fixture: ComponentFixture<LakaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LakaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LakaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
