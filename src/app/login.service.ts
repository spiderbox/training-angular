import { Injectable } from '@angular/core';
import {Observable, of, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { LOGIN_URL } from './config/constants'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin: BehaviorSubject<Boolean>

  constructor(private http: HttpClient) {

    //init set flag login is false
    this.isLogin = new BehaviorSubject<Boolean>(false)

  }

  login(data: object): Observable<Object>{
    return this.http.post<Object>(LOGIN_URL, data).pipe(
      tap((response: object) => {})
    )
  }

  getFlagLogin(): Observable<Boolean> {
    return this.isLogin.asObservable();
  }

  setFlagLogin(status: Boolean): void {
    this.isLogin.next(status)
  }
}
