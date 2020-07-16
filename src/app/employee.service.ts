import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of, BehaviorSubject} from 'rxjs';
import { Employee } from './employee';
import { catchError, map, tap } from 'rxjs/operators';
import { GET_EMPLOYEES_URL } from './config/constants'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: BehaviorSubject<Employee[]>

  constructor(private http: HttpClient) { 
    this.employees = new BehaviorSubject<Employee[]>([])
  }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(GET_EMPLOYEES_URL)
      .pipe(
        tap((response: Employee[]) => {
          console.log('getEmployees', response)
          this.employees.next(response)
        }),
        catchError(this.handleError<Employee[]>(`fail`))
      )
  }

  addEmployeee(employee: Employee): Observable<Object>{
    return this.http.post<Employee>(GET_EMPLOYEES_URL, employee)
      .pipe(
        tap((response: object) => {
          console.log(`add completed`, response)
        }),
        catchError(this.handleError<Employee>(`fail`))
      )
  }

  getEmployee(): Observable<Employee[]>{
    return this.employees.asObservable();
  }

  setEmployee(employee: Employee[]): void {
    this.employees.next(employee)
  }

  deleteEmployee(id: any): Observable<Object> {
    return this.http.delete<Object>(GET_EMPLOYEES_URL + '/' + id)
      .pipe(
        tap((response: object) => {
          console.log(`delete completed`, response)
        }),
        catchError(this.handleError<Employee>(`fail`))
      )
    return;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T)
    }
  }
}
