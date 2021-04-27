import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_KEY = '74662e7f8d60e0865f25e6d5394a6720'

  private ENDPOINT = 'https://api.themoviedb.org/3'

  private GET_POPULAR = `${this.ENDPOINT}/movie/popular`

  private params = new HttpParams().append('api_key', this.API_KEY)

  title$ = new Subject

  constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse):Observable<Error> {
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
}
