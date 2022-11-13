import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent implements OnInit {
  detailsPokemon: any;
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDetailPokemon();
  }

  getDetailPokemon() {
    let namePokemon = '';
    this.route.params.subscribe((params) => {
      namePokemon = params['id'];
    });

    this.pokemonService.searchPokemon(namePokemon).subscribe((resp: any) => {
      this.detailsPokemon = resp;
      console.log(resp);
    });
  }
}
