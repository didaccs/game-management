import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Game } from '../../../types';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { TruncateNamePipe } from '../../../pipes/truncate-name.pipe';
import { GameEditComponent } from "../game-edit/game-edit.component";
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { ConfirmationModalComponent } from '../../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-game-item',
  standalone: true,
  imports: [MatCardModule, DatePipe, MatButtonModule, TruncateNamePipe, MatIcon],
  templateUrl: './game-item.component.html',
  styleUrl: './game-item.component.scss'
})
export class GameItemComponent {
  constructor(private gameEditComponent: MatDialog) { }

  @Input() game!: Game;
  @Output() deleteGameEvent = new EventEmitter<Game>();
  @Output() editGameEvent = new EventEmitter<Game>();

  openGameEdit(): void {
    const editDialogRef = this.gameEditComponent.open(GameEditComponent, { data: this.game });

    editDialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.editGameEvent.emit(result);
      }
    });
  }

  onGameDelete(): void {
    const deleteDialogRef = this.gameEditComponent.open(ConfirmationModalComponent, { data: this.game.name });

    deleteDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteGameEvent.emit(this.game);
      }
    });
  }
}
