import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: IProduct[] = [];

  addToCart(product: IProduct) {
    this.items.push(product);
  }

  removeFromCart(product: IProduct) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  getItems(): IProduct[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((sum, product) => sum + product.price, 0);
  }
}