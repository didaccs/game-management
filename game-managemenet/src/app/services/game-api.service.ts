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

  getGames = (url: string, page: number, limit: number): Observable<Game[]> => {
    return this.httpClient.get<Game[]>(this.baseUrl + url, { params: {page, limit}});
  };

  addGame = (url: string, body: any): Observable<Game> => {
    return this.httpClient.post<Game>(this.baseUrl + url, body);
  };

  editGame = (url: string, body: any): Observable<Game> => {
    return this.httpClient.put<Game>(this.baseUrl + url, body);
  };

  deleteGame = (url: string): Observable<Game> => {
    return this.httpClient.delete<Game>(this.baseUrl + url);
  };
}
