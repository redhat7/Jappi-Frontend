import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-modal-delete-envio',
  templateUrl: './modal-delete-envio.component.html',
  styleUrls: ['./modal-delete-envio.component.css']
})
export class ModalDeleteEnvioComponent implements OnInit {

  token:string;
  id_envio:number;
  constructor(  
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ModalDeleteEnvioComponent>,
    private http: HttpClient) { }

  ngOnInit(): void {
 
    
    const {id_envio,token}=this.data;
    this.token=token;
     this.id_envio=id_envio;
    console.log(this.token);
    console.log( this.id_envio);
    
  }
  cancelar(){
    this.dialogRef.close(true);
  }
  deleteEntrega() {
    const data = {
      token: this.token,
      id_envio:this.id_envio,
    };
    console.log(data);
    
    this.http
      .post(
        `${environment.url_api}/empresa/eliminarEnvio`,
        // "https://backend-japi.herokuapp.com/empresa/eliminarEnvio",
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
        console.log("Error update estado");
        this.dialogRef.close(false);
      }
      });
  }

}
