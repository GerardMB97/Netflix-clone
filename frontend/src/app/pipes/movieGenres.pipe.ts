import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GenresService } from '../services/genres.service';

@Pipe({
  name: 'genres'
})

export class MovieGenres implements PipeTransform {

  genres$ = this.genresService.genres$

  transform(movieGenres: number[]):Observable<string[]>{
    return this.genres$.pipe(
      map((genres)  => genres.filter(genre => movieGenres.includes(genre.id)).map(genre => genre.name))
      )
  }


  constructor(private genresService: GenresService) { }
}
