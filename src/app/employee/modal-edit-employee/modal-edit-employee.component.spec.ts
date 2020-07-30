import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditEmployeeComponent } from './modal-edit-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EmployeeService} from '../../employee.service'
import { of } from 'rxjs';

describe('ModalEditEmployeeComponent', () => {
  let component: ModalEditEmployeeComponent;
  let fixture: ComponentFixture<ModalEditEmployeeComponent>;
  let httpClientSpy
  let employeeService: EmployeeService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditEmployeeComponent ],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [
        EmployeeService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditEmployeeComponent);
    component = fixture.componentInstance;
    component.employee = {
      name: 'test',
      phone: 'test',
      email: 'test',
      dob: 'test',
    }
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    employeeService = new EmployeeService(httpClientSpy)
    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });

  it('validator form', () => {
    expect(component.employeeForm.invalid).toBeTrue()
  })

  it('check edit employee', () => {
    const expectedData = {
      status: 200,
      message: 'ok',
      data: {
        name: 'test',
        phone: 'test',
        email: 'test',
        dob: 'test',
      }
    }
    spyOn(employeeService, 'editEmployeee').and.returnValue(of(expectedData))
    // tmp.
    // console.log("!!!!!!", tmp)
    // httpClientSpy.get.and.returnValue((expectedData));
    // employeeService.editEmployeee = jasmine.createSpy().and.returnValue(expectedData)
    // employeeService.editEmployeee(79, component.employee).subscribe((data) => {
    //   console.log(data);
    // })
    // console.log('@@@@@@', employeeService.editEmployeee)

    employeeService.editEmployeee(79, component.employee).subscribe((response) => {
      console.log('########', response);
      expect(response).toEqual(expectedData,'expected employees')
    })
  })
});
