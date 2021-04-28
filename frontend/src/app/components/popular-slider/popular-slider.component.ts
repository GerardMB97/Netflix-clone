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

  movies$: Observable<Movie[]> | undefined
  constructor(private moviesService: MoviesService) { }

  debug(){
    console.log(this.movies$)
    console.log(this.moviesService.movies$)
  }
  ngOnInit(): void {
    this.movies$ = this.moviesService.movies$
    this.moviesService.getPopularMovies().subscribe()
  }

}
