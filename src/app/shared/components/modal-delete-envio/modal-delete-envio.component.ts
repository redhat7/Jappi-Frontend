import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-modal-delete-envio',
  templateUrl: './modal-delete-envio.component.html',
  styleUrls: ['./modal-delete-envio.component.css']
})
export class ModalDeleteEnvioComponent implements OnInit {
  token: string;
  id_envio: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ModalDeleteEnvioComponent>,
    private http: HttpClient) { }

  ngOnInit(): void {
    const { id_envio, token } = this.data;
    this.token = token;
    this.id_envio = id_envio;
    // console.log(this.token);
    // console.log(this.id_envio);
  }

  cancelar() {
    this.dialogRef.close(true);
  }

  deleteEntrega() {
    const data = { token: this.token, id_envio: this.id_envio };

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST",
    };

    this.http.post(`${environment.url_api}/empresa/eliminarEnvio`, data, { headers }).subscribe(
      (result: any) => {
        if (result.success) {
          this.dialogRef.close(true);
        } else {
          console.log("Error al actualizar el estado");
          this.dialogRef.close(false);
        }
      }, (error) => {
        console.error("Error en la solicitud HTTP:", error);
        this.dialogRef.close(false);
      }
    );
  }
}
