import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarEnviosAlmacenComponent } from './administrar-envios-almacen.component';

describe('AdministrarEnviosAlmacenComponent', () => {
  let component: AdministrarEnviosAlmacenComponent;
  let fixture: ComponentFixture<AdministrarEnviosAlmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarEnviosAlmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarEnviosAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
