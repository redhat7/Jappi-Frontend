import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { NgxSpinnerService } from "ngx-spinner";

import { FormService } from "../../../utils/services/form/form.service";
import { Distrito } from "../../../utils/models/distritos.model";
import { ModalEnviosComponent } from "../../../shared/components/modal-envios/modal-envios.component";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-envios",
  templateUrl: "./envios.component.html",
  styleUrls: ["./envios.component.scss"],
})
export class EnviosComponent implements OnInit {
  public validar: boolean = false;
  token: string;
  data: any[];
  validatorrecojo:number; 
  validatorentrega:number; 
  dataFilter: any[];
  currentDate: string;
  distritos: Distrito[];
  estadoEntrega: any[];
  estadoEntregaModal: any[];
  @Input() searchOption: string;
  @Input() searchInput: string = "";
  @Input() searchOptions = [
    { descripcion: "--- Elige un campo ---", id: "" },
    { descripcion: "Nombre de la empresa", id: "vendedor" },
    { descripcion: "Descripcion del producto", id: "descripcion" },
    { descripcion: "Telefono del comprador", id: "telefono" },
    { descripcion: "Nombre del comprador", id: "comprador" },
    { descripcion: "Distrito del comprador", id: "distritoName" },
  ];

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private formService: FormService,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    const currentDate = new Date().toLocaleDateString();
    this.currentDate = this.dateToString(currentDate);
    this.distritos = this.formService.getDistritos();
    this.estadoEntrega = this.formService.getEstadoEntrega();
    this.estadoEntregaModal = this.formService.getEstadoEntregaModalAdmin();
    this.token = currentUser.token;
   

    if(localStorage.getItem("correo-chido") === "japi@gmail.com"){
      this.validar = true;
      console.log(this.validar);
      
    }
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

  searchOptionsEvent({ target: { value } }) {
    this.searchOption = value;
  }

  filterList() {
    this.dataFilter = this.data.filter((envio: any) =>
      envio[this.searchOption]
        .toLowerCase()
        .includes(this.searchInput.toLowerCase())
    );
   
  }
  validator(token:string) {
    const data = JSON.stringify({
      token
    });
   
    this.http
      .post(
        `${environment.url_api}/empresa/enviosDia/validator`,
        // "https://backend-japi.herokuapp.com/empresa/enviosDia/validator",
         data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST",
          
        },
      })
      .subscribe((result: any) => {
        this.validatorentrega=result.data[0].entregas;
        this.validatorrecojo=result.data[0].recojos;
      console.log( this.validatorentrega);
      console.log( this.validatorrecojo);
      
        
      });
  }
  getData(token: string) {
   
    
    this.spinnerService.show();
    const data = JSON.stringify({
      token,
      fechaActual: this.currentDate,
    });


    this.http
      .post(
        `${environment.url_api}/empresa/enviosDia`,
        // "https://backend-japi.herokuapp.com/empresa/enviosDia", 
      data, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "http://localhost:4200/*",
        },
      })
      .subscribe((result: any) => {
        console.log(result);
        if (result.success) {
          const dataFormat = result.data.map((distritoData) => {
            let { name } = this.distritos.find(
              (distrito) => distritoData.distrito === distrito.value
            );
            let { estado } = this.estadoEntrega.find(
              (estado) => estado.value === distritoData.estado
            );
            return {
              ...distritoData,
              nombre_estado: estado,
              distritoName: name,
            };
          });
         
          this.data = dataFormat;
          this.dataFilter = [...this.data];
          
        } else {
          console.log("Error al traer datos de envíos del día");
        }
        this.spinnerService.hide();
      });
  }

  makeHttpRequest(action: string, bodyRequest) {
    this.spinnerService.show();
    
    const URL = `${environment.url_api}/empresa/Generar${action}`;
    this.http
      .post(URL, bodyRequest, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST",
        },
      })
      .subscribe((result: any) => {
        console.log(result);
        this.spinnerService.hide();
      });
  }
  limpiarRecojos(){
    let action = "LimpiezaRecojos";
    const bodyRequest = {
      token: this.token,
      fecha: this.currentDate,
      // valrecojo:1,
    };
    this.makeHttpRequest(action, bodyRequest);
  }
  limpiarEntregas(){
    let action = "LimpiezaEntregas";
    const bodyRequest = {
      token: this.token,
      fecha: this.currentDate,
      // valrecojo:1,
    };
    this.makeHttpRequest(action, bodyRequest);
  }

  generarRecojo() {
    let action = "Recojos";
    const bodyRequest = {
      token: this.token,
      fecha: this.currentDate,
      // valrecojo:1,
    };
    this.makeHttpRequest(action, bodyRequest);
  }

  generarEnvio() {
    let action = "entregas";
    const bodyRequest = {
      token: this.token,
      fecha: this.currentDate,
      // valentrega:1
    };
    this.makeHttpRequest(action, bodyRequest);
  }

  clickModalObs({ id_envio }) {
    const param = {
      idEnvio: id_envio,
      token: this.token,
      estados: this.estadoEntregaModal,
    };
    this.openModalObs(param);
  }

  openModalObs({ idEnvio, token, estados }) {
    const modalRef = this.dialog.open(ModalEnviosComponent, {
      data: {
        idEnvio,
        token,
        estados,
      },
      minWidth: "400px",
    });
    modalRef.afterClosed().subscribe((result) => {
      console.log("cerrando modal", result);
      result
        ? this.getData(this.token)
        : console.log("Error al actualizar o cancelaste el modal");
    });
  }
}
