// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-placeorder',
//   imports: [],
//   templateUrl: './placeorder.html',
//   styleUrl: './placeorder.css',
// })
// export class Placeorder {
//  order: PlaceOrderDto = {
//     deliveryAddress: '',
//     couponCode: '',
//     notes: ''
//   };

//   constructor(
//     private orderService: OrderService,
//     private router: Router
//   ) {}

//   placeOrder() {
//     this.orderService.placeOrder(this.order).subscribe({
//       next: () => {
//         alert('Order placed successfully!');
//         this.router.navigate(['/orders']);
//       },
//       error: () => alert('Order failed')
//     });
//   }
// }
