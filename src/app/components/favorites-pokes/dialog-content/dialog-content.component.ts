import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Favorite } from 'src/app/shared/models/poke.model';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent {
  @Input() pokeAlias:string = '';
  // @Output() aliasEvent: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

    formControl = new FormGroup({
      alias: new FormControl('', Validators.required)
  });

  //Capturing user's form input
  addAlias(form: any) {
    this.pokeAlias = (form.value.alias);
  }
} 
