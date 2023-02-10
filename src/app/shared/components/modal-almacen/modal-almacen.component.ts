import { Component, OnInit, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-modal-almacen",
  templateUrl: "./modal-almacen.component.html",
  styleUrls: ["./modal-almacen.component.scss"],
})
export class ModalAlmacenComponent implements OnInit {
  @Input() descripcion: string;
  @Input() cantidad: number;
  @Input() precio: Float32Array;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalAlmacenComponent>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  addProduct() {
    console.log(this.descripcion);
    console.log(this.cantidad);
    const data = JSON.stringify({
      token: this.data.token,
      descripcion: this.descripcion,
      cantidad: this.cantidad,
      precio: this.precio,
    });

    console.log(data);

    this.http
      .post(
        `${environment.url_api}/usuario/almacen/agregar`,
        // "https://backend-japi.herokuapp.com/usuario/almacen/agregar",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "http://localhost:4200/*",
          },
        }
      )
      .subscribe((result) => {
        console.log(result);
        if (result["success"]) {
          this.dialogRef.close(true);
        } else {
          console.log("error");
        }
      });
  }
}
