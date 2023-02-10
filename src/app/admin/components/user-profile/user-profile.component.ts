import { Component, OnInit,Input, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LocationService } from "../../../utils/services/location/location.service";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  token: string;
  validator:number=0;
  @Output() nameEmpresa: string;
  @Output() mail: string;
  @Output() name: string;
  @Output() pass: string;
  @Output() phone: string;
  @Input() lng: Float32Array;
  @Input() lat: Float32Array;
  @Output() ruc: string;
  @Output() banco: string;
  @Output() cuenta: string;
  @Output() titular: string;

  constructor(private http: HttpClient,
    private _location: LocationService) {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.token = currentUser.token;
    this.getData();
  }
  getUbicacion() {
    this._location
      .getLocationService()
      .then((resp) => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        console.log(this.lat);
        console.log(this.lng);
        this.updateUbicacion();
      })
      .catch((error) => {
        console.log(error);
      });

     

  }
  updateUbicacion(){
    if (this.lat!=null && this.lng!=null) {
      let data = JSON.stringify({ token: this.token,lat:this.lat,longt:this.lng });
      console.log(data);
      
      this.http
      .post(
        `${environment.url_api}/usuario/updateUbicacion`,
        // "https://backend-japi.herokuapp.com/usuario/updateUbicacion", 
        data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "http://localhost:4200/*",
        },
      })
      .subscribe((result) => {
     
      if (result['success']) {
        this.validator=1;
      } else {
        this.validator=2;
      }
       
       
      });
    }
  }
  getData() {
    let data = JSON.stringify({ token: this.token });
    this.http
      .post(
        `${environment.url_api}/usuario/perfil`,
        // "https://backend-japi.herokuapp.com/usuario/perfil",
         data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "http://localhost:4200/*",
        },
      })
      .subscribe((result) => {
        console.log(result);
        if (result["success"]) {
          this.nameEmpresa = result["data"][0].nombre;
          this.mail = result["data"][0].correo;
          this.pass = result["data"][0].pass;
          this.phone = result["data"][0].telefono;
          this.ruc = result["data"][0].ruc;
          this.banco = result["data"][0].banco;
          this.name = result["data"][0].duenio;
          this.cuenta = result["data"][0].cuenta;
          this.titular = result["data"][0].titular;
        } else {
          console.log("error");
        }
      });
  }
}
