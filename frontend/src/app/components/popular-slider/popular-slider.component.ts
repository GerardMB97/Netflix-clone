import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from 'src/app/models/movies.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-popular-slider',
  templateUrl: './popular-slider.component.html',
  styleUrls: ['./popular-slider.component.scss']
})
export class PopularSliderComponent implements OnInit {
  posterBaseUrl = 'https://image.tmdb.org/t/p/w200'

  movies$: Observable<Movie[]> | undefined

  constructor(private moviesService: MoviesService) { }
  ngOnInit(): void {
    this.movies$ = this.moviesService.movies$
    this.moviesService.getPopularMovies().subscribe()
  }

}
