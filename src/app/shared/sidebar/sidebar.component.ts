import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { } //importamos el service

  get historieta() {
    return this.gifsService.historial
  }

  buscar(termino: string) {
    console.log(termino);
    
    this.gifsService.buscarGifs(termino)
    
  }

}
