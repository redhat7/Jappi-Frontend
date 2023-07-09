import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";

import { FormService } from "../../../utils/services/form/form.service";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-modal-registrar-admin",
  templateUrl: "./modal-registrar-admin.component.html",
  styleUrls: ["./modal-registrar-admin.component.css"],
})
export class ModalRegistrarAdminComponent implements OnInit {
  token: string;
  tipoAdmin: any[];
  selectedTipo: number;
  nombreValid: boolean = true;
  emailValid: boolean = true;
  passwordValid: boolean = true;
  emailExistError: boolean = false;

  @Input() tipo: number = 2;
  @Input() nombres: string;
  @Input() correo: string;
  @Input() password: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalRegistrarAdminComponent>,
    private http: HttpClient,
    private formService: FormService,
    private spinnerService: NgxSpinnerService
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    const { token } = this.data;
    this.token = token;
    this.tipoAdmin = this.formService.getTipoAdmin();
  }

  createAdmin() {
    this.spinnerService.show();
    this.nombreValid = !!this.nombres;
    this.passwordValid = !!this.password && this.password.length >= 5;

    if (!this.nombreValid) {
      setTimeout(() => {
        this.nombreValid = true;
      }, 3000);
      this.spinnerService.hide();
      return;
    }

    if (!this.passwordValid) {
      setTimeout(() => {
        this.passwordValid = true;
      }, 3000);
      this.spinnerService.hide();
      return;
    }

    if (!this.correo || !this.correo.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      this.emailValid = false;
      this.spinnerService.hide();

      setTimeout(() => {
        this.emailValid = true;
      }, 3000);

      return;
    }

    const data = {
      token: this.token,
      tipo: this.tipo,
      nombres: this.nombres,
      correo: this.correo,
      pass: this.password,
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(`${environment.url_api}/empresa/registrarAdmin`, data, { headers }).subscribe(
      (result: any) => {
        if (result.success) {
          this.dialogRef.close(true);
          this.spinnerService.hide();
        } else {
          if (result.message === ' El Correo ya existe') {
            this.emailExistError = true;

            setTimeout(() => {
              this.emailExistError = false;
            }, 3000);
            this.spinnerService.hide();
          } else {
            console.log("Error al crear admin", result);
            this.spinnerService.hide();
          }
        }
      }, (error) => {
        console.error('Error:', error);
        this.spinnerService.hide();
      }
    );
  }
}