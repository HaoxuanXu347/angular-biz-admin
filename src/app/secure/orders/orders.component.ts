import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {Order} from "../../interfaces/order";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  lastPage: number;
  selected: number;

  constructor(private orderService: OrderService) {
  }
  ngOnInit(): void {
    this.load();
  }

  load(page = 1): void {
    this.orderService.all(page).subscribe(
      res => {
        this.orders = res.data;
        this.lastPage = res.meta.last_page;
      }
    );
  }


  select(id: number): void {
    this.selected = this.selected === id ? 0 : id;
  }

}
