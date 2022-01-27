import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponse } from '../generic-chart/models/DataResponse.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = 'https://localhost:44365'

  httpOptions = {
    Headers: new HttpHeaders({
      'content-type': 'application/json'

    })
  };
  

  constructor(private httpClient: HttpClient) { }

  public getDataFromApi(list: any): Observable<DataResponse> {
    return this.httpClient.get<DataResponse>(this.apiUrl + '/datascience')

  }
}
