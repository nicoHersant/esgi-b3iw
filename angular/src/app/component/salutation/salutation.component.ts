import { NgIf } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-salutation',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './salutation.component.html',
  styleUrl: './salutation.component.scss'
})
export class SalutationComponent implements OnInit, OnChanges {
  message: string = "empty";
  count: number = 0;

  ngOnInit(): void {
    this.message = 'Eductive Angular';
  }

  ngOnChanges() {
    this.count++;
  }
}