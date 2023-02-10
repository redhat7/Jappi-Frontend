import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSolicitudComponent } from './modal-solicitud.component';

describe('ModalSolicitudComponent', () => {
  let component: ModalSolicitudComponent;
  let fixture: ComponentFixture<ModalSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
