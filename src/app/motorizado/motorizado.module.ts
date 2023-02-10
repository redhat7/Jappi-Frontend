import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { NgxSpinnerModule } from "ngx-spinner";

// Route
import { MotorizadoRoutingModule } from "./motorizado-routing.module";

// Components
import { LayoutComponent } from "./components/layout/layout.component";
import { EntregasComponent } from "./components/entregas/entregas.component";
import { RecojosComponent } from "./components/recojos/recojos.component";
import { HistorialComponent } from "./components/historial/historial.component";
import { HistorialMotoRecojosComponent } from './components/historial-moto-recojos/historial-moto-recojos.component';

@NgModule({
  declarations: [
    LayoutComponent,
    EntregasComponent,
    RecojosComponent,
    HistorialComponent,
    HistorialMotoRecojosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MotorizadoRoutingModule,
    SharedModule,
    MatSelectModule,
    NgxSpinnerModule,
  ],
})
export class MotorizadoModule {}
