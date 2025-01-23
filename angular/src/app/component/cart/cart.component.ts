import { Component, computed, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { IProduct } from '../../interface/product.interface';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService = inject(CartService);
  products = computed(() => this.cartService.cart());
  total = computed(() => this.cartService.total());
  removeProduct = (product: IProduct) => this.cartService.removeProduct(product);

}
