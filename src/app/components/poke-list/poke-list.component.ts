import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Favorite } from 'src/app/shared/models/poke.model';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  pokemons: any[] = [];

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
        console.log(data.name)
      })      

  }
}