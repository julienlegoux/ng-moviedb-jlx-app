import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

private inputValue: any = '';

  constructor(private router: Router) {
  }

  ngOnInit(){
  }

  onKey(event: any) {
    this.inputValue = event.target.value
  }

  goToDetail() {
    if(this.inputValue){
      console.log(this.inputValue)
      this.router.navigate(['/detail', this.inputValue])
    }
  }

}
