import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css'],
})
export class CardPokemonComponent implements OnInit {
  allPokemon: any[] = [];
  position: any;
  onePokemon: any;
  filterPokemon: any[] = [];
  nameFilterPokemon: any[] = [];
  isFilter: boolean = false;

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  //Función para recoger y almacenar los 151 primeros poquemon
  getPokemons() {
    this.pokemonService.mostrarPokemons().subscribe((resp: any) => {
      this.allPokemon = resp.results;
    });
  }

  //Esta función de filtro debia filtrar para que aparezcan todos los pokemon que contengan el valor del input, pero no he lo he conseguido y la dejo comentada
  filter() {
    const filterValue = this.input.nativeElement.value;
    this.filterPokemon = [];
    //Este array lo usamos para controlar los duplicados
    this.nameFilterPokemon = [];
    this.isFilter = true;
    this.allPokemon.forEach((pokemon) => {
      if (
        pokemon.name.indexOf(filterValue) !== -1 &&
        !this.nameFilterPokemon.includes(pokemon.name)
      ) {
        this.nameFilterPokemon.push(pokemon.name);
        this.filterPokemon.push(pokemon);
      }
    });
  }

  resetFilter() {
    this.filterPokemon = [];
    this.nameFilterPokemon = [];
    this.isFilter = false;
    //Con esto consigo que el input se quede vacio cuando reseteo el filtro
    this.input.nativeElement.value = '';
  }
}
