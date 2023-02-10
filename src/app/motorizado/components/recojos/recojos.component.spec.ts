import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecojosComponent } from './recojos.component';

describe('RecojosComponent', () => {
  let component: RecojosComponent;
  let fixture: ComponentFixture<RecojosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecojosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecojosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
