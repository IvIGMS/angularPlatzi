import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  title = 'My App';
  list = ['cafe','azucar', 'leche', 'agua']
  name = 'Ivan';
  img = 'https://saoviajes.es/wp-content/uploads/2023/03/FOTOS-Imagen-para-blog-19-585x390.png';
  person : any= {
    name: 'Ivan Frias',
    age: 26,
    genre: 'Masculino'
  };

  clickHandler(){
    alert('Hola')
  }

  changeHandler(event: Event){
    console.log(event)
  }


}


