import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() page: number
  @Input() pageSize: number = 10 // number rows per page
  @Input() totalSize: number // total_rows
  @Output() onChange = new EventEmitter<string>(); // create emit function

  arrayPagination: Array<number> = []
  employees: Employee[]

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    console.log('PaginationComponent::Init')
    
  }

  ngOnChanges() {
    this.arrayPagination = new Array(Math.ceil(this.totalSize / this.pageSize))
    console.log("PaginationComponent::ngOnChanges", Math.ceil(this.totalSize / this.pageSize))
  }

  // create function onClick in child component
  onClick(index: number): void {
    this.onChange.emit(index.toString())
  }

}
