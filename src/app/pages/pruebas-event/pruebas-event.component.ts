import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pruebas-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pruebas-event.component.html',
  styleUrl: './pruebas-event.component.scss'
})
export class PruebasEventComponent {
  person = {
    name: 'Ivan',
    age: 26,
    genre : 'male'
  }
}
