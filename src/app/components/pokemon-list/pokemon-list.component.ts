import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  pokemon: string;
  number: number;
  type: string;

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((response: any) => {
      response.results.forEach((result: { name: string }) => {
        this.pokemonService
          .getDetails(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
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

  pad(num: any, size: any) {
    num = num.toString();
    while (num.length < size) num = '0' + num;
    return num;
  }
}
