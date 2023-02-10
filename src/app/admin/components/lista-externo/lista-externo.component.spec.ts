import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExternoComponent } from './lista-externo.component';

describe('ListaExternoComponent', () => {
  let component: ListaExternoComponent;
  let fixture: ComponentFixture<ListaExternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaExternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
