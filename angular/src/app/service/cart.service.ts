import { Injectable, signal, WritableSignal } from '@angular/core';
import { ECategory, IProduct } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : WritableSignal<IProduct[]> = signal([
    { name : "Formation", price : 70, isInStock : true, category : ECategory.service, info: 'tout niveaux' },
    { name : "Site vitrine", price : 1500, isInStock : true, category : ECategory.service, info: 'pas cher' },
    { name : "TJM portage", price : 499.99, isInStock : true, category : ECategory.service },
    { name : "Boutique en ligne", price : 70.00, isInStock : false, category : ECategory.service, info: 'trop bien' },
  ]);
  total = signal(0);

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
