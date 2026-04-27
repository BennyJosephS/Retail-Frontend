import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchText = '';
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
        this.filteredProducts = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  searchProducts() {
    this.filteredProducts = this.products.filter(x =>
      x.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addToCart(productId: number) {
    this.cartService.addToCart(productId, 1).subscribe(() => {
      alert('Added to cart');
    });
  }
}