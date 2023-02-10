import { Component, OnInit, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-modal-recojo-moto",
  templateUrl: "./modal-recojo-moto.component.html",
  styleUrls: ["./modal-recojo-moto.component.scss"],
})
export class ModalRecojoMotoComponent implements OnInit {
  @Input() estadoSelected: string = "0";
  estados: any[];
  token: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ModalRecojoMotoComponent>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.token = this.data.token;
    this.estados = [...this.data.estados];
  }
  updateEstado() {
    const data = JSON.stringify({
      token: this.token,
      id_recojo: this.data.idRecojo,
      estado: this.estadoSelected,
    });
    console.log(data);
    this.http
      .post(
        `${environment.url_api}/motorizado/UpdateRecojo`,
        // "https://backend-japi.herokuapp.com/motorizado/UpdateRecojo",
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
