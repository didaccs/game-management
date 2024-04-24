import { Routes } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { OfficialListComponent } from './components/official-list/official-list.component';

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
