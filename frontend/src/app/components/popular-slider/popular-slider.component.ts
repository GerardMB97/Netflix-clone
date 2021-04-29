import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from 'src/app/models/movies.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-popular-slider',
  templateUrl: './popular-slider.component.html',
  styleUrls: ['./popular-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopularSliderComponent implements OnInit {
  title = 'Top 10 most popular today.'

  movies$: Observable<Movie[]> | undefined

  constructor(private moviesService: MoviesService) { }
  ngOnInit(): void {
    this.movies$ = this.moviesService.movies$
    this.moviesService.getPopularMovies().subscribe()
  }

}