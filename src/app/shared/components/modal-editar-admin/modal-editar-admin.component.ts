import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";

import { FormService } from "../../../utils/services/form/form.service";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-modal-editar-admin",
  templateUrl: "./modal-editar-admin.component.html",
  styleUrls: ["./modal-editar-admin.component.css"],
})
export class ModalEditarAdminComponent implements OnInit {
  token: string;
  tipoAdmin: any[];
  selectedTipo: number;
  nombreValid: boolean = true;
  emailValid: boolean = true;
  passwordValid: boolean = true;
  emailExistError: boolean = false;
  idPersona: string;

  @Input() tipo: number = 2;
  @Input() nombres: string;
  @Input() correo: string;
  @Input() password: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalEditarAdminComponent>,
    private http: HttpClient,
    private formService: FormService,
    private spinnerService: NgxSpinnerService
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    const { token, admin } = this.data;
    this.token = token;
    this.tipoAdmin = this.formService.getTipoAdmin();
    this.tipo = admin.tipo;
    this.nombres = admin.nombres;
    this.correo = admin.correo;
    this.password = admin.pass;
    this.idPersona = admin.id_persona;
  }

  editAdmin() {
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
      id_persona: this.idPersona.toString(),
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(`${environment.url_api}/empresa/editarAdmin`, data, { headers }).subscribe(
      (result: any) => {
        if (result.success) {
          this.dialogRef.close(true);
          this.spinnerService.hide();
        } else {
          console.log("Error al editar admin", result);
          this.spinnerService.hide();
        }
      }, (error) => {
        console.error('Error:', error);
        this.spinnerService.hide();
      }
    );
  }
}