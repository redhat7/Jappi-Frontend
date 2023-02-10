import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditMotoComponent } from './modal-edit-moto.component';

describe('ModalEditMotoComponent', () => {
  let component: ModalEditMotoComponent;
  let fixture: ComponentFixture<ModalEditMotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditMotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
