import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { ECategory, IProduct } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : WritableSignal<IProduct[]> = signal([]);
  total = signal(0);

  constructor() {
    console.log(this.cart())
    effect(() => { 
      console.log(`The total is: ${this.total()}`);    
    });  
  }

  getProducts = (): IProduct[] => this.cart();
  addProduct = (product: IProduct) => {
    this.cart.update(oldCart => [...oldCart, product]);
    this.total.update(oldTotal => oldTotal + product.price)
  }
  removeProduct = (product: IProduct) => {
    this.cart.update(oldCart => oldCart.splice(oldCart.indexOf(product), 1));
    this.total.update(oldTotal => oldTotal - product.price)
  }


}
