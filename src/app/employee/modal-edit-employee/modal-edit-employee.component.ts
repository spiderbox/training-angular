import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/employee';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-modal-edit-employee',
  templateUrl: './modal-edit-employee.component.html',
  styleUrls: ['./modal-edit-employee.component.css']
})
export class ModalEditEmployeeComponent implements OnInit {

  employeeForm = this.formBuilder.group({
    name: '',
    email: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  })

  @Input() employee: Employee

  constructor(
    public modalService: NgbModal,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.employeeService.editEmployeee(this.employee.id, this.employeeForm.value).subscribe((res: any) => {
      this.modalService.dismissAll()
    }, (error: any) => {
      console.log(error);
    })
  }

  ngAfterContentInit(): void {
    this.employeeForm.setValue(
      {
        'name': this.employee.name,
        'email': this.employee.email,
        'dob': this.employee.dob,
        'phone': this.employee.phone
      }
    )
    console.log("ngAfterContentInit")
  }
}
