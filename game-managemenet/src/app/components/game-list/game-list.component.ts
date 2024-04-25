import { Component } from '@angular/core';
import { Game } from '../../types';
import { MatGridListModule } from '@angular/material/grid-list';
import { GameItemComponent } from '../game-item/game-item.component';
import { GameApiService } from '../../services/game-api.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [ MatGridListModule, GameItemComponent, MatPaginatorModule ],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  constructor(private gameApiService: GameApiService) {}
  length: number = 0;
  pageSize: number = 25;
  pageSizeOptions: number[] = [10, 25, 50, 100];
  
  

  games: Game[] = [];

  ngOnInit(): void {
    this.fetchGames(1,this.pageSize);
    this.getTotalGames();
  }

  onPageChange(event: PageEvent) {
    this.fetchGames(event.pageIndex + 1, event.pageSize);
  }

  fetchGames(page:number, limit:number) {
    this.gameApiService
      .getGames(page, limit)
      .subscribe({
        next: (data: Game[]) => {
          this.games = data;
          length = data.length;
        },
        error: (error) => {
          // error message
          console.log(error);
        },
      });
  }

  getTotalGames() {
    this.gameApiService
      .getGames()
      .subscribe({
        next: (data: Game[]) => {
          this.length = data.length;
        },
        error: (error) => {
          // error message
          console.log(error);
        },
      });
  }

  deleteGame(game: Game) {
    this.gameApiService
      .deleteGame(game)
      .subscribe({
        next: () => {
          this.fetchGames(1, 12);
          // confirmation message
        },
        error: (error) => {
          console.log(error);
          // error message
        },
      });
  }

  updateGame(game: Game) {
    this.gameApiService
      .editGame(game)
      .subscribe({
        next: (data: Game) => {
          this.fetchGames(1, 12);
          // confirmation message
        },
        error: (error) => {
          // error message
          console.log(error);
        },
      });
  }
}
