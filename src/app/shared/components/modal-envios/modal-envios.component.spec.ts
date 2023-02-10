import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnviosComponent } from './modal-envios.component';

describe('ModalEnviosComponent', () => {
  let component: ModalEnviosComponent;
  let fixture: ComponentFixture<ModalEnviosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEnviosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEnviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
