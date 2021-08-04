import {Component, OnInit} from '@angular/core';
import {FilmsService} from "../../services/films.service";
import {MovieInterface} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sliderImages: Array<MovieInterface> = [];

  constructor(private filmsService: FilmsService) {
  }

  ngOnInit(): void {
    this.filmsService.getFilms()
      .subscribe((res) => {
        this.sliderImages = res.Search;
      })
  }
}
