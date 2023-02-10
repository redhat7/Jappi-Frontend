import { Component, OnInit, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-modal-envios",
  templateUrl: "./modal-envios.component.html",
  styleUrls: ["./modal-envios.component.scss"],
})
export class ModalEnviosComponent implements OnInit {
  @Input() observacion;
  @Input() estadoSelected: string = "0";
  token: string;
  idEnvio: number;
  estados: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalEnviosComponent>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.token = this.data.token;
    this.idEnvio = this.data.idEnvio;
    this.estados = this.data.estados;
  }

  addObservacion() {
    const data = {
      token: this.token,
      id_envio: this.idEnvio,
      motivo: this.observacion,
      estado: Number(this.estadoSelected),
    };
    console.log(data);
    this.http
      .post(
        `${environment.url_api}/empresa/addMotivoCaida`,
        // `https://backend-japi.herokuapp.com/empresa/addMotivoCaida`,
         data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST",
        },
      })
      .subscribe((result: any) => {
        if (result.success) {
          this.dialogRef.close(true);
        } else {
          console.log("error to update or generate motorizado");
        }
      });
  }
  
}
