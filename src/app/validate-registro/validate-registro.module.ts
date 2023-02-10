import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ValidateRegistroRoutingModule } from "./validate-registro.routing";

// Components
import { ValidateComponent } from "./components/validate.component";

@NgModule({
  declarations: [ValidateComponent],
  imports: [CommonModule, ValidateRegistroRoutingModule, RouterModule],
})
export class ValidateRegistroModule {}
