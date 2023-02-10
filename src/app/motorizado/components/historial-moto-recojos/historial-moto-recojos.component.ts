import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { Distrito } from "../../../utils/models/distritos.model";
import { FormService } from "../../../utils/services/form/form.service";
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-historial-moto-recojos',
  templateUrl: './historial-moto-recojos.component.html',
  styleUrls: ['./historial-moto-recojos.component.css']
})
export class HistorialMotoRecojosComponent implements OnInit {
  token: string;
  data: [];
  datos: [];
  id: any;
  distritos: Distrito[];
  estadoRecojo: any[];
  @Input() valorSpinner: string;
  @Input() spinner = [
    { descripcion: "--- Elige un campo ---", id: "" },
    { descripcion: "Empresa", id: "nomempresa" },
    { descripcion: "Fecha", id: "fecha_entrega" },
    { descripcion: "Distrito", id: "nombre_distrito" },
    { descripcion: "Descripcion del producto", id: "descripcion" },
  ];
  @Input() searchTxt: string;
  constructor(private http: HttpClient,
    private formService: FormService,
    private spinnerService: NgxSpinnerService) { }

  ngOnInit(): void { 
  const currentUser = JSON.parse(localStorage.getItem("auth"));
  const currentDate = this.convertNewDateToString();
  this.token = currentUser.token;
  this.distritos = this.formService.getDistritos();
  this.estadoRecojo = this.formService.getEstadoRecojo();
  this.getDataByDate(this.token, currentDate, currentDate);
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
      if (varia!=null) {
        if (varia.toLowerCase().includes(this.searchTxt.toLowerCase())) {
          this.data.push(element);
        }
      } 
     
    }
  }
  searchByDate(evt: Event) {
    const inputStart: HTMLInputElement = document.querySelector("#date-start");
    const inputEnd: HTMLInputElement = document.querySelector("#date-end");

    this.validateNavigator(inputStart.value, inputEnd.value);
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
      return `${date.split("-")[2]}-${date.split("-")[1]}-${
        date.split("-")[0]
      }`;
    }
  }
  getDataByDate(token: string, date1: string, date2: string) {
    console.log({ token: token, fecha1: date1, fecha2: date2 });
    this.spinnerService.show();
    this.http
      .post(
        `${environment.url_api}/motorizado/HistorialRecojosMoto`,
        // "https://backend-japi.herokuapp.com/motorizado/HistorialRecojosMoto",
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
           
            let { estado } = this.estadoRecojo.find(
              (estado) => estado.value === distritoData.estado
            );
            return {
              ...distritoData,
              nombre_estado: estado,
            
            };
          }); 
          this.data = dataFormat;
          this.datos = dataFormat;
        } else {
          console.log("error");
        }
        this.spinnerService.hide();
      });
  }
}
