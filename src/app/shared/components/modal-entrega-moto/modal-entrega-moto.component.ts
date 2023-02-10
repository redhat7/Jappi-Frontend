import { Component, OnInit, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-modal-entrega-moto",
  templateUrl: "./modal-entrega-moto.component.html",
  styleUrls: ["./modal-entrega-moto.component.scss"],
})
export class ModalEntregaMotoComponent implements OnInit {
  @Input() estadoSelected: string = "0";
  estados: any[];
  token: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ModalEntregaMotoComponent>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.token = this.data.token;
    this.estados = [...this.data.estados];
    console.log(this.estados);
  }

  updateEstado() {
    const data = JSON.stringify({
      token: this.token,
      id_envio: this.data.idEnvio,
      estado: this.estadoSelected,
    });
    console.log(data);
    this.http
      .post(
        `${environment.url_api}/motorizado/UpdateEntrega`,
        // "https://backend-japi.herokuapp.com/motorizado/UpdateEntrega",
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
          console.log("Error update estado");
          this.dialogRef.close(false);
        }
      });
  }
}
