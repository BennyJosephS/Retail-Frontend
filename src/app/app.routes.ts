import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Cart } from './components/cart/cart';
import { Checkout } from './components/checkout/checkout';

export const routes: Routes = [
  { path: '', component: Products },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout }
];