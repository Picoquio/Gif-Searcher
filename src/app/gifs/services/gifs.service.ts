import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = []

  get historial() {
    return [...this._historial]
  }

  buscarGifs(query:string) {

    query = query.trim().toLowerCase(); // los argumentos recibos serán en minúscula.

    if (this._historial.includes(query)) {
      return /* si lo ingresado en la caja de texto ya se encuentra en el array, 
      corta la ejecución de la función */
    }

    this._historial.unshift(query)
    
    //asigna a this._historial el valor de los 10 primeros elementos eliminados
    this._historial = this._historial.splice(0,10)
    
    
    
  }

}
