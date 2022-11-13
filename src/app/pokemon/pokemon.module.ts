import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { FormsModule } from '@angular/forms';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

@NgModule({
  declarations: [SearchComponent, CardPokemonComponent, DetailPokemonComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchComponent, CardPokemonComponent, DetailPokemonComponent],
})
export class PokemonModule {}
