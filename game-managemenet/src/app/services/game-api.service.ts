import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../types';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  constructor(private httpClient: HttpClient) {}

  baseUrl: string = "https://6627e59fb625bf088c0a3143.mockapi.io";

  getGames = (page?: number, limit?: number): Observable<Game[]> => {    
    return this.httpClient.get<Game[]>(this.baseUrl + '/api/v1/games', 
              page == undefined || limit == undefined 
                ? undefined 
                : { params: {page, limit}});
  };

  addGame = (game:Game): Observable<Game> => {
    return this.httpClient.post<Game>(this.baseUrl + '/api/v1/games/', game);
  };

  editGame = (game:Game): Observable<Game> => {
    return this.httpClient.put<Game>(this.baseUrl + '/api/v1/games/' + game.id, game);
  };

  deleteGame = (game:Game): Observable<Game> => {
    return this.httpClient.delete<Game>(this.baseUrl + '/api/v1/games/' + game.id);
  };
}
