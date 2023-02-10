import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteEnvioComponent } from './modal-delete-envio.component';

describe('ModalDeleteEnvioComponent', () => {
  let component: ModalDeleteEnvioComponent;
  let fixture: ComponentFixture<ModalDeleteEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
