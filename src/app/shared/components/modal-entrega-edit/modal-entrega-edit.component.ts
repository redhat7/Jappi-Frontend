import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-modal-entrega-edit",
  templateUrl: "./modal-entrega-edit.component.html",
  styleUrls: ["./modal-entrega-edit.component.scss"],
})
export class ModalEntregaEditComponent implements OnInit {
  token: string;
  idEnvio: number;
  montoTotal: number;
  latitud: number;
  longitud: number;
  validator: number = 0;
  distritos: any[];
  zonas: any[];
  zonaEmpresa: any = 0;

  optionsModoEntrega: any[] = [];
  optionsMetodoPago: any[] = [];
  @Input() IDModoEntrega: any = 0;
  @Input() IDMetodoPago: any = 0;

  @Input() IDDistrito: any = 0;
  IDDistritoEmpresa: any = 0;
  deliveryPrecio: any = 0;

  modoEntrega: string;
  metodoPago: string;

  @Input() nombrePersona: string;
  @Input() direccion: string;
  @Input() telefono: string;
  @Input() url: string;
  @Input() descripcion: string;
  @Input() cantidad: number;
  @Input() precio: number;
  @Input() fechaEntrega: string;
  @Input() observacion: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ModalEntregaEditComponent>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const {
      token,
      idEnvio,
      envio,
      modoEntrega,
      metodoPago,
      distritos,
      zonas,
    } = this.data;
    console.log(this.data);

    this.optionsModoEntrega = modoEntrega;
    this.optionsMetodoPago = metodoPago;
    this.IDModoEntrega = this.findModoEntrega("value", envio.modo_entrega).id;
    this.IDMetodoPago = this.findMetodoPago("value", envio.metodo_pago).id;

    this.zonas = zonas;
    this.distritos = distritos;
    this.IDDistritoEmpresa = envio.distrito_empresa;
    const distritoEmpresa = this.distritos.find(
      (distrito) => distrito.value == this.IDDistritoEmpresa
    );
    this.IDDistrito = envio.distrito;
    const distritoBase = this.distritos.find(
      (distrito) => distrito.value == this.IDDistrito
    );
    this.zonaEmpresa = distritoEmpresa.zona;
    this.deliveryPrecio = this.getPriceByZona(distritoBase.zona);

    this.token = token;
    this.idEnvio = idEnvio;
    this.nombrePersona = envio.comprador;
    this.direccion = envio.direccion;
    this.telefono = envio.telefono;
    this.url = envio.url;
    this.latitud = envio.latitud;
    this.longitud = envio.longitud;
    this.descripcion = envio.descripcion;
    this.cantidad = envio.cantidad;
    this.precio = envio.precio;
    this.montoTotal = envio.monto_total;
    this.modoEntrega = envio.modo_entrega;
    this.metodoPago = envio.metodo_pago;
    this.fechaEntrega = this.formatDate(envio.fecha_entrega);
    console.log(this.fechaEntrega);
    
