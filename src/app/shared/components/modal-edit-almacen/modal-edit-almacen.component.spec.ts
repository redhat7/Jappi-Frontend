import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditAlmacenComponent } from './modal-edit-almacen.component';

describe('ModalEditAlmacenComponent', () => {
  let component: ModalEditAlmacenComponent;
  let fixture: ComponentFixture<ModalEditAlmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditAlmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
