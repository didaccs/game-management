import { Component } from '@angular/core';
import { Official } from '../../../types';
import { MatGridListModule } from '@angular/material/grid-list';
import { OfficialItemComponent } from '../official-item/official-item.component';
import { OfficialApiService } from '../../../services/official-api.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-official-list',
  standalone: true,
  imports: [ MatGridListModule, OfficialItemComponent, MatPaginatorModule ],
  templateUrl: './official-list.component.html',
  styleUrl: './official-list.component.scss'
})
export class OfficialListComponent {
  constructor(private officialApiService: OfficialApiService) {}
  length: number = 0;
  pageSize: number = 25;
  pageSizeOptions: number[] = [10, 25, 50, 100];
  
  officials: Official[] = [];

  ngOnInit(): void {
    this.fetchOfficials(1,this.pageSize);
    this.getTotalOfficials();
  }

  onPageChange(event: PageEvent) {
    this.fetchOfficials(event.pageIndex + 1, event.pageSize);
  }

  fetchOfficials(page:number, limit:number) {
    this.officialApiService
      .getofficials(page, limit)
      .subscribe({
        next: (data: Official[]) => {
          this.officials = data;
          length = data.length;
        },
        error: (error) => {
          // error message
          console.log(error);
        },
      });
  }

  getTotalOfficials() {
    this.officialApiService
      .getofficials()
      .subscribe({
        next: (data: Official[]) => {
          this.length = data.length;
        },
        error: (error) => {
          // error message
          console.log(error);
        },
      });
  }

  deleteOfficial(official: any) {
    this.officialApiService
      .deleteOfficial(official)
      .subscribe({
        next: () => {
          this.fetchOfficials(1, 12);
          // confirmation message
        },
        error: (error) => {
          console.log(error);
          // error message
        },
      });
  }

  updateOfficial(official: any) {
    this.officialApiService
      .editOfficial(official)
      .subscribe({
        next: (data: Official) => {
          this.fetchOfficials(1, 12);
          // confirmation message
        },
        error: (error) => {
          // error message
          console.log(error);
        },
      });
  }
}
