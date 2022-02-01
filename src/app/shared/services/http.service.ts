import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions = {
    Headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public get<Response>(route: string): Observable<Response> {
    return this.httpClient.get<Response>(environment.baseApiUrl + route);
  }
}
