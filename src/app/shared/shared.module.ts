import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { FormsModule } from "@angular/forms";

// Components
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ModalEnviosComponent } from "./components/modal-envios/modal-envios.component";
import { ModalAlmacenComponent } from "./components/modal-almacen/modal-almacen.component";
import { DateFormatPipe } from "./pipes/date-format/date-format.pipe";
import { ModalEntregaComponent } from "./components/modal-entrega/modal-entrega.component";
import { ModalRecojoComponent } from "./components/modal-recojo/modal-recojo.component";
import { ModalEntregaMotoComponent } from "./components/modal-entrega-moto/modal-entrega-moto.component";
import { ModalRecojoMotoComponent } from "./components/modal-recojo-moto/modal-recojo-moto.component";
import { ModalEntregaEditComponent } from "./components/modal-entrega-edit/modal-entrega-edit.component";
import { ModalSolicitudComponent } from "./components/modal-solicitud/modal-solicitud.component";
import { ModalEditUsuarioComponent } from './components/modal-edit-usuario/modal-edit-usuario.component';
import { ModalEditMotoComponent } from './components/modal-edit-moto/modal-edit-moto.component';
import { ModalEditAlmacenComponent } from './components/modal-edit-almacen/modal-edit-almacen.component';
import { ModalEnviosFechaComponent } from './components/modal-envios-fecha/modal-envios-fecha.component';
import { ModalMisEnviosComponent } from './components/modal-mis-envios/modal-mis-envios.component';
import { ModalEstadoRecojoComponent } from './components/modal-estado-recojo/modal-estado-recojo.component';
import { ModalDeleteEnvioComponent } from './components/modal-delete-envio/modal-delete-envio.component';
import { ModalDetailShipmentComponent } from "./components/modal-detail-shipment/modal-detail-shipment.component";
import { ModalRegistrarAdminComponent } from "./components/modal-registrar-admin/modal-registrar-admin.component";
import { ModalEditarAdminComponent } from "./components/modal-editar-admin/modal-editar-admin.component";

const sharedComponents = [
  NavbarComponent,
  SidebarComponent,
  FooterComponent,
  ModalEnviosComponent,
  ModalAlmacenComponent,
  DateFormatPipe,
  ModalEntregaComponent,
  ModalRecojoComponent,
  ModalSolicitudComponent,
];

@NgModule({
  declarations: [
    sharedComponents,
    ModalEntregaMotoComponent,
    ModalRecojoMotoComponent,
    ModalEntregaEditComponent,
    ModalSolicitudComponent,
    ModalEditUsuarioComponent,
    ModalEditMotoComponent,
    ModalEditAlmacenComponent,
    ModalEnviosFechaComponent,
    ModalMisEnviosComponent,
    ModalEstadoRecojoComponent,
    ModalDeleteEnvioComponent,
    ModalDetailShipmentComponent,
    ModalRegistrarAdminComponent,
    ModalEditarAdminComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule],
  exports: [sharedComponents],
})
export class SharedModule {}
