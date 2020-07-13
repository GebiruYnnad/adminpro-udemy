import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { 
    

    this.contarTres().then( mensaje => console.log(mensaje) )
    .catch( error => console.error('Error en la Promesa', error) );

  }

  ngOnInit(): void {
  }

  contarTres() {
    return new Promise( (resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;
        if (contador === 3) {
          resolve('OK!');
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
