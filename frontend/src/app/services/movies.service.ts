import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Movie, Video } from '../models/Movies/movies.model';
import { Genre } from '../models/genres.model';
import { MovieResponse } from '../models/Movies/movie-response.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_KEY: string = '74662e7f8d60e0865f25e6d5394a6720';

  private static readonly _apiDomain: string = 'https://api.themoviedb.org/3/';
  private static readonly _popularPath: string = 'movie/popular';
  get popularPath(): string {
     return MoviesService._popularPath
  }

  private static readonly _topRatedPath: string = 'movie/top_rated';
  get topRatedPath(): string {
     return MoviesService._topRatedPath
  }

  private static readonly _genresEndpoint = MoviesService._apiDomain + 'genre/movie/list'

  popularMovies$ = new Subject<Movie[]>();
  topRatedMovies$ = new Subject<Movie[]>();
  genres$ = new Subject<Genre[]>();
  video$ = new Subject<Video>();

  constructor(private http: HttpClient) { }

  private static handleError(error: HttpErrorResponse): Observable<Error> {
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

  public getPopularMovies(): Observable<MovieResponse>{
    return this.getMovieList(this.popularPath)
    .pipe(
      tap(
        response =>  {console.log(response); this.popularMovies$.next(response.results)},
        err => (MoviesService.handleError(err))
      )
    )
  }

  public getTopRatedMovies(): Observable<MovieResponse>{
    return this.getMovieList(this.topRatedPath)
    .pipe(
      tap(
        response =>  {this.topRatedMovies$.next(response.results)},
        err => (MoviesService.handleError(err))
      )
    )
  }

  getGenres() : Observable<any> {
    return this.http.get<any>(MoviesService._genresEndpoint, { params: { api_key: this.API_KEY } })
    .pipe(
      tap(
        genres => {console.log('ls genres', genres.genres); this.genres$.next(genres.genres)},
        err => (MoviesService.handleError(err))
      )
    )
  }
  getMovieTrailer({id}:Movie) : Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos`, { params: { api_key: this.API_KEY } })
    .pipe(
      map((results:any) => results.results[0])
    )
  }

  private getMovieList(path: string): Observable<MovieResponse> {
    const endpoint: string = MoviesService._apiDomain + path;
    return this.http.get<any>(endpoint, { params: { api_key: this.API_KEY } })
  }
}

