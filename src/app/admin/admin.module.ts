import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { NgxSpinnerModule } from "ngx-spinner";

// Route
import { AdminRoutingModule } from "./admin-routing.module";

// Components
import { LayoutComponent } from "./components/layout/layout.component";
import { AlmacenComponent } from "./components/almacen/almacen.component";
import { MisEnviosComponent } from "./components/mis-envios/mis-envios.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { RegistroEnvioComponent } from "./components/registro-envio/registro-envio.component";
import { EnviosComponent } from "./components/envios/envios.component";
import { EnviosFechasComponent } from "./components/envios-fechas/envios-fechas.component";
import { ActivacionCuentasComponent } from "./components/activacion-cuentas/activacion-cuentas.component";
import { SolicitudesAlmacenComponent } from "./components/solicitudes-almacen/solicitudes-almacen.component";
import { AlmacenJapiComponent } from "./components/almacen-japi/almacen-japi.component";
import { RegistroMotorizadoComponent } from "./components/registro-motorizado/registro-motorizado.component";
import { RecojosComponent } from './components/recojos/recojos.component';
import { EntregasComponent } from './components/entregas/entregas.component';
import { ListaInternoComponent } from './components/lista-interno/lista-interno.component';
import { ListaExternoComponent } from './components/lista-externo/lista-externo.component';
import { ListaAdminComponent } from './components/lista-admin/lista-admin.component';
import { AdministrarEnviosAlmacenComponent } from './components/administrar-envios-almacen/administrar-envios-almacen.component';
import { HistorialRecojosComponent } from './components/historial-recojos/historial-recojos.component';

import { FormatPhonePipe } from "./../shared/pipes/formatphone.pipe";
import { CapitalizeFirstLetterPipe } from "./../shared/pipes/capitalizefirstletter.pipe"

@NgModule({
  declarations: [
    LayoutComponent,
    AlmacenComponent,
    MisEnviosComponent,
    RegistroEnvioComponent,
    UserProfileComponent,
    EnviosComponent,
    EnviosFechasComponent,
    ActivacionCuentasComponent,
    SolicitudesAlmacenComponent,
    AlmacenJapiComponent,
    RegistroMotorizadoComponent,
    RecojosComponent,
    EntregasComponent,
    ListaInternoComponent,
    ListaExternoComponent,
    ListaAdminComponent,
    AdministrarEnviosAlmacenComponent,
    HistorialRecojosComponent,
    FormatPhonePipe,
    CapitalizeFirstLetterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule,
    MatSelectModule,
    NgxSpinnerModule,
  ],
})
export class AdminModule { }
