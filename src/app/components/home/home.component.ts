import {Component, OnInit} from '@angular/core';
import {FilmsService} from "../../services/films.service";
import {Movie} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sliderImages: Array<Movie> = [];

  constructor(private filmsService: FilmsService) {
  }

  ngOnInit(): void {
    this.filmsService.getMovies()
      .subscribe((res) => {
        this.sliderImages = res;
      })
  }
}
