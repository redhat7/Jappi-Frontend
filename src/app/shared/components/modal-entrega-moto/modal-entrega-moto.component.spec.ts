import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEntregaMotoComponent } from './modal-entrega-moto.component';

describe('ModalEntregaMotoComponent', () => {
  let component: ModalEntregaMotoComponent;
  let fixture: ComponentFixture<ModalEntregaMotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEntregaMotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEntregaMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
