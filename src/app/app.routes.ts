import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Cart } from './components/cart/cart';
import { Checkout } from './components/checkout/checkout';
import { ProductDetail } from './components/product-detail/product-detail';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [
  { path: '', component: Products },
  { path: 'product/:id', component: ProductDetail },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout },
  { path: 'login', component: Login },
  { path: 'register', component: Register }
];