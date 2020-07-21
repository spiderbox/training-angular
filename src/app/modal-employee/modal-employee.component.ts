import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import {MustMatch} from '../_helpers/must-match.validator'

@Component({
  selector: 'app-modal-employee',
  templateUrl: './modal-employee.component.html',
  styleUrls: ['./modal-employee.component.css']
})
export class ModalEmployeeComponent {

  employeeForm = this.formBuilder.group({
    name: ['', [
        Validators.required
      ]
    ],
    password: ['', [
        Validators.required
      ]
    ],
    email: ['', [
        Validators.required, 
        Validators.email
      ]
    ],
    dob: ['', [
        Validators.required
      ]
    ],
    phone: ['', [
        Validators.required, 
        Validators.pattern("^[0-9]*$")
      ]
    ],
    retype_password: ['', [
        Validators.required
      ]
    ]
  }, {
    validators: MustMatch('password', 'retype_password')
  })

  submitted: boolean = false;

  employees: any

  private modalRef: any;

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {}

  open(content: object) {
    this.modalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  onSubmit(): void {
    this.submitted = true
    if (this.employeeForm.invalid) {
      return;
    }

    this.employeeService.getEmployee().subscribe(val => this.employees = val);
    
    this.employeeService.addEmployeee(this.employeeForm.value).subscribe((res: any) => {
      this.employees.unshift(res.data)
      this.employeeService.setEmployee(this.employees)
      this.modalRef.close()
    }, (error: any) => {
      console.log(error);
    })
  }

  get formEmployee() {
    return this.employeeForm.controls
  }

  get isFormValid() {
    return this.employeeForm.status === "INVALID"
  }
}
