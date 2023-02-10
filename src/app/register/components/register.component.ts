import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { LocationService } from "../../utils/services/location/location.service";
import { Distrito } from "../../utils/models/distritos.model";
import { FormService } from "../../utils/services/form/form.service";
import { environment } from './../../../environments/environment';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  @Input() nombre: string;
  @Input() dni: Int16Array;
  @Input() mail: string;
  @Input() pass: string;
  @Input() nameEmpresa: string;
  @Input() direction: string;
  @Input() distrito: number;
  @Input() lng: Float32Array;
  @Input() lat: Float32Array;
  @Input() phone: Int16Array;
  @Input() banco: string;
  @Input() numCuenta: Int16Array;
  @Input() titular: string;
  @Input() ruc: Int16Array;
  @Input() isChecked: boolean=false;
  printOption: string;
  options: any[] = [
    { name: "Seleccione un banco", value: 0 },
    { name: "BCP", value: 1 },
    { name: "INTERBANK", value: 2 },
    { name: "SCOTIABANK", value: 3 },
    { name: "BBVA", value: 4 },
  ];
  distric: Distrito[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private spinnerService: NgxSpinnerService,
    private _location: LocationService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.distric = this.formService.getDistritos();
    this.configInitial();
  }

  configInitial() {
    this._location
      .getLocationService()
      .then((resp) => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  selectOption(id: number) {
    this.banco = this.options[id].name;
  }

  selectDistric(id: number) {
    this.distrito = id;
  }

  register() {
    const inputsRegistro = document.querySelectorAll(".form-main-input");
    const selectsRegistro = document.querySelectorAll(".form-main-select");
    const buttonMessage = document.querySelector("#button-message");

    this.deleteErrorMessage(inputsRegistro, selectsRegistro, buttonMessage);

    if (!this.lat && !this.lng) {
      this.addErrorMessage(
        inputsRegistro,
        selectsRegistro,
        buttonMessage,
        "Activa tu ubicación en tu dispositivo"
      );
    } else {
      if (
        this.nombre != null &&
        this.dni != null &&
        this.mail != null &&
        this.pass != null &&
        this.nameEmpresa != null &&
        this.direction != null &&
        this.distrito != null &&
        this.lat != null &&
        this.lng != null &&
        this.phone != null &&
        this.banco != null &&
        this.numCuenta != null &&
        this.titular != null &&
        this.isChecked == true
      ) {
        this.spinnerService.show();
        let data = JSON.stringify({
          nombre: this.nombre,
          dni: this.dni,
          correo: this.mail,
          pass: this.pass,
          nombre_empresa: this.nameEmpresa,
          direccion: this.direction,
          distrito: this.distrito,
          latitud: this.lat,
          longitud: this.lng,
          telefono: this.phone,
          banco: this.banco,
          cuenta: this.numCuenta,
          titular: this.titular,
          ruc: this.ruc,
        });
        console.log(data);

        this.http
          .post(
            `${environment.url_api}/usuario/registro`,
            // "https://backend-japi.herokuapp.com/usuario/registro", 
            data, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Methods": "POST",
              "Access-Control-Allow-Credentials": "true",
              "Access-Control-Allow-Origin": "http://localhost:4200/*",
            },
          })
          .subscribe((result: any) => {
            console.log(result);
            if (result["success"]) {
              this.spinnerService.hide();
              this.router.navigate(["/validar"], {
                queryParams: { emailValidar: this.mail },
              });
            } else {
              this.addErrorMessage(
                inputsRegistro,
                selectsRegistro,
                buttonMessage,
                "El correo ya ha sido registrado. Por favor agrega otro correo"
              );
              this.spinnerService.hide();
            }
          });
      } else {
        this.addErrorMessage(
          inputsRegistro,
          selectsRegistro,
          buttonMessage,
          "Faltan datos"
        );
      }
    }
  }

  addErrorMessage(inputsRegistro, selectsRegistro, buttonMessage, message) {
    inputsRegistro.forEach((input) => input.classList.add("error"));
    selectsRegistro.forEach((select) => select.classList.add("error"));

    buttonMessage.textContent = message;
  }

  deleteErrorMessage(inputsRegistro, selectsRegistro, buttonMessage) {
    inputsRegistro.forEach((input) => input.classList.remove("error"));
    selectsRegistro.forEach((select) => select.classList.remove("error"));
    buttonMessage.textContent = "";
  }
}
