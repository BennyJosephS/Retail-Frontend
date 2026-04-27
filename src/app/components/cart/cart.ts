import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CartService } from '../../services/cart';
import { Cart as CartModel, CartItem } from '../../models/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {

  cart!: CartModel;
  items: CartItem[] = [];
  loading = true;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart().subscribe({
      next: (res) => {
        this.cart = res;
        this.items = res.items;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('Failed to load cart');
      }
    });
  }

  increase(item: CartItem) {
    this.cartService.updateCart(item.cartItemId, item.quantity + 1)
      .subscribe(() => this.loadCart());
  }

  decrease(item: CartItem) {
    const qty = item.quantity - 1;

    this.cartService.updateCart(item.cartItemId, qty)
      .subscribe(() => this.loadCart());
  }

  remove(id: number) {
    this.cartService.removeItem(id)
      .subscribe(() => this.loadCart());
  }
}