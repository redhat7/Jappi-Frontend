import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MisEnviosComponent } from "./mis-envios.component";

describe("EnviosComponent", () => {
  let component: MisEnviosComponent;
  let fixture: ComponentFixture<MisEnviosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MisEnviosComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisEnviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
