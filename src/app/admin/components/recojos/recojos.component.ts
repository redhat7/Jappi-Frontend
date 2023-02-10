import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { NgxSpinnerService } from "ngx-spinner";

import { FormService } from "../../../utils/services/form/form.service";
import { Distrito } from "../../../utils/models/distritos.model";

import { ModalRecojoComponent } from "../../../shared/components/modal-recojo/modal-recojo.component";
import { ModalEstadoRecojoComponent } from "../../../shared/components/modal-estado-recojo/modal-estado-recojo.component";
import { environment } from './../../../../environments/environment';
interface DataHttp {
  cantidad: number;
  cliente: string;
  direccion: string;
  distrito: number;
  estado: number;
  id_empresa: number;
  id_moto?: number;
  id_recojo: number;
  latitud: string;
  longitud: string;
  motorizado?: string;
  nombre_distrito?: string;
  nombre_estado?: string;
  nombre_empresa: string;
  telefono: string;
  url?: string;
}

interface ResultHttp {
  data: any[];
  message?: string;
  success: boolean;
}

@Component({
  selector: "app-recojos",
  templateUrl: "./recojos.component.html",
  styleUrls: ["./recojos.component.scss"],
})
export class RecojosComponent implements OnInit {
  data: DataHttp[] = [];
  token: string;
  distritos: Distrito[];
  estadoRecojo: any[];
  estadoRecojoModal: any[];
  currentDate: string;
  nextDate: string;

  dataFilter: DataHttp[] = [];
  searchInput: string = "";
  optionValue: string;
  almacenRecojos = [
    { descripcion: "--- Elige un campo ---", id: "" },
    { descripcion: "Vendedor", id: "nombre_empresa" },
    { descripcion: "Distrito", id: "nombre_distrito" },
    { descripcion: "Motorizado", id: "motorizado" },
    { descripcion: "Estado", id: "nombre_estado" },
  ];

  constructor(
    private http: HttpClient,
    private formService: FormService,
    private spinnerService: NgxSpinnerService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const { token } = JSON.parse(localStorage.getItem("auth"));
    this.estadoRecojoModal = this.formService.getEstadoRecojo();
    this.token = token;

    const currentDate = new Date().toLocaleDateString();
    this.currentDate = this.dateToString(currentDate);
    this.nextDate = this.getNextDate();

    this.distritos = this.formService.getDistritos();
    this.estadoRecojo = this.formService.getEstadoRecojo();
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
    });
  }

  getNextDate() {
    const today = new Date();
    const nextDate = new Date(today);
    nextDate.setDate(nextDate.getDate() + 1);
    console.log(nextDate);

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

  getData(param) {
    this.spinnerService.show();
    this.http
      .post(
        `${environment.url_api}/empresa/ListarRecojos`,
        // "https://backend-japi.herokuapp.com/empresa/ListarRecojos",
         param, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST",
        },
      })
      .subscribe((result: ResultHttp) => {
        console.log(result);
        if (result.success) {
          const dataFormat = result.data.map((recojo) => {
            let { name }: Distrito = this.distritos.find(
              (distrito) => recojo.distrito === distrito.value
            );
            let { estado } = this.estadoRecojo.find(
              (estado) => estado.value === recojo.estado
            );
            let urlCheck = false;
            if (Number(recojo.latitud) != 0 && Number(recojo.longitud) != 0) {
              urlCheck = true;
              let latitud = recojo.latitud;
              let longitud = recojo.longitud;
              let urlLocation = `https://www.google.com/maps?q=${latitud},${longitud}&z=17&hl=es`;
              return {
                ...recojo,
                nombre_estado: estado,
                nombre_distrito: name,
                url: urlLocation,
                check: urlCheck,
              };
            }
            return {
              ...recojo,
              nombre_estado: estado,
              nombre_distrito: name,
              check: urlCheck,
            };
          });
          this.data = dataFormat;
          this.dataFilter = dataFormat;
          console.log(dataFormat);
        } else {
          console.log("Error al traer la lista de recojos del día");
        }
        this.spinnerService.hide();
      });
  }

  clickModalEdit({ id_recojo, estado }) {
    const param = {
      estado,
      token: this.token,
      idRecojo: id_recojo,
    };
    this.openModalEdit(param);
  }
 
  recibido({id_recojo}) {
    const data = {
      token: this.token,
      id_recojo: id_recojo,
      estado:5,
    };
    console.log(data);
    this.http
      .post(
        `${environment.url_api}/empresa/updateRecojoRecibido`,
        // "https://backend-japi.herokuapp.com/empresa/updateRecojoRecibido",
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
          const param = {
            token: this.token,
            fecha: this.currentDate,
            fechaSiguiente: this.nextDate,
          };
          this.getData(param);
        } else {
         console.log("Error al actualizar");
         
        }
      });
  }
  Eliminar({id_recojo}){
    const data = {
      token: this.token,
      id_recojo: id_recojo
    };
    console.log(data);
    this.http
      .post(
        `${environment.url_api}/empresa/eliminarRecojo`,
        // "https://backend-japi.herokuapp.com/empresa/eliminarRecojo",
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
          const param = {
            token: this.token,
            fecha: this.currentDate,
            fechaSiguiente: this.nextDate,
          };
          this.getData(param);
        } else {
         console.log("Error al actualizar");
         
        }
      });
  }
  clickModalObs({ id_recojo }) {
    const param = {
      idRecojo: id_recojo,
      token: this.token,
      estados: this.estadoRecojoModal,
    };
    this.openModalObs(param);
  }

  openModalObs({ idRecojo, token, estados }) {
    const modalRef = this.dialog.open(ModalEstadoRecojoComponent, {
      data: {
        idRecojo,
        token,
        estados,
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
      result ? this.getData(param)
        : console.log("Error al actualizar o cancelaste el modal");
    });
  }

  openModalEdit({ token, idRecojo, estado }) {
    let request = "";
    let title = "";
    estado ? (request = "change") : (request = "generate");
    estado ? (title = "Cambiar de Motorizado") : (title = "Asignar Motorozido");
    let validateMotorizados = 0;
    const modalRef = this.dialog.open(ModalRecojoComponent, {
      data: {
        token,
        idRecojo,
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
}
