import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';

@NgModule({
  declarations: [SearchComponent, CardPokemonComponent],
  imports: [CommonModule],
  exports: [SearchComponent, CardPokemonComponent],
})
export class PokemonModule {}
