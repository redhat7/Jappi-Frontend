import { Component, OnInit,Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-activacion-cuentas",
  templateUrl: "./activacion-cuentas.component.html",
  styleUrls: ["./activacion-cuentas.component.scss"],
})
export class ActivacionCuentasComponent implements OnInit {
  token: string;
  data: any[] = [];
  datos: [];
  @Input() opcionvalue: string;
  @Input() searchTxt: string;
  opciones = [
    { descripcion: "--- Elige un campo ---", id: "" },
    { descripcion: "Nombre Dueño", id: "nombre_persona" },
    { descripcion: "Empresa", id: "nombre_empresa" },

  ];
  constructor(
    private http: HttpClient,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.token = currentUser.token;
    this.getData(this.token);
  }
  selectSpinner(value: string) {
    this.opcionvalue = value;
    console.log(this.opcionvalue);
  }
  filterList() {
    this.data = [];
    for (let element of this.datos) {
      ("use strict");
      let varia: string = element[this.opcionvalue];
      if (varia.toLowerCase().includes(this.searchTxt.toLowerCase())) {
        this.data.push(element);
      }
    }
  }
  getData(token: string) {
    this.spinnerService.show();
    this.http
      .post(
        `${environment.url_api}/empresa/activaciones`,
        // "https://backend-japi.herokuapp.com/empresa/activaciones",
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
      .subscribe((result) => {
        if (result["success"]) {
          this.data = result["data"];
          this.datos = result["data"];
          console.log(this.data);
          
        } else {
          console.log("Error al traer las empresas por activar");
        }
        this.spinnerService.hide();
      });
  }
  deleteUser(id: number,id_emp: number){
    const { id_duenio } = this.data.find(({ id_duenio }) => id === id_duenio);
    const {id_empresa}=this.data.find(({ id_empresa }) => id_emp === id_empresa);
    this.deleteId(this.token, id_duenio,id_empresa);
    
    
  }

  activateUser(id: number) {
    const { id_duenio } = this.data.find(({ id_duenio }) => id === id_duenio);
    this.sendId(this.token, id_duenio);
  }
  deleteId(token: string, id: number,idemp: number) {
    this.http
      .post(
        `${environment.url_api}/empresa/deleteUsuario`,
        // "https://backend-japi.herokuapp.com/empresa/deleteUsuario",
        { token: token, id_duenio: id ,id_empresa:idemp},
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
          console.log("Error al activar el usuario");
        }
      });
  }
  sendId(token: string, id: number) {
    this.http
      .post(
        `${environment.url_api}/empresa/activarUsuario`,
        // "https://backend-japi.herokuapp.com/empresa/activarUsuario",
        { token: token, id_duenio: id },
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
          console.log("Error al activar el usuario");
        }
      });
  }
}
