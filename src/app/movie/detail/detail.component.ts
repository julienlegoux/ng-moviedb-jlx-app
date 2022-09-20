import { Component, OnInit } from '@angular/core';
import { SearchService } from "../search.service";
import {Movie} from "../movie";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
  ]
})
export class DetailComponent implements OnInit {

  movie: Movie | undefined;

  constructor(private search: SearchService, private route: ActivatedRoute) { }


  ngOnInit() {
    const contentId: string | null = this.route.snapshot.paramMap.get('id')
    if(contentId){
      console.log(contentId)
      let movieResult = this.search.getMovie(contentId).subscribe(movie => this.movie = movie)
      if(this.movie != undefined){
        movieResult.unsubscribe()
      }
    }
  }

}
