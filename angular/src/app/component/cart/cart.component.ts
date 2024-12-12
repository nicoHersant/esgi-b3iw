import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../interface/product.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartService = inject(CartService);
  products: IProduct[] = [];

  ngOnInit(): void {
    this.products = this.cartService.getItems();
  }

  get total(): number {
    return this.cartService.getTotal();
  }

  removeFromCart(product: IProduct) {
    this.cartService.removeFromCart(product);
    this.products = this.cartService.getItems(); 
  }
}