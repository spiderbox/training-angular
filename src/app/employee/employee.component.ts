import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  employee: Employee
  totalRows: number
  currentPage: number

  constructor(
    private employeeService: EmployeeService, 
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(val => this.employees = val);
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      employee => {
        console.log(employee.total_rows)
        this.employees = employee.data
        this.totalRows = employee.total_rows
        this.currentPage = employee.page
    })
  }

  openModalDelete(content: object, employee: Employee, index: number): void {
    this.id = employee.id
    this.name = employee.name
    this.index = index
    this.modal.open(content)
  }

  openModalEdit(content: object, employee: Employee): void {
    this.employee = employee
    this.modal.open(content)
  }

  search(value: any) {
    console.log("EmployeeComponent::search", value)
    this.currentPage = 1
    this.employeeService.getEmployees(this.currentPage, value).subscribe(
      employee => {
        this.employees = employee.data
        this.totalRows = employee.total_rows
        this.currentPage = employee.page
    })
  }

  onChangeParent(value: any){
    console.log("EmployeeComponent::onChangeParent", value)
    this.employeeService.getEmployees(value).subscribe(
      employee => {
        this.employeeService.getEmployee().subscribe(val => this.employees = val);
        this.employeeService.setEmployee(employee.data)
    })
  }

}