    this.observacion = envio.observacion;
  }

  formatDate(date: string) {
    return `${date.split("-")[2]}-${date.split("-")[1]}-${date.split("-")[0]}` ;
  }

  findModoEntrega(key, value = "") {
    if (key === "value") {
      let valueToSearch = value || "--- Seleccione ---";
      return this.optionsModoEntrega.find(
        (modo) => modo[key].toLowerCase() === valueToSearch.toLowerCase().trim()
      );
    } else return this.optionsModoEntrega.find((modo) => modo[key] == value);
  }

  findMetodoPago(key, value = "") {
    if (key === "value") {
      let valueToSearch = value || "--- Seleccione ---";
      return this.optionsMetodoPago.find(
        (modo) => modo[key].toLowerCase() === valueToSearch.toLowerCase().trim()
      );
    } else return this.optionsMetodoPago.find((modo) => modo[key] == value);
  }

  changeModoEntrega($evt) {
    const id = $evt.target.value;
    this.modoEntrega = this.findModoEntrega("id", id).value;
    if (id == 1 || id == 3) {
      this.validator = 1;
    } else {
      this.validator = 0;
    }
  }

  changeMetodoPago($evt) {
    const id = $evt.target.value;
    this.metodoPago = this.findMetodoPago("id", id).value;
  }

  changeDistrito() {
    const distritoSelected = this.distritos.find(
      (distrito) => distrito.value == this.IDDistrito
    );
    this.deliveryPrecio = this.getPriceByZona(distritoSelected.zona);
  }

  getPriceByZona(zonaDistrito: number): number {
    let deliveryPrice: number = 0;
    this.zonas.forEach((zona) => {
      if (this.zonaEmpresa === zona.id) {
        zona.zonas.forEach(({ id, precio, name }) => {
          if (zonaDistrito === id) {
            deliveryPrice = precio;
            console.log("zona de la empresa: ", this.zonaEmpresa);
            console.log("zona del envío: ", id);
            console.log("Distrito de envio: ", name);
            console.log("Precio del distrito: ", precio);
            return;
          }
        });
        return;
      }
    });
    return deliveryPrice ? deliveryPrice : 0;
  }

  convertDateToString(date: string) {
    const navigatorVendor = window.navigator.vendor;
    if (navigatorVendor.toLowerCase().includes("apple")) {
      return date.replace(/[/]/g, "-");
    } else {
      return `${date.split("-")[2]}-${date.split("-")[1]}-${
        date.split("-")[0]
      }`;
    }
  }

  splitElement(element: string, keySplit: string, position: number): string {
    return element.split(keySplit)[position];
  }

  validateComision(currentMetodo: number, montoTotal: number) {
    if (currentMetodo == 2) {
      return montoTotal * 0.05;
    } else {
      return 0;
    }
  }
  getLatAndLogFromUrl(url: string): number[] {
    const dataFromUrl = this.splitElement(url, "@", 1);
    const latitud = parseFloat(this.splitElement(dataFromUrl, ",", 0));
    const longitud = parseFloat(
      this.splitElement(this.splitElement(dataFromUrl, ",", 1), ",", 0)
    );
    return [latitud, longitud];
  }
  updateEntrega() {
    let fechaEntrega = this.convertDateToString(this.fechaEntrega);
    if (this.url) {
      if (
        this.url.includes("@") &&
        this.url.includes(",")
      ) {
        const [latitud, longitud] = this.getLatAndLogFromUrl(
          this.url
        );
        this.latitud = latitud;
        this.longitud = longitud;
      }
    }

    this.montoTotal = this.cantidad * this.precio;
    this.montoTotal += this.deliveryPrecio;

    const comision = this.validateComision(this.IDMetodoPago, this.montoTotal);
    this.montoTotal += comision;

    const distritoToNumber = Number(this.IDDistrito);
    const data = {
      token: this.token,
      id_envio: this.idEnvio,
      nombrePersona: this.nombrePersona,
      direccion: this.direccion,
      telefono: this.telefono,
      latitud: this.latitud,
      longitud: this.longitud,
      descripcion: this.descripcion,
      cantidad: this.cantidad,
      modo_entrega: this.modoEntrega,
      metodo_pago: this.metodoPago,
      fecha_entrega: fechaEntrega,
      monto_total: this.montoTotal,
      observacion: this.observacion,
      delivery: this.deliveryPrecio,
      precio: this.precio,
      distrito: distritoToNumber,
    };
    console.log(data);
    console.log(JSON.stringify(data));
    this.http
      .post(
        `${environment.url_api}/empresa/ListarMotorizados`,
        // "https://backend-japi.herokuapp.com/empresa/ListarMotorizados",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
          },
        }
      )
      .subscribe((result: any) => {
        if (result.success) {
          this.dialogRef.close(true);
        } else {
          console.log("Error update estado");
          this.dialogRef.close(false);
        }
      });
  }
}
