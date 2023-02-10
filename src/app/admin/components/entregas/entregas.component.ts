import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { NgxSpinnerService } from "ngx-spinner";

// Modal Component
import { ModalEntregaEditComponent } from "../../../shared/components/modal-entrega-edit/modal-entrega-edit.component";
import { ModalEntregaComponent } from "../../../shared/components/modal-entrega/modal-entrega.component";

import { FormService } from "../../../utils/services/form/form.service";
import { Distrito } from "../../../utils/models/distritos.model";
import { ModalDeleteEnvioComponent } from "../../../shared/components/modal-delete-envio/modal-delete-envio.component";
import { environment } from './../../../../environments/environment';

interface DataHttp {
  cantidad: number;
  descripcion: string;
  direccion: string;
  distrito: number;
  estado: number;
  id_empresa: number;
  id_moto?: number;
  id_envio: number;
  latitud: string;
  longitud: string;
  motorizado?: string;
  nombre_distrito?: string;
  nombre_estado?: string;
  nombre_empresa: string;
  telefono: string;
  url?: string;
  metodo_pago: string;
  modo_entrega: string;
  monto_total: number;
  observacion: string;
  comprador: string;
  vendedor: string;
}

interface ResultHttp {
  data: DataHttp[];
  message: string;
  success: boolean;
}

@Component({
  selector: "app-entregas",
  templateUrl: "./entregas.component.html",
  styleUrls: ["./entregas.component.scss"],
})
export class EntregasComponent implements OnInit {
  data: DataHttp[] = [];
  token: string;
  currentDate: string;
  nextDate: string;
  distritos: Distrito[];
  zonas: any[];
  estadoEntrega: any[];

  dataFilter: DataHttp[] = [];
  searchInput: string = "";
  optionValue: string;
  almacenEntregas = [
    { descripcion: "--- Elige un campo ---", id: "" },
    { descripcion: "Vendedor", id: "vendedor" },
    { descripcion: "Distrito", id: "nombre_distrito" },
    { descripcion: "Motorizado", id: "motorizado" },
    { descripcion: "Estado", id: "nombre_estado" },
    { descripcion: "Comprador", id: "comprador" },
    { descripcion: "Fecha", id: "fecha_entrega" },
  ];

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private formService: FormService,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    const { token } = JSON.parse(localStorage.getItem("auth"));
    this.token = token;
    const currentDate = new Date().toLocaleDateString();

    this.currentDate = this.dateToString(currentDate);
    this.nextDate = this.getNextDate();

    this.distritos = this.formService.getDistritos();
    this.zonas = this.formService.getZonas();
    this.estadoEntrega = this.formService.getEstadoEntrega();

    const param = {
      token: this.token,
      fecha: this.currentDate,
      fechaSiguiente: this.nextDate,
    };
    this.getData(param);
    console.log(this.currentDate);
    console.log(this.nextDate);
  }

  selectOptions(option: string) {
    this.optionValue = option;
  }

  filterList() {
    // console.log(this.searchInput);

    this.dataFilter = [];
    this.data.forEach((productAlmacen) => {
      let filter = productAlmacen[this.optionValue];
      if (filter != null) {
        filter
          .toLowerCase()
          .includes(this.searchInput.toString().toLowerCase()) &&
          this.dataFilter.push(productAlmacen);
      } else {
        console.log("error");
      }
      // console.log(this.optionValue);
      // console.log(productAlmacen[this.optionValue]);
    });
  }

  getNextDate() {
    const today = new Date();
    const nextDate = new Date(today);
    nextDate.setDate(nextDate.getDate() + 1);

    return this.dateToString(nextDate.toLocaleDateString());
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

  clickModalEdit({ id_envio, estado }: DataHttp) {
    const param = {
      estado,
      token: this.token,
      idEnvio: id_envio,
    };
    this.openModalEdit(param);
  }

  clickModalEditEntrega(envio: any) {
    const modoEntrega = this.formService.getModoEntrega();
    const metodoPago = this.formService.getMetodoPago();
    const param = {
      token: this.token,
      idEnvio: envio.id_envio,
      distritos: this.distritos,
      envio,
      modoEntrega,
      metodoPago,
      zonas: this.zonas,
    };
    this.openModalEditEntrega(param);
  }

  openModalEditEntrega({
    token,
    idEnvio,
    envio,
    modoEntrega,
    metodoPago,
    distritos,
    zonas,
  }) {
    const modalRef = this.dialog.open(ModalEntregaEditComponent, {
      data: {
        token,
        idEnvio,
        envio,
        modoEntrega,
        metodoPago,
        distritos,
        zonas,
      },
      minWidth: "400px",
      maxWidth: "800px",
    });
    modalRef.afterClosed().subscribe((result) => {
      console.log("cerrando modal", result);
      const param = {
        token: this.token,
        fecha: this.currentDate,
        fechaSiguiente: this.nextDate,
      };
      result
        ? this.getData(param)
        : console.log("Error al actualizar o cancelaste el modal");
    });
  }

  openModalEdit({ token, idEnvio, estado }) {
    let request = "";
    let title = "";
    estado ? (request = "change") : (request = "generate");
    estado ? (title = "Cambiar de Motorizado") : (title = "Asignar Motorozido");
    let validateMotorizados = 0;
    const modalRef = this.dialog.open(ModalEntregaComponent, {
      data: {
        token,
        idEnvio,
        request,
        title,
        validate: validateMotorizados,
      },
      minWidth: "400px",
    });
    modalRef.afterClosed().subscribe((result) => {
      console.log("cerrando modal", result);
      const param = {
        token: this.token,
        fecha: this.currentDate,
        fechaSiguiente: this.nextDate,
      };
      result ? this.getData(param) : console.log("cancelaste el modal");
    });
  }
  openModalDelete(envio:any){
    console.log(envio);
    const param = {
      envio,
      token: this.token,
    };
    this.deleteEntrega(param);
  }
  deleteEntrega({ envio,token}) {
    const modalRef = this.dialog.open(ModalDeleteEnvioComponent, {

      data: {
        id_envio:envio.id_envio,
        token,
      },
      minWidth: "400px",
      maxWidth: "800px",
    });
    modalRef.afterClosed().subscribe((result) => {
      const param = {
        token: this.token,
        fecha: this.currentDate,
        fechaSiguiente: this.nextDate,
      };
      result
        ? this.getData(param)
        : console.log("Error al actualizar o cancelaste el modal");
     
    });
  }



  getData(param) {
    this.spinnerService.show();
    this.http
      .post(
        `${environment.url_api}/empresa/ListarEntregas`,
        // "https://backend-japi.herokuapp.com/empresa/ListarEntregas",
        param,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
          },
        }
      )
      .subscribe(({ data, success }: ResultHttp) => {
        const dataFormat = data.map((entrega) => {
          let { name }: Distrito = this.distritos.find(
            (distrito) => entrega.distrito === distrito.value
          );
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
              nombre_distrito: name,
              url: urlLocation,
              check: urlCheck,
            };
          }
          return {
            ...entrega,
            nombre_estado: estado,
            nombre_distrito: name,
            check: urlCheck,
          };
        });
        
        if (success) {
          this.data = dataFormat;
          this.dataFilter = dataFormat;
          console.log(data);
          
        } else {
          console.log("Error");
        }
        this.spinnerService.hide();
      });
  }
}
