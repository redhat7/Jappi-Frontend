interface Deliveries {
  id: number;
  precio: number;
  name: string;
}

export interface Zona {
  id: number;
  distritos: number[];
  zonas?: Deliveries[];
}
