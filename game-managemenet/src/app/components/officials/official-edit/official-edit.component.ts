import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialogClose, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button'
import { Official } from '../../../types';
import { OfficialItemComponent } from '../official-item/official-item.component';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-official-edit',
  standalone: true,
  imports: [ MatDialogClose, MatFormFieldModule, MatFormField, FormsModule, MatButtonModule, MatSlideToggleModule,
    MatInput, MatIcon, MatDatepickerModule, MatNativeDateModule ],
  templateUrl: './official-edit.component.html',
  styleUrl: './official-edit.component.scss'
})

export class OfficialEditComponent {
  constructor(
    public dialogRef: MatDialogRef<OfficialItemComponent>,
    @Inject(MAT_DIALOG_DATA) public originalOfficial: Official) { }

    official = {...this.originalOfficial};

    onCancelClick(): void {
      this.dialogRef.close(null);
    }

    onAcceptClick(): void {
      this.dialogRef.close(this.official);
    }

    onFileChange(event: any) {
      const files = event.target.files as FileList;
  
      if (files.length > 0) {
        const _file = URL.createObjectURL(files[0]);
        this.official.avatar = _file;
        this.resetInput();
      }
    }
  
    resetInput() {
      const input = document.getElementById('avatar-input-file') as HTMLInputElement;
      if (input) {
        input.value = "";
      }
    }

    
}
