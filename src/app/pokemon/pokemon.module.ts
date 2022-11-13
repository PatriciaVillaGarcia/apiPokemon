import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { FormsModule } from '@angular/forms';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';

@NgModule({
  declarations: [CardPokemonComponent, DetailPokemonComponent],
  imports: [CommonModule, FormsModule],
  exports: [CardPokemonComponent, DetailPokemonComponent],
})
export class PokemonModule {}
