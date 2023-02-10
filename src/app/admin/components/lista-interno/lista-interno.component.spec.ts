import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInternoComponent } from './lista-interno.component';

describe('ListaInternoComponent', () => {
  let component: ListaInternoComponent;
  let fixture: ComponentFixture<ListaInternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
