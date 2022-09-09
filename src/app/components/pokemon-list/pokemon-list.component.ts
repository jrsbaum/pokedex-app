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
            const index = uniqResponse.id - 1;
            this.pokemons[index] = uniqResponse;
          });
        this.pokemonService
          .getSpecies(result.name)
          .subscribe((uniqResponse: any) => {
            this.species.push(uniqResponse);
          });
      });
    });
  }

  getImagePokemon(num: any) {
    const zeroPad = String(num).padStart(3, '0');

    return zeroPad;
  }

  getColors(type: any) {
    let x = '';

    if (type == 'grass') {
      x = '#d2f2c2';
    }

    if (type == 'poison') {
      x = '#f7cdf7';
    }

    if (type == 'fire') {
      x = '#ffd1b5';
    }

    if (type == 'flying:') {
      x = '#eae3ff';
    }

    if (type == 'water') {
      x = '#c2f3ff';
    }

    if (type == 'normal') {
      x = '#e6e6c3';
    }

    if (type == 'electric') {
      x = '#fff1ba';
    }

    if (type == 'ground') {
      x = '#e0ccb1';
    }

    if (type == 'fighting') {
      x = '#fcada9';
    }
    if (type == 'bug') {
      x = '#e0e8a2';
    }

    if (type == 'psychic') {
      x = '#ffc9da';
    }

    if (type == 'rock') {
      x = '#f0e09c';
    }

    if (type == 'fairy') {
      x = '#ffdee5';
    }

    if (type == 'steel') {
      x = '#e6eaf0';
    }

    if (type == 'ice') {
      x = '#e8feff';
    }

    if (type == 'steel') {
      x = '#e6eaf0';
    }

    if (type == 'ghost') {
      x = '#dbbaff';
    }

    if (type == 'dragon') {
      x = '#c4bdff';
    }

    if (type == 'dark') {
      x = '#a9abb0';
    }

    return x;
  }
}
