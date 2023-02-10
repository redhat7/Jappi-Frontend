import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdminComponent } from './lista-admin.component';

describe('ListaAdminComponent', () => {
  let component: ListaAdminComponent;
  let fixture: ComponentFixture<ListaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
