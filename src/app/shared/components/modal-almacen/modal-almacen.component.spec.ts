import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlmacenComponent } from './modal-almacen.component';

describe('ModalAlmacenComponent', () => {
  let component: ModalAlmacenComponent;
  let fixture: ComponentFixture<ModalAlmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAlmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
