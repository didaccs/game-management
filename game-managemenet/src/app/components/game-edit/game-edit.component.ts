import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MatDialogClose, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { Game } from '../../types';
import { GameItemComponent } from '../game-item/game-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-edit',
  standalone: true,
  imports: [ MatDialogClose, MatFormFieldModule, MatFormField, FormsModule, MatButtonModule, MatInput ],
  templateUrl: './game-edit.component.html',
  styleUrl: './game-edit.component.scss'
})

export class GameEditComponent {
  constructor(
    public dialogRef: MatDialogRef<GameItemComponent>,
    @Inject(MAT_DIALOG_DATA) public originalGame: Game) { }
    game = {...this.originalGame};

    onNoClick(): void {
      this.dialogRef.close(this.originalGame);
    }
}
