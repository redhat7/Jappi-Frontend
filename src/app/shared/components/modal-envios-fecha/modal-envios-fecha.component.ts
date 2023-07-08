import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { formatApiDate, formatApiToNativeDate } from '../../../shared/helpers/helpers';

import { FormService } from "../../../utils/services/form/form.service";
import { environment } from './../../../../environments/environment';

@Component({
  selector: "app-modal-envios-fecha",
  templateUrl: "./modal-envios-fecha.component.html",
  styleUrls: ["./modal-envios-fecha.component.css"],
})
export class ModalEnviosFechaComponent implements OnInit {
  token: string;

  @Input() idMotorizado: number;
  @Input() idEstadoEntrega: number;
  @Input() idMetodoPago: number;
  @Input() idModoEntrega: number;

  @Input() delivery: number;
  @Input() montoTotal: number;
  @Input() motivo: string;
  @Input() fechaEntrega: string;

  estadosEntrega: any[];
  estadosEntregaUpdate: any[];
  motorizados: any[];
  metodoPago: any[];
  distritos: any[];
  modoEntrega: any[];
  pago: string;
  modoe: string;
  idEnvio: string;
  zonas: any[];
  zonaEmpresa: any = 0;
  haCambiadoClienteDato: boolean = false; //Si cambia distrito, direccion o telefono receptor
  celularReceptor: any;
  direccionReceptor: string;
  @Input() IDDistrito: any = 0;

  IDDistritoEmpresa: any = 0;
  deliveryPrecio: any = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ModalEnviosFechaComponent>,
    private http: HttpClient,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    const { envio, token, distritos, zonas } = this.data;

    this.token = token;
    this.estadosEntrega = this.formService.getEstadoEntrega();
    this.estadosEntregaUpdate = this.formService.getEstadoEntregaModalAdmin();
    this.metodoPago = this.formService.getMetodoPago();
    this.modoEntrega = this.formService.getModoEntrega();
    this.pago = envio.metodo_pago;
    this.modoe = envio.modo_entrega;
    this.idEnvio = envio.id_envio;
    this.getEstadoEnvio(envio.estado);
    // this.idEstadoEntrega = envio.estado;
    this.celularReceptor = envio.tele_entrega;
    this.direccionReceptor = envio.d_entrega;

    this.idMotorizado = envio.moto || parseInt("0");

    this.idModoEntrega = this.findModoEntrega("value", envio.modo_entrega).id;
    this.idMetodoPago = this.findMetodoPago("value", envio.metodo_pago).id;
    this.fechaEntrega = formatApiToNativeDate(envio.fecha_entrega)

    this.zonas = zonas;
    this.distritos = distritos;
    this.IDDistritoEmpresa = envio.distrito;
    const distritoEmpresa = this.distritos.find(
      (distrito) => distrito.value == this.IDDistritoEmpresa
    );
    this.IDDistrito = envio.distrito_entrega;
    const distritoBase = this.distritos.find(
      (distrito) => distrito.value == this.IDDistrito
    );
    this.zonaEmpresa = distritoEmpresa.zona;
    this.delivery = envio.delivery;

    // this.delivery = envio.delivery;
    this.montoTotal = envio.monto_total;
    this.motivo = envio.motivo || "";

