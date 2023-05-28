import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";

import { FormService } from "../../../utils/services/form/form.service";
import { Distrito } from "../../../utils/models/distritos.model";
import { MatDialog } from "@angular/material/dialog";

import { ModalEnviosFechaComponent } from "../../../shared/components/modal-envios-fecha/modal-envios-fecha.component";
import { ModalDeleteEnvioComponent } from "../../../shared/components/modal-delete-envio/modal-delete-envio.component";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-envios-fechas",
  templateUrl: "./envios-fechas.component.html",
  styleUrls: ["./envios-fechas.component.scss"],
})
export class EnviosFechasComponent implements OnInit {
  token: string;
  currentDate: any;

  data: any[] = [];
  datos: [];
  id: any;
  distritos: Distrito[];
  estadoEntrega: any[];
  zonas: any[];

  @ViewChild('dateStartInput', { static: true }) dateStartInput: ElementRef<HTMLInputElement>;
  @ViewChild('dateEndInput', { static: true }) dateEndInput: ElementRef<HTMLInputElement>;
  @Output() searchClick: EventEmitter<void> = new EventEmitter<void>();

  @Input() valorSpinner: string;
  @Input() searchTxt: string;

  constructor(
    private http: HttpClient,
    private formService: FormService,
    private spinnerService: NgxSpinnerService,
    public dialog: MatDialog
  ) {
    this.id = document.getElementById("modal1");
  }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.token = currentUser.token;
    this.currentDate = this.getCurrentDate();
    this.distritos = this.formService.getDistritos();
    this.zonas = this.formService.getZonas();
    this.estadoEntrega = this.formService.getEstadoEntrega();
    this.getDataByDate(this.token, this.currentDate, this.currentDate);
  }

  getCurrentDate() {
    const currentDate = this.formatApíDate('date', new Date());
    return currentDate;
  }

  formatApíDate(type: 'date' | 'string', value: any): string {
    let day: string;
    let month: string;
    let year: string;

    if (type === 'date') {
      const dateValue = new Date(value);
      day = ('0' + dateValue.getDate()).slice(-2);
      month = ('0' + (dateValue.getMonth() + 1)).slice(-2);
      year = String(dateValue.getFullYear());
    }

    if (type === 'string') {
      const [yearStr, monthStr, dayStr] = value.split('-');
      day = dayStr;
      month = monthStr;
      year = yearStr;
    }

    return `${day}-${month}-${year}`;
  }

  selectSpinner(value: string) { this.valorSpinner = value; }

  filterList() {
    if (this.valorSpinner && this.valorSpinner !== '') {
      this.data = this.datos.filter((element: any) => {
        const varia: string = element[this.valorSpinner];
        return varia && varia.toLowerCase().includes(this.searchTxt.toLowerCase());
      });
    } else {
      this.valorSpinner = '';
      return false;
    }
  }

  searchByDate() {
    this.searchTxt = undefined;
    const { value: inputStart } = this.dateStartInput.nativeElement;
    const { value: inputEnd } = this.dateEndInput.nativeElement;

    const currentDate = this.getCurrentDate();
    const formattedStart = inputStart ? this.formatApíDate('string', inputStart) : currentDate;
    const formattedEnd = inputEnd ? this.formatApíDate('string', inputEnd) : currentDate;

    this.getDataByDate(this.token, formattedStart, formattedEnd);
  }

  getDataByDate(token: string, dateStart: string, dateEnd: string) {
    const urlApi = `${environment.url_api}/empresa/enviosFechas`;

    this.spinnerService.show();

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "*",
    };

    const requestData = {
      token,
      fecha1: dateStart,
      fecha2: dateEnd
    };

    this.http.post(urlApi, requestData, { headers }).subscribe(
      (result: any) => {
        if (result.success) {
          const dataFormat = result.data.map((distritoData) => {
            const { name } = this.distritos.find(
              (distrito) => distritoData.distrito_entrega === distrito.value
            );

            let fondo: number;
            const { estado } = this.estadoEntrega.find(
              (estado) => estado.value === distritoData.estado
            );

            if (estado === 'entregado') {
              fondo = 1;
            } else if (estado === 'caída') {
              fondo = 2;
            }

            return {
              ...distritoData,
              nombre_estado: estado,
              distritoName: name,
            };  
          });

          this.data = dataFormat;
          this.datos = dataFormat;
        } else {
          console.log("error");
        }
        this.spinnerService.hide();
      }, (error: any) => {
        console.log(error);
        this.spinnerService.hide();
      }
    );
  }

  // editarEnvio(envio: any) {
  //   console.log(envio);
  //   const param = {
  //     envio,
  //     token: this.token,
  //     distritos: this.distritos,
  //     zonas: this.zonas,
  //   };
  //   this.ModalEditEnvios(param);
  // }

  // ModalEditEnvios({ envio, token, distritos, zonas }) {
  //   const validate = 0;
  //   const modalRef = this.dialog.open(ModalEnviosFechaComponent, {
  //     data: {
  //       envio,
  //       token,
  //       validate,
  //       distritos,
  //       zonas,
  //     },
  //     minWidth: "400px",
  //     maxWidth: "800px",
  //   });
  //   modalRef.afterClosed().subscribe((result) => {
  //     console.log("cerrando modal");
  //     console.log(result);
  //     const currentDate = this.convertNewDateToString();
  //     result
  //       ? this.getDataByDate(this.token, currentDate, currentDate)
  //       : console.log("Error al actualizar o cancelaste el modal");
  //   });
  // }
  // openModalDelete(envio: any) {
  //   console.log(envio);
  //   const param = {
  //     id_envio: envio.id_envio,
  //     token: this.token,
  //   };
  //   this.deleteEntrega(param);
  // }
  // deleteEntrega({ id_envio, token }) {
  //   const modalRef = this.dialog.open(ModalDeleteEnvioComponent, {
  //     data: {
  //       id_envio,
  //       token,
  //     },
  //     minWidth: "400px",
  //     maxWidth: "800px",
  //   });
  //   modalRef.afterClosed().subscribe((result) => {
  //     console.log("cerrando modal");
  //     console.log(result);
  //     const currentDate = this.convertNewDateToString();
  //     result
  //       ? this.getDataByDate(this.token, currentDate, currentDate)
  //       : console.log("Error al actualizar o cancelaste el modal");
  //   });
  // }
}
