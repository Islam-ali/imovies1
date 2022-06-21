import { Details } from './../Model/details';
import { Discover } from 'src/app/Model/discover';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  readonly MovieAPI = environment.MovieAPI;
  readonly APIKey = environment.APIKey;

  constructor(private _HttpClient:HttpClient) { }

// get mediaCategory movie & tv in mediaCategory component
  getData(mediaType:any,mediaCategory:any,page:number): Observable<any>{
    return this._HttpClient.get<Discover>(`${this.MovieAPI}/${mediaType}/${mediaCategory}?api_key=${this.APIKey}&page=${page}`).pipe(
      retry(1),catchError(this.handleError)
    );
  }
// get trending movie & tv in trend component
  getTrending(type:any , time:any , page:number):Observable<any>
  {
    return this._HttpClient.get<Discover>(`${this.MovieAPI}/trending/${type}/${time}?api_key=${this.APIKey}&page=${page}`).pipe(
      retry(1),catchError(this.handleError)
    );
  }
// get Details movie & tv in Details component
  getDetails(mediaType:any,id:any):Observable<any>
  {
    return this._HttpClient.get<Details>(`${this.MovieAPI}/${mediaType}/${id}?api_key=${this.APIKey}`).pipe(
      retry(1),catchError(this.handleError)
      );
  }
// get videos movie & tv in video component
  getvideos(mediaType:any,id:any):Observable<any>
  {
    return this._HttpClient.get<any>(`${this.MovieAPI}/${mediaType}/${id}/videos?api_key=${this.APIKey}`).pipe(
      retry(1),catchError(this.handleError)
      );
  }
// get Similar & Recommendations  movie & tv in carousel component
  getMoreDetails(mediaType:any,id:any,title:string):Observable<any>
  {
    return this._HttpClient.get<any>(`${this.MovieAPI}/${mediaType}/${id}/${title}?api_key=${this.APIKey}`).pipe(
      retry(1),catchError(this.handleError)
      );
  }
// get reviews movie & tv in reviews component
  getreviews(mediaType:any,id:any):Observable<any>
  {
    return this._HttpClient.get<any>(`${this.MovieAPI}/${mediaType}/${id}/reviews?api_key=${this.APIKey}`).pipe(
      retry(1),catchError(this.handleError)
      );
  }
  // get discover movie & tv in discover component
  // used media component
  getDiscover(mediaType:string,page:number)
  {
    return this._HttpClient.get<Discover>(`${this.MovieAPI}/discover/${mediaType}?api_key=${this.APIKey}&page=${page}`).pipe(
      retry(1),catchError(this.handleError)
      );
  }
  // get all episodes in episodes component
  getEpisodes(id:any,season_number:any)
  {
    return this._HttpClient.get<any>(`${this.MovieAPI}/tv/${id}/season/${season_number}?api_key=${this.APIKey}`).pipe(
      retry(1),catchError(this.handleError)
      );
  }
// get search
  getsearch(query:any,page:number):Observable<any>
  {
    return this._HttpClient.get<any>(`${this.MovieAPI}/search/multi?api_key=${this.APIKey}&query=${query}&page=${page}`).pipe(
      retry(1),catchError(this.handleError)
      );
  }

// get details episode in details-episodes component
  getDetailsEpisode(id:any,season_number:any,episode_number:any)
  {
    return this._HttpClient.get<any>(`${this.MovieAPI}/tv/${id}/season/${season_number}/episode/${episode_number}?api_key=${this.APIKey}`).pipe(
      retry(1),catchError(this.handleError)
      );
  }
// get video episode in details-episodes component
  getEpisodeVideos(id:any,season_number:any,episode_number:any)
  {
    return this._HttpClient.get<any>(`${this.MovieAPI}/tv/${id}/season/${season_number}/episode/${episode_number}/videos?api_key=${this.APIKey}`).pipe(
      retry(1),catchError(this.handleError)
      );
  }
//****************  HandleError ***************//
//** We Can make another Solution in Error Interceptor */

handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(() =>
    `${error.error.status_message}`);
};
}
