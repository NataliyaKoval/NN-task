import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() submitted = new EventEmitter();
  movieTitle = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onFormSubmit(e): void {
    e.preventDefault();
    this.submitted.emit(this.movieTitle);
  }

  onInput(e): void {
    this.movieTitle = e.target.value;
    console.log(this.movieTitle)
  }

  cleanMovieTitle(): void {
    this.movieTitle = '';
    console.log(this.movieTitle)
  }
}
