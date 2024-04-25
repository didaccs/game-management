import { Routes } from '@angular/router';
import { GameListComponent } from './components/games/game-list/game-list.component';
import { OfficialListComponent } from './components/officials/official-list/official-list.component';

export const routes: Routes = [    
  {
    path: 'games',
    component: GameListComponent,
  },
  {
    path: 'officials',
    component: OfficialListComponent,
  },
];
