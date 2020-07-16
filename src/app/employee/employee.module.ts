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



@NgModule({
  declarations: [
    EmployeeComponent, 
    ModalEmployeeComponent, 
    ModalDeleteEmployeeComponent, ItemEmployeeDirective
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ]
})
export class EmployeeModule { }
