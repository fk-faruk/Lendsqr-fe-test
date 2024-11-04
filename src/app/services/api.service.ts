import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  private userdataSource = new BehaviorSubject<any>(null)
  userDataSubject = this.userdataSource.asObservable();


  getUserData() {
      return this.userDataSubject
  }

  setUserData(data: any) {
    this.userdataSource.next(data)
  }



  // getUserDetails( ): Observable<any[]>{

  //   const token = 'mttz3r0p50ewt4mg3i7ay3xf30r53rth5t52c5l5'

  //   const headers = new HttpHeaders ({
  //     'content-type': 'application/json',
  //     'authorization': 'Bearer ' + token,
  //     method: 'GET',
    
  //   })

  //    return this.http.get<any[]>('https://api.json-generator.com/templates/PdFa4zW6u5wr/data', {headers})
  // }
}
