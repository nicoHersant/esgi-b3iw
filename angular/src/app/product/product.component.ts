import { Component, ElementRef, inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { IProduct, ECategory } from '../interfaces/product.interface';
import { StatusPipe } from '../shared/pipes/status.pipe';
import { ProductService } from '../services/product.service';
import { ProductDatailComponent } from "../components/product-datail/product-datail.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, NgIf, StatusPipe, ProductDatailComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit, OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method  not implemented.');
  }

  productService = inject(ProductService);
  products: IProduct[] = this.productService.products;
  selectedProduct: IProduct | undefined;


  ngOnInit() {
    this.products = this.productService.products;
    console.log(this.products);
  }

  addToCart(product: IProduct): void {
    this.productService.addToCart(product);
  }

  checkDetail(product: IProduct): void {
    this.selectedProduct = product;
  }

}
