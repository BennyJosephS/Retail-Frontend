import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToProducts() {
    this.router.navigate(['/products']);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  goToOffers() {
    this.router.navigate(['/offers']);
  }
}