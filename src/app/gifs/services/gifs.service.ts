import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  //api_key de giphy
  private apiKey: string = 'FLtmROL8EJML4jf0tud27tQWia4aLmeu'
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'
  private _historial: string[] = []

  public resultados: Gif[] = []

  get historial() {
    return [...this._historial]
  }


  //inyectamos HttpClient
  constructor(private http: HttpClient) {

    /* ponemos el siguiente código dentro del constructor porque se ejecuta una única vez cuando
    el servicio es llamado*/


    /*asigna al array "_historial el contenido del key 'historial' del localStorage 
    si viene null, asigna un array vació*/
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    //lo mismo que el de arriba
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
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


    //genera un objeto que luego será utilizado en la petición GET
    const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', query);

        
    //petición GET http
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe((resp) => {
    
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados))

      })

  }

}
