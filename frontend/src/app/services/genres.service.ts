import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Genre } from '../models/genres.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  genres$ = new Subject<Genre[]>();
  private static readonly _genresEndpoint = environment.api_domain + 'genre/tv/list'

  constructor(private http: HttpClient, private httpHelper: HttpService) { }

  getGenres() : Observable<any> {
    return this.http.get<any>(GenresService._genresEndpoint, { params: { api_key: environment.api_key } })
    .pipe(
      tap(
        genres => {this.genres$.next(genres.genres)},
        err => (this.httpHelper.handleError(err))
      )
    )
  }
}
