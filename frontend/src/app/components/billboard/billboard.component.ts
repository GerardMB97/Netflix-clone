import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movies/movies.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {

  popularMovie!: Movie;
  posterBaseUrl = 'https://image.tmdb.org/t/p/original';

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe(response => {
      this.popularMovie = response.results[Math.floor(Math.random() * 9) + 10];
    })
  }

}
