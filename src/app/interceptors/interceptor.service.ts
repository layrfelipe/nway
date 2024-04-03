import { Injectable } from '@angular/core';
import { 
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest }
from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService
    ) {}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // skip if user is trying to authenticate
        if (request.url.includes('/oauth/token')) {
            return next.handle(request);
        }

        const accessToken = this.authService.getAccessToken();
        if (accessToken) {
            request = request.clone({
            setHeaders: {
                'Authorization': `Bearer ${accessToken}`
            }
            });
        }
        else {
            this.authService.clearAccessToken()
        }

        return next.handle(request);
    }
}