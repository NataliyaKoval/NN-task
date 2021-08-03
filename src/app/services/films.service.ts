import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  rootUrl = 'https://www.omdbapi.com/';

  // apiKey = '2ebec9e3';

  constructor(private http: HttpClient) {
  }

  public getFilms() {
    return this.http.get(`${this.rootUrl}`, {
      params: {
        apikey: '2ebec9e3',
        s: 'one',
        page: 1,
        y: 2020
      }
    });
  }
}

