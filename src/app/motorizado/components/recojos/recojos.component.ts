import { Component, OnInit,Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { NgxSpinnerService } from "ngx-spinner";

import { ModalRecojoMotoComponent } from "../../../shared/components/modal-recojo-moto/modal-recojo-moto.component";
import { FormService } from "../../../utils/services/form/form.service";
import { Distrito } from "../../../utils/models/distritos.model";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-recojos",
  templateUrl: "./recojos.component.html",
  styleUrls: ["./recojos.component.scss"],
})
export class RecojosComponent implements OnInit {
  fecha: string;
  token: string;
  data: any[] = [];
  datos:any[]=[];
  estadoRecojo: any[];
  estadoRecojoModal: any[];
  distritos: Distrito[];
  arr: any[] = [];

  @Input() valorSpinner: string;
  @Input() spinner = [
    { descripcion: "--- Elige un campo ---", id: "" },
    { descripcion: "Empresa", id: "nombre_empresa" },
    { descripcion: "Dueño de Empresa", id: "cliente" },
    { descripcion: "Distrito", id: "nombre_distrito" },
    { descripcion: "Estado", id: "nombre_estado" },
    { descripcion: "Telefono", id: "telefono" },
  ];
  @Input() searchTxt: string;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private formService: FormService,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.token = currentUser.token;
    this.estadoRecojo = this.formService.getEstadoRecojo();
    this.estadoRecojoModal = this.formService.getEstadoRecojoModal();
    this.distritos = this.formService.getDistritos();
    this.getData(this.token);
  }

  dateToString(currentDate: string) {
    let [date, month, year] = currentDate.split("/");
    let trasnformDate = this.trasnformDate(date);
    let trasnforMonth = this.trasnformDate(month);
    return `${trasnformDate}-${trasnforMonth}-${year}`;
  }

  trasnformDate(date: string) {
    return date.length === 1 ? `0${date}` : date;
  }

  getData(token: string) {
    this.fecha = this.dateToString(new Date().toLocaleDateString());
    console.log(this.fecha);
    
    let datos = [];

    this.spinnerService.show();
    this.http
      .post(
        `${environment.url_api}/motorizado/MisRecojos`,
        // "https://backend-japi.herokuapp.com/motorizado/MisRecojos", 
        {
        token: token,fecha:this.fecha,
      })
      .subscribe(({ success, data }: any) => {
       
        const dataFormat = data.map((recojo) => {
          let { estado = "No tiene" } = this.estadoRecojo.find(
            (estado) => estado.value === recojo.estado
          );
          const distrito = this.distritos.find(
            (distrito) => distrito.value == recojo.distrito
          );
          let urlCheck = false;
          
          for (let i = 0; i < data.length; i++) {
            let cont=0;
            let cant;
            
            cant =this.arr.indexOf(data[i].nombre_empresa);
            
            
            
            if (cant<0) {
              this.arr.push(data[i].nombre_empresa);
              
            }
             
             for (let j = 0; j < data.length; j++) {
               
               if (data[i].id_empresa=data[j].id_empresa) {
                 cont++;  

               }
              
             }
             data[i].cont=cont;
            
            
           }
           console.log(this.arr);
           
    
           
          if (Number(recojo.latitud) != 0 && Number(recojo.longitud) != 0) {
            urlCheck = true;
            let latitud = recojo.latitud;
            let longitud = recojo.longitud;
            let urlLocation = `https://www.google.com/maps?q=${latitud},${longitud}&z=17&hl=es`;
            return {
              ...recojo,
              nombre_estado: estado,
              nombre_distrito:  distrito.name,
              url: urlLocation,
              check: urlCheck,
            };
          }
          return {
            ...recojo,
            nombre_estado: estado,
            nombre_distrito:  distrito.name,
            check: urlCheck,
          };
        });
        console.log(dataFormat);
        if (success) {
          this.data = dataFormat;
          this.datos = dataFormat;

        } else {
          console.log("Error");
        }
      

        this.spinnerService.hide();
      });
  }
  selectSpinner(value: string) {
    this.valorSpinner = value;
    console.log(this.valorSpinner);
  }
  filterList() {
    this.data = [];
    for (let element of this.datos) {
      ("use strict");
      let varia: string = element[this.valorSpinner];
      console.log(this.searchTxt);
      console.log(varia);
      
      
      if (varia.toLowerCase().includes(this.searchTxt.toLowerCase())) {
        this.data.push(element);
      }
    }
  }
  caida({id_recojo}) {
    const data = {
      token: this.token,
      id_recojo: id_recojo,
      estado:4,
    };
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
        
          this.getData(this.token);
        } else {
         console.log("Error al actualizar");
         
        }
      });
  }
  Enruta({id_recojo}) {
    const data = {
      token: this.token,
      id_recojo: id_recojo,
      estado:2,
    };
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
        
          this.getData(this.token);
        } else {
         console.log("Error al actualizar");
         
        }
      });
  }
  Entregado({id_recojo}) {
    const data = {
      token: this.token,
      id_recojo: id_recojo,
      estado:3,
    };
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
        
          this.getData(this.token);
        } else {
         console.log("Error al actualizar");
         
        }
      });
  }

  // clickModalEdit({ id_recojo }) {
  //   const param = {
  //     token: this.token,
  //     idRecojo: id_recojo,
  //     estados: this.estadoRecojoModal,
  //     title: "Actualizar estado",
  //   };
  //   this.openModalEdit(param);
  // }

  // openModalEdit({ token, idRecojo, estados, title }) {
  //   const modalRef = this.dialog.open(ModalRecojoMotoComponent, {
  //     data: {
  //       token,
  //       idRecojo,
  //       estados,
  //       title,
  //     },
  //     minWidth: "400px",
  //   });
  //   modalRef.afterClosed().subscribe((result) => {
  //     result ? this.getData(this.token) : console.log("Error al actualizar");
  //   });
  // }
}
