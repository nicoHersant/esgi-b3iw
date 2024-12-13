import { Injectable } from '@angular/core';
import { ECategory, IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: IProduct[] = [
      { name : "Formation", price : 70, isInStock : true, category : ECategory.service },
      { name : "Site vitrine", price : 1500, isInStock : true, category : ECategory.service },
      { name : "TJM portage", price : 499.99, isInStock : true, category : ECategory.service },
      { name : "Boutique en ligne", price : 70.00, isInStock : false, category : ECategory.service },
    ];

  cart: IProduct[] = [];

    addToCart(product: IProduct) {
      this.cart.push(product);
    }
    
}
