import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditEmployeeComponent } from './modal-edit-employee.component';

describe('ModalEditEmployeeComponent', () => {
  let component: ModalEditEmployeeComponent;
  let fixture: ComponentFixture<ModalEditEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
