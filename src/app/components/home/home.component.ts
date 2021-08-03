import {Component, OnInit} from '@angular/core';
import {FilmsService} from "../../services/films.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private filmsService: FilmsService) {
  }

  ngOnInit(): void {
    this.filmsService.getFilms()
      .subscribe((res) => {
        console.log(res)
      })
  }

}
