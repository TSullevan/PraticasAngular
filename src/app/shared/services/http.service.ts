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

  public post(route: string,  model: FormData): Observable<any> {
    return this.httpClient.post(environment.baseApiUrl + route, model);
  }

  public update<Model>(route: string, model: Model): Observable<Model> {
    return this.httpClient.put<Model>(environment.baseApiUrl + route, model);
  }
  public clear<Model>(route: string, model: Model): Observable<Model> {
    return this.httpClient.get<Model>(environment.baseApiUrl + route, model);
  }

}
