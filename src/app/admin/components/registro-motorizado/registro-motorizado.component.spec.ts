import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMotorizadoComponent } from './registro-motorizado.component';

describe('RegistroMotorizadoComponent', () => {
  let component: RegistroMotorizadoComponent;
  let fixture: ComponentFixture<RegistroMotorizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMotorizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMotorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
