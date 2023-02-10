import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnviosFechaComponent } from './modal-envios-fecha.component';

describe('ModalEnviosFechaComponent', () => {
  let component: ModalEnviosFechaComponent;
  let fixture: ComponentFixture<ModalEnviosFechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEnviosFechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEnviosFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
