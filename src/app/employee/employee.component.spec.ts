import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { HttpClientModule } from '@angular/common/http';
import {EmployeeService} from '../employee.service'
import { Employee } from '../employee';
import { of } from 'rxjs/internal/observable/of';
// import { of } from 'rxjs';


describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let employeeService
  let httpClientSpy

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      imports: [HttpClientModule],
      providers: [
        EmployeeService
      ],
      
    })
    .compileComponents();

    // create spy
    const spy = jasmine.createSpyObj('EmployeeService', ['getTestValue']);
    // create httpclient spy
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    employeeService = new EmployeeService(httpClientSpy)
  }));

  beforeEach(inject([EmployeeService], s => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    employeeService = s
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check employeeService to be defined', () => {
    expect(employeeService).toBeDefined()
  })

  it('call getEmployees and return list employees', (() => {
    let data: Employee[]
    
    // spyOn(employeeService, 'getEmployees').and.returnValue(of(data))
    // spyOn(employeeService, 'getEmployees').and.returnValue(of(data))
    const twainService = jasmine.createSpyObj('employeeService', ['getEmployees']);
    let getQuoteSpy = twainService.getEmployees.and.returnValue(of(data))
    console.log(getQuoteSpy)
    // component.ngOnInit()
    // component.getEmployees()
    // fixture.detectChanges();
    // expect(employeeService.getEmployees).toHaveBeenCalled();
    
    // console.log('!!!!!', component)
    // console.log('@@@@@', component.employees)
    // expect(component.employees).toEqual(data)
    
  }))

  it('check test value', () => {
    expect(employeeService.getTestValue()).toBe('test value')
  })

  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
      // jasmine.createSpyObj('EmployeeService', ['getTestValue']);
      let service = TestBed.inject(EmployeeService)
      // value need to be compare
      const stubValue = 'test value';
      
      // set stub value 
      // valueServiceSpy.getTestValue.and.returnValue(stubValue)

      // expect(service.getTestValue()).toBe(stubValue)
      done()
  });

  it('#clicked() should toggle #isOn', () => {
    // const comp = new EmployeeComponent();
  })

  // it('should return expected heroes (HttpClient called once)', () => {
  //   const expectedEmployees: any = {
  //       total_rows: 16,
  //       status: 200,
  //       page: "1",
  //       message: "ok",
  //       data: [
  //         {
  //           name: 'test',
  //           email: 'test',
  //           phone: 'test',
  //           dob: 'test'
  //         },
  //         {
  //           name: 'test',
  //           email: 'test',
  //           phone: 'test',
  //           dob: 'test'
  //         }
  //       ]
  //     }

  //   httpClientSpy.get.and.returnValue((expectedEmployees));

  //   employeeService.getEmployees().subscribe(
      
  //     employees => {
  //       console.log('------', employees)
  //       expect(employees).toEqual(expectedEmployees,'expected employees')

  //     },
  //     fail
  //   )
  // })
});
