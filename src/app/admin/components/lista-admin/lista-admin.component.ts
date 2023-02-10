import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-lista-admin",
  templateUrl: "./lista-admin.component.html",
  styleUrls: ["./lista-admin.component.scss"],
})
export class ListaAdminComponent implements OnInit {
  token: string;
  data: any[] = [];
  datos: [];
  @Input() valorSpinner: string;
  @Input() spinner = [
    { descripcion: "--- Elige un campo ---", id: "" },
    { descripcion: "correo", id: "correo" },
  ];
  @Input() searchTxt: string;
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
        `${environment.url_api}/empresa/ListarAdmin`,
        // "https://backend-japi.herokuapp.com/empresa/ListarAdmin",
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
          const dataFormat = result.data.map((lista) => {
            return {
              ...lista,
            };
          });
          this.data = dataFormat;
          this.datos = dataFormat;

          console.log(this.data);
        } else {
          console.log("Error al traer los productos en lista");
        }
        this.spinnerService.hide();
      });
  }
}
