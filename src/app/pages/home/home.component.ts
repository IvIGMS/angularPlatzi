import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  list = [
    'Buy food',
    'Clean my room',
    'Close the project',
    'Choose a movie',
    'Wash clothes'
  ]
}
