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

  getEmployees(): Observable<any>{
    return this.http.get<Employee[]>(GET_EMPLOYEES_URL)
      .pipe(
        tap((response: any) => {
          console.log('getEmployees', response)
          this.employees.next(response.data)
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

  editEmployeee(id: number, employee: Employee): Observable<Object>{
    return this.http.put<Employee>(GET_EMPLOYEES_URL + '/' + id, employee)
      .pipe(
        tap((response: object) => {
          console.log(`edit completed`, response)
        }),
        catchError(this.handleError<Employee>(`fail`))
      )
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

  getEmployee(): Observable<Employee[]>{
    return this.employees.asObservable();
  }

  setEmployee(employee: Employee[]): void {
    this.employees.next(employee)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T)
    }
  }
}
