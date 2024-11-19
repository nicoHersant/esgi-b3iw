import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalutationComponent } from "./salutation/salutation.component";
import { FormsModule } from '@angular/forms';
import { ProduitListeComponent } from "./produit-liste/produit-liste.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalutationComponent, FormsModule, ProduitListeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anguclem';
}
