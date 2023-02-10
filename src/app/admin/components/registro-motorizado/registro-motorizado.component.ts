import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";

// Services
import { TokenService } from "../../../utils/services/token/token.service";
import { Distrito } from "../../../utils/models/distritos.model";
import { FormService } from "../../../utils/services/form/form.service";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-registro-motorizado",
  templateUrl: "./registro-motorizado.component.html",
  styleUrls: ["./registro-motorizado.component.scss"],
})
export class RegistroMotorizadoComponent implements OnInit {
  @Input() token: string;
  @Input() correo: string;
  @Input() pass: string;
  @Input() nombreMoto: string;
  @Input() dni: string;
  @Input() licencia: string;
  @Input() placa: string;
  @Input() marca: string;
  @Input() modelo: string;
  @Input() codigo: string;
  @Input() distrito1: number[];
  @Input() distrito2: number[];
  error: boolean = false;
  success: boolean = false;
  errorMessage: string;

  distritos: Distrito[];

  constructor(
    private http: HttpClient,
    private spinnerService: NgxSpinnerService,
    private tokenService: TokenService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.token = this.tokenService.getToken();
    console.log(this.token);
    this.distritos = this.formService.getMultipleDistritos();
  }

  registroMotorizado() {
    this.error = false;
    this.success = false;
    this.spinnerService.show();
    const data = JSON.stringify({
      token: this.token,
      correo: this.correo,
      pass: this.pass,
      nombreMoto: this.nombreMoto,
      dni: this.dni,
      numLicencia: this.licencia,
      placaMoto: this.placa,
      marcaMoto: this.marca,
      modeloMoto: this.modelo,
      codigoComercio: this.codigo,
      distritos: this.distrito1,
      distritos2: this.distrito2,
    });
    console.log(data);
    this.http
      .post(
        `${environment.url_api}/empresa/RegistroMotizado`,
        // "https://backend-japi.herokuapp.com/empresa/RegistroMotizado",
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
      .subscribe((result: any) => {
        if (result.success) {
          this.error = false;
          this.success = true;
        } else {
          this.error = true;
          this.success = false;
          this.errorMessage = result.message;
        }
        this.spinnerService.hide();
      });
  }
}
