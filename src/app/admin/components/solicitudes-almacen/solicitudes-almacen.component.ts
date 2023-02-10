import { Component, OnInit,Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { MatDialog } from "@angular/material/dialog";
import { NgxSpinnerService } from "ngx-spinner";
import { ModalSolicitudComponent } from "../../../shared/components/modal-solicitud/modal-solicitud.component";
import { environment } from './../../../../environments/environment';
@Component({
  selector: "app-solicitudes-almacen",
  templateUrl: "./solicitudes-almacen.component.html",
  styleUrls: ["./solicitudes-almacen.component.scss"],
})
export class SolicitudesAlmacenComponent implements OnInit {
  token: string;
  data: [];
  datos: [];
  @Input() optionValue: string;
  @Input() spinner = [
    { descripcion: "--- Elige un campo ---", id: "" },
    { descripcion: "Fecha", id: "fecha" },
    { descripcion: "Nombre de la empresa", id: "nombre" },
    { descripcion: "Descripcion del producto", id: "descripcion" },
  ];
  @Input() searchTxt: string;

  constructor(
    private http: HttpClient,
    private spinnerService: NgxSpinnerService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.token = currentUser.token;
    this.getData(this.token);
  }

  selectOptions(option: string) {
    this.optionValue = option;
  }

  filterList() {
    this.data = [];
    for (let element of this.datos) {
      ("use strict");
      let varia: string = element[this.optionValue];
      if (varia.toLowerCase().includes(this.searchTxt.toLowerCase())) {
        this.data.push(element);
      }
    }
  }
  dateToString(currentDate: string) {
    let [date, month, year] = currentDate.split("/");
    let trasnformDate = this.trasnformDate(date);
    let trasnforMonth = this.trasnformDate(month);
    return `${trasnformDate}-${trasnforMonth}-${year}`;
  }

  trasnformDate(date: string) {
    return date.length === 1 ? `0${date}` : date;
  }

  getData(token: string) {
    this.spinnerService.show();
    this.http
      .post(
        `${environment.url_api}/empresa/SolicitudesAlmacen`,
        // "https://backend-japi.herokuapp.com/empresa/SolicitudesAlmacen",
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
          const dataFormat = result.data.map((solicitud) => {
            let dateFormat = new Date(solicitud.fecha).toLocaleDateString();
            let solicitudDate = this.dateToString(dateFormat);
            return {
              ...solicitud,
              fecha: solicitudDate,
            };
          });
          this.data = dataFormat;
          this.datos = dataFormat;
          console.log(this.data);
          
        } else {
          console.log("Error al traer las solicitudes de almacen");
        }
        this.spinnerService.hide();
      });
  }

  accept(i: number) {
    let idSolicitud: number = this.data[i]["id_solicitud"];
    this.http
      .post(
        `${environment.url_api}/empresa/SolicitudesAddAlmacen`,
        // "https://backend-japi.herokuapp.com/empresa/SolicitudesAddAlmacen",
        { token: this.token, id: idSolicitud },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "http://localhost:4200/*",
          },
        }
      )
      .subscribe((result) => {
        console.log(result);
        if (result["success"]) {
          this.getData(this.token);
        } else {
          console.log("Error al aceptar la solicitud de almacen");
        }
      });
  }

  editSolicitud({ cantidad, id_solicitud }) {
    const param = {
      cantidad,
      idSolicitud: id_solicitud,
      token: this.token,
    };
    this.openModalSolicitud(param);
  }
  DeleteSolicitud({id_solicitud,id_producto}){
    const data = {
      token: this.token,
      id:id_solicitud,
      id_producto:id_producto,
    };
    this.http
      .post(
        `${environment.url_api}/empresa/SolicitudesDeleteAlmacen`,
        // "https://backend-japi.herokuapp.com/empresa/SolicitudesDeleteAlmacen",
       data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST",
        },
      })
      .subscribe((result: any) => {
       console.log("exitoso");
       
        result.success ? this.getData(this.token) : console.log("Error al eliminar");
      });
    
  }

  openModalSolicitud({ cantidad = 0, idSolicitud, token }) {
    const modalRef = this.dialog.open(ModalSolicitudComponent, {
      data: {
        cantidad,
        idSolicitud,
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
