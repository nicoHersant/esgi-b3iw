import { Injectable, signal, computed, effect } from '@angular/core';
import { IProduct } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = signal<IProduct[]>(this.loadItemsFromLocalStorage());

  constructor() {
    effect(() => {
      this.saveItemsToLocalStorage(this.items());
    });
  }

  addToCart(product: IProduct) {
    this.items.update(items => [...items, product]);
  }

  removeFromCart(product: IProduct) {
    this.items.update(items => items.filter(item => item !== product));
  }

  getItems() {
    return this.items();
  }

  getTotal() {
    return computed(() => this.items().reduce((sum, product) => sum + product.price, 0));
  }

  private loadItemsFromLocalStorage(): IProduct[] {
    const items = localStorage.getItem('cartItems');
    return items ? JSON.parse(items) : [];
  }

  private saveItemsToLocalStorage(items: IProduct[]) {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }
}
