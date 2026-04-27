// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-myorderes',
//   imports: [],
//   templateUrl: './myorderes.html',
//   styleUrl: './myorderes.css',
// })
// export class Myorderes {
//  orders: Order[] = [];

//   constructor(
//     private orderService: OrderService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.loadOrders();
//   }

//   loadOrders() {
//     this.orderService.getMyOrders().subscribe(data => {
//       this.orders = data;
//     });
//   }

//   viewDetails(id: number) {
//     this.router.navigate(['/orders', id]);
//   }
// }
