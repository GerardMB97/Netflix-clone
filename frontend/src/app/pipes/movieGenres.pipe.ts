import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';
import { Genre } from '../models/genres.model';

@Pipe({
  name: 'genres'
})

export class MovieGenres implements PipeTransform {

  genres$ = this.moviesService.genres$

  transform(movieGenres: number[]){
    return this.genres$.subscribe(
      obj => obj.filter(
        (genre: Genre) => movieGenres.includes(genre.id)).map(
          (genre: Genre) => genre.name));
  }

  constructor(private moviesService: MoviesService) { }
}