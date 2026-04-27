import { Component } from '@angular/core';
import { Order } from '../../models/order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-orderdetail',
  imports: [],
  templateUrl: './orderdetail.html',
  styleUrl: './orderdetail.css',
})
export class Orderdetail {
  order!: Order;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadOrder(id);
  }

  loadOrder(id: number) {
    this.orderService.getOrderById(id).subscribe(data => {
      this.order = data;
    });
  }
}
