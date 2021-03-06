import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ShowResponse } from '../models/Shows/show-response.model';
import { Show } from '../models/Shows/show.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  public popularShows$ = new Subject<Show[]>();
  private static readonly _apiKey: string = environment.api_key;
  private static readonly _apiDomain: string = environment.api_domain;
  private static readonly _popularPath: string = 'tv/popular';

  constructor(private http: HttpClient, private httpHelper: HttpService) { }

  public getPopularShows(): Observable<ShowResponse>{
    return this.getShowList(ShowsService._popularPath)
    .pipe(
      tap(
        response =>  {console.log(response); this.popularShows$.next(response.results)},
        err => (this.httpHelper.handleError(err))
      )
    )
  }

  public getShowTrailer({id}:Show) : Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/tv/${id}/videos`, { params: { api_key: environment.api_key } })
    .pipe(
      map((results:any) => {console.log(results) ;results.results[0]})
    )
  }

  private getShowList(path: string): Observable<ShowResponse> {
    const endpoint: string = ShowsService._apiDomain + path;
    return this.http.get<any>(endpoint, { params: { api_key: ShowsService._apiKey } })
  }
}
