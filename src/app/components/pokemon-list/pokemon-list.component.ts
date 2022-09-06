import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  species: any[] = [];
  lists: any[] = [];
  // list = [
  //   '#d2f2c2',//grass:
  //   '#f7cdf7',//poison:
  //   '#ffd1b5',//fire:
  //   '#eae3ff',// flying:
  //   '#c2f3ff',//water:
  //   '#e0e8a2',//bug:
  //   '#e6e6c3',//normal:
  //   '#fff1ba',//electric:
  //   '#e0ccb1',//ground:
  //   '#fcada9',//fighting:
  //   '#ffc9da',//psychic:
  //   '#f0e09c',//rock:
  //   '#ffdee5',//fairy:
  //   '#e6eaf0',//steel:
  //   '#e8feff',//ice:
  //   '#dbbaff',//ghost:
  //   '#c4bdff',//dragon:
  //   '#a9abb0',//dark:
  // ];

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

  getColors(tipo: any) {
    let x = '';
    if (tipo == 'grass') {
      x = '#d2f2c2';
    }
    if (tipo == 'poison') {
      x = '#f7cdf7';
    }
    if (tipo == 'fire') {
      x = '#ffd1b5';
    }
    if (tipo == 'flying:') {
      x = '#eae3ff';
    }
    if (tipo == 'water') {
      x = '#c2f3ff';
    }

    return x;
  }
}
