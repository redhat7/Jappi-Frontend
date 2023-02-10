import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesAlmacenComponent } from './solicitudes-almacen.component';

describe('SolicitudesAlmacenComponent', () => {
  let component: SolicitudesAlmacenComponent;
  let fixture: ComponentFixture<SolicitudesAlmacenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesAlmacenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
