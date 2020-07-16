import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
// import { ItemEmployeeDirective } from './item-employee.directive';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  // @ViewChild(ItemEmployeeDirective)

  employees: Employee[]
  status: Boolean = false
  id: number
  name: string
  index: number

  constructor(
    private employeeService: EmployeeService, 
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employee => this.employees = employee)
  }

  open(content: object, employee: Employee, index: number): void {
    this.modal.open(content)
    this.id = employee.id
    this.name = employee.name
    this.index = index
  }

}
