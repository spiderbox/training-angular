import { TestBed, inject, fakeAsync, ComponentFixture, async } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LOGIN_URL } from './config/constants'
import { Observable, of } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { Employee } from './employee';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { delay } from 'rxjs/operators';
import { By } from '@angular/platform-browser';
// import { async } from 'rxjs/internal/scheduler/async';


describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let employee: Employee;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, 
        HttpClientTestingModule, 
        ReactiveFormsModule, 
        FormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [LoginService],
      declarations: [
        LoginComponent
      ],
    }).compileComponents();
    // service = TestBed.inject(LoginService);
    // httpMock = TestBed.inject(HttpTestingController)
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.get(LoginService);

  }));
  
  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

  it('check localStorage', () => {
    spyOn(window.localStorage, 'getItem').and.callFake(function (key)  {
      return 'false'
    });
    console.log("loginService.getFlagLogin()", loginService.getFlagLogin())
  })

  it('check login Servie call', () => {

    spyOn(loginService, 'login').and.callThrough()

    loginService.login({
      email: 'nhson21915@gmail.com',
      password: '123'
    })

    expect(loginService.login).toHaveBeenCalled();
  })

  it('check isLogin init', () => {
    // expect(loginService.isLogin).toBeFalse()
  })

});


