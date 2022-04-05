import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from 'src/app/models/Movies/movies.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Genre } from 'src/app/models/genres.model';
import { ShowsService } from 'src/app/services/shows.service';
import { Show } from 'src/app/models/Shows/show.model';

@Component({
  selector: 'app-popular-slider',
  templateUrl: './popular-slider.component.html',
  styleUrls: ['./popular-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopularSliderComponent implements OnInit {

  title = 'Top 10 most popular today'
  popularShows$!: Observable<Show[]>
  hoverShow!: null | Show

  constructor(private showService: ShowsService) { }
  
  ngOnInit(): void {
    this.popularShows$ = this.showService.popularShows$
  }

}
