import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { NgxSpinnerService } from "ngx-spinner";

import { FormService } from "../../../utils/services/form/form.service";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-historial",
  templateUrl: "./historial.component.html",
  styleUrls: ["./historial.component.scss"],
})
export class HistorialComponent implements OnInit {
  token: string;
  data: any[] = [];
  dataFilter: any[] = [];
  estadoEntrega: any[];
  estadoEntregaModal: any[];

  @Input() dateFilter: string;
  @Input() dateFilter2: string;

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

  searchByDate() {
    if (this.dateFilter) {
      const [startDate] = this.validateNavigator(this.dateFilter);
      const [endDate] = this.validateNavigator(this.dateFilter2);
      console.log(startDate);
      console.log(endDate);

      let fechaInicial = new Date(
        `${startDate.split("-")[1]}-${startDate.split("-")[0]}-${
          startDate.split("-")[2]
        }`
      );

      let fechaFinal = new Date(
        `${endDate.split("-")[1]}-${endDate.split("-")[0]}-${
          endDate.split("-")[2]
        }`
      );

      this.filterListByDate(fechaInicial, fechaFinal);
    }
  }

  filterListByDate(date: Date, endDate: Date) {
    this.data = [];
    this.dataFilter.forEach((envio: any) => {
      let fechaEntrega = envio.fecha_entrega;

      let fechaProducto = new Date(
        `${fechaEntrega.split("-")[1]}-${fechaEntrega.split("-")[0]}-${
          fechaEntrega.split("-")[2]
        }`
      );

      console.log(fechaProducto);

      if (fechaProducto >= date && fechaProducto <= endDate) {
        this.data.push(envio);
      }
    });
  }

  validateNavigator(dateStart: string, dateEnd: string = "") {
    const navigatorVendor = window.navigator.vendor;
    let start = "";
    let end = "";
    if (dateEnd) {
      if (navigatorVendor.toLowerCase().includes("apple")) {
        start = this.convertDateToString(dateStart, "apple");
        end = this.convertDateToString(dateEnd, "apple");
      } else {
        start = this.convertDateToString(dateStart, "google");
        end = this.convertDateToString(dateEnd, "google");
      }
    } else {
      if (navigatorVendor.toLowerCase().includes("apple")) {
        start = this.convertDateToString(dateStart, "apple");
      } else {
        start = this.convertDateToString(dateStart, "google");
      }
    }
    return [start, end];
  }

  convertDateToString(date: string, sys: string) {
    if (sys.toLowerCase() === "apple") {
      return date.replace(/[/]/g, "-");
    } else {
      return `${date.split("-")[2]}-${date.split("-")[1]}-${
        date.split("-")[0]
      }`;
    }
  }

  getData(token: string) {
    this.spinnerService.show();
    this.http
      .post(
        `${environment.url_api}/motorizado/historialEntregas`,
        // "https://backend-japi.herokuapp.com/motorizado/historialEntregas",
        { token: token },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
          },
        }
      )
      .subscribe(({ success, data }: any) => {
        if (success) {
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
          this.data = dataFormat;
          this.dataFilter = dataFormat;
          console.log(this.dataFilter);
        } else {
          console.log("Error al traer el historial del motorizado");
        }
        this.spinnerService.hide();
      });
  }
}
