import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1> 
        <h3> la base es: <strong>{{base}}</strong></h3>
        <button (click)="acumular(base)"> + 5 </button>
    
        <span>{{numero}}</span>
    
        <button (click)="acumular(-base)"> - 5 </button>
    `
})
export class contadorComponent {
    title: string = 'ContadorApp';
    numero: number = 10;
    base: number = 5;
  
    acumular( valor: number ){
      this.numero += valor;
    }
}