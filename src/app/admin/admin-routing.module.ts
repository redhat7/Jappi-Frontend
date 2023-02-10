import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { LayoutComponent } from "./components/layout/layout.component";
import { AlmacenComponent } from "./components/almacen/almacen.component";
import { MisEnviosComponent } from "./components/mis-envios/mis-envios.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { RegistroEnvioComponent } from "./components/registro-envio/registro-envio.component";
import { ActivacionCuentasComponent } from "./components/activacion-cuentas/activacion-cuentas.component";
import { EnviosComponent } from "./components/envios/envios.component";
import { EnviosFechasComponent } from "./components/envios-fechas/envios-fechas.component";
import { SolicitudesAlmacenComponent } from "./components/solicitudes-almacen/solicitudes-almacen.component";
import { AlmacenJapiComponent } from "./components/almacen-japi/almacen-japi.component";
import { RegistroMotorizadoComponent } from "./components/registro-motorizado/registro-motorizado.component";
import { EntregasComponent } from "./components/entregas/entregas.component";
import { RecojosComponent } from "./components/recojos/recojos.component";
import { ListaExternoComponent } from "./components/lista-externo/lista-externo.component";
import { ListaInternoComponent } from "./components/lista-interno/lista-interno.component";
import { ListaAdminComponent } from "./components/lista-admin/lista-admin.component";
import { AdministrarEnviosAlmacenComponent } from "./components/administrar-envios-almacen/administrar-envios-almacen.component";
import { HistorialRecojosComponent } from './components/historial-recojos/historial-recojos.component';
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "almacen",
        component: AlmacenComponent,
      },
      {
        path: "mis-envios",
        component: MisEnviosComponent,
      },
      {
        path: "perfil",
        component: UserProfileComponent,
      },
      {
        path: "registro-envio",
        component: RegistroEnvioComponent,
      },
      {
        path: "activacion",
        component: ActivacionCuentasComponent,
      },
      {
        path: "envios",
        component: EnviosComponent,
      },
      {
        path: "envios-fecha",
        component: EnviosFechasComponent,
      },
      {
        path: "solicitudes-almacen",
        component: SolicitudesAlmacenComponent,
      },
      {
        path: "almacen-japi",
        component: AlmacenJapiComponent,
      },
      {
        path: "registro-motorizado",
        component: RegistroMotorizadoComponent,
      },
      {
        path: "recojos",
        component: RecojosComponent,
      },
      {
        path: "entregas",
        component: EntregasComponent,
      },
      {
        path: "lista-interno",
        component: ListaInternoComponent,
      },
      {
        path: "lista-externo",
        component: ListaExternoComponent,
      },
      {
        path: "lista-admin",
        component: ListaAdminComponent,
      },
      {
        path: "Entregas-Almacen",
        component: AdministrarEnviosAlmacenComponent,
      },
      {
        path: "Historial-Recojos",
        component: HistorialRecojosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
