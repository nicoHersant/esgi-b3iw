import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EproductCategory } from '../interface/produit';
import { MajusculePipe } from '../shared/pipes/majuscule.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MajusculePipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  produits = [
    { nom: 'banane', prix: 10, enStock: true, EproductCategory: EproductCategory.produit },
    { nom: 'abricot', prix: 20, enStock: false, EproductCategory: EproductCategory.produit },
    { nom: 'vacances', prix: 30, enStock: true, EproductCategory: EproductCategory.service },
  ];
}
