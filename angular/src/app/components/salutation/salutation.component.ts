import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-salutation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './salutation.component.html',
  styleUrl: './salutation.component.scss'
})
export class SalutationComponent {
  message: string = 'Eductive Angular';
}