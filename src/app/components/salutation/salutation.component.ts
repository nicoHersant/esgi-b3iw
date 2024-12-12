import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-salutation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './salutation.component.html',
  styleUrl: './salutation.component.css'
})
export class SalutationComponent {
  message: string = 'Bienvenue dans le monde dAngular !';
}