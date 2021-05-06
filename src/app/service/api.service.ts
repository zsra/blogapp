import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export enum RequestMethod {
    Get = 'GET',
    Head = 'HEAD',
    Post = 'POST',
    Put = 'PUT',
    Delete = 'DELETE',
    Options = 'OPTIONS',
    Patch = 'PATCH'
  }

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private httpClient: HttpClient) {

    }

    get(path: string, args?: any): Observable<any> {
        return this.httpClient.get<any>(path, args);
    }

    post(path: string, body: any): Observable<any> {
        return this.httpClient.post<any>(path, body);
    }

    put(path: string, body: any): Observable<any> {
        return this.httpClient.put<any>(path, body);
    }

    delete(path: string, body: any): Observable<any> {
        return this.httpClient.delete(path, body);
    }
}