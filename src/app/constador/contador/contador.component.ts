import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
    <div class="counter_container">
      <h1>{{title}}</h1>
      <h3>La base es: <strong>{{base}}</strong></h3>
        <button (click)="acumular(+base);">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base);">-{{base}}</button>
    </div>
  `
})
export class ContadorComponent {
  title: string = 'Contador App';
  numero: number = 0;
  base: number = 5;

  acumular = (valor: number) => {
    this.numero += valor;
  }
}
