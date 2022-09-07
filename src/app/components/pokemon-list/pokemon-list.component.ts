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

    if (tipo == 'normal') {
      x = '#e6e6c3';
    }

    if (tipo == 'electric') {
      x = '#fff1ba';
    }

    if (tipo == 'ground') {
      x = '#e0ccb1';
    }

    if (tipo == 'fighting') {
      x = '#fcada9';
    }
    if (tipo == 'bug') {
      x = '#e0e8a2';
    }

    if (tipo == 'psychic') {
      x = '#ffc9da';
    }

    if (tipo == 'rock') {
      x = '#f0e09c';
    }

    if (tipo == 'fairy') {
      x = '#ffdee5';
    }

    if (tipo == 'steel') {
      x = '#e6eaf0';
    }

    if (tipo == 'ice') {
      x = '#e8feff';
    }

    if (tipo == 'steel') {
      x = '#e6eaf0';
    }

    if (tipo == 'ghost') {
      x = '#dbbaff';
    }

    if (tipo == 'dragon') {
      x = '#c4bdff';
    }

    if (tipo == 'dark') {
      x = '#a9abb0';
    }

    return x;
  }
}
