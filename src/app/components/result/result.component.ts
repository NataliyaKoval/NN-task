import {Component, OnInit} from '@angular/core';
import {FilmsService} from "../../services/films.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  moviesList = [];
  total = null;
  page = 1;
  pageSize = 10;
  movieTitle = '';

  constructor(private filmsService: FilmsService) {
  }

  ngOnInit(): void {
  }

  onSearchSubmit(movieTitle): void {
    this.movieTitle = movieTitle;
    this.filmsService.searchMovies(this.movieTitle, this.page).subscribe((res) => {
      this.moviesList = res.Search;
      this.total = res.totalResults;
    })
  }

  changePage(e): void {
    this.page = e;
    this.filmsService.searchMovies(this.movieTitle, this.page).subscribe((res) => {
      this.moviesList = res.Search;
      this.total = res.totalResults;
    })
  }
}
