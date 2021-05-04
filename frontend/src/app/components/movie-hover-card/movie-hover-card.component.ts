import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, Video } from 'src/app/models/movies.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-hover-card',
  templateUrl: './movie-hover-card.component.html',
  styleUrls: ['./movie-hover-card.component.scss']
})
export class MovieHoverCardComponent implements OnInit {
  @Input() movie!:Movie

  posterBaseUrl = 'https://image.tmdb.org/t/p/w400';

  video$!: Observable<Video>

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.video$ = this.movieService.getMovieTrailer(this.movie);
  }

}
