import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { LoginRoutingModule } from "./login-routing.module";

// Components
import { LoginComponent } from "./components/login.component";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, NgxSpinnerModule, FormsModule],
})
export class LoginModule {}
