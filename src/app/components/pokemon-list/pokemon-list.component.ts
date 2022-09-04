import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  species: any[] = [];

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((response: any) => {
      response.results.forEach((result: { name: string }) => {
        this.pokemonService
          .getDetails(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
          });
        this.pokemonService
          .getSpecies(result.name)
          .subscribe((uniqResponse: any) => {
            this.species.push(uniqResponse);
          });
      });
    });
  }

  getImagePokemon(idx: any) {
    let s = '00';

    if (idx >= 9) {
      s = '0';
    }
    if (idx >= 99) {
      s = '';
    }

    return s;
  }
}
