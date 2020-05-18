import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenukaranNamaComponent } from './penukaran-nama.component';

describe('PenukaranNamaComponent', () => {
  let component: PenukaranNamaComponent;
  let fixture: ComponentFixture<PenukaranNamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenukaranNamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenukaranNamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
