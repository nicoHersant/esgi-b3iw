import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalutationComponent } from './component/salutation/salutation.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalutationComponent, ProductComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularb3';
}