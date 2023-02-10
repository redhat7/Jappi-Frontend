import { Component,Inject,Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";

import { FormService } from "../../../utils/services/form/form.service";
import { Distrito } from "../../../utils/models/distritos.model";
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-modal-edit-usuario',
  templateUrl: './modal-edit-usuario.component.html',
  styleUrls: ['./modal-edit-usuario.component.css']
})
export class ModalEditUsuarioComponent implements OnInit {
  token: string;
  distritos: Distrito[];
  id_persona: string;
  id_duenio: string;
  id_empresa: string;
  // duenio:string;
  // empresa:string;
  // correo:string;
  // pass:string;
  // dni:string;
  // telefono:string;
  // direccion:string;
  // banco:string;
  // cuenta:string;
  // titular:string;

  @Input() duenio:string;
  @Input() nombre:string;
  @Input() correo:string;
  @Input() pass:string;
  @Input() dni:string;
  @Input() telefono:string;
  @Input() direccion:string;
  @Input() cuenta:string;
  @Input() titular:string;
  
  optionsBanco: any[] = [ { id: 0, value: "--- Seleccione ---" },
  { id: 1, value: "BCP" },
  { id: 2, value: "INTERBANK" },
  { id: 3, value: "SCOTIABANK" },
  { id: 4, value: "BBVA" },];

  @Input() IDbanco: string;
  @Input() IDDistrito: any = 0;

  constructor( @Inject(MAT_DIALOG_DATA) public data,
  private formService: FormService,
  public dialogRef: MatDialogRef<ModalEditUsuarioComponent>,
  private http: HttpClient) { }

  ngOnInit(): void {
    this.distritos = this.formService.getDistritos();
    const {
      id_persona,
      id_duenio,
      id_empresa,
      usuario,
      token,
      
    } = this.data;
    console.log(this.data);
    this.token=token;
    this.IDDistrito = usuario.distrito;
     this.id_persona= id_persona,
     this.id_duenio=id_duenio,
     this.id_empresa=id_empresa,
     this.duenio=usuario.duenio,
     this.nombre=usuario.nombre, 
     this.correo=usuario.correo,
     this.pass=usuario.pass,
     this.dni=usuario.dni,
     this.telefono=usuario.telefono, 
     this.direccion=usuario.direccion, 
     this.IDbanco = usuario.banco,
     this.cuenta=usuario.cuenta, 
     this.titular=usuario.titular
     
  }
  updateUsuario() {
    const distritoToNumber = Number(this.IDDistrito);
    const data = {
      token: this.token,
      id_persona: this.id_persona,
      id_duenio:this.id_duenio,
      id_empresa:this.id_empresa,
      duenio:this.duenio,
      nombre:this.nombre, 
      correo:this.correo,
      pass:this.pass,
      dni:this.dni,
      telefono:this.telefono, 
      direccion:this.direccion, 
      banco:this.IDbanco,
      cuenta:this.cuenta, 
      titular:this.titular,
      distrito: distritoToNumber
    };
    console.log(data);
    console.log(JSON.stringify(data));
    this.http
      .post(
        `${environment.url_api}/empresa/EditarUsuarios`,
        // "https://backend-japi.herokuapp.com/empresa/EditarUsuarios",
        JSON.stringify(data),
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
          console.log("Error update estado");
          this.dialogRef.close(false);
        }
      });
  }
 

}
