import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPokemonComponent } from './pokemon/card-pokemon/card-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: CardPokemonComponent,
    pathMatch: 'full',
  },
  {
    path: 'detail/:id',
    component: DetailPokemonComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
