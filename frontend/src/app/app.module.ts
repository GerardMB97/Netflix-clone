import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BillboardComponent } from './components/billboard/billboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PopularSliderComponent } from './components/popular-slider/popular-slider.component';
import { PopularCardComponent } from './components/popular-card/popular-card.component';
import { MovieHoverCardComponent } from './components/movie-hover-card/movie-hover-card.component';
import { MovieGenres } from './pipes/movieGenres.pipe';
import { HttpService } from './services/http.service';
import { LikeBoxComponent } from './components/like-box/like-box.component';
import { ModalBoxComponent } from './components/modal-box/modal-box.component';
import { ShowGenresPipe } from './pipes/show-genres.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent,
    SearchBarComponent,
    BillboardComponent,
    PopularSliderComponent,
    PopularCardComponent,
    MovieHoverCardComponent,
    MovieGenres,
    LikeBoxComponent,
    ModalBoxComponent,
    ShowGenresPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
