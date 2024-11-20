import { Component } from '@angular/core';
import { ECategory, IProduct } from '../../interface/product';
import { CommonModule } from '@angular/common';
import { Capitalize } from '../../shared/pipes/capitalize.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, Capitalize],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  products:IProduct[] = [
    {name: 'Faire la vaisselle', price: 0, inStock: false, category: ECategory.Service},
    {name: 'Sortir les poubelles', price: 8, inStock: false, category: ECategory.Service},
    {name: 'Faire les courses', price: 6, inStock: true, category: ECategory.Product},
  ];

}