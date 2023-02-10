import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { RegisterRoutingModule } from "./register.routing";

// Components
import { RegisterComponent } from "./components/register.component";

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, NgxSpinnerModule, FormsModule],
})
export class RegisterModule {}
