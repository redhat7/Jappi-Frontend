import { Component, OnInit, Input } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient } from "@angular/common/http";
import { FormService } from "../../../utils/services/form/form.service";
import { Distrito } from "../../../utils/models/distritos.model";
import { environment } from './../../../../environments/environment';
@Component({
  selector: "app-administrar-envios-almacen",
  templateUrl: "./administrar-envios-almacen.component.html",
  styleUrls: ["./administrar-envios-almacen.component.css"],
})
export class AdministrarEnviosAlmacenComponent implements OnInit {
  token: string;
  currentDate: string;
  nextDate: string;
  data: any[] = [];
  datos: any[] = [];
  distritos: Distrito[];
  @Input() valorSpinner: string;
  @Input() spinner = [
    { descripcion: "--- Elige un campo ---", id: "" },
    { descripcion: "Distrito", id: "nombreDistrito" },
    { descripcion: "Estado", id: "preparacion" },
    { descripcion: "Nombre de la Empresa", id: "empresa" },
    { descripcion: "Nombre del comprador", id: "comprador" },
    { descripcion: "Procedencia", id: "procedencia" },
    { descripcion: "Producto", id: "producto" },
  ];
  @Input() searchTxt: string;
  constructor(
    private http: HttpClient,
    private spinnerService: NgxSpinnerService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.token = currentUser.token;
    this.distritos = this.formService.getDistritos();
    const currentDate = new Date().toLocaleDateString();
    this.currentDate = this.dateToString(currentDate);
    this.nextDate = this.getNextDate();
    const param = {
      token: this.token,
      fecha: this.currentDate,
    };
    this.getData(param);
  }
  selectSpinner(value: string) {
    this.valorSpinner = value;
    console.log(this.valorSpinner);
  }
  filterList() {
    this.datos = [];
    for (let element of this.data) {
      ("use strict");
      let varia: string = element[this.valorSpinner];
      if (varia.toLowerCase().includes(this.searchTxt.toLowerCase())) {
        this.datos.push(element);
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
  modificarEstado({id}){
    const data = {
      token: this.token,
      id_entrega: id,
      estado:"Preparado",
    };
    console.log(data);
    this.http
      .post(
        `${environment.url_api}/empresa/aprobacionAlmacenEnvios`,
        // "https://backend-japi.herokuapp.com/empresa/aprobacionAlmacenEnvios",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
          },
        }
      )
      .subscribe((result: any) => {
        if (result.success) {
          const param = {
            token: this.token,
            fecha: this.currentDate,
          };
          this.getData(param);
        } else {
         console.log("Error al actualizar");
         
        }
      });
  }
  modificarEstadoFalta({id}){
    const data = {
      token: this.token,
      id_entrega: id,
      estado:"Falta Preparar",
    };
    console.log(data);
    this.http
      .post(
        `${environment.url_api}/empresa/aprobacionAlmacenEnvios`,
        // "https://backend-japi.herokuapp.com/empresa/aprobacionAlmacenEnvios",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
          },
        }
      )
      .subscribe((result: any) => {
        if (result.success) {
          const param = {
            token: this.token,
            fecha: this.currentDate,
          };
          this.getData(param);
        } else {
         console.log("Error al actualizar");
         
        }
      });
  }
  getNextDate() {
    const today = new Date();
    const nextDate = new Date(today);
    nextDate.setDate(nextDate.getDate() + 1);

    return this.dateToString(nextDate.toLocaleDateString());
  }
  getData(param) {
    this.spinnerService.show();

    this.http
      .post(
        `${environment.url_api}/empresa/ListaEntregasSinRecojo`,
        // "https://backend-japi.herokuapp.com/empresa/ListaEntregasSinRecojo",
        param,
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
          const dataFormat = result.data.map((usuario) => {
            const distrito = this.distritos.find(
              (distrito) => distrito.value == usuario.distrito
            );
            return {
              nombreDistrito: distrito.name,
              ...usuario,
            };
          });
          this.data = dataFormat;
          this.datos = dataFormat;
          console.log(this.datos);
        } else {
          console.log("Error al traer datos de envíos del día");
        }
        this.spinnerService.hide();
      });
  }
}
