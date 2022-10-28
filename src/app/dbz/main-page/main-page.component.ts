import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  nuevo: Personaje = {
    nombre: 'Gohan',
    poder: 16000
  }

  constructor() {}

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes
  // }

  // agregarNuevoPersonaje(argumento: Personaje) {
  //   //debugger;
  //   this.personajes.push(argumento)
  // }

    /*cambiarNombre(event: any) {
    console.log(event.target.value)
  }*/
}
