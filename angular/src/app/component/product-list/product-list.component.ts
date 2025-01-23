import { Component, computed, Inject } from '@angular/core';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { IProduct, ECategory } from '../../interface/product.interface';
import { StatusPipe } from '../../shared/pipes/status.pipe';
import { CartService } from '../../service/cart.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, NgIf, StatusPipe, CurrencyPipe, ProductDetailComponent, NgbCollapseModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  cartService = Inject(CartService);
  selected: IProduct | undefined;
  products = computed(() => this.cartService.cart())
  
  selectProduct = (product: IProduct) => this.selected = product;
  onAddToCart = (product: IProduct) => this.cartService.addProduct(product);
}
