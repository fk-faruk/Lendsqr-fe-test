import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }







  getUserDetails( ): Observable<any[]>{
     return this.http.get<any[]>('https://run.mocky.io/v3/83473d2a-1fd4-4d2c-b72f-cb66230a4b69')
  }
}
