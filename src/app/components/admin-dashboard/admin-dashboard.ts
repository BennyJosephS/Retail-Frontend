// import { Component } from '@angular/core';
// import { Product } from '../../models/product';

// @Component({
//   selector: 'app-admin-dashboard',
//   imports: [],
//   templateUrl: './admin-dashboard.html',
//   styleUrl: './admin-dashboard.css',
// })
// export class AdminDashboard {

//   products: Product[] = [];

//   newProduct: CreateProductDto = {
//     name: '',
//     price: 0,
//     categoryId: 1,
//     initialStock: 0
//   };

//   constructor(private adminService: AdminService) {}

//   ngOnInit(): void {
//     this.loadProducts();
//   }

//   loadProducts() {
//     this.adminService.getProducts().subscribe(data => {
//       this.products = data;
//     });
//   }

//   addProduct() {
//     this.adminService.createProduct(this.newProduct).subscribe(() => {
//       this.loadProducts();
//       this.resetForm();
//     });
//   }

//   toggleAvailability(product: Product) {
//     const updated = {
//       isAvailable: !product.isAvailable
//     };

//     this.adminService.updateProduct(product.productId, updated)
//       .subscribe(() => this.loadProducts());
//   }

//   deleteProduct(id: number) {
//     this.adminService.deleteProduct(id)
//       .subscribe(() => this.loadProducts());
//   }

//   resetForm() {
//     this.newProduct = {
//       name: '',
//       price: 0,
//       categoryId: 1,
//       initialStock: 0
//     };
//   }
// }
