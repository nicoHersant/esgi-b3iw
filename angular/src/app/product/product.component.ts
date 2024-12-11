import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { IProduct, ECategory } from '../interface/product.interface';
import { StatusPipe } from '../shared/pipes/status.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, NgIf, StatusPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products = [
    { name : "Formation", price : 70, isInStock : true, category : ECategory.service },
    { name : "Site vitrine", price : 1500, isInStock : true, category : ECategory.service },
    { name : "TJM portage", price : 499.99, isInStock : true, category : ECategory.service },
    { name : "Boutique en ligne", price : 70.00, isInStock : false, category : ECategory.service },
  ];
  

}
