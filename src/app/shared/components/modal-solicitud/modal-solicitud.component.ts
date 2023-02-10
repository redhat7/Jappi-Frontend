import { Component, OnInit, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-modal-solicitud",
  templateUrl: "./modal-solicitud.component.html",
  styleUrls: ["./modal-solicitud.component.scss"],
})
export class ModalSolicitudComponent implements OnInit {
  @Input() cantidad: number;
  idSolicitud: number;
  token: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ModalSolicitudComponent>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.cantidad = this.data.cantidad;
    this.idSolicitud = this.data.idSolicitud;
    this.token = this.data.token;
  }

  updateSolicitud() {
    const data = {
      token: this.token,
      cantidad: this.cantidad,
      id_solicitud: this.idSolicitud,
    };
    this.http
      .post(
        `${environment.url_api}/empresa/UpdateAlmacen`,
        // "https://backend-japi.herokuapp.com/empresa/UpdateAlmacen",
       data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST",
        },
      })
      .subscribe(({ success }: any) => {
        if (success) {
          this.dialogRef.close(true);
        } else {
          this.dialogRef.close(false);
          console.log("error al actualizar la solicitud");
        }
      });
  }
}
