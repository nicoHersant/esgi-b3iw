import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { IProduct } from '../../interface/product.interface';
import { CurrencyPipe, NgIf } from '@angular/common';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @Input() product!: IProduct;
  @ViewChild('cartButton') button!: ElementRef;
  cartService = inject(CartService);

  onAddToCart = () => {
    this.cartService.addProduct(this.product)
    this.button.nativeElement.style.background = "#303030";
    this.button.nativeElement.style.color = "white";
  }
  
}
