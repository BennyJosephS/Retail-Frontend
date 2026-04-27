import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { CartService } from '../../services/cart';
import { OrderService } from '../../services/order';
import { Cart as CartModel } from '../../models/cart';
import { PlaceOrder } from '../../models/order';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements OnInit {

  cart!: CartModel;
  loading = true;
  placing = false;

  orderData: PlaceOrder = {
    deliveryAddress: '',
    couponCode: '',
    notes: ''
  };

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart().subscribe({
      next: (res) => {
        this.cart = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('Failed to load cart');
      }
    });
  }

  placeOrder() {

    if (!this.orderData.deliveryAddress.trim()) {
      alert('Delivery address required');
      return;
    }

    this.placing = true;

    this.orderService.placeOrder(this.orderData).subscribe({
      next: () => {
        alert('Order placed successfully 🎉');
        this.router.navigate(['/']);
      },
      error: () => {
        this.placing = false;
        alert('Failed to place order');
      }
    });
  }
}