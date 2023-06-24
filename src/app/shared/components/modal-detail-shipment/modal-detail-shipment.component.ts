import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";


@Component({
  selector: 'app-modal-detail-shipment',
  templateUrl: './modal-detail-shipment.component.html',
  styleUrls: ['./modal-detail-shipment.component.css']
})
export class ModalDetailShipmentComponent implements OnInit {
  @Input() cantidad: number;

  id: number;
  token: string;
  envio: any;
  tipoUsuario: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ModalDetailShipmentComponent>
  ) { }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("auth"));
    this.envio = this.data.envio;
    this.tipoUsuario = currentUser.tipo;
  }
}
