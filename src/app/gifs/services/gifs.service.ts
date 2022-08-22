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
  constructor(private http: HttpClient) { }



  buscarGifs(query: string) {

    query = query.trim().toLowerCase(); // los argumentos recibos serán en minúscula.

    // evitamos duplicados
    if (!this._historial.includes(query)) {
      this._historial.unshift(query)

      //asigna a this._historial el valor de los 10 primeros elementos eliminados
      this._historial = this._historial.splice(0, 10)
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=FLtmROL8EJML4jf0tud27tQWia4aLmeu&q=${query}&limit=10`)
      .subscribe((resp) => {
        console.log(resp);
        this.resultados = resp.data;

      })

  }

}
