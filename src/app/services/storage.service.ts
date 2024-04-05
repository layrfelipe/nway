import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    constructor(
        private http: HttpClient
    ) {}

    getJsonData(filePath: string): Observable<any> {
        return this.http.get<any>(filePath);
    }

    getUsersMockData() {
        return this.getJsonData("./assets/storage/Users.json")
    }

    getNotificationsMockData() {
        return this.getJsonData("./assets/storage/Notifications.json")
    }

    getRequestsMockData() {
        return this.getJsonData("./assets/storage/Requests.json")
    }
}