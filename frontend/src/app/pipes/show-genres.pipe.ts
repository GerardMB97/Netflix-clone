import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GenresService } from '../services/genres.service';

@Pipe({
  name: 'showGenres'
})
export class ShowGenresPipe implements PipeTransform {

  genres$ = this.genresService.genres$

  constructor(private genresService: GenresService) { }

  transform(movieGenres: number[]):Observable<string[]>{
    return this.genres$.pipe(
      map((genres)  => genres.filter(genre => movieGenres.includes(genre.id)).map(genre => genre.name))
      )
  }

}
