import {Component, OnInit} from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers: [MessageService]
})
export class StatusComponent implements OnInit {
  items: MenuItem[] = [];
  activeIndex: any;
  order: any;

  ngOnInit() {
    this.order = {
      // Outros dados do pedido
      status: 'em_andamento' // Status atual do pedido
    };

    this.items = [
      {
        label: 'Personal',
        routerLink: 'personal'
      },
      {
        label: 'Seat',
        routerLink: 'seat'
      },
      {
        label: 'Payment',
        routerLink: 'payment'
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation'
      }
    ];
  }

  onActiveIndexChange($event: any) {

  }
}
