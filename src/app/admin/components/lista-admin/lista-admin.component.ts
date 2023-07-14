import { Component, OnInit, Input } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
  roles: any;

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
    const hasRoles = JSON.parse(localStorage.getItem('roles')) || undefined;
    this.userName = currentUser?.nombres || "";
    this.token = currentUser?.token || "";
    this.getData(this.token);

    if (!hasRoles) {
      this.getRolesAdmin(this.token);
    } else {
      this.roles = JSON.parse(localStorage.getItem('roles'));
    }
  }

  ngOnDestroy(): void {
    localStorage.removeItem('roles');
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

  getRolesAdmin(token: string): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<any[]>(`${environment.url_api}/empresa/roles`, { token }, { headers }).subscribe(
      (result: any) => {
        if (result.success) {
          this.roles = result.data.map(rol => ({ id: rol.id, nombre: rol.nombre }));
          localStorage.setItem('roles', JSON.stringify(this.roles));
        }
      }, (error) => {
        console.error('Error al obtener los roles de admin', error);
        this.spinnerService.hide();
      }
    );
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

  getTipoAdmin(tipo: number): any {
    const foundItem = this.roles.find(item => item.id === tipo);
    return foundItem.nombre;
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