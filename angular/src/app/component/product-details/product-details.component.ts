import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../interface/product.interface';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
  @Input() product: IProduct | null = null;
  @Output() addToCart = new EventEmitter<IProduct>();

  onAddToCart() {
    if (this.product && this.product.isInStock) {
      this.addToCart.emit(this.product);
    }
  }
}
