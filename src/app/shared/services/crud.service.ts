import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favorite } from '../models/poke.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  //Pokemons API
  pokeApi = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  //Pokemons variables
  pokemons: Favorite[] = [];
  pokemonsUpdated = [...this.pokemons]
  favoritePokes:Favorite[] = [];
  favoritePokesStored = [...this.favoritePokes]

  constructor(private http: HttpClient) { }

  getPokes() {
    return this.http.get(this.pokeApi);
  }

  getPokesNames(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
