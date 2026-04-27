// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-orderdetail',
//   imports: [],
//   templateUrl: './orderdetail.html',
//   styleUrl: './orderdetail.css',
// })
// export class Orderdetail {
//   order!: Order;

//   constructor(
//     private route: ActivatedRoute,
//     private orderService: OrderService
//   ) {}

//   ngOnInit(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.loadOrder(id);
//   }

//   loadOrder(id: number) {
//     this.orderService.getOrderById(id).subscribe(data => {
//       this.order = data;
//     });
//   }
// }
