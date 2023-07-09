import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { MatDialog } from "@angular/material/dialog";

import { ModalRegistrarAdminComponent } from '../../../shared/components/modal-registrar-admin/modal-registrar-admin.component';
import { ModalEditarAdminComponent } from '../../../shared/components/modal-editar-admin/modal-editar-admin.component';

import { environment } from './../../../../environments/environment';

interface AdminData {
  tipo: number;
  nombres: string;
  correo: string;
  pass: string;
  estado: boolean;
}

@Component({
  selector: "app-lista-admin",
  templateUrl: "./lista-admin.component.html",
  styleUrls: ["./lista-admin.component.scss"],
})
export class ListaAdminComponent implements OnInit {
  token: string;
  data: AdminData[] = [];
  datos: AdminData[];
  userName: string;

  @Input() valorSpinner = "";
  @Input() spinner: { descripcion: string; id: string }[] = [
    { descripcion: "Seleccione", id: "" },
    { descripcion: "Nombre", id: "nombres" },
    { descripcion: "Correo", id: "correo" },
  ];
  @Input() searchTxt = "";
  @Input() tipo = 0;
  @Input() nombres = "";
  @Input() correo = "";
  @Input() pass = "";
  @Input() estado = false;

  constructor(
    private http: HttpClient,
    private spinnerService: NgxSpinnerService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.userName = currentUser?.nombres || "";
    this.token = currentUser?.token || "";
    this.getData(this.token);
  }

  selectSpinner(value: string): void {
    this.valorSpinner = value;
  }

  filterList(): void {
    this.data = this.datos.filter((element) => {
      const varia = element[this.valorSpinner]?.toLowerCase() || "";
      return varia.includes(this.searchTxt.toLowerCase());
    });
  }

  getData(token: string): void {
    this.spinnerService.show();
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "http://localhost:4200/*",
    };

    this.http.post(`${environment.url_api}/empresa/listarAdmin`, { token }, { headers }).subscribe(
      (result: any) => {
        if (result.success) {
          this.data = result.data.map(lista => ({ ...lista })) as AdminData[];
          this.datos = this.data;
        } else {
          console.log("Error al traer los productos en lista");
        }
        this.spinnerService.hide();
      },
      (error) => {
        console.error("Error:", error);
        this.spinnerService.hide();
      }
    );
  }

  getTipo(tipo: number): string {
    switch (tipo) {
      case 1:
        return "Cliente";
      case 2:
        return "Administrador";
      case 3:
        return "Motorizado";
      case 4:
        return "Almacén";
      case 5:
        return "Coordinación";
      default:
        return "";
    }
  }

  registrarAdmin(): void {
    const validate = 0;
    const token = this.token;
    const modalRef = this.dialog.open(ModalRegistrarAdminComponent, {
      data: {
        token,
      },
      minWidth: "400px",
      maxWidth: "800px",
    });

    modalRef.afterClosed().subscribe((result) => {
      console.log("cerrando modal");

      if (result) {
        this.getData(this.token);
      } else {
        console.log("Error al actualizar o cancelaste el modal");
      }
    });
  }

  editarAdmin(admin: any): void {
    console.log('editando admin...', admin);
    const token = this.token;
    
    const modalRef = this.dialog.open(ModalEditarAdminComponent, {
      data: {
        token,
        admin
      },
      minWidth: "400px",
      maxWidth: "800px",
    });

    modalRef.afterClosed().subscribe((result) => {
      console.log("cerrando modal");

      if (result) {
        this.getData(this.token);
      } else {
        console.log("Error al actualizar o cancelaste el modal");
      }
    });
  }

  getStateClass(estado: number): string {
    const classNames = ["font-weight-600", "estado"];

    switch (estado) {
      case 1:
        classNames.push("green-primary");
        break;
      case 0:
        classNames.push("red");
        break;
    }

    return classNames.join(" ");
  }

  getStateName(estado: number): string {
    switch (estado) {
      case 1:
        return "Activo";
      case 0:
        return "Inactivo";
      default:
        return "";
    }
  }

  cambiarEstadoUsuario({ id_persona, activo }) {
    const data = {
      token: this.token,
      id_persona: id_persona,
      activo: activo
    };

    this.http.post(`${environment.url_api}/empresa/cambiarEstadoUsuario`,
      data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "POST",
      },
    }).subscribe((result: any) => {
      result.success
        ? this.getData(this.token)
        : console.log("Error al cambiar de estado");
    });
  }
}