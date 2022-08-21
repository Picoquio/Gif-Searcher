import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
 
})
export class ResultadosComponent {

  //obtenemos el array resultados
  get resultados () {
    return this.gifsService.resultados
  }
  
  //inyectamos el servicio
  constructor( private gifsService: GifsService) { }

}
