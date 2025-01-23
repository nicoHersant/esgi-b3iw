import { Component, inject, computed } from '@angular/core';
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
export class CartComponent {
  cartService = inject(CartService);
  products = computed(() => this.cartService.getItems());
  total = this.cartService.getTotal();

  removeFromCart(product: IProduct) {
    this.cartService.removeFromCart(product);
  }
}
