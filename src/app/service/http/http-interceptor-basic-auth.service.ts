import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  //The interceptor acts as a filter
  intercept (request: HttpRequest<any>, next: HttpHandler){
    let username = 'user'
    let password = 'password'
    let basicAuthHeaderString = 'Basic '+ window.btoa(username+':'+password)
    
    request = request.clone({
      setHeaders: {
        Authorization : basicAuthHeaderString
      }
    })

    return next.handle(request);
  }
}
