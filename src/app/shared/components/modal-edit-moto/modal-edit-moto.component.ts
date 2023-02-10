import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";

import { FormService } from "../../../utils/services/form/form.service";
import { Distrito } from "../../../utils/models/distritos.model";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-modal-edit-moto",
  templateUrl: "./modal-edit-moto.component.html",
  styleUrls: ["./modal-edit-moto.component.css"],
})
export class ModalEditMotoComponent implements OnInit {
  token: string;
  distritos: Distrito[];

  @Input() distrito1: number[];
  @Input() distrito2: number[];

  id: string;
  @Input() nombreMoto: string;
  @Input() correo: string;
  @Input() pass: string;
  @Input() dni: string;
  @Input() marca: string;
  @Input() placa: string;
  @Input() licencia: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private formService: FormService,
    public dialogRef: MatDialogRef<ModalEditMotoComponent>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const { id, usuario, token, distritoEntregas, distritoRecojos } = this.data;
    this.distrito1 = distritoRecojos;
    this.distrito2 = distritoEntregas;
    this.distritos = this.formService.getMultipleDistritos();

    this.token = token;
    this.id = id;
    this.nombreMoto = usuario.nombres;
    this.correo = usuario.correo;
    this.pass = usuario.pass;
    this.dni = usuario.dni;
    this.licencia = usuario.numLicencia;
    this.marca = usuario.marcaMoto;
    this.placa = usuario.placaMoto;
  }

  editMotorizado() {
    console.log(this.distrito1);
    console.log(this.distrito2);
    const data = {
      token: this.token,
      id: this.id,
      correo: this.correo,
      pass: this.pass,
      nombres: this.nombreMoto,
      dni: this.dni,
      numLicencia: this.licencia,
      placaMoto: this.placa,
      marcaMoto: this.marca,
      recojo: this.distrito1,
      entrega: this.distrito2,
    };

    console.log(JSON.stringify(data));
    this.http
      .post(
        `${environment.url_api}/empresa/updateMotorizado`,
        // `https://backend-japi.herokuapp.com/empresa/updateMotorizado`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
          },
        }
      )
      .subscribe((result: any) => {
        if (result.success) {
          this.dialogRef.close(true);
        } else {
          console.log("error to update or generate motorizado");
        }
      });
  }
}
