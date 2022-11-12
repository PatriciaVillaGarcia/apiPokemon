import { Component, ElementRef, ViewChild } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  name: string = '';
  pokemon_name: string = '';
  abilities: string[] = [];
  pokemon_image: string = '';
  order: string = '';

  constructor(private pokemonService: PokemonService) {}

  search() {
    this.pokemonService.searchPokemon(this.name).subscribe((data: any) => {
      console.log(data);

      (this.pokemon_name = data.name),
        (this.pokemon_image = data.sprite.front_default),
        (this.order = data.order);
    });
  }
}
