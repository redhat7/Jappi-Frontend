import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Input } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from "@angular/material/dialog";
import {ModalEditAlmacenComponent} from "../../../shared/components/modal-edit-almacen/modal-edit-almacen.component"
import { FormService } from "../../../utils/services/form/form.service";
import { environment } from './../../../../environments/environment';
@Component({
  selector: "app-almacen-japi",
  templateUrl: "./almacen-japi.component.html",
  styleUrls: ["./almacen-japi.component.scss"],
})
export class AlmacenJapiComponent implements OnInit {
  token: string;
  data: [] = [];
  dataFilter: [] = [];
  estadosAlmacen: any[];

  optionValue: string;
  almacenOption = [
    { descripcion: "--- Elige un campo ---", id: "" },
    { descripcion: "Fecha", id: "fecha" },
    { descripcion: "Nombre de la empresa", id: "nombre" },
    { descripcion: "Descripcion del producto", id: "descripcion" },
    { descripcion: "Estado", id: "nombre_estado" },
  ];

  @Input() searchInput = "";

  constructor(
    private http: HttpClient,
    private spinnerService: NgxSpinnerService,
    private formService: FormService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.token = currentUser.token;
    this.getData(this.token);
    this.estadosAlmacen = this.formService.getEstadoAlmacen();
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

  selectOptions(option: string) {
    this.optionValue = option;
  }

  filterList() {
    this.data = [];
    this.dataFilter.forEach((productAlmacen) => {
      let filter: string = productAlmacen[this.optionValue];
      filter.toLowerCase().includes(this.searchInput.toLowerCase()) &&
        this.data.push(productAlmacen);
    });
  }

  getData(token: string) {
    this.spinnerService.show();
    this.http
      .post(
        `${environment.url_api}/empresa/AlmacenJapi`,
        // "https://backend-japi.herokuapp.com/empresa/AlmacenJapi",
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
          const dataFormat = result.data.map((almacen) => {
            let { estado } = this.estadosAlmacen.find(
              (estado) => estado.value == almacen.estado
            );
            let dateFormat = new Date(almacen.fecha).toLocaleDateString();
            let almacenDate = this.dateToString(dateFormat);
            return {
              ...almacen,
              fecha: almacenDate,
              nombre_estado: estado,
            };
          });
          this.data = dataFormat;
          this.dataFilter = dataFormat;
          console.log(this.data);
        } else {
          console.log("Error al traer los productos en almacen");
        }
        this.spinnerService.hide();
      });
  }
  deleteAlmacen({ id_entradaAlmacen }) {
    const data = {
      token: this.token,
      id: id_entradaAlmacen,
    };
    this.http
      .post(
        `${environment.url_api}/empresa/EliminardeAlmacenJapi`,
        // "https://backend-japi.herokuapp.com/empresa/EliminardeAlmacenJapi",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
          },
        }
      )
      .subscribe((result: any) => {
        result.success
          ? this.getData(this.token)
          : console.log("Error al eliminar");
      });
  }
  editAlmacen({ cantidad,id_entradaAlmacen }) {
    const modalRef = this.dialog.open(ModalEditAlmacenComponent, {
      data: {
        cantidad,
        id_entradaAlmacen,
        token:this.token,
      },
      minWidth: "400px",
      maxWidth: "800px",
    });
    modalRef.afterClosed().subscribe((result) => {
      result
        ? this.getData(this.token)
        : console.log("cancelaste el modal o hubo un error");
    });
  }
  
}
