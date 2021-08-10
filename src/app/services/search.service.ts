import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  title: string = 'love';
  titleChange$ = new ReplaySubject(1);

  constructor() {
    this.titleChange$.subscribe((value: string) => {
      this.title = value;
    })
  }

  setTitle(data: string) {
    this.titleChange$.next(data)
  }
}
