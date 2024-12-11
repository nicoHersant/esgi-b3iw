import { Component } from '@angular/core';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { IProduct, ECategory } from '../../interface/product.interface';
import { StatusPipe } from '../../shared/pipes/status.pipe';
import { CartService } from '../../service/cart.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, NgIf, StatusPipe, CurrencyPipe, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  selected: IProduct | undefined;
  products = [
    { name : "Formation", price : 70, isInStock : true, category : ECategory.service, info: 'tout niveaux' },
    { name : "Site vitrine", price : 1500, isInStock : true, category : ECategory.service, info: 'pas cher' },
    { name : "TJM portage", price : 499.99, isInStock : true, category : ECategory.service },
    { name : "Boutique en ligne", price : 70.00, isInStock : false, category : ECategory.service, info: 'trop bien' },
  ];
  
  constructor(private cartService: CartService) {}
  
  selectProduct = (product: IProduct) => this.selected = product;
  
  onAddToCart(product: IProduct) {
    this.cartService.addProduct(product);
    console.log('Produit ajouté au panier : ', product);
    // alert(`${product.name} a été ajouté au panier !`);
  }
}
