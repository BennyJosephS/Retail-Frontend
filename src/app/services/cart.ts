import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environment';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  getHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };
  }

  getCart(): Observable<Cart> {
    return this.http.get<Cart>(
      `${environment.apiUrl}/cart`,
      this.getHeaders()
    );
  }

  addToCart(productId: number, quantity: number = 1) {
    return this.http.post(
      `${environment.apiUrl}/cart/items`,
      { productId, quantity },
      this.getHeaders()
    );
  }

  updateCart(cartItemId: number, quantity: number) {
    return this.http.put(
      `${environment.apiUrl}/cart/items`,
      { cartItemId, quantity },
      this.getHeaders()
    );
  }

  removeItem(id: number) {
    return this.http.delete(
      `${environment.apiUrl}/cart/items/${id}`,
      this.getHeaders()
    );
  }
}