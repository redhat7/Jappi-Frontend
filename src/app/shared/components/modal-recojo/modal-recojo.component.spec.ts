import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecojoComponent } from './modal-recojo.component';

describe('ModalRecojoComponent', () => {
  let component: ModalRecojoComponent;
  let fixture: ComponentFixture<ModalRecojoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRecojoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRecojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
