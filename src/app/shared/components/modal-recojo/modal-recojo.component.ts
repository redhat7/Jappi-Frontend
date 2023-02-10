import { Component, OnInit, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-modal-recojo",
  templateUrl: "./modal-recojo.component.html",
  styleUrls: ["./modal-recojo.component.scss"],
})
export class ModalRecojoComponent implements OnInit {
  @Input() motorizadoSelected: string = "0";
  motorizados: [];
  token: string;
  idRecojo: number;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ModalRecojoComponent>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.token = this.data.token;
    this.idRecojo = this.data.idRecojo;
    this.getMotorizados(this.token);
  }

  getMotorizados(token: string) {
    this.http
      .post(
        `${environment.url_api}/empresa/ListarMotorizados`,
        // "https://backend-japi.herokuapp.com/empresa/ListarMotorizados",
        { token },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
          },
        }
      )
      .subscribe(({ success, data }: any) => {
        if (success) {
          this.motorizados = data;
          this.data.validate = 1;
        } else {
          console.log("error al traer motorizados");
        }
      });
  }

  updateMotorizado() {
    const data = JSON.stringify({
      token: this.token,
      id_recojo: this.idRecojo,
      id_moto: Number(this.motorizadoSelected),
    });
    this.http
      .post(
        `${environment.url_api}/empresa/${this.data.request}MotorizadoRecojo`,
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
