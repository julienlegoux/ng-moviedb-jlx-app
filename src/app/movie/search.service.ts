import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Movie} from "./movie";

@Injectable({
  providedIn: 'any'
})
export class SearchService {

  private API_SERVER = 'https://api.themoviedb.org/3/movie/550?api_key=fdde121050132b446a69d10e87bbc419';


  constructor(private http: HttpClient) {}

  getMovie(): Observable<Movie>{
    return this.http.get<Movie>(this.API_SERVER).pipe(
        tap((response: Movie) => console.table(response)),
        catchError((error) => this.handleError(error, []))
    )
  }
  private  handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }
}