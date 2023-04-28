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
      title: "Almacen",
      class: "",
      icon: "design_bullet-list-67",
    },
    {
      path: "/mis-envios",
      title: "Mis Envios",
      class: "",
      icon: "shopping_delivery-fast",
    },
    {
      path: "/perfil",
      title: "Perfil",
      class: "",
      icon: "users_single-02",
    },
    {
      path: "/registro-envio",
      title: "Registrar Envios",
      class: "",
      icon: "shopping_box",
    },
    {
      path: "/login",
      title: "Cerrar Sesión",
      class: "active",
      icon: "ui-1_send",
    },
  ];

  private rutasEmpresa: Routes[] = [
    {
      path: "/envios-fecha",
      title: "Envios por fecha",
      class: "",
      icon: "ui-1_calendar-60",
    }, {
      path: "/envios",
      title: "Envios del dia",
      class: "",
      icon: "ui-1_calendar-60",
    }, {
      path: "/recojos",
      title: "Administrar Recojos",
      class: "",
      icon: "shopping_basket",
    },
    {
      path: "/entregas",
      title: "Administrar entregas",
      class: "",
      icon: "objects_spaceship",
    },
    {
      path: "/solicitudes-almacen",
      title: "Solicitud de Almacen",
      class: "",
      icon: "shopping_basket",
    },
    {
      path: "/almacen-japi",
      title: "Almacen Japi",
      class: "",
      icon: "design_app",
    },

    {
      path: "/Entregas-Almacen",
      title: "Administrar Entregas Almacen",
      class: "",
      icon: "objects_spaceship",
    },


    {
      path: "/activacion",
      title: "Activación de Cuentas",
      class: "",
      icon: "ui-1_check",
    },

    {
      path: "/lista-externo",
      title: "Listas Usuarios Externos",
      class: "",
      icon: "education_agenda-bookmark",
    },
    {
      path: "/registro-motorizado",
      title: "Registro Motorizado",
      class: "",
      icon: "design_bullet-list-67",
    },
    {
      path: "/lista-interno",
      title: "Listas Colaboradores",
      class: "",
      icon: "education_agenda-bookmark",
    }, {
      path: "/lista-admin",
      title: "Lista Administradores",
      class: "",
      icon: "education_agenda-bookmark",
    }, {
      path: "/Historial-Recojos",
      title: "Historial Recojos",
      class: "",
      icon: "education_agenda-bookmark",
    },
    {
      path: "/login",
      title: "Cerrar Sesión",
      class: "active",
      icon: "ui-1_send",
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
      path: "/solicitudes-almacen",
      title: "Solicitud de Almacen",
      class: "",
      icon: "shopping_basket",
    },
    {
      path: "/almacen-japi",
      title: "Almacen Japi",
      class: "",
      icon: "design_app",
    },
    {
      path: "/login",
      title: "Cerrar Sesión",
      class: "active",
      icon: "ui-1_send",
    },
  ]

  private rutasCoordinacion: Routes[] = [
    {
      path: "/envios",
      title: "Envios del dia",
      class: "",
      icon: "ui-1_calendar-60",
    }, {
      path: "/recojos",
      title: "Administrar Recojos",
      class: "",
      icon: "shopping_basket",
    },
    {
      path: "/login",
      title: "Cerrar Sesión",
      class: "active",
      icon: "ui-1_send",
    },
  ]

  constructor() { }

  getRutasUsuario() {
    return this.rutasUsuario;
  }
  getRutasMotorizado() {
    return this.rutasMotorizado;
  }
  getRutasEmpresa() {
    return this.rutasEmpresa;
  }
  getRutasAlmacen() {
    return this.rutasAlmacen;
  }
  getRutasCoordinacion() {
    return this.rutasCoordinacion;
  }
}
