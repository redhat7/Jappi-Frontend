import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenJapiComponent } from './almacen-japi.component';

describe('AlmacenJapiComponent', () => {
  let component: AlmacenJapiComponent;
  let fixture: ComponentFixture<AlmacenJapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenJapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenJapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
