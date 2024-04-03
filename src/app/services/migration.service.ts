import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MigrationService {

    private proxyURL = environment.proxyURL;
    private baseURL = environment.CCEEBaseURL

    private header = new HttpHeaders({
        'Content-Type': 'application/json'
    })

    constructor(
        private http: HttpClient
    ) { }
    
    create(createMigrationObject: any): Observable<any> {
        return this.http.post(`${this.proxyURL}${this.baseURL}/migracoes`, createMigrationObject, { headers: this.header})
    }

    getByRetailer(retailerCode: number): Observable<any> {
        return this.http.get(`${this.proxyURL}${this.baseURL}/migracoes?codigoVarejista=${retailerCode}`, { headers: this.header})
    }

    updateProfileCode(updateMigrationObject: any, migrationId: string): Observable<any> {
        return this.http.put(`${this.proxyURL}${this.baseURL}/migracoes/${migrationId}`, updateMigrationObject, { headers: this.header})
    }
}