import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies.model';

@Component({
  selector: 'app-movie-hover-card',
  templateUrl: './movie-hover-card.component.html',
  styleUrls: ['./movie-hover-card.component.scss']
})
export class MovieHoverCardComponent implements OnInit {
  @Input() movie!:Movie

  posterBaseUrl = 'https://image.tmdb.org/t/p/w400'

  constructor() { }

  ngOnInit(): void {
  }

}
