import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ModalEmployeeComponent } from '../modal-employee/modal-employee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteEmployeeComponent } from './modal-delete-employee/modal-delete-employee.component';
import { ItemEmployeeDirective } from './item-employee.directive';
import { ModalEditEmployeeComponent } from './modal-edit-employee/modal-edit-employee.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { FormatDatePipe } from '../format-date.pipe';



@NgModule({
  declarations: [
    EmployeeComponent, 
    ModalEmployeeComponent, 
    ModalDeleteEmployeeComponent, 
    ItemEmployeeDirective,
    ModalEditEmployeeComponent,
    PaginationComponent,
    FormatDatePipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ]
})
export class EmployeeModule { }
