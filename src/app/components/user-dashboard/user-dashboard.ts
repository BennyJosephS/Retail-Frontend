import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


interface User {
  id: number;
  name: string;
  email: string;
}

interface Order {
  orderId: number;
  totalAmount: number;
  status: string;
  createdAt: string;
}

@Component({
  selector: 'app-user-dashboard',
  imports: [],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
})
export class UserDashboard {

  user!: User;
  orders: Order[] = [];

  totalOrders = 0;
  totalSpent = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUser();
    this.loadOrders();
  }

  loadUser() {
    this.http.get<User>('https://localhost:5001/api/user/profile')
      .subscribe(data => {
        this.user = data;
      });
  }

  loadOrders() {
    this.http.get<Order[]>('https://localhost:5001/api/orders/my-orders')
      .subscribe(data => {
        this.orders = data;

        this.totalOrders = data.length;
        this.totalSpent = data.reduce((sum, o) => sum + o.totalAmount, 0);
      });
  }
}
