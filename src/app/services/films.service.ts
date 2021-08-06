import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {pluck} from "rxjs/operators";
import {Movie} from "../interfaces/movie.interface";
import {Response} from "../interfaces/response.interface";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  rootUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {
  }

  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.rootUrl}`, {
      params: {
        apikey: '2ebec9e3',
        s: 'one',
        page: 1,
        y: 2020
      }
    })
      .pipe(pluck('Search'));
  }

  public searchMovies(movieTitle: string, page: number): Observable<Response> {
    return this.http.get<Response>(this.rootUrl, {
      params: {
        apikey: '2ebec9e3',
        s: movieTitle,
        page: page,
        plot: 'full'
      }
    })
  }

  public getDetails(id): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.rootUrl, {
      params: {
        apikey: '2ebec9e3',
        i: id,
        plot: 'full'
      }
    })
  }
}
