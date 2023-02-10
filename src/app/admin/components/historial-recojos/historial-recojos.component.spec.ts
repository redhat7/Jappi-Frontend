import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialRecojosComponent } from './historial-recojos.component';

describe('HistorialRecojosComponent', () => {
  let component: HistorialRecojosComponent;
  let fixture: ComponentFixture<HistorialRecojosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialRecojosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialRecojosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
