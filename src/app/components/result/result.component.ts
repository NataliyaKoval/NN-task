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
  page: 1;

  constructor(private filmsService: FilmsService) {
  }

  ngOnInit(): void {
  }

  onSearchSubmit(movieTitle): void {
    this.filmsService.searchMovies(movieTitle, this.page).subscribe((res) => {
      console.log(res)
      this.moviesList = res.Search;
      this.total = res.totalResults;
    })
  }
}
