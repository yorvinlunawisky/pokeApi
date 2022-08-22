import { Component } from '@angular/core';
import { Favorite } from 'src/app/shared/models/poke.model';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
//Angular Material
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-favorites-pokes',
  templateUrl: './favorites-pokes.component.html',
  styleUrls: ['./favorites-pokes.component.scss']
})
export class FavoritesPokesComponent {
  //Variables
  favPokemons: Favorite[];
  createdAt = new Date()
  // FontAwesome Icons
  faEdit = faEdit;

  constructor(public dialog: MatDialog, private cService: CrudService) { 
    this.favPokemons = this.cService.getFavoritePokemons()
  }

  openDialog(favorite: Favorite) {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: { title: 'Favor, agregue el alias:' }
    });

    dialogRef.afterClosed().subscribe((alias: string) =>{
      this.updateAlias(alias, favorite)      
    }      
    );
  }

  updateAlias(alias: string, favorite: Favorite) {
    this.cService.updatePokeAlias(alias, favorite)
    this.favPokemons = this.cService.getFavoritePokemons()
    
  }
    removePoke(favPoke: Favorite) {
    this.cService.deletePoke(favPoke)
}
}
