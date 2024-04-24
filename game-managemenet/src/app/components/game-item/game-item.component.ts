import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Game } from '../../types';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { TruncateNamePipe } from '../../pipes/truncate-name.pipe';
import { GameEditComponent } from "../game-edit/game-edit.component";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-game-item',
  standalone: true,
  imports: [ MatCardModule, DatePipe, MatButtonModule, TruncateNamePipe ],
  templateUrl: './game-item.component.html',
  styleUrl: './game-item.component.scss'
})
export class GameItemComponent {
  constructor(private gameEditComponent: MatDialog) {}

  @Input() game!: Game;

  openGameEdit(): void {
    const gameDialogRef = this.gameEditComponent.open(GameEditComponent, {data: this.game});
    
    gameDialogRef.afterClosed().subscribe(result => {
      this.game = result;
    });
  }
}
