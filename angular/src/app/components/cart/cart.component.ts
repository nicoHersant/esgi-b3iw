import { Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { NgFor, NgIf } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from "../../product/product.component";
import { ProductDatailComponent } from "../product-datail/product-datail.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgFor, ProductComponent, ProductDatailComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  productService = inject(ProductService);
  cart: IProduct[] = [];

  ngOnInit() {
    this.cart = this.productService.cart;
  }

}
