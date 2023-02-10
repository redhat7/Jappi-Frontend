import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialMotoRecojosComponent } from './historial-moto-recojos.component';

describe('HistorialMotoRecojosComponent', () => {
  let component: HistorialMotoRecojosComponent;
  let fixture: ComponentFixture<HistorialMotoRecojosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialMotoRecojosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialMotoRecojosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
