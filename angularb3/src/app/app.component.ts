import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalutationComponent } from './component/salutation/salutation.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalutationComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularb3';
}
