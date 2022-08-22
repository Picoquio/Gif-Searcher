import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  //api_key de giphy
  private apiKey: string = 'FLtmROL8EJML4jf0tud27tQWia4aLmeu'
  private _historial: string[] = []

  public resultados: Gif[] = []

  get historial() {
    return [...this._historial]
  }


  //inyectamos HttpClient
  constructor(private http: HttpClient) { 
    
    // si en el localStorage existe la key 'historial', al array ._historial le asigna su valor (parseado por supuesto)
    if( localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    }
  }



  buscarGifs(query: string) {

    query = query.trim().toLowerCase(); // los argumentos recibos serán en minúscula.

    // evitamos duplicados
    if (!this._historial.includes(query)) {
      this._historial.unshift(query)

      //asigna a this._historial el valor de los 10 primeros elementos eliminados
      this._historial = this._historial.splice(0, 10)

      //mandamos el array _historial al localStorage en forma de JSON
      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=FLtmROL8EJML4jf0tud27tQWia4aLmeu&q=${query}&limit=10`)
      .subscribe((resp) => {
        console.log(resp);
        this.resultados = resp.data;

      })

  }

}
