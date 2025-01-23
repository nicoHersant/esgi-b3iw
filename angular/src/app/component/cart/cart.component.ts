import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class CartComponent implements OnInit, OnChanges{
  cartService = inject(CartService);
  products: IProduct[] = [];

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  get total(): number {
    return this.cartService.getTotal();
  }

  removeProduct = (product: IProduct) => this.cartService.removeProduct(product);

}
