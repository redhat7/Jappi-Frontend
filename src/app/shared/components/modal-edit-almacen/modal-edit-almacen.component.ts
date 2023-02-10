import { Component, OnInit,Input,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-modal-edit-almacen',
  templateUrl: './modal-edit-almacen.component.html',
  styleUrls: ['./modal-edit-almacen.component.css']
})
export class ModalEditAlmacenComponent implements OnInit {
  @Input() cantidad: number;
  id: number;
  token: string;
  constructor( @Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<ModalEditAlmacenComponent>,
  private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.data);
    this.cantidad = this.data.cantidad;
    this.id = this.data.id_entradaAlmacen;
    this.token = this.data.token;
  }
  updateSolicitud() {
    const data = {
      token: this.token,
      cantidad: this.cantidad,
      id: this.id,
    };
    console.log(data);
    
    this.http
      .post(
        `${environment.url_api}/empresa/EditardeAlmacenJapi`,
        // "https://backend-japi.herokuapp.com/empresa/EditardeAlmacenJapi", 
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
          console.log("error al actualizar ");
        }
      });
  }
}
