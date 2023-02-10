import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";

import { MatDialog } from "@angular/material/dialog";
import { ModalEditMotoComponent } from "../../../shared/components/modal-edit-moto/modal-edit-moto.component";
import { environment } from './../../../../environments/environment';
import { FormService } from "../../../utils/services/form/form.service";

@Component({
  selector: "app-lista-interno",
  templateUrl: "./lista-interno.component.html",
  styleUrls: ["./lista-interno.component.scss"],
})
export class ListaInternoComponent implements OnInit {
  token: string;
  data: any[] = [];
  datos: [];
  distritos: any[];

  @Input() valorSpinner: string;
  @Input() spinner = [
    { descripcion: "--- Elige un campo ---", id: "" },
    { descripcion: "Nombre del motorizado", id: "nombres" },
    { descripcion: "DNI del motorizado", id: "dni" },
  ];
  @Input() searchTxt: string;
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private spinnerService: NgxSpinnerService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.token = currentUser.token;
    this.getData(this.token);
    this.distritos = this.formService.getMultipleDistritos();
  }
  selectSpinner(value: string) {
    this.valorSpinner = value;
    console.log(this.valorSpinner);
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
    this.http
      .post(
        `${environment.url_api}/empresa/ListarUsuariosInternos`,
        // "https://backend-japi.herokuapp.com/empresa/ListarUsuariosInternos",
        { token: token },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "http://localhost:4200/*",
          },
        }
      )
      .subscribe((result: any) => {
        if (result.success) {
          this.data = result.data;
          this.datos = result.data;

          console.log(this.data);
        } else {
          console.log("Error al traer los productos en almacen");
        }
        this.spinnerService.hide();
      });
  }

  deleteMotorizado({ id }) {
    const data = {
      token: this.token,
      id: id,
    };
    this.http
      .post(
        `${environment.url_api}/empresa/eliminarMotorizado`,
        // "https://backend-japi.herokuapp.com/empresa/eliminarMotorizado",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
          },
        }
      )
      .subscribe((result: any) => {
        result.success
          ? this.getData(this.token)
          : console.log("Error al eliminar");
      });
  }
  editMotorizado(usuario) {
    const param = {
      id: usuario.id,
      usuario,
      token: this.token,
    };
    this.openModalMoto(param);
  }

  getDistritoIds(distritos, distritosSelected) {
    const distritoIds = [];
    distritosSelected.forEach((distritoSelected) => {
      const distritoMatch = distritos.find(
        (distrito) => distrito.name === distritoSelected
      );
      distritoIds.push(distritoMatch);
      console.log(distritoMatch);
      
    });

    return distritoIds.map((distrito) => distrito.value);
  }

  openModalMoto({ id, usuario, token }) {
    const distritoEntregas = this.getDistritoIds(
      this.distritos,
      usuario.entrega
    );
    const distritoRecojos = this.getDistritoIds(this.distritos, usuario.recojo);
    const modalRef = this.dialog.open(ModalEditMotoComponent, {
      data: {
        id,
        usuario,
        token,
        distritoEntregas,
        distritoRecojos,
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
