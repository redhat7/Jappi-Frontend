import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEstadoRecojoComponent } from './modal-estado-recojo.component';

describe('ModalEstadoRecojoComponent', () => {
  let component: ModalEstadoRecojoComponent;
  let fixture: ComponentFixture<ModalEstadoRecojoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEstadoRecojoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEstadoRecojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
