import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { FavoritesPokesComponent } from './components/favorites-pokes/favorites-pokes.component';
import { EditPokesComponent } from './components/edit-pokes/edit-pokes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material Modules
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    FavoritesPokesComponent,
    EditPokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
