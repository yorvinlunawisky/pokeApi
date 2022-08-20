import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favorite } from '../shared/models/poke.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //Pokemons API
  pokeApi = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  //Poke List
  Pokes: any[] = [];
  Favoritepokes:Favorite[] = [];

  constructor(private http: HttpClient) { }

  getPokes() {
    return this.http.get(this.pokeApi);
  }

  getPokesNames(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
