import { Component, OnInit, Input, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import * as XLSX from "xlsx";

import { FormService } from "../../../utils/services/form/form.service";
import { Distrito } from "../../../utils/models/distritos.model";
import { Zona } from "../../../utils/models/zonas.model";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-registro-envio",
  templateUrl: "./registro-envio.component.html",
  styleUrls: ["./registro-envio.component.scss"],
})
export class RegistroEnvioComponent implements OnInit {
  data: any;
  fileInput: HTMLInputElement;
  distritos: Distrito[];
  distrito: number;
  zonas: Zona[];
  zonaEmpresa: number;
  deliveryPrecio: number;
  comision: number = 0;

  private conditionFinal: number = 0;
  private idPaymentMethod: number = 0;
  @Input() token: string;
  @Input() name: string;
  @Input() number: Int16Array;
  @Input() direction: string;
  @Input() directionMaps: string;
  @Input() latitud: number = 0;
  @Input() longitud: number = 0;
  @Input() nombreProducto: string;
  @Input() precioProducto: number = 0;
  @Input() descripcion: string;
  @Input() cantidad: number;
  @Input() modoEntrega: string;
  @Input() metodoPago: string = "";
  @Input() servicioPago: string;
  @Input() horarioPago: string;
  @Input() fechaEntrega: string;
  @Input() observacion: string;
  @Input() check: boolean = false;
  @Input() spinner: any = [];
  @Input() spinnerTxt: string;
  @Input() almacen: number;
  @Input() producto: number;
  @Output() validator: number;
  @Output() condi: number;
  @Output() tarjeta: number;

  options: any[] = [
    { id: 0, value: "--- Seleccione ---" },
    { id: 1, value: "contra-entrega" },
    { id: 2, value: "solo Entregar" },
    { id: 3, value: "cambio con costo" },
    { id: 4, value: "cambio sin costo" },
  ];
  paymentMethod: any[] = [
    { id: 0, value: "--- Seleccione ---" },
    { id: 1, value: "Efectivo" },
    { id: 2, value: "Tarjeta" },
    { id: 3, value: "Abono a vendedor" },
    { id: 4, value: "Abono a Japi" },
  ];
  servicio: any[] = [{ id: 1, value: "Regular" }];
  horario: any[] = [{ id: 1, value: "9:00am - 6:00pm" }];

  constructor(
    private http: HttpClient,
    private router: Router,
    private spinnerService: NgxSpinnerService,
    private formService: FormService
  ) {
    this.loadFile = this.loadFile.bind(this);
  }

  ngOnInit(): void {
    this.distritos = this.formService.getDistritos();
    this.zonas = this.formService.getZonas();
    this.getToken();
    this.fileInput = document.querySelector("#file-input");
    this.validateCheck();
  }

