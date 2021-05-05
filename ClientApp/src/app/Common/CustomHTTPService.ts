import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs';

@Injectable()
export class CustomHTTPService {
  constructor(private httpClient: HttpClient) { }

  get(path): Observable<any> {
    return this.httpClient.get(path)
      .map((response: Response) => {
        return <any>response.json();
      })
  }

  post(path,Request): Observable<any>{
    // let _headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin':'http://localhost:4200'
    // });
    return this.httpClient.post<any>(path, Request);
  }
} 