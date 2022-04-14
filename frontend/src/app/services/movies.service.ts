import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Movie, Video } from '../models/Movies/movies.model';
import { Genre } from '../models/genres.model';
import { MovieResponse } from '../models/Movies/movie-response.model';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private static readonly _apiKey: string = environment.api_key;
  private static readonly _apiDomain: string = environment.api_domain;
  private static readonly _popularPath: string = 'tv/popular';
  get popularPath(): string {
     return MoviesService._popularPath
  }


  popularMovies$ = new Subject<Movie[]>();
  topRatedMovies$ = new Subject<Movie[]>();
  video$ = new Subject<Video>();

  constructor(private http: HttpClient, private httpHelper: HttpService) { }

  public getPopularMovies(): Observable<MovieResponse>{
    return this.getMovieList(this.popularPath)
    .pipe(
      tap(
        response =>  {console.log(response); this.popularMovies$.next(response.results)},
        err => (this.httpHelper.handleError(err))
      )
    )
  }

  getMovieTrailer({id}:Movie) : Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos`, { params: { api_key: MoviesService._apiKey } })
    .pipe(
      map((results:any) => results.results[0])
    )
  }

  private getMovieList(path: string): Observable<MovieResponse> {
    const endpoint: string = MoviesService._apiDomain + path;
    return this.http.get<any>(endpoint, { params: { api_key: MoviesService._apiKey } })
  }
}

