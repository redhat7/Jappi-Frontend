import { Component, OnInit,Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { NgxSpinnerService } from "ngx-spinner";

import { ModalEntregaMotoComponent } from "../../../shared/components/modal-entrega-moto/modal-entrega-moto.component";
import { FormService } from "../../../utils/services/form/form.service";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-entregas",
  templateUrl: "./entregas.component.html",
  styleUrls: ["./entregas.component.scss"],
})
export class EntregasComponent implements OnInit {
  token: string;
  data: [] = [];
  datos: [];
  estadoEntrega: any[];
  estadoEntregaModal: any[];
  fecha: string;
  @Input() valorSpinner: string;
  @Input() spinner = [
    { descripcion: "--- Elige un campo ---", id: "" },
    { descripcion: "Nombre del Vendedor", id: "vendedor" },
    { descripcion: "Nombre del Comprador", id: "comprador" },
    { descripcion: "Distrito", id: "nombre_distrito" },
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
    this.estadoEntrega = this.formService.getEstadoEntrega();
    this.estadoEntregaModal = this.formService.getEstadoEntregaModal();
    this.getData(this.token);
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

    this.spinnerService.show();
    this.http
      .post(
        `${environment.url_api}/motorizado/MisEntregas`,
        // "https://backend-japi.herokuapp.com/motorizado/MisEntregas",
        { token: token, fecha: this.fecha },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
          },
        }
      )
      .subscribe(({ success, data }: any) => {
        const dataFormat = data.map((entrega) => {
          let { estado } = this.estadoEntrega.find(
            (estado) => estado.value === entrega.estado
          );
          let urlCheck = false;
          
         
          
          
          if (Number(entrega.latitud) != 0 && Number(entrega.longitud) != 0) {
            urlCheck = true;
            let latitud = entrega.latitud;
            let longitud = entrega.longitud;
            let urlLocation = `https://www.google.com/maps?q=${latitud},${longitud}&z=17&hl=es`;
            return {
              ...entrega,
              nombre_estado: estado,
            
              url: urlLocation,
              check: urlCheck,
            };
          }
          return {
            ...entrega,
            nombre_estado: estado,
            check: urlCheck,
          };
        });
        if (success) {
          this.data = dataFormat;
          this.datos=dataFormat;
        }else{
          console.log("Error al traer las entregas del día");
          
        }
        this.spinnerService.hide();
      });
  }
  
  pendiente({id_envio}) {
    const data = {
      token: this.token,
      id_envio: id_envio,
      estado:7,
    };
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
        
          this.getData(this.token);
        } else {
         console.log("Error al actualizar");
         
        }
      });
  }
  Enruta({id_envio}) {
    const data = {
      token: this.token,
      id_envio: id_envio,
      estado:2,
    };
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
        
          this.getData(this.token);
        } else {
         console.log("Error al actualizar");
         
        }
      });
  }
  Entregado({id_envio}) {
    const data = {
      token: this.token,
      id_envio: id_envio,
      estado:3,
    };
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
        
          this.getData(this.token);
        } else {
         console.log("Error al actualizar");
         
        }
      });
  }

  clickModalEdit({ id_envio }) {
    const param = {
      token: this.token,
      idEnvio: id_envio,
      estados: this.estadoEntregaModal,
      title: "Actualizar estado",
    };
    this.openModalEdit(param);
  }

  openModalEdit({ token, idEnvio, estados, title }) {
    const modalRef = this.dialog.open(ModalEntregaMotoComponent, {
      data: {
        token,
        idEnvio,
        estados,
        title,
      },
      minWidth: "400px",
    });
    modalRef.afterClosed().subscribe((result) => {
      result
        ? this.getData(this.token)
        : console.log("Error al actualizar el estado de las entregas");
    });
  }
}
