import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Official } from '../types';

@Injectable({
  providedIn: 'root'
})
export class OfficialApiService {

  constructor(private httpClient: HttpClient) {}

  baseUrl: string = "https://6627e59fb625bf088c0a3143.mockapi.io";

  getofficials = (page?: number, limit?: number): Observable<Official[]> => {    
    return this.httpClient.get<Official[]>(this.baseUrl + '/api/v1/officials', 
              page == undefined || limit == undefined 
                ? undefined 
                : { params: {page, limit}});
  };

  addOfficial = (official:Official): Observable<Official> => {
    return this.httpClient.post<Official>(this.baseUrl + '/api/v1/officials/', official);
  };

  editOfficial = (official:Official): Observable<Official> => {
    return this.httpClient.put<Official>(this.baseUrl + '/api/v1/officials/' + official.id, official);
  };

  deleteOfficial = (official:Official): Observable<Official> => {
    return this.httpClient.delete<Official>(this.baseUrl + '/api/v1/officials/' + official.id);
  };
}
