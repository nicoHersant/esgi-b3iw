import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct, ECategory } from '../../interface/product.interface';
import { StatusPipe } from '../../shared/pipes/status.pipe';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, StatusPipe, ProductDetailsComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: IProduct[] = [
    { name: 'Iphone 15', price: 70, isInStock: true, description: 'Un téléphone' , category: ECategory.service },
    { name: 'Petit site', price: 500, isInStock: true, description: 'Un tout petit site de rien du tout', category: ECategory.service },
    { name: 'Grand site', price: 1599.99, isInStock: true, description:'Un Giga site pour les Giga client', category: ECategory.service },
    { name: 'Boutique en ligne', price: 2270.00, isInStock: false, description: 'Un site E-Commerce pour les gros vendeurs', category: ECategory.service },
  ];

  selectedProduct: IProduct | null = null;

  constructor(private cartService: CartService) {}

  selectProduct(product: IProduct) {
    this.selectedProduct = product;
  }

  onAddToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }
}