  validateCheck() {
    let data = { token: this.token };
    this.http
      .post(
        `${environment.url_api}/usuario/almacencb`,
        // "https://backend-japi.herokuapp.com/usuario/almacencb",
       data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "http://localhost:4200/*",
        },
      })
      .subscribe((result) => {
        if (result["success"]) {
          this.spinner = result["data"];
        } else {
          console.log("error");
        }
      });
  }

  getToken() {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.token = currentUser.token;
    this.zonaEmpresa = currentUser.zona;
  }

  selectOption(id: number) {
    this.conditionFinal = id;
    this.modoEntrega = this.options[id]["value"];
    if (id == 1 || id == 3) {
      this.validator = 1;
    } else {
      this.validator = 0;
    }

    if (id == 2 || id == 4) {
      this.condi = 1;
    } else {
      this.condi = 0;
    }
  }

  paymentOption(id: number) {
    this.idPaymentMethod = id;
    console.log(`el num aqui es ${id} y la const es ${this.validator}`);
    this.metodoPago = this.paymentMethod[id]["value"];
    if (this.metodoPago.toLowerCase() === "tarjeta") {
      this.comision = this.precioProducto * this.cantidad * 0.05;
      this.tarjeta = 1;
    } else {
      this.comision = 0;
      this.tarjeta = 0;
    }
    console.log(this.comision);
  }

  serviceOption(id: number) {
    this.servicioPago = this.servicio[id]["value"];
  }

  horarioOption(id: number) {
    this.horarioPago = this.horario[id]["value"];
  }

  eventCheck(event) {
    this.check = event.target.checked;
  }

  selectSpinner(e: number) {
    for (let u of this.spinner) {
      if (u["id"] == e) {
        this.precioProducto = u["precio"];
        this.almacen = u["id_almacen"];
        this.producto = u["id"];
      }
    }
  }

  selectDistrito(id: number) {
    this.distrito = id;
    let zonaDistrito = 0;

    let { zona } = this.distritos.find((distrito) => distrito.value == id);
    zonaDistrito = zona;

    this.deliveryPrecio = this.getPriceByZona(zonaDistrito);
  }

  getPriceByZona(zonaDistrito: number): number {
    let deliveryPrice: number = 0;
    this.zonas.forEach((zona) => {
      if (this.zonaEmpresa === zona.id) {
        zona.zonas.forEach(({ id, precio, name }) => {
          if (zonaDistrito === id) {
            deliveryPrice = precio;
            console.log("Zona del distrito seleccionado: ", id);
            console.log("Distrito de envio: ", name);
            console.log("Precio del distrito: ", precio);
            return;
          }
        });
        return;
      }
    });
    return deliveryPrice ? deliveryPrice : 0;
  }

  convertDateToString(date: string) {
    const navigatorVendor = window.navigator.vendor;
    if (navigatorVendor.toLowerCase().includes("apple")) {
      return date.replace(/[/]/g, "-");
    } else {
      return `${date.split("-")[2]}-${date.split("-")[1]}-${
        date.split("-")[0]
      }`;
    }
  }

  splitElement(element: string, keySplit: string, position: number): string {
    return element.split(keySplit)[position];
  }
  addErrorMessage(buttonMessage, message) {
    buttonMessage.textContent = message;
  }

  deleteErrorMessage(buttonMessage) {
    buttonMessage.textContent = "";
  }

  getLatAndLogFromUrl(url: string): number[] {
    const dataFromUrl = this.splitElement(url, "@", 1);
    const latitud = parseFloat(this.splitElement(dataFromUrl, ",", 0));
    const longitud = parseFloat(
      this.splitElement(this.splitElement(dataFromUrl, ",", 1), ",", 0)
    );
    return [latitud, longitud];
  }

  registroEnvio(): void {
    const buttonMessage = document.querySelector("#button-message");

    this.deleteErrorMessage(buttonMessage);

    if (
      (this.validator === 1 &&
        this.conditionFinal !== 0 &&
        this.idPaymentMethod !== 0) ||
      this.validator === 0
    ) {
      if (
        this.name != null &&
        this.direction != null &&
        this.number != null &&
        this.cantidad != null &&
        this.modoEntrega != null &&
        this.precioProducto != null &&
        this.fechaEntrega != null &&
        this.distrito != null &&
        (this.descripcion != null || this.producto != null)
      ) {
        if (this.directionMaps) {
          if (
            this.directionMaps.includes("@") &&
            this.directionMaps.includes(",")
          ) {
            const [latitud, longitud] = this.getLatAndLogFromUrl(
              this.directionMaps
            );
            this.latitud = latitud;
            this.longitud = longitud;
            console.log(this.latitud);
            console.log(this.longitud);
          }
        }

        this.spinnerService.show();

        if (this.check) {
          let montoTotal =
            parseFloat(this.cantidad.toString()) *
            parseFloat(this.precioProducto.toString());
          
          montoTotal += this.deliveryPrecio;
          montoTotal += this.comision;
          let fechaFinal = this.convertDateToString(this.fechaEntrega);
          let data = JSON.stringify({
            token: this.token,
            nombrePersona: this.name,
            direccion: this.direction,
            telefono: this.number,
            latitud: this.latitud,
            longitud: this.longitud,
            id_almacen: this.almacen,
            idproducto: this.producto,
            cantidad: this.cantidad,
            modo_entrega: this.modoEntrega,
            metodo_pago: this.metodoPago,
            tipo_servicio: "regular",
            monto_total: montoTotal,
            delivery: this.deliveryPrecio,
            horario: "9:00am-6:00pm",
            fecha_entrega: fechaFinal,
            observacion: this.observacion,
            precio: this.precioProducto,
            distrito: this.distrito,
          });
          console.log(data);
          this.http
            .post(
              `${environment.url_api}/usuario/registroEnviosAlmacen`,
              // "https://backend-japi.herokuapp.com/usuario/registroEnviosAlmacen",
              data,
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
              this.spinnerService.hide();
              if (result["success"]) {
                this.router.navigate(["/mis-envios"]);
              } else {
                console.log("Error al registrar envío");
              }
            });
        } else {
          let montoTotal =
            parseFloat(this.cantidad.toString()) *
            parseFloat(this.precioProducto.toString());
          montoTotal += this.deliveryPrecio;
          montoTotal += this.comision;

          let fechaFinal = `${this.fechaEntrega.split("-")[2]}-${
            this.fechaEntrega.split("-")[1]
          }-${this.fechaEntrega.split("-")[0]}`;

          let data = JSON.stringify({
            token: this.token,
            nombrePersona: this.name,
            direccion: this.direction,
            telefono: this.number,
            latitud: this.latitud,
            longitud: this.longitud,
            descripcion: this.descripcion,
            cantidad: this.cantidad,
            modo_entrega: this.modoEntrega,
            metodo_pago: this.metodoPago,
            tipo_servicio: "regular",
            monto_total: montoTotal,
            delivery: this.deliveryPrecio,
            horario: "9:00am-6:00pm",
            fecha_entrega: fechaFinal,
            observacion: this.observacion,
            precio: this.precioProducto,
            distrito: this.distrito,
          });

          console.log(data);

          this.http
            .post(
              `${environment.url_api}/usuario/registroEnvios`,
              // "https://backend-japi.herokuapp.com/usuario/registroEnvios",
              data,
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
              this.spinnerService.hide();
              if (result["success"]) {
                this.router.navigate(["/mis-envios"]);
              } else {
                console.log("Error al registrar envío");
              }
            });
        }
      } else {
        this.addErrorMessage(
          buttonMessage,
          "Por favor, Ingrese todos los datos"
        );
      }
    } else {
      this.addErrorMessage(buttonMessage, "Por favor, Ingrese todos los datos");
    }
  }

  // This function enable the button to handle input file click event
  uploadFile() {
    this.fileInput.click();
  }

  // This function is to handle input file change event
  changeInputEvent(e:any) {
    const fileInput = this.fileInput.files[0];
    const reader: FileReader = new FileReader();

    // convert xlsx file to json
    reader.onload = this.loadFile;
    reader.readAsBinaryString(fileInput);
  }



  loadFile(ev: any) {
    this.spinnerService.show();
    const bstr: string = ev.target.result;
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: "binary" });
    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    this.data = XLSX.utils.sheet_to_json(ws, { header: 1 });
    console.log(this.data);
    let dataExcel = [];
    const keysData = [
      "descripcion",
      "cantidad",
      "fecha_entrega",
      "nombrePersona",
      "telefono",
      "direccion",
      "latitud",
      "longitud",
      "precio",
      "metodo_pago",
      "modo_entrega",
      "delivery",
      "monto_total",
      "observacion",
      "distrito",
    ];
    this.data.forEach((dato, index) => {
      if (index !== 0) {
        if (dato.length !== 0) {
          const distritoValue: number = Number(dato[11].split("-")[0].trim());
          const { zona } = this.distritos.find(
            ({ value }) => value === distritoValue
          );
          const deliveryPrice = this.getPriceByZona(zona);
          let latitudValue = 0;
          let longitudValue = 0;
          console.log(dato[6] ? "no está vacío" : "empty");
          if (dato[6]) {
            const [latitud, longitud] = this.getLatAndLogFromUrl(dato[6]);
            latitudValue = latitud;
            longitudValue = longitud;
          }
          let montoTotal = Number(dato[7]) * Number(dato[1]);
          let modo1='cambio con costo';
          let modo2='contra-entrega';
          if (modo1===String(dato[9]) || modo2===String(dato[9]) ) {
            montoTotal += deliveryPrice;
          }
         
          const metodoPago = String(dato[8]) || "";
          if (metodoPago.toLowerCase() === "tarjeta") {
            montoTotal += montoTotal * 0.05;
          }

          if (
            (dato[0] != null,
            dato[1] != null,
            dato[2] != null,
            dato[3] != null,
            dato[4] != null,
            dato[5] != null,
            dato[7] != null,
            dato[9] != null,
            deliveryPrice != null,
            montoTotal != null,
            distritoValue != null)
          ) {
            const valueObject = {
              [keysData[0]]: dato[0],
              [keysData[1]]: dato[1],
              [keysData[2]]: dato[2],
              [keysData[3]]: dato[3],
              [keysData[4]]: dato[4],
              [keysData[5]]: dato[5],
              [keysData[6]]: latitudValue,
              [keysData[7]]: longitudValue,
              [keysData[8]]: dato[7],
              [keysData[9]]: dato[8] || "",
              [keysData[10]]: dato[9].trim(),
              [keysData[11]]: deliveryPrice,
              [keysData[12]]: montoTotal,
              [keysData[13]]: dato[10],
              [keysData[14]]: distritoValue,
            };
            dataExcel.push(valueObject);
            console.log(dato);
          }
        }
      }
    });

    console.log(dataExcel);

    let data = JSON.stringify({ token: this.token, data: dataExcel });
    console.log(data);
    this.http
      .post(
        `${environment.url_api}/usuario/registroEnviosExcel`,
        // "https://backend-japi.herokuapp.com/usuario/registroEnviosExcel",
        data,
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
        this.spinnerService.hide();
        if (result["success"]) {
          this.router.navigate(["/mis-envios"]);
        } else {
          console.log("Error al registrar envío"); 
        }
      });
  }


  alertaEnvio():any{
    alert('Limite maximo de envíoss.')
  }
}
