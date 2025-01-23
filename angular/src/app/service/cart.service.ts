import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: IProduct[] = [];

  getProducts = (): IProduct[] => this.cart;
  addProduct = (produit: IProduct) => this.cart.push(produit);
  removeProduct = (produit: IProduct) => this.cart.splice(this.cart.indexOf(produit), 1);

  getTotal = (): number =>this.cart.reduce((acc, product) => acc + product.price, 0);
  
}
