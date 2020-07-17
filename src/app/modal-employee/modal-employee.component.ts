import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-modal-employee',
  templateUrl: './modal-employee.component.html',
  styleUrls: ['./modal-employee.component.css']
})
export class ModalEmployeeComponent {

  employeeForm = this.formBuilder.group({
    name: '',
    password: ['', [Validators.required]],
    email: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  })

  
  employees: any

  private modalRef: any;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
  }

  open(content: object) {
    this.modalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  onSubmit(): void {
    this.employeeService.getEmployee().subscribe(val => this.employees = val);
    
    this.employeeService.addEmployeee(this.employeeForm.value).subscribe((res: any) => {
      this.employees.push(res.data)
      this.employeeService.setEmployee(this.employees)
      this.modalRef.close()
    }, (error: any) => {
      console.log(error);
    })
  }
}
