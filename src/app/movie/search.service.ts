import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Movie} from "./movie";

@Injectable({
  providedIn: 'any'
})
export class SearchService {

  private API_KEY = '?api_key=fdde121050132b446a69d10e87bbc419';
  private API_BASE_URL = 'https://api.themoviedb.org/3/';
  private API_TYPE_CONTENT = 'movie/';
  private contentId: string|null;
  private API_SERVER = '' ;



  constructor(private http: HttpClient) {
    this.contentId = '';
  }

  getMovie(id: string|null): Observable<Movie>{
    this.contentId = id
    this.API_SERVER = this.API_BASE_URL+this.API_TYPE_CONTENT+this.contentId+this.API_KEY;
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