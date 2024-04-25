import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MatDialogClose, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button'
import { Game } from '../../types';
import { GameItemComponent } from '../game-item/game-item.component';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-game-edit',
  standalone: true,
  imports: [ MatDialogClose, MatFormFieldModule, MatFormField, FormsModule, MatButtonModule, MatSlideToggleModule,
    MatInput, MatIcon, MatDatepickerModule, MatNativeDateModule ],
  templateUrl: './game-edit.component.html',
  styleUrl: './game-edit.component.scss'
})

export class GameEditComponent {
  constructor(
    public dialogRef: MatDialogRef<GameItemComponent>,
    @Inject(MAT_DIALOG_DATA) public originalGame: Game) { }

    game = {...this.originalGame};

    onCancelClick(): void {
      this.dialogRef.close(null);
    }

    onAcceptClick(): void {
      this.dialogRef.close(this.game);
    }

    
}
