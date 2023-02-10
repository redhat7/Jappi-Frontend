import {  Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-modal-estado-recojo',
  templateUrl: './modal-estado-recojo.component.html',
  styleUrls: ['./modal-estado-recojo.component.css']
})
export class ModalEstadoRecojoComponent implements OnInit {

  @Input() estadoSelected: string = "0";
  token: string;
  idRecojo: number;
  estados: any[];
  constructor(   @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<ModalEstadoRecojoComponent>,
  private http: HttpClient) { }
 
  ngOnInit(): void {
    this.token = this.data.token;
    this.idRecojo = this.data.idRecojo;
    this.estados = this.data.estados; 
  }
  editarEstadoRecojo() {
    const data = {
      token: this.token,
      id_recojo: this.idRecojo,
      estado: Number(this.estadoSelected),
    };
    console.log(data);
    this.http
      .post(
        `${environment.url_api}/empresa/updateRecojo`,
        // `https://backend-japi.herokuapp.com/empresa/updateRecojo`, 
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
