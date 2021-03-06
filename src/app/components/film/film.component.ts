import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FilmsService} from "../../services/films.service";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  details;
  defaultSrc = 'assets/images/defaultPoster.jpg';
  loading = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private filmsService: FilmsService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    this.loading = true;
    const id = this.activeRoute.snapshot.params.id;
    this.filmsService.getDetails(id)
      .subscribe(res => {
        this.details = res;
        this.loading = false;
      })
  }

  onBackClick(): void {
    this.router.navigateByUrl('/result');
    window.scrollTo(0, 0);
  }
}
