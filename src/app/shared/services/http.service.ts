import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public delete(route: string, id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(environment.baseApiUrl + route + '/' + id);
  }

  public get<Model>(route: string,  id: number): Observable<Model> {
    return this.httpClient.get<Model>(environment.baseApiUrl + route + '/' + id);
  }

  public post<Model>(route: string,  model: Model): Observable<Model> {
    return this.httpClient.post<Model>(environment.baseApiUrl + route, model);
  }

  public put<Model>(route: string, model: Model, id: number): Observable<Model> {
    return this.httpClient.put<Model>(environment.baseApiUrl + route, model + '/' + id);
  }
}
