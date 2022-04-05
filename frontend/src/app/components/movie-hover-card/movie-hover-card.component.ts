import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, Video } from 'src/app/models/Movies/movies.model';
import { Show } from 'src/app/models/Shows/show.model';
import { MoviesService } from 'src/app/services/movies.service';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-movie-hover-card',
  templateUrl: './movie-hover-card.component.html',
  styleUrls: ['./movie-hover-card.component.scss']
})
export class MovieHoverCardComponent implements OnInit {
  @Input() show!: Show

  posterBaseUrl = 'https://image.tmdb.org/t/p/w400';

  video$!: Observable<Video>

  constructor(private showsService: ShowsService) { }

  ngOnInit(): void {
  }

}
