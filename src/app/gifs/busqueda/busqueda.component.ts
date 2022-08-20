import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') jeje!:ElementRef<HTMLInputElement>
  
  buscar() {
    console.log(this.jeje);
    
    console.log(this.jeje.nativeElement.value);
    
    this.jeje.nativeElement.value = '';
  }

}
