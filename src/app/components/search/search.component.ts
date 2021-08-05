import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movieTitle = '';

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
  }

  onInput(e): void {
    this.movieTitle = e.target.value;
  }

  cleanMovieTitle(): void {
    this.movieTitle = '';
  }

  onFormSubmit(e): void {
    e.preventDefault();
    this.searchService.setTitle(this.movieTitle);
  }
}
