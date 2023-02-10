import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { LayoutComponent } from "./components/layout/layout.component";
import { EntregasComponent } from "./components/entregas/entregas.component";
import { RecojosComponent } from "./components/recojos/recojos.component";
import { HistorialComponent } from "./components/historial/historial.component";
import { HistorialMotoRecojosComponent } from './components/historial-moto-recojos/historial-moto-recojos.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "historial",
        component: HistorialComponent,
      },
      {
        path: "Historial-recojos",
        component: HistorialMotoRecojosComponent,
      },
      {
        path: "entregas-motorizado",
        component: EntregasComponent,
      },
      {
        path: "recojos-motorizado",
        component: RecojosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotorizadoRoutingModule {}
