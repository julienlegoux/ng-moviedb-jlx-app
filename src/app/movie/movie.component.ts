import { Component, OnInit } from '@angular/core';

import {SearchService} from "./search.service";
import {Movie} from "./movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

  movie: Movie | undefined;

  constructor(private search: SearchService) {
  }

  ngOnInit(){
    let movieResult = this.search.getMovie().subscribe(movie => this.movie = movie)
    if(this.movie != undefined){
      movieResult.unsubscribe()
    }
  }

}
