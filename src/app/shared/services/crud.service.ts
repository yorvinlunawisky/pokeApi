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
  // pokemons: Favorite[] = [];
  favoritePokes:Favorite[] = [];

  constructor(private http: HttpClient) { 
    
  }

  getPokes() {
    return this.http.get(this.pokeApi);
  }

  getPokesNames(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getFavoritePokemons(): Favorite[] {
    return JSON.parse(sessionStorage.getItem('pokemons')!);
  }

  addToFavorite(poke: Favorite) {    
    const favoritesPokes = JSON.parse(sessionStorage.getItem('pokemons') as string) || []
    sessionStorage.setItem('pokemons', JSON.stringify([
      ...favoritesPokes, poke 
    ]));
    this.refreshFavorites()
  }

  deletePoke(favPoke: Favorite ) {
    const favoritesPokes = JSON.parse(sessionStorage.getItem('pokemons') as string) || []
    const favoritePokesUpdated = favoritesPokes.filter((item: Favorite) => item.name !== favPoke.name)
    sessionStorage.setItem('pokemons', JSON.stringify(favoritePokesUpdated))
    this.favoritePokes = this.getFavoritePokemons()
    this.refreshFavorites()
  }

  updatePokeAlias(alias: string, favPoke: Favorite) {
    const favoritesPokes = JSON.parse(sessionStorage.getItem('pokemons') as string) || []
    const favoriteIndex = favoritesPokes.findIndex((item: Favorite) => item.name === favPoke.name)
    favoritesPokes[favoriteIndex].alias = alias
    sessionStorage.setItem('pokemons', JSON.stringify(favoritesPokes))
    this.refreshFavorites()
  }

  refreshFavorites() {
    this.favoritePokes = this.getFavoritePokemons()
  }
}
