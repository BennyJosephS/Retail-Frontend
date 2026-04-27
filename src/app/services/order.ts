import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environment';
import { PlaceOrder } from '../models/order';
import { Order } from '../models/order'; // if separate file, adjust import

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = `${environment.apiUrl}/orders`;

  constructor(private http: HttpClient) {}

  // JWT Header
  getHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };
  }

  // Place New Order
  placeOrder(data: PlaceOrder) {
    return this.http.post(
      this.apiUrl,
      data,
      this.getHeaders()
    );
  }

  // Get Logged In User Orders
  getMyOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(
      `${this.apiUrl}/my`,
      this.getHeaders()
    );
  }

  // Get Order By Id
  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(
      `${this.apiUrl}/${id}`,
      this.getHeaders()
    );
  }

}