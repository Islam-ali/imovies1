import { Injectable } from '@angular/core';
import {  HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { catchError, Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 readonly AuthURL = environment.AuthURL;
 readonly AuthURLLogin = environment.AuthURLLogin;

 headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _HttpClient: HttpClient) {

   }

  registerData(registerValues: any):Observable<any>{
    return this._HttpClient.post(this.AuthURL , registerValues , httpOptions ).pipe(
      catchError(this.handleError)
    );
    }


  loginData(loginValues:any):Observable<any>{
    return this._HttpClient.post(this.AuthURLLogin , loginValues , httpOptions).pipe(
      catchError(this.handleError)
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
    'Something bad happened; please try again later.');
};

}

