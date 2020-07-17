import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../employee.service';
import { Employee } from 'src/app/employee';
import { SubscriptionLike } from 'rxjs'

@Component({
  selector: 'app-modal-delete-employee',
  templateUrl: './modal-delete-employee.component.html',
  styleUrls: ['./modal-delete-employee.component.css']
})
export class ModalDeleteEmployeeComponent implements OnInit {

  @Input() id: number
  @Input() name: string
  @Input() index: number

  employees: Employee[]
  subscription: SubscriptionLike

  constructor(
    public modal: NgbModal, 
    private employeeService: EmployeeService
  ) {
  }

  ngOnInit(): void {
    console.log("init subscribe get list employees")
    this.subscription = this.employeeService.getEmployee().subscribe(employee => this.employees = employee)
  }

  confirmDeleteEmployee(): void {
    this.employeeService.deleteEmployee(this.id).subscribe(() => {
      this.employees.splice(this.index, 1)
      this.modal.dismissAll()
    });
  }

  ngOnDestroy(): void { 
    console.log("ngOnDestroy")
    this.subscription.unsubscribe()
  }
}
