import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ResultComponent} from "./components/result/result.component";
import {Page404Component} from "./components/page404/page404.component";
import {FilmComponent} from "./components/film/film.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'result', component: ResultComponent},
  {path: 'movie/:id', component: FilmComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
