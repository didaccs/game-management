import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { TruncateNamePipe } from '../../pipes/truncate-name.pipe';
import { MatDialogRef, MatDialogClose, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [ MatButtonModule, TruncateNamePipe, MatDialogClose, MatIcon ],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public itemName: string) { }
      
    onCancelClick(): void {
      this.dialogRef.close(false);
    }

    onAcceptClick(): void {
      this.dialogRef.close(true);
    }
}
