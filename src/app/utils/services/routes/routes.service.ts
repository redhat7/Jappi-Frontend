import { Injectable } from "@angular/core";

// Models
import { Routes } from "../../models/routes.model";

@Injectable({
  providedIn: "root",
})
export class RoutesService {
  private rutasUsuario: Routes[] = [
    {
      path: "/almacen",
      title: "ALMACÉN",
      class: "",
      icon: "uil uil-store",
    },
    {
      path: "/mis-envios",
      title: "MIS ENVÍOS",
      class: "",
      icon: "uil uil-truck",
    },
    {
      path: "/perfil",
      title: "PERFIL",
      class: "",
      icon: "uil uil-user",
    },
    {
      path: "/registro-envio",
      title: "REGISTRAR ENVÍOS",
      class: "",
      icon: "uil uil-clipboard-notes",
    }
  ];

  private rutasEmpresa: Routes[] = [
    {
      path: "/envios-fecha",
      title: "ENVÍOS POR FECHA",
      class: "",
      icon: "uil uil-calendar-alt",
    },
    // {
    //   path: "/envios",
    //   title: "ENVÍOS POR DÍA",
    //   class: "",
    //   icon: "uil uil-calender",
    // },
    {
      path: "/recojos",
      title: "ADMINISTRAR RECOJOS",
      class: "",
      icon: "uil uil-truck",
    },
    {
      path: "/Entregas-Almacen",
      title: "ADMINISTRAR ENTREGAS",
      class: "",
      icon: "uil uil-shopping-bag",
    },
    {
      path: "/solicitudes-almacen",
      title: "SOLICITUD DE ALMACÉN",
      class: "",
      icon: "uil uil-store-alt",
    },
    {
      path: "/almacen-japi",
      title: "ALMACÉN JAPI",
      class: "",
      icon: "uil uil-store",
    },
    {
      path: "/entregas",
      title: "ADMINISTRAR ENTREGAS ALMACÉN",
      class: "",
      icon: "uil uil-shopping-cart-alt",
    },
    {
      path: "/activacion",
      title: "ACTIVACIÓN DE CUENTAS",
      class: "",
      icon: "uil uil-check-circle",
    },
    {
      path: "/lista-externo",
      title: "USUARIOS EXTERNOS",
      class: "",
      icon: "uil uil-user-exclamation",
    },
    {
      path: "/registro-motorizado",
      title: "REGISTRO MOTORIZADO",
      class: "",
      icon: "uil uil-user-plus",
    },
    {
      path: "/lista-interno",
      title: "LISTA MOTORIZADOS",
      class: "",
      icon: "uil uil-clipboard-notes",
    },
    {
      path: "/lista-admin",
      title: "LISTA DE ADMINISTRADORES",
      class: "",
      icon: "uil uil-shield-check",
    },
    {
      path: "/Historial-Recojos",
      title: "HISTORIAL RECOJOS",
      class: "",
      icon: "uil uil-shopping-cart-alt",
    },
  ];

  private rutasMotorizado: Routes[] = [
    {
      path: "/historial",
      title: "Historial Entregas",
      class: "",
      icon: "location_map-big",
    },
    {
      path: "/Historial-recojos",
      title: "Historial Recojos",
      class: "",
      icon: "location_map-big",
    },
    {
      path: "/entregas-motorizado",
      title: "Entregas",
      class: "",
      icon: "location_map-big",
    },
    {
      path: "/recojos-motorizado",
      title: "Recojos",
      class: "",
      icon: "ui-1_bell-53",
    },
    {
      path: "/login",
      title: "Cerrar Sesión",
      class: "active",
      icon: "ui-1_send",
    },
  ];

  private rutasAlmacen: Routes[] = [
    {
      path: "/envios-fecha",
      title: "ENVÍOS POR FECHA",
      class: "",
      icon: "uil uil-calendar-alt",
    },
    {
      path: "/recojos",
      title: "ADMINISTRAR RECOJOS",
      class: "",
      icon: "uil uil-truck",
    },
    {
      path: "/solicitudes-almacen",
      title: "SOLICITUD DE ALMACÉN",
      class: "",
      icon: "uil uil-store-alt",
    },
    {
      path: "/almacen-japi",
      title: "ALMACÉN JAPI",
      class: "",
      icon: "uil uil-store",
    },
    {
      path: "/entregas",
      title: "ADMINISTRAR PREPARACIÓN",
      class: "",
      icon: "uil uil-shopping-cart-alt",
    },
  ];

  private rutasCoordinacion: Routes[] = [
    {
      path: "/envios-fecha",
      title: "ENVÍOS POR FECHA",
      class: "",
      icon: "uil uil-calendar-alt",
    },
    {
      path: "/recojos",
      title: "ADMINISTRAR RECOJOS",
      class: "",
      icon: "uil uil-truck",
    },
    {
      path: "/solicitudes-almacen",
      title: "SOLICITUD DE ALMACÉN",
      class: "",
      icon: "uil uil-store-alt",
    },
    {
      path: "/lista-interno",
      title: "LISTA MOTORIZADOS",
      class: "",
      icon: "uil uil-clipboard-notes",
    },
    {
      path: "/lista-externo",
      title: "USUARIOS EXTERNOS",
      class: "",
      icon: "uil uil-user-exclamation",
    },
  ];

  private rutasRecursosHumanos: Routes[] = [
    {
      path: "/lista-admin",
      title: "LISTA DE ADMINISTRADORES",
      class: "",
      icon: "uil uil-shield-check",
    },
    // Módulos no existentes (creo - xanadu)
    {
      path: "/recojos",
      title: "LISTA DE MOTORIZADOS",
      class: "",
      icon: "uil uil-truck",
    },
    {
      path: "/lista-externo",
      title: "USUARIOS EXTERNOS",
      class: "",
      icon: "uil uil-user-exclamation",
    },
  ];

  constructor() { }

  getRutasUsuario() { return this.rutasUsuario; }

  getRutasMotorizado() { return this.rutasMotorizado; }

  getRutasEmpresa() { return this.rutasEmpresa; }

  getRutasAlmacen() { return this.rutasAlmacen; }

  getRutasCoordinacion() { return this.rutasCoordinacion; }

  getRutasRecursosHumanos() { return this.rutasRecursosHumanos }
}
