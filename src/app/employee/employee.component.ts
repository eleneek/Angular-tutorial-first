import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees;
  constructor(
    private employeesService: EmployeesService
  ) { }

  ngOnInit() {
    this.employees =  this.employeesService.getEmployees();
  }
}
