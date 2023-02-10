import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { WorkBook, WorkSheet, read, utils } from "xlsx";

// Services
import { NgxSpinnerService } from "ngx-spinner";
import { FormService } from "../../../utils/services/form/form.service";
import { Distrito } from "../../../utils/models/distritos.model";
import { Zona } from "../../../utils/models/zonas.model";
import { environment } from './../../../../environments/environment';
// Modal Component
import { ModalAlmacenComponent } from "../../../shared/components/modal-almacen/modal-almacen.component";

@Component({
  selector: "app-almacen",
  templateUrl: "./almacen.component.html",
  styleUrls: ["./almacen.component.scss"],
})
export class AlmacenComponent implements OnInit {
  token: string;
  fileInput: HTMLInputElement;
  dataFromExcel: any[];
  zonas: Zona[];
  zonaEmpresa: number;
  distritos: Distrito[];
  estadosAlmacen: any[];
  data: any[] = [];
  productosNoDisponibles: any = [];
  spinner1 = "sp1";
  spinner2 = "sp2";
  messageError = "";

  messageErrorElement: HTMLElement;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private spinnerService: NgxSpinnerService,
    private formService: FormService
  ) {
    try{
      this.loadFile = this.loadFile.bind(this);
    } catch(e){
      console.log(e.message);
    }
  }

  ngOnInit(): void {
    this.distritos = this.formService.getDistritos();
    this.zonas = this.formService.getZonas();
    this.estadosAlmacen = this.formService.getEstadoAlmacen();
    this.fileInput = document.querySelector("#file-input");
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.token = currentUser.token;
    this.zonaEmpresa = currentUser.zona;
    this.messageErrorElement = document.querySelector("#message-error");
    console.log(this.messageErrorElement);
    this.getData(this.token);
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

  getData(token: string) {
    this.spinnerService.show("sp1");
    this.http
      .post(
        `${environment.url_api}/usuario/almacen`,
        // "https://backend-japi.herokuapp.com/usuario/almacen",
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
          const dataFormat = result.data.map((almacenDato) => {
            let { estado } = this.estadosAlmacen.find(
              (estado) => estado.value == almacenDato.estado
            );
            let dateFormat = new Date(almacenDato.fecha).toLocaleDateString();
            let almacenDate = this.dateToString(dateFormat);
            return {
              ...almacenDato,
              nombre_estado: estado,
              fecha: almacenDate,
            };
          });
          this.data = dataFormat;
          console.log(dataFormat);
        } else {
          console.log("Error al traer datos de almacen");
        }
        this.spinnerService.hide("sp1");
      });
  }

  getPriceByZona(zonaDistrito: number): number {
    let deliveryPrice: number = 0;
    this.zonas.forEach((zona) => {
      if (this.zonaEmpresa === zona.id) {
        zona.zonas.forEach(({ id, precio, name }) => {
          if (zonaDistrito === id) {
            deliveryPrice = precio;
            return;
          }
        });
        return;
      }
    });
    return deliveryPrice ? deliveryPrice : 0;
  }

  splitElement(element: string, keySplit: string, position: number): string {
    return element.split(keySplit)[position];
  }

  uploadFile() {
    console.log("click");
    this.productosNoDisponibles = [];
    this.messageError = "";
    this.messageErrorElement.textContent = "";
    this.fileInput.click();
  }

  generateMessage(idAlmacen) {
    this.messageError += `<p>
    El producto con el ID ${idAlmacen} tiene el estado de pendiente. Inténtalo cuando te acepten la solicitud.
    </p>`;
  }

  getLatAndLogFromUrl(url: string): number[] {
    const dataFromUrl = this.splitElement(url, "@", 1);
    const latitud = parseFloat(this.splitElement(dataFromUrl, ",", 0));
    const longitud = parseFloat(
      this.splitElement(this.splitElement(dataFromUrl, ",", 1), ",", 0)
    );
    return [latitud, longitud];
  }

  loadFile(ev: any) {
    this.spinnerService.show("sp2");
    const bstr: string = ev.target.result;
    const wb: WorkBook = read(bstr, { type: "binary" });
    const wsname: string = wb.SheetNames[0];
    const ws: WorkSheet = wb.Sheets[wsname];

    this.dataFromExcel = utils.sheet_to_json(ws, { header: 1 });
    console.log(this.dataFromExcel);

    let dataExcel = [];
    const keysData = [
      "id_almacen",
      "cantidad",
      "fecha_entrega",
      "nombrePersona",
      "telefono",
      "direccion",
      "latitud",
      "longitud",
      "precio",
      "metodo_pago",
      "modo_entrega",
      "delivery",
      "monto_total",
      "observacion",
      "distrito",
    ];
    this.dataFromExcel.forEach((dato: any[], index) => {
      if (index !== 0) {
        if (dato.length !== 0) {
          const distritoValue: number = Number(dato[11].split("-")[0].trim());
          const { zona } = this.distritos.find(
            ({ value }) => value === distritoValue
          );
          const deliveryPrice = this.getPriceByZona(zona);
          let latitudValue = 0;
          let longitudValue = 0;
          if (dato[6]) {
            if (dato[6].includes("@") && dato[6].includes(",")) {
              const [latitud, longitud] = this.getLatAndLogFromUrl(dato[6]);
              latitudValue = latitud;
              longitudValue = longitud;
            }
          
          }
          let montoTotal = Number(dato[7]) * Number(dato[1]);
          let modo1='cambio con costo';
          let modo2='contra-entrega';
          if (modo1===String(dato[9]) || modo2===String(dato[9]) ) {
            montoTotal += deliveryPrice;
          }
         
          const metodoPago = String(dato[8]) || "";
          if (metodoPago.toLowerCase() === "tarjeta") {
            montoTotal += montoTotal * 0.05;
          }

          const valueObject = {
            [keysData[0]]: dato[0],
            [keysData[1]]: dato[1],
            [keysData[2]]: dato[2],
            [keysData[3]]: dato[3].toString(),
            [keysData[4]]: dato[4],
            [keysData[5]]: dato[5],
            [keysData[6]]: latitudValue,
            [keysData[7]]: longitudValue,
            [keysData[8]]: dato[7],
            [keysData[9]]: dato[8] || "",
            [keysData[10]]: dato[9].trim(),
            [keysData[11]]: deliveryPrice,
            [keysData[12]]: montoTotal,
            [keysData[13]]: dato[10],
            [keysData[14]]: distritoValue,
          };
          dataExcel.push(valueObject);
        }
      }
    });
    console.log(dataExcel);

    this.data.forEach((almacen) => {
      let almacenPendiente = dataExcel.find(
        (almacenExcel) =>
          almacen.idalmacen === almacenExcel.id_almacen && almacen.estado === 0
      );
      almacenPendiente && this.productosNoDisponibles.push(almacenPendiente);
    });
    if (this.productosNoDisponibles.length !== 0) {
      console.log(this.productosNoDisponibles);
      this.productosNoDisponibles.forEach((producto) =>
        this.generateMessage(producto.id_almacen)
      );
      this.messageErrorElement.innerHTML = this.messageError;
      this.spinnerService.hide("sp2");
    } else {
      let data = JSON.stringify({ token: this.token, data: dataExcel });
      console.log(data);

      this.http
        .post(
          `${environment.url_api}/usuario/registroEnviosAlmacenExcel`,
          // "https://backend-japi.herokuapp.com/usuario/registroEnviosAlmacenExcel",
          data,
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Methods": "POST",
              "Access-Control-Allow-Credentials": "true",
              "Access-Control-Allow-Origin": "http://localhost:4200/*",
            },
          }
        )
        .subscribe((result) => {
          this.spinnerService.hide("sp2");
          if (result["success"]) {
            this.getData(this.token);
          } else {
            console.log("error");
          }
        });
    }
  }

  changeInputEvent() {
    const fileInput = this.fileInput.files[0];
    const reader: FileReader = new FileReader();

    // convert xlsx file to json
    reader.onload = this.loadFile;
    reader.readAsBinaryString(fileInput);
  }

  openModal() {
    console.log("modal product");
    const modalRef = this.dialog.open(ModalAlmacenComponent, {
      data: {
        token: this.token,
      },
      maxWidth: "600px",
    });
    modalRef.afterClosed().subscribe((result) => {
      if (result) this.getData(this.token);
      else console.log("cancelaste el modal");
    });
  }
}
