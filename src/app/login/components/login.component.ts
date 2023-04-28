import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocationService } from "../../utils/services/location/location.service";
import { environment } from './../../../environments/environment';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @Input() mail: string;
  @Input() pass: string;
  @Input() lng: Float32Array;
  @Input() lat: Float32Array;

  private emailInput: HTMLInputElement;
  private passInput: HTMLInputElement;
  private buttonSpan: HTMLSpanElement;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _location: LocationService,
    private spinnnerService: NgxSpinnerService
  ) {}

  ngOnInit() {
    this._location.getLocationService().then((resp) => {
      this.lng = resp.lng;
      this.lat = resp.lat;
    });
  }

  loginService() {
    this.emailInput = document.querySelector("#email");
    this.passInput = document.querySelector("#password");
    this.buttonSpan = document.querySelector("#button-message");

    localStorage.setItem("correo-chido", this.mail);

    if (!this.mail || !this.pass) {
      this.buttonSpan.textContent =
        "Por favor complete los campos de correo y contraseña";
      this.emailInput.classList.add("error");
      this.passInput.classList.add("error");
    } else {
      this.emailInput.classList.remove("error");
      this.passInput.classList.remove("error");
      this.buttonSpan.textContent = "";
      this.spinnnerService.show();
      let data = JSON.stringify({ email: this.mail, pass: this.pass });

      this.http
        .post(`${environment.url_api}/usuario/login`, data, {
           
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "http://localhost:4200/*",
          },
        })
        .subscribe((result: any) => {
          const { success, message, data } = result;
          if (success) {
            localStorage.setItem("auth", JSON.stringify(data[0]));
            this.spinnnerService.hide();
            const currentUser = JSON.parse(localStorage.getItem("auth"));
            if (currentUser.tipo == 1) {
              this.router.navigate(["/registro-envio"]);
            } else if (currentUser.tipo == 2) {
              this.router.navigate(["/envios"]);
            } else if (currentUser.tipo == 3) {
              this.router.navigate(["/entregas-motorizado"]);
            } else if (currentUser.tipo == 4) {
              this.router.navigate(["/almacen"]);
            } else if (currentUser.tipo == 5) {
              this.router.navigate(["/envios"]);
            }
          } else if (message.toLowerCase() === "correo invalido") {
            this.spinnnerService.hide();
            this.buttonSpan.textContent =
              "El correo o la contraseña son incorrectos. Por favor inténtelo de nuevo";
            this.emailInput.classList.add("error");
            this.passInput.classList.add("error");
          } else if (message.toLowerCase() === "su correo falta activar") {
            this.spinnnerService.hide();
            this.router.navigate(["/validar"], {
              queryParams: { emailValidar: this.mail },
            });
          }
        });
    }
  }
}
