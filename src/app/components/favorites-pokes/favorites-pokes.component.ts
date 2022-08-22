import { Component } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';
import { Favorite } from 'src/app/shared/models/poke.model';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
//Angular Material
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-favorites-pokes',
  templateUrl: './favorites-pokes.component.html',
  styleUrls: ['./favorites-pokes.component.scss']
})
export class FavoritesPokesComponent {
  //Variables
  sStorageUpdated: any;
  createdAt = new Date()
  // favPokemons: Favorite[] = this.cService.favoritePokesStored;
  faEdit = faEdit;
  favPokemons: any = JSON.parse(sessionStorage.getItem('pokemons')!);

  constructor(
              private cService: CrudService, 
              public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: { title: 'Favor, agregue el alias:' }
    });

    dialogRef.afterClosed()
  }

  removePoke(favPoke: Favorite) {
    for(let i = 0; i < this.favPokemons.length; i++)
    if(this.favPokemons[i]["name"] == favPoke.name) {
      this.favPokemons.splice(i, 1)
    }    
    this.sStorageUpdated = sessionStorage.setItem('pokemons',  JSON.stringify(this.favPokemons));
  }
}
