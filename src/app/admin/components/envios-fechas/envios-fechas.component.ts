import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";

import { FormService } from "../../../utils/services/form/form.service";
import { Distrito } from "../../../utils/models/distritos.model";
import { MatDialog } from "@angular/material/dialog";

import { ModalEnviosFechaComponent } from "../../../shared/components/modal-envios-fecha/modal-envios-fecha.component";
import { ModalDeleteEnvioComponent } from "../../../shared/components/modal-delete-envio/modal-delete-envio.component";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-envios-fechas",
  templateUrl: "./envios-fechas.component.html",
  styleUrls: ["./envios-fechas.component.scss"],
})
export class EnviosFechasComponent implements OnInit {
  token: string;

  data: [];
  datos: [];
  id: any;
  distritos: Distrito[];
  estadoEntrega: any[];
  zonas: any[];

  @ViewChild('dateStartInput', { static: true }) dateStartInput: ElementRef<HTMLInputElement>;
  @ViewChild('dateEndInput', { static: true }) dateEndInput: ElementRef<HTMLInputElement>;
  @Output() searchClick: EventEmitter<void> = new EventEmitter<void>();

  @Input() valorSpinner: string;
  @Input() spinner = [
    { descripcion: "--- Elige un campo ---", id: "" },
    { descripcion: "Descripcion del producto", id: "descripcion" },
    { descripcion: "Distrito", id: "distritoName" },
    { descripcion: "Estado", id: "nombre_estado" },
    { descripcion: "Modo de entrega", id: "modo_entrega" },
    { descripcion: "Nombre de la empresa", id: "nombre" },
    { descripcion: "Nombre del Comprador", id: "nombres" },
    { descripcion: "Nombre Motorizado", id: "nombre_motorizado" },
    { descripcion: "Telefono del Comprador", id: "tele_entrega" },
  ];
  @Input() searchTxt: string;

  constructor(
    private http: HttpClient,
    private formService: FormService,
    private spinnerService: NgxSpinnerService,
    public dialog: MatDialog
  ) {
    this.id = document.getElementById("modal1");
  }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    const currentDate = this.convertNewDateToString();
    this.token = currentUser.token;
    this.distritos = this.formService.getDistritos();
    this.zonas = this.formService.getZonas();
    this.estadoEntrega = this.formService.getEstadoEntrega();
    this.getDataByDate(this.token, currentDate, currentDate);
  }

  selectSpinner(value: string) {
    this.valorSpinner = value;
    console.log(this.valorSpinner);
  }

  editarEnvio(envio: any) {
    console.log(envio);
    const param = {
      envio,
      token: this.token,
      distritos: this.distritos,
      zonas: this.zonas,
    };
    this.ModalEditEnvios(param);
  }

  ModalEditEnvios({ envio, token, distritos, zonas }) {
    const validate = 0;
    const modalRef = this.dialog.open(ModalEnviosFechaComponent, {
      data: {
        envio,
        token,
        validate,
        distritos,
        zonas,
      },
      minWidth: "400px",
      maxWidth: "800px",
    });
    modalRef.afterClosed().subscribe((result) => {
      console.log("cerrando modal");
      console.log(result);
      const currentDate = this.convertNewDateToString();
      result
        ? this.getDataByDate(this.token, currentDate, currentDate)
        : console.log("Error al actualizar o cancelaste el modal");
    });
  }
  openModalDelete(envio: any) {
    console.log(envio);
    const param = {
      id_envio: envio.id_envio,
      token: this.token,
    };
    this.deleteEntrega(param);
  }
  deleteEntrega({ id_envio, token }) {
    const modalRef = this.dialog.open(ModalDeleteEnvioComponent, {
      data: {
        id_envio,
        token,
      },
      minWidth: "400px",
      maxWidth: "800px",
    });
    modalRef.afterClosed().subscribe((result) => {
      console.log("cerrando modal");
      console.log(result);
      const currentDate = this.convertNewDateToString();
      result
        ? this.getDataByDate(this.token, currentDate, currentDate)
        : console.log("Error al actualizar o cancelaste el modal");
    });
  }
  filterList() {
    this.data = [];
    for (let element of this.datos) {
      ("use strict");
      let varia: string = element[this.valorSpinner];
      if (varia != null) {
        if (varia.toLowerCase().includes(this.searchTxt.toLowerCase())) {
          this.data.push(element);
        }
      }
    }
  }

  searchByDate() {
    const inputStart: string = this.dateStartInput.nativeElement.value;
    const inputEnd: string = this.dateEndInput.nativeElement.value;

    this.validateNavigator(inputStart, inputEnd);
  }

  validateNavigator(dateStart: string, dateEnd: string) {
    const navigatorVendor = window.navigator.vendor;
    let start = "";
    let end = "";
    if (navigatorVendor.toLowerCase().includes("apple")) {
      start = this.convertDateToString(dateStart, "apple");
      end = this.convertDateToString(dateEnd, "apple");
    } else {
      start = this.convertDateToString(dateStart, "google");
      end = this.convertDateToString(dateEnd, "google");
    }
    this.getDataByDate(this.token, start, end);
  }

  convertNewDateToString() {
    let currentDate = new Date().toLocaleDateString();
    let [date, month, year] = currentDate.split("/");
    let trasnformDate = this.trasnformDate(date);
    let trasnforMonth = this.trasnformDate(month);
    return `${trasnformDate}-${trasnforMonth}-${year}`;
  }

  trasnformDate(date: string) {
    return date.length === 1 ? `0${date}` : date;
  }

  convertDateToString(date: string, sys: string) {
    if (sys.toLowerCase() === "apple") {
      return date.replace(/[/]/g, "-");
    } else {
      return `${date.split("-")[2]}-${date.split("-")[1]}-${date.split("-")[0]}`;
    }
  }

  getDataByDate(token: string, date1: string, date2: string) {
    console.log({ token: token, fecha1: date1, fecha2: date2 });
    this.spinnerService.show();
    this.http
      .post(
        `${environment.url_api}/empresa/enviosFechas`,
        // "https://backend-japi.herokuapp.com/empresa/enviosFechas",
        { token: token, fecha1: date1, fecha2: date2 },
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
        console.log(result);
        if (result.success) {

          const dataFormat = result.data.map((distritoData) => {
            let { name } = this.distritos.find(
              (distrito) => distritoData.distrito_entrega === distrito.value
            );
            var fondo: number;
            let { estado } = this.estadoEntrega.find(
              (estado) => estado.value === distritoData.estado
            );
            if (estado == 'entregado') {
              fondo = 1;
            } else {
              if (estado == 'caída') {
                fondo = 2;
              }
            }
            return {
              ...distritoData,
              nombre_estado: estado,
              distritoName: name,
            };

          });

          console.log(dataFormat);
          this.data = dataFormat;
          this.datos = dataFormat;
        } else {
          console.log("error");
        }
        this.spinnerService.hide();
      });
  }
}
