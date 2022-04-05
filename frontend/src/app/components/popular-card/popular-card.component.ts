import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movies/movies.model';
import { Show } from 'src/app/models/Shows/show.model';

@Component({
  selector: 'app-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.scss'],
})
export class PopularCardComponent implements OnInit {
  @Input() show!: Show

  @Input() rank!: number

  posterBaseUrl = 'https://image.tmdb.org/t/p/w200'

  constructor() { }

  ngOnInit(): void {
  }

}
