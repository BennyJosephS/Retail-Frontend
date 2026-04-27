// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { CreateProduct, Product } from '../models/product';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AdminService 
// {
//    private baseUrl = 'https://localhost:5001/api';

//   constructor(private http: HttpClient) {}

//   // PRODUCTS
//   getProducts(): Observable<Product[]> {
//     return this.http.get<Product[]>(${this.baseUrl}/products);
//   }

//   createProduct(data: CreateProduct) {
//     return this.http.post(${this.baseUrl}/products, data);
//   }

//   updateProduct(id: number, data: any) {
//     return this.http.put(${this.baseUrl}/products/${id}, data);
//   }

//   deleteProduct(id: number) {
//     return this.http.delete(${this.baseUrl}/products/${id});
//   } 
// }
