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
  ) { }

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
      this.setErrorState("Por favor complete los campos de correo y contraseña");
    } else {
      this.clearErrorState();
      this.spinnnerService.show();
      let data = JSON.stringify({ email: this.mail, pass: this.pass });

      this.http.post(`${environment.url_api}/usuario/login`, data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "http://localhost:4200/*",
        },
      }).subscribe(
        (result: any) => {
          const { success, message, data } = result;
          this.handleLoginResult(success, message, data);
        },
        (error) => {
          this.handleError(error.message);
        }
      );
    }
  }

  private handleLoginResult(success: boolean, message: string, data: any) {
    if (success) {
      localStorage.setItem("auth", JSON.stringify(data[0]));
      this.spinnnerService.hide();
      const currentUser = JSON.parse(localStorage.getItem("auth"));
      this.navigateBasedOnTipo(currentUser.tipo);
    } else {
      this.handleError(message.toLowerCase());
    }
  }

  private navigateBasedOnTipo(tipo: number) {
    switch (tipo) {
      case 1:
        this.router.navigate(["/almacen"]);
        break;
      case 2:
      case 4:
      case 5:
      case 6:
        this.router.navigate(["/envios-fecha"]);
        break;
      case 3:
        this.router.navigate(["/historial"]);
        break;
      default:
        // Handle unexpected tipo value
        break;
    }
  }

  private handleError(errorMessage: string) {
    this.spinnnerService.hide();

    if (errorMessage === "correo invalido") {
      this.setErrorState("El correo o la contraseña son incorrectos. Por favor inténtelo de nuevo");
    } else if (errorMessage === "su correo falta activar") {
      this.router.navigate(["/validar"], {
        queryParams: { emailValidar: this.mail },
      });
    }
  }

  private setErrorState(errorMessage: string) {
    this.buttonSpan.textContent = errorMessage;
    this.emailInput.classList.add("error");
    this.passInput.classList.add("error");
  }

  private clearErrorState() {
    this.buttonSpan.textContent = "";
    this.emailInput.classList.remove("error");
    this.passInput.classList.remove("error");
  }
}
