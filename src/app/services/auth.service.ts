import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private proxyURL = environment.proxyURL
    private authURL = environment.CCEEAuthURL
    private accessTokenLSKey = environment.accessTokenLSKey

    private authHeader = new HttpHeaders({
        'Content-Type': 'x-www-form-urlencoded'
    })

    constructor(
        private http: HttpClient
    ) { }

    public authenticate(userAuthData: any): Observable<any> {
        const body = new URLSearchParams();
        body.set('client_id', userAuthData.user);
        body.set('client_secret', userAuthData.password);

        return this.http.post(`${this.proxyURL}${this.authURL}/oauth/token`, body.toString(), { headers: this.authHeader })
    }

    setAccessToken(token: string): void {
        localStorage.setItem(this.accessTokenLSKey, token);
    }
    
    getAccessToken(): string | null {
        return localStorage.getItem(this.accessTokenLSKey);
    }

    clearAccessToken(): void {
        localStorage.removeItem(this.accessTokenLSKey);
    }
}