import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalutationComponent } from './components/salutation/salutation.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from "./components/cart/cart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalutationComponent, ProductComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularb3';
}
