import { Injectable } from "@angular/core";
import { Distrito } from "../../models/distritos.model";
import { Zona } from "../../models/zonas.model";

@Injectable({
  providedIn: "root",
})
export class FormService {
  private distritos: Distrito[] = [
    { name: "Ate Vitarte", value: 1, zona: 1 },
    { name: "Ate-Salamanca", value: 2, zona: 1 },
    { name: "Ate-Santa Clara", value: 3, zona: 6 },
    { name: "Ate-Huaycan", value: 4, zona: 6 },
    { name: "Barranco", value: 5, zona: 2 },
    { name: "Bellavista", value: 6, zona: 4 },
    { name: "Breña", value: 7, zona: 2 },
    { name: "Carmen de la Legua", value: 8, zona: 4 },
    { name: "Callao", value: 9, zona: 4 },
    { name: "Carabayllo", value: 10, zona: 6 },
    { name: "Cercado de Lima", value: 11, zona: 2 },
    { name: "Chorrillos", value: 12, zona: 5 },
    { name: "Comas", value: 13, zona: 3 },
    { name: "El Agustino", value: 14, zona: 1 },
    { name: "Huachipa(Zoologico)", value: 15, zona: 6 },
    { name: "Independencia", value: 16, zona: 3 },
    { name: "Jesus Maria", value: 17, zona: 2 },
    { name: "La Molina", value: 18, zona: 1 },
    { name: "La Perla", value: 19, zona: 4 },
    { name: "La Punta", value: 20, zona: 4 },
    { name: "La Victoria", value: 21, zona: 2 },
    { name: "Lima", value: 22, zona: 2 },
    { name: "Lince", value: 23, zona: 2 },
    { name: "Los Olivos", value: 24, zona: 3 },
    { name: "Magdalena del Mar", value: 25, zona: 2 },
    { name: "Miraflores", value: 26, zona: 2 },
    { name: "Mi Peru", value: 27, zona: 6 },
    { name: "Pueblo Libre", value: 28, zona: 2 },
    { name: "Puente Piedra", value: 29, zona: 6 },
    { name: "Rimac", value: 30, zona: 3 },
    { name: "San Borja", value: 31, zona: 2 },
    { name: "San Isidro", value: 32, zona: 2 },
    { name: "San Juan de Lurigancho", value: 33, zona: 1 },
    { name: "San Juan de Miraflores", value: 34, zona: 5 },
    { name: "San Luis", value: 35, zona: 2 },
    { name: "San Martin de Porres", value: 36, zona: 3 },
    { name: "San Miguel", value: 37, zona: 2 },
    { name: "Santa Anita", value: 38, zona: 1 },
    { name: "Santiago de Surco", value: 39, zona: 5 },
    { name: "Surquillo", value: 40, zona: 2 },
    { name: "Ventanilla", value: 41, zona: 6 },
    { name: "Villa el Salvador", value: 42, zona: 5 },
    { name: "Villa María del Triunfo", value: 43, zona: 5 }
  ];

  private zonas: Zona[] = [
    {
      id: 1,
      distritos: [1, 2, 14, 18, 33, 38],
      zonas: [
        { id: 1, precio: 8, name: "este" },
        { id: 2, precio: 9, name: "centro" },
        { id: 3, precio: 10, name: "norte" },
        { id: 4, precio: 11, name: "oeste" },
        { id: 5, precio: 12, name: "sur" },
        { id: 6, precio: 15, name: "alejados" }
      ]
    },
    {
      id: 2,
      distritos: [5, 7, 11, 17, 21, 22, 23, 25, 26, 28, 31, 32, 35, 37, 40],
      zonas: [
        { id: 1, precio: 11, name: "este" },
        { id: 2, precio: 8, name: "centro" },
        { id: 3, precio: 10, name: "norte" },
        { id: 4, precio: 9, name: "oeste" },
        { id: 5, precio: 12, name: "sur" },
        { id: 6, precio: 15, name: "alejados" }
      ]
    },
    {
      id: 3,
      distritos: [13, 16, 24, 30, 36],
      zonas: [
        { id: 1, precio: 11, name: "este" },
        { id: 2, precio: 9, name: "centro" },
        { id: 3, precio: 8, name: "norte" },
        { id: 4, precio: 10, name: "oeste" },
        { id: 5, precio: 12, name: "sur" },
        { id: 6, precio: 15, name: "alejados" }
      ]
    },
    {
      id: 4,
      distritos: [6, 8, 9, 19, 20],
      zonas: [
        { id: 1, precio: 11, name: "este" },
        { id: 2, precio: 9, name: "centro" },
        { id: 3, precio: 10, name: "norte" },
        { id: 4, precio: 8, name: "oeste" },
        { id: 5, precio: 12, name: "sur" },
        { id: 6, precio: 15, name: "alejados" }
      ]
    },
    {
      id: 5,
      distritos: [12, 34, 39, 42, 43],
      zonas: [
        { id: 1, precio: 11, name: "este" },
        { id: 2, precio: 9, name: "centro" },
        { id: 3, precio: 12, name: "norte" },
        { id: 4, precio: 10, name: "oeste" },
        { id: 5, precio: 8, name: "sur" },
        { id: 6, precio: 15, name: "alejados" }
      ]
    },
    {
      id: 6,
      distritos: [3, 4, 10, 15, 27, 29, 41],
    },
  ];

