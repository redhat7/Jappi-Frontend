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

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ModalDetailShipmentComponent>
  ) { }

  ngOnInit(): void {
    this.envio = this.data.envio;
  }
}