    this.getMotorizados(this.token);
  }

  getEstadoEnvio(estado: any) {
    const estadoEncontrado = this.estadosEntrega.find(item => item.estado === estado);

    let estadoPendiente = { "estado": "Pendiente", "value": 0 }
    let estadoProgramado = { "estado": "Programado", "value": 1 }

    if (estadoEncontrado) {
      this.idEstadoEntrega = estadoEncontrado.value;

      const pendienteExistente = this.estadosEntregaUpdate.find((estado) => estado.estado === estadoPendiente.estado && estado.value === estadoPendiente.value);
      const programadoExistente = this.estadosEntregaUpdate.find((estado) => estado.estado === estadoProgramado.estado && estado.value === estadoProgramado.value);

      if (estadoEncontrado.estado == 'Pendiente' || estadoEncontrado.estado == 'Programado') {
        if (estadoEncontrado.estado == 'Pendiente') {
          if (programadoExistente) {
            this.estadosEntregaUpdate.pop();
          }

          if (!pendienteExistente) {
            this.estadosEntregaUpdate.push(estadoPendiente);
          }
        }

        if (estadoEncontrado.estado == 'Programado') {
          if (pendienteExistente) {
            this.estadosEntregaUpdate.pop();
          }

          if (!programadoExistente) {
            this.estadosEntregaUpdate.push(estadoProgramado);
          }
        }
      } else {
        if (programadoExistente || pendienteExistente) {
          this.estadosEntregaUpdate.pop();
        }
      }
    }
  }

  changeDistrito(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    if (value !== '') {
      this.haCambiadoClienteDato = true;
      const distritoSelected = this.distritos.find((distrito) => distrito.value == this.IDDistrito);
      this.delivery = this.getPriceByZona(distritoSelected.zona);
    }
  }

  changePhoneCustomer(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    if (value !== '') {
      this.haCambiadoClienteDato = true;
      this.celularReceptor = value;
    } else {
      this.celularReceptor = null;
    }
  }

  changeAddressCustomer(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    if (value !== '') {
      this.haCambiadoClienteDato = true;
      this.direccionReceptor = value;
    } else {
      this.direccionReceptor = null;
    }
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
  formatDate(date: string) {
    return `${date.split("-")[2]}-${date.split("-")[1]}-${date.split("-")[0]}`;
  }

  findModoEntrega(key, value = "") {
    if (key === "value") {
      let valueToSearch = value || "--- Seleccione ---";
      return this.modoEntrega.find(
        (modo) => modo[key].toLowerCase() === valueToSearch.toLowerCase().trim()
      );

    } else return this.modoEntrega.find((modo) => modo[key] == value);
  }
  findMetodoPago(key, value = "") {
    if (key === "value") {
      let valueToSearch = value || "--- Seleccione ---";
      return this.metodoPago.find(
        (modo) => modo[key].toLowerCase() === valueToSearch.toLowerCase().trim()
      );

    } else return this.metodoPago.find((modo) => modo[key] == value);
  }

  changeMetodoPago($evt) {
    const id = $evt.target.value;
    this.pago = this.findMetodoPago("id", id).value;
  }
  changeModoEntrega($evt) {
    const id = $evt.target.value;
    this.modoe = this.findModoEntrega("id", id).value;
  }
  convertDateToString(date: string) {
    const navigatorVendor = window.navigator.vendor;
    if (navigatorVendor.toLowerCase().includes("apple")) {
      return date.replace(/[/]/g, "-");
    } else {
      return `${date.split("-")[2]}-${date.split("-")[1]}-${date.split("-")[0]
        }`;
    }
  }


  getMotorizados(token: string) {
    this.http
      .post(
        `${environment.url_api}/empresa/ListarMotorizados`,
        // "https://backend-japi.herokuapp.com/empresa/ListarMotorizados",
        { token },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
          },
        }
      )
      .subscribe(({ success, data }: any) => {
        if (success) {
          this.data.validate = 1;
          this.motorizados = data;
        } else {
          console.log("error al traer motorizados");
        }
      });
  }
  validateComision(currentMetodo: number, montoTotal: number) {
    if (currentMetodo == 2) {
      return montoTotal * 0.05;
    } else {
      return 0;
    }
  }

  updateEnvioFecha() {
    const newFechaEntrega = formatApiDate('string', this.fechaEntrega)
    const distritoToNumber = Number(this.IDDistrito);

    const data = {
      token: this.token,
      moto: this.idMotorizado,
      metodo: this.pago,
      estado: this.idEstadoEntrega,
      delivery: this.delivery,
      monto: this.montoTotal,
      motivo: this.motivo,
      id_envio: this.idEnvio,
      modo_entrega: this.modoe,
      fecha: newFechaEntrega,
      distrito: this.haCambiadoClienteDato ? distritoToNumber : null,
      tele_entrega: this.haCambiadoClienteDato ? this.celularReceptor : null,
      d_entrega: this.haCambiadoClienteDato ? this.direccionReceptor : null,
    };

    this.haCambiadoClienteDato == false;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'POST' });

    this.http.post(`${environment.url_api}/empresa/UpdateEnviosFecha`, data, { headers }).subscribe(
      (result: any) => {
        if (result.success) {
          this.dialogRef.close(true);
        } else {
          console.log("Error update estado");
          this.dialogRef.close(false);
        }
      }, (error) => {
        console.error('Error:', error);
        this.dialogRef.close(false);
      });
  }
}
