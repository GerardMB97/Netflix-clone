import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Movie, Video } from '../models/movies.model';
import { Genre } from '../models/genres.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_KEY = '74662e7f8d60e0865f25e6d5394a6720';

  private ENDPOINT = 'https://api.themoviedb.org/3';

  private GET_POPULAR = `${this.ENDPOINT}/movie/popular`;

  private GET_GENRES = `${this.ENDPOINT}/genre/movie/list`

  movies$ = new Subject<Movie[]>();

  genres$ = new Subject<Genre[]>();

  video$ = new Subject<Video>();

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse): Observable<Error> {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
      } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
      return throwError(errorMessage);
    }

  getPopularMovies(): Observable<any>  {
    return this.http.get<any>(this.GET_POPULAR, { params: { api_key: this.API_KEY } })
    .pipe(
      tap(
        movies =>  {console.log('Ls pelis', movies); this.movies$.next(movies.results)},
        err => (this.handleError(err))
      )
    )
  }

  getGenres() : Observable<any> {
    return this.http.get<any>(this.GET_GENRES, { params: { api_key: this.API_KEY } })
    .pipe(
      tap(
        genres => {console.log('ls genres', genres.genres); this.genres$.next(genres.genres)},
        err => (this.handleError(err))
      )
    )
  }
  getMovieTrailer({id}:Movie) : Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos`, { params: { api_key: this.API_KEY } })
    .pipe(
      map((results:any) => results.results[0])
    )
  }
}

