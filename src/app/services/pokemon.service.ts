import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  //Get Pokemons
  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  }

  //Get More Pokemon Data
  getDetails(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getSpecies(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${name}/`);
  }
}
