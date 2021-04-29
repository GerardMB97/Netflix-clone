import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies.model';

@Component({
  selector: 'app-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.scss'],
})
export class PopularCardComponent implements OnInit {
  @Input() movie!:Movie

  @Input() rank!:number

    posterBaseUrl = 'https://image.tmdb.org/t/p/w200'

  constructor() { }

  ngOnInit(): void {
  }

}
