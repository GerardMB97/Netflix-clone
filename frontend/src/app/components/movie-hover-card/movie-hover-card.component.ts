import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/models/genres.model';
import { Video } from 'src/app/models/Movies/movies.model';
import { Show } from 'src/app/models/Shows/show.model';
import { GenresService } from 'src/app/services/genres.service';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-movie-hover-card',
  templateUrl: './movie-hover-card.component.html',
  styleUrls: ['./movie-hover-card.component.scss']
})
export class MovieHoverCardComponent implements OnInit {
  @Input() show!: Show 
  mouseOverIndex: number = 0;
  posterBaseUrl = 'https://image.tmdb.org/t/p/w400';
  isLikeBoxActive: Boolean = false;
  video$!: Observable<Video>
  genres$!: Observable<Genre[]>

  constructor(private genresService: GenresService, private showsService: ShowsService) { }

  ngOnInit(): void {
    this.genresService.getGenres().subscribe(() =>{this.genres$ = this.genresService.genres$})
    this.showsService.getShowTrailer(this.show).subscribe((response)=> this.video$ = response);
  }

  setIsLikeBoxActive(): void{
    console.log(this.isLikeBoxActive);
    this.isLikeBoxActive = !this.isLikeBoxActive;
  }
}
