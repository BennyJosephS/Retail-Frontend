import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  products: Product[] = [];
  loading = true;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.loading = false;
      },
      error: () => {
        alert('Failed to load products');
        this.loading = false;
      }
    });
  }

  addToCart(productId: number) {
    this.cartService.addToCart(productId, 1).subscribe({
      next: () => {
        alert('Added to cart 🛒');
      },
      error: () => {
        alert('Please login first');
      }
    });
  }
}