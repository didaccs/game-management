import { Component } from '@angular/core';
import { Game } from '../../types';
import { MatGridListModule } from '@angular/material/grid-list';
import { GameItemComponent } from '../game-item/game-item.component';
import { GameApiService } from '../../services/game-api.service';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [ MatGridListModule, GameItemComponent ],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent {
  constructor(private gameApiService: GameApiService) {}

  games: Game[] = [];

  ngOnInit(): void {
    this.fetchGames(1,12);
  }

  // onPageChange(event: any) {
  //   this.fetchGames(event.page, event.rows);
  // }

  fetchGames(page: number, perPage: number) {
    this.gameApiService
      .getGames('/api/v1/games', page, perPage)
      .subscribe({
        next: (data: Game[]) => {
          this.games = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
