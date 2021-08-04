import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  rootUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {
  }

  public getFilms(): Observable<any> {
    return this.http.get<any>(`${this.rootUrl}`, {
      params: {
        apikey: '2ebec9e3',
        s: 'one',
        page: 1,
        y: 2020
      }
    })
  }
}

