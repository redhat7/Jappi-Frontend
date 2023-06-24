import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { NgxSpinnerService } from "ngx-spinner";
import { ModalEditUsuarioComponent } from "../../../shared/components/modal-edit-usuario/modal-edit-usuario.component";
import { environment } from './../../../../environments/environment';

import { FormService } from "../../../utils/services/form/form.service";
import { Distrito } from "../../../utils/models/distritos.model";
@Component({
  selector: "app-lista-externo",
  templateUrl: "./lista-externo.component.html",
  styleUrls: ["./lista-externo.component.scss"],
})
export class ListaExternoComponent implements OnInit {
  token: string;
  data: any[] = [];
  datos: any[] = [];
  distritos: Distrito[];
  userName: string;
  tipoUsuario: string;

  @Input() valorSpinner: string;
  @Input() spinner = [
    { descripcion: "Elige un campo", id: "" },
    { descripcion: "Nombre del dueño", id: "duenio" },
    { descripcion: "Nombre de la empresa", id: "nombre" },
    { descripcion: "Teléfono", id: "telefono" },
    { descripcion: "DNI", id: "dni" }
  ];
  @Input() searchTxt: string;
  constructor(
    private http: HttpClient,
    private spinnerService: NgxSpinnerService,
    public dialog: MatDialog,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.userName = currentUser.nombres;
    this.tipoUsuario = currentUser.tipo;
    this.token = currentUser.token;
    this.distritos = this.formService.getDistritos();
    this.getData(this.token);
  }
  selectSpinner(value: string) {
    this.valorSpinner = value;
  }
  filterList() {
    this.data = [];

    for (let element of this.datos) {
      ("use strict");
      let varia: string = element[this.valorSpinner];

      if (varia.toLowerCase().includes(this.searchTxt.toLowerCase())) {
        this.data.push(element);
      }
    }
  }

  getData(token: string) {
    this.spinnerService.show();

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "http://localhost:4200"
    };

    this.http.post(`${environment.url_api}/empresa/ListarUsuarios`, { token: token, tipo: this.tipoUsuario }, { headers }).subscribe((result: any) => {
      if (result.success) {
        const dataFormat = result.data.map((usuario) => {
          const distrito = this.distritos.find(
            (distrito) => distrito.value == usuario.distrito
          );

          return {
            nombreDistrito: distrito.name,
            ...usuario,
          };
        });

        this.datos = dataFormat;
        this.data = dataFormat;
      } else {
        console.log("Error al traer la lista de usuarios");
      }
      this.spinnerService.hide();
    });
  }

  editSolicitud(usuario) {
    const param = {
      id_persona: usuario.id_persona,
      id_duenio: usuario.id_duenio,
      id_empresa: usuario.id_empresa,
      usuario,
      token: this.token,
    };
    this.openModalSolicitud(param);
    console.log(usuario, this.token);
  }

  cambiarEstadoUsuario({ id_persona, activo }) {
    const data = {
      token: this.token,
      id_persona: id_persona,
      activo: activo
    };

    this.http.post(`${environment.url_api}/empresa/cambiarEstadoUsuario`,
      data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "POST",
      },
    }).subscribe((result: any) => {
      result.success
        ? this.getData(this.token)
        : console.log("Error al eliminar");
    });
  }

  openModalSolicitud({ id_persona, id_duenio, id_empresa, usuario, token }) {
    const modalRef = this.dialog.open(ModalEditUsuarioComponent, {
      data: {
        id_persona,
        id_duenio,
        id_empresa,
        usuario,
        token,
      },
      minWidth: "400px",
      maxWidth: "800px",
    });
    modalRef.afterClosed().subscribe((result) => {
      result
        ? this.getData(this.token)
        : console.log("cancelaste el modal o hubo un error");
    });
  }
}
