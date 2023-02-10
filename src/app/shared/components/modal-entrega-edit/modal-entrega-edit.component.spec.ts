import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEntregaEditComponent } from './modal-entrega-edit.component';

describe('ModalEntregaEditComponent', () => {
  let component: ModalEntregaEditComponent;
  let fixture: ComponentFixture<ModalEntregaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEntregaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEntregaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
