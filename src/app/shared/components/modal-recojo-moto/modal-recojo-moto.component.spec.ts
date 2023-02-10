import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecojoMotoComponent } from './modal-recojo-moto.component';

describe('ModalRecojoMotoComponent', () => {
  let component: ModalRecojoMotoComponent;
  let fixture: ComponentFixture<ModalRecojoMotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRecojoMotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRecojoMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
