import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CrudService } from 'src/app/shared/services/crud.service';
import { Favorite } from 'src/app/shared/models/poke.model';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  //Pagination function
  pokemons: Favorite[] = [];
  pageSlice: Favorite[] = this.pokemons.slice(0, 20);
  //Other Variables
  faPencilAlt = faPencilAlt

  constructor(private cService: CrudService) { }

  ngOnInit(): void {
    this.cService.getPokes()
      .subscribe((data: any) => {
        data.results.forEach((result:any) => {
          this.cService.getPokesNames(result.name)         
          .subscribe((singleData: any) => {
            this.pokemons.push(singleData)
          })
        })
      });    
  }

  addToFavorites(poke: Favorite) {
    this.cService.pokemonsUpdated.push(poke);
    sessionStorage.setItem('pokemons', JSON.stringify(this.cService.pokemonsUpdated));
  }

  //Paginator function
  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.pokemons.length) {
      endIndex = this.pokemons.length
    }
    this.pageSlice = this.pokemons.slice(startIndex, endIndex);
  }
}