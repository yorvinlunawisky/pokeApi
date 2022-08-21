import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Favorite } from 'src/app/shared/models/poke.model';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
//Angular Material

@Component({
  selector: 'app-favorites-pokes',
  templateUrl: './favorites-pokes.component.html',
  styleUrls: ['./favorites-pokes.component.scss']
})
export class FavoritesPokesComponent implements OnInit {
  //Variables
  createdAt = new Date()
  favPokemons: Favorite[] = this.cService.favoritePokes;
  faEdit = faEdit;
  // favPokemons: Favorite[] = sessionStorage.getItem('pokemons');

  constructor(private cService: CrudService) { }

  ngOnInit(): void {
  }

  
}
