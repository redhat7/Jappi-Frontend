import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivacionCuentasComponent } from './activacion-cuentas.component';

describe('ActivacionCuentasComponent', () => {
  let component: ActivacionCuentasComponent;
  let fixture: ComponentFixture<ActivacionCuentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivacionCuentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivacionCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
