import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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
  @ViewChild('cartButton') button!: ElementRef;
  // @ViewChildren('child1, child2') children!: QueryList<ElementRef>;
  
  onAddToCart = () => {
    this.addToCart.emit(this.product);
    this.button.nativeElement.style.background = "#303030";
    this.button.nativeElement.style.color = "white";
  }
  
}
