import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-salutation',
  standalone: true,
  imports: [FormsModule,FormsModule,CommonModule],
  templateUrl: './salutation.component.html',
  styleUrl: './salutation.component.scss'
})
export class SalutationComponent {

  message: string = 'Bienvenue dans le monde d\'Angular !'
}