  private estadoRecojo = [
    { estado: "pendiente", value: 0 },
    { estado: "programado", value: 1 },
    { estado: "en ruta", value: 2 },
    { estado: "recogido", value: 3 },
    { estado: "caída", value: 4 },
    { estado: "Recibido", value: 5 }
  ];

  private estadoRecojoModal = [
    { estado: "en ruta", value: 2 },
    { estado: "recogido", value: 3 },
    { estado: "caída", value: 4 }
  ];

  private estadoEntrega = [
    { estado: "Pendiente", value: 0 },
    { estado: "Programado", value: 1 },
    { estado: "En ruta", value: 2 },
    { estado: "Entregado", value: 3 },
    { estado: "Caída", value: 4 },
    { estado: "Reprogramado", value: 5 },
    { estado: "Repro. por cobrar", value: 6 },
    { estado: "Observado", value: 7 },
    { estado: "Caída por cobrar", value: 8 },
  ];

  private estadoEntregaModalAdmin = [
    { estado: "En ruta", value: 2 },
    { estado: "Entregado", value: 3 },
    { estado: "Caída", value: 4 },
    { estado: "Reprogramado", value: 5 },
    { estado: "Repro. por cobrar", value: 6 },
    { estado: "Observado", value: 7 },
    { estado: "Caída por cobrar", value: 8 }
  ];

  private estadoEntregaModal = [
    { estado: "en ruta", value: 2 },
    { estado: "entregado", value: 3 },
    { estado: "Observado", value: 7 }
  ];

  private estadoAlmacen = [
    { estado: "pendiente", value: 0 },
    { estado: "aceptado", value: 1 },
    { estado: "en recojo", value: 2 },
    { estado: "en stock", value: 3 }
  ];

  private modoEntrega: any[] = [
    { id: 1, value: "Contra entrega" },
    { id: 2, value: "Solo entregar" },
    { id: 3, value: "Cambio con costo" },
    { id: 4, value: "Cambio sin costo" },
    { id: 5, value: "Servicio express" }
  ];

  private metodoPago: any[] = [
    { id: 1, value: "Efectivo" },
    { id: 2, value: "Tarjeta" },
    { id: 3, value: "Abono a vendedor" },
    { id: 4, value: "Abono a Japi" }
  ];

  private tipoAdmin: any[] = [
    { id: 1, value: "Cliente" },
    { id: 2, value: "Administrador" },
    { id: 3, value: "Motorizado" },
    { id: 4, value: "Almacén" },
    { id: 5, value: "Coordinación" }
  ]

  constructor() { }

  getModoEntrega(): any[] {
    return this.modoEntrega;
  }

  getMetodoPago(): any[] {
    return this.metodoPago;
  }

  getZonas(): Zona[] {
    return this.zonas;
  }
  getDistritos(): Distrito[] {
    return this.distritos;
  }

  getMultipleDistritos(): Distrito[] {
    const multipleDistritos = this.distritos.slice(1);
    return multipleDistritos;
  }

  getEstadoAlmacen() {
    return this.estadoAlmacen;
  }

  getEstadoRecojo() {
    return this.estadoRecojo;
  }

  getEstadoRecojoModal() {
    return this.estadoRecojoModal;
  }

  getEstadoEntrega() {
    return this.estadoEntrega;
  }
  getEstadoEntregaModalAdmin() {
    return this.estadoEntregaModalAdmin;
  }

  getEstadoEntregaModal() {
    return this.estadoEntregaModal;
  }

  getTipoAdmin() {
    return this.tipoAdmin;
  }
}
