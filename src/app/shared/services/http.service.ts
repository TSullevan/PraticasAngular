import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataResponse } from '../generic-chart/models/DataResponse.model';

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
    return this.httpClient.get<any>(environment.baseApiUrl + route);
  }
}
