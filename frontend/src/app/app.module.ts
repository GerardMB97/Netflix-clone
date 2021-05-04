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
    MovieGenres
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
