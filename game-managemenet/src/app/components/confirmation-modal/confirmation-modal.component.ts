import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { TruncateNamePipe } from '../../pipes/truncate-name.pipe';
import { MatDialogRef, MatDialogClose, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { GameItemComponent } from '../game-item/game-item.component';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [ MatButtonModule, TruncateNamePipe, MatDialogClose, MatIcon ],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {
  constructor(
    public dialogRef: MatDialogRef<GameItemComponent>,
    @Inject(MAT_DIALOG_DATA) public itemName: string) { }
      
    onCancelClick(): void {
      this.dialogRef.close(false);
    }

    onAcceptClick(): void {
      this.dialogRef.close(true);
    }
}
