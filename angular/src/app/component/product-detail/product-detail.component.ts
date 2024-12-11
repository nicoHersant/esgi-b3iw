import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../interface/product.interface';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @Input() product!: IProduct;
  @Output() addToCart = new EventEmitter<IProduct>();
  
  onAddToCart = () => this.addToCart.emit(this.product);
  
}
