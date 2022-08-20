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

    this.gifsService.buscarGifs(valor)
    
    this.jeje.nativeElement.value = '';
  }

}
