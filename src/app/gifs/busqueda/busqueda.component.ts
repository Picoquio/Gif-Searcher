import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') jeje!:ElementRef<HTMLInputElement>


  constructor(private gifsService:GifsService) {} //importamos el service

  
  
  buscar() {
    
    const valor = this.jeje.nativeElement.value;

    //cortamos la ejecución de la función si se ingresa un valor vacío
    if (valor.trim().length === 0) {
      this.jeje.nativeElement.value = ''; //reinicia el input, por prolijidad
      return 
    }

    this.gifsService.buscarGifs(valor)
    
    this.jeje.nativeElement.value = '';
  }

}
