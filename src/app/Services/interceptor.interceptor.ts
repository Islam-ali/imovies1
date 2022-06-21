import { ApiService } from 'src/app/Services/api.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor( public _ApiService:ApiService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._ApiService.isLoading.next(true)
    return next.handle(req).pipe(
      finalize(
        ()=> {
          this._ApiService.isLoading.next(false)
        }
      )
    )
  }
}
