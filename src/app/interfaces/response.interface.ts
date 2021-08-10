import {Movie} from "./movie.interface";

export interface Response {
  Search: Array<Movie>;
  totalResults: string;
  Response: string;
}
