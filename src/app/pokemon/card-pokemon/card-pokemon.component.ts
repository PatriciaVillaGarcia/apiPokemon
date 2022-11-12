import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css'],
})
export class CardPokemonComponent implements OnInit {
  public allPokemon: any[] = [];
  position: any;
  onePokemon: any;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.mostrarPokemons().subscribe((resp: any) => {
      console.log(resp.results);
      this.allPokemon = resp.results;
    });
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.allPokemon.forEach((pokemon, i) => {
      if (pokemon.name == filterValue) {
        this.position = i;
        this.onePokemon = pokemon;
      }
    });
    console.log(this.onePokemon);
    console.log(this.position);
  }

  resetFilter() {
    this.onePokemon = '';
    console.log(this.onePokemon);
  }
}
