import {Component, OnInit} from '@angular/core';
import {FilmsService} from "../../services/films.service";
import {SearchService} from "../../services/search.service";
import {Movie} from "../../interfaces/movie.interface";
import {ThemePalette} from "@angular/material/core";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  moviesList: Array<Movie> = [];
  total = null;
  page = 1;
  pageSize = 10;
  movieTitle;
  defaultSrc = 'assets/images/defaultPoster.jpg';
  noResults = false;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  loading = false;


  constructor(private filmsService: FilmsService,
              private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.searchService.titleChange$.subscribe((data: string) => {
      this.movieTitle = data;
      this.searchMovies();
    })
  }

  searchMovies(): void {
    this.loading = true;
    this.filmsService.searchMovies(this.movieTitle, this.page).subscribe((res) => {
      this.moviesList = res.Search;
      this.total = res.totalResults;
      if (res.Response === 'False') {
        this.noResults = true;
      } else {
        this.noResults = false;
      }
      this.loading = false;
    }, error => this.loading = false);
  }

  changePage(e): void {
    this.page = e;
    this.filmsService.searchMovies(this.movieTitle, this.page).subscribe((res) => {
      this.moviesList = res.Search;
      this.total = res.totalResults;
    });
    window.scrollTo(0, 0);
  }
}
