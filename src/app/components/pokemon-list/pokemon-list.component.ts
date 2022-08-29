import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  })
export class PokemonListComponent implements OnInit{
  pokemons: any[] = [];

  constructor (
    public pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons()
      .subscribe((response: any) => {
        response.results.forEach((result: { name: string; }) => {
          this.pokemonService.getDetails(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons);
            });
        })
      });
  }
}
