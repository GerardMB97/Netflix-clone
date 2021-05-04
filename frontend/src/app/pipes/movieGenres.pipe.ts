import { Pipe, PipeTransform } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';
import { Genre } from '../models/genres.model';

@Pipe({
  name: 'genres'
})

export class MovieGenres implements PipeTransform {

  genres$ = this.moviesService.genres$

  transform(movieGenres: number[]){

    movieGenres

    return this.genres$.pipe(
      map((genres)  => genres.filter(genre => movieGenres.includes(genre.id)).map(genre => genre.name))
      )
  }


  constructor(private moviesService: MoviesService) { }
}
