import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { ValidateComponent } from "./components/validate.component";

const routes: Routes = [
  {
    path: "",
    component: ValidateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidateRegistroRoutingModule {}
