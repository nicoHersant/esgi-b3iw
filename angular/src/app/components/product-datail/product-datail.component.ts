import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-datail',
  standalone: true,
  imports: [],
  templateUrl: './product-datail.component.html',
  styleUrl: './product-datail.component.scss'
})
export class ProductDatailComponent {

  @ViewChild('buttonAddCart') buttonAddCart!: ElementRef;
  disableButton(): void {
    console.log(this.buttonAddCart);
    if (this.buttonAddCart) {
      this.buttonAddCart.nativeElement.style.backgroundColor = 'purple';
    }
  }

  @Input() selectedProduct!: IProduct;
  @Output() addToCart = new EventEmitter<IProduct>();

  OnAddToCart(): void {
    if (this.selectedProduct) {
      this.addToCart.emit(this.selectedProduct);
      this.disableButton();
    }
  }
}
