import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [SearchComponent, CardPokemonComponent, InfoComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchComponent, CardPokemonComponent, InfoComponent],
})
export class PokemonModule {}
