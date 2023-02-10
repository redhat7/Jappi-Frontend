import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviosFechasComponent } from './envios-fechas.component';

describe('EnviosFechasComponent', () => {
  let component: EnviosFechasComponent;
  let fixture: ComponentFixture<EnviosFechasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviosFechasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviosFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
