import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteEmployeeComponent } from './modal-delete-employee.component';

describe('ModalDeleteEmployeeComponent', () => {
  let component: ModalDeleteEmployeeComponent;
  let fixture: ComponentFixture<ModalDeleteEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDeleteEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
