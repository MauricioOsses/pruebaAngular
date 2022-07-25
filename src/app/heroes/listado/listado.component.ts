import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['El pity', 'Juanfer', 'El oso', 'Cache', 'El pulpo']
  borrados: string = ''

  borrarHeroe(){
    this.borrados = this.heroes.shift() || '';
  }
}
