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
      tap({
        next: val => {
          console.log('on next', val);
        },
        error: error => {
          console.log('on error', error);
        },
        complete: () => {
          console.log('on complete')
        }
      })
    )
  }

  getFlagLoginObs(): Observable<Boolean> {
    return this.isLogin.asObservable();
  }

  getFlagLogin(): any {
    let isLogin = localStorage.getItem('isLogin')
    return typeof isLogin == 'string' ? JSON.parse(isLogin) : isLogin;
  }

  setFlagLogin(status: any): void {
    localStorage.setItem('isLogin', status)
    this.isLogin.next(status)
  }
}
