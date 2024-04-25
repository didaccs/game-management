import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { Official } from '../../../types';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { TruncateNamePipe } from '../../../pipes/truncate-name.pipe';
import { OfficialEditComponent } from "../official-edit/official-edit.component";
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { ConfirmationModalComponent } from '../../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-official-item',
  standalone: true,
  imports: [MatCardModule, DatePipe, MatButtonModule, TruncateNamePipe, MatIcon, CurrencyPipe],
  templateUrl: './official-item.component.html',
  styleUrl: './official-item.component.scss'
})
export class OfficialItemComponent {
  constructor(private officialEditComponent: MatDialog) { }

  @Input() official!: Official;
  @Output() deleteOfficialEvent = new EventEmitter<Official>();
  @Output() editOfficialEvent = new EventEmitter<Official>();

  openOfficialEdit(): void {
    const editDialogRef = this.officialEditComponent.open(OfficialEditComponent, { data: this.official });

    editDialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.editOfficialEvent.emit(result);
      }
    });
  }

  onOfficialDelete(): void {
    const deleteDialogRef = this.officialEditComponent.open(ConfirmationModalComponent, { data: this.official.name });

    deleteDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteOfficialEvent.emit(this.official);
      }
    });
  }
}
