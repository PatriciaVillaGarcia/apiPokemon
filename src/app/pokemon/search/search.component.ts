import { Component, ElementRef, ViewChild } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @ViewChild('buscador') buscador!: ElementRef<HTMLInputElement>;

  constructor(private pokemonService: PokemonService) {}

  buscar() {
    //Utilizo este console.log para saber que tipo de elemento es buscador, en este caso es ElementRef y le pongo un ! para que angular no me de errores.
    console.log(this.buscador);

    const valor = this.buscador.nativeElement.value;
    this.pokemonService.searchPokemon(valor);

    //Esta linea consigue que el imput se quede en blanco despues de presionar enter
    this.buscador.nativeElement.value = '';
  }
}
