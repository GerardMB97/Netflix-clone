import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey = 'a3da1cfa'

  private apiUrl = 'http://www.omdbapi.com/'

  title$ = new Subject

  constructor(private http: HttpClient) { }
}
