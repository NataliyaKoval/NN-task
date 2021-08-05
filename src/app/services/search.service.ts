import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  title: string = 'love';
  titleChange$ = new Subject();

  constructor() {
    this.titleChange$.subscribe((value: string) => {
      this.title = value;
    })
  }

  setTitle(data: string) {
    this.titleChange$.next(data)
  }
}
