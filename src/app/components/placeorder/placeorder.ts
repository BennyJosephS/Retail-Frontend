import { Component } from '@angular/core';
import { OrderService } from '../../services/order';
import { Router } from '@angular/router';
import { PlaceOrder } from '../../models/order';

@Component({
  selector: 'app-placeorder',
  imports: [],
  templateUrl: './placeorder.html',
  styleUrl: './placeorder.css',
})
export class Placeorder {
 order: PlaceOrder = {
    deliveryAddress: '',
    couponCode: '',
    notes: ''
  };

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {}

  placeOrder() {
    this.orderService.placeOrder(this.order).subscribe({
      next: () => {
        alert('Order placed successfully!');
        this.router.navigate(['/orders']);
      },
      error: () => alert('Order failed')
    });
  }
}
