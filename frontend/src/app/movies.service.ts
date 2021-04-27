import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_KEY = '74662e7f8d60e0865f25e6d5394a6720'

  private endPoint = 'https://api.themoviedb.org/3'

  title$ = new Subject

  constructor(private http: HttpClient) { }
}
