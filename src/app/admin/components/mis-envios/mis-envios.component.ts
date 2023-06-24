import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { NgxSpinnerService } from "ngx-spinner";

import { ModalDetailShipmentComponent } from "../../../shared/components/modal-detail-shipment/modal-detail-shipment.component";
import { ModalMisEnviosComponent } from "../../../shared/components/modal-mis-envios/modal-mis-envios.component";

// Interface
import { FormService } from "../../../utils/services/form/form.service";
import { Distrito } from "../../../utils/models/distritos.model";
import { Envios } from "../../../utils/models/envios.model";
import { environment } from './../../../../environments/environment';

import { formatApiDate } from '../../../shared/helpers/helpers';

@Component({
  selector: "app-envios",
  templateUrl: "./mis-envios.component.html",
  styleUrls: ["./mis-envios.component.scss"],
})
export class MisEnviosComponent implements OnInit {
  token: string;
  data: any[] = [];
  dataFilter: any[] = [];
  datos: [];
  envioEdit: Envios;
  distritos: Distrito[];
  estadoEntrega: any[];
  userName: string;
  public precio: number = 0.0;
  zonas: any[];
  @Input() valorSpinner: string;
  @Input() spinner = [
    { descripcion: "Elige un campo", id: "" },
    { descripcion: "Comprador", id: "comprador" },
    { descripcion: "Distrito", id: "distritoName" },
    { descripcion: "Estado", id: "estado" },
    { descripcion: "Motorizado", id: "nombre_motorizado" },
    { descripcion: "Telefono", id: "telefono" },
  ];
  @Input() searchTxt: string;

  @Input() dateFilter: string;
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private formService: FormService,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.token = currentUser.token;
    this.distritos = this.formService.getDistritos();
    this.estadoEntrega = this.formService.getEstadoEntrega();
    this.getData(this.token);
    this.zonas = this.formService.getZonas();
    this.userName = currentUser.nombre_empresa;
  }
  selectSpinner(value: string) {
    this.valorSpinner = value;
  }
  filterList() {
    this.data = [];
    for (let element of this.datos) {
      ("use strict");
      let varia: string = element[this.valorSpinner];
      if (varia.toLowerCase().includes(this.searchTxt.toLowerCase())) {
        this.data.push(element);
      }
    }
    this.calculatePricing();
  }

  searchByDate() {
    if (this.dateFilter) {
      // const [startDate] = this.validateNavigator(this.dateFilter);
      const formatedDateFilter = formatApiDate('string', this.dateFilter);
      this.filterListByDate(formatedDateFilter);
    }

    this.calculatePricing();
  }

  filterListByDate(date: string) {
    this.data = [];
    this.dataFilter.forEach((envio: any) => {
      let fechaEntrega = envio.fecha_entrega;

      if (fechaEntrega.toLowerCase().includes(date.toLowerCase())) {
        this.data.push(envio);
      }
    });
  }

  // validateNavigator(dateStart: string, dateEnd: string = "") {
  //   const navigatorVendor = window.navigator.vendor;
  //   let start = "";
  //   let end = "";
  //   if (dateEnd) {
  //     if (navigatorVendor.toLowerCase().includes("apple")) {
  //       start = this.convertDateToString(dateStart, "apple");
  //       end = this.convertDateToString(dateEnd, "apple");
  //     } else {
  //       start = this.convertDateToString(dateStart, "google");
  //       end = this.convertDateToString(dateEnd, "google");
  //     }
  //   } else {
  //     if (navigatorVendor.toLowerCase().includes("apple")) {
  //       start = this.convertDateToString(dateStart, "apple");
  //     } else {
  //       start = this.convertDateToString(dateStart, "google");
  //     }
  //   }
  //   return [start, end];
  // }

  convertDateToString(date: string, sys: string) {
    if (sys.toLowerCase() === "apple") {
      return date.replace(/[/]/g, "-");
    } else {
      return `${date.split("-")[2]}-${date.split("-")[1]}-${date.split("-")[0]
        }`;
    }
  }
  getData(token: string) {
    this.spinnerService.show();
    this.http
      .post(
        `${environment.url_api}/usuario/misEnvios`,
        // "https://backend-japi.herokuapp.com/usuario/misEnvios",
        { token: token },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "http://localhost:4200/*",
          },
        }
      )
      .subscribe((result: any) => {
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
              estado,
              distritoName: name,
            };
          });
          // console.log(dataFormat.reverse());
          this.data = dataFormat;
          this.dataFilter = dataFormat;
          this.datos = dataFormat;
          this.calculatePricing();
          // console.log(this.dataFilter);
        } else {
          console.error("Error al traer data de mis envios");
        }
        this.spinnerService.hide();
      });
  }

  calculatePricing(): void {
    this.precio = 0;
    for (let index = 0; index < this.data.length; index++) {
      this.precio = this.precio + this.data[index]["monto_total"];
    }
  }

  getStateClass(nombreEstado: string): string {
    let classNames = ['font-weight-600 estado'];

    switch (nombreEstado) {
      case 'Entregado':
        classNames.push('green-primary');
        break;
      case 'Reprogramado':
      case 'Repro. por cobrar':
        classNames.push('yellow');
        break;
      case 'Caída':
      case 'Caída por cobrar':
        classNames.push('red');
        break;
      default:
        break;
    }

    return classNames.join(' ');
  }

  showModalShipmentDetail(envio: any): void {
    this.dialog.open(ModalDetailShipmentComponent,
      {
        panelClass: 'custom-dialog-container',
        data: { envio },
        minWidth: "300px",
        maxWidth: "600px"
      })
  }

  editarEnvio(envio: any) {
    const param = {
      envio,
      token: this.token,
      distritos: this.distritos,
      zonas: this.zonas,
    };

    this.ModalEditEnvios(param);
  }

  ModalEditEnvios({ envio, token, distritos, zonas }) {
    const validate = 0;
    const modalRef = this.dialog.open(ModalMisEnviosComponent, {
      data: {
        envio,
        token,
        validate,
        distritos,
        zonas,
      },
      minWidth: "400px",
      maxWidth: "800px",
    });

    modalRef.afterClosed().subscribe((result) => {
      console.log("cerrando modal");

      if (result) {
        this.searchByDate();
      } else {
        console.log("Error al actualizar o cancelaste el modal");
      }
    });
  }
}
