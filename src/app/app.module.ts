import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './movie/detail/detail.component';
import { HttpClientModule} from "@angular/common/http";
import {MovieComponent} from "./movie/movie.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DetailComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
