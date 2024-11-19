import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduit, ECategorie } from '../interface/produit';

@Component({
  selector: 'app-produit-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit-liste.component.html',
  styleUrls: ['./produit-liste.component.css']
})
export class ProduitListeComponent {
  produits: IProduit[] = [
    { name: 'iPhone 15', price: 1999, isInStock: false, categorie: ECategorie.Produit},
    { name: 'Nettoyer PC', price: 50, isInStock: true, categorie: ECategorie.Service },
  ];
}
