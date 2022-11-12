import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private _searchHistory: string[] = [];

  public resultados: any[] = [];
  public resultados2: any[] = [];

  // private url: string = 'https://pokeapi.co/api/v2/pokemon/';

  get searchHistory() {
    return [...this._searchHistory];
  }

  constructor(private http: HttpClient) {}

  //Método para buscar un pokemon
  searchPokemon(query: string) {
    //Para almacenar el historial de busqueda
    this._searchHistory.unshift(query);

    console.log(this._searchHistory);

    this.http
      .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      .subscribe((resp: any) => {
        console.log(resp.results);
        this.resultados = resp.results;
      });
  }

  mostrarPokemons() {
    return this.http.get(
      'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'
    );
  }
}
