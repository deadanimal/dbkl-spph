import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenukaranAlamatComponent } from './penukaran-alamat.component';

describe('PenukaranAlamatComponent', () => {
  let component: PenukaranAlamatComponent;
  let fixture: ComponentFixture<PenukaranAlamatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenukaranAlamatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenukaranAlamatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
