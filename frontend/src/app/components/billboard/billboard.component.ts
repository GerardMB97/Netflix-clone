import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movies/movies.model';
import { Show } from 'src/app/models/Shows/show.model';
import { MoviesService } from 'src/app/services/movies.service';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {

  popularShow!: Show;
  posterBaseUrl = 'https://image.tmdb.org/t/p/original';

  constructor(private showsService: ShowsService) { }

  ngOnInit(): void {
    this.showsService.getPopularShows().subscribe(response => {
      this.popularShow = response.results[Math.floor(Math.random() * 9) + 10];
    })
  }

}
