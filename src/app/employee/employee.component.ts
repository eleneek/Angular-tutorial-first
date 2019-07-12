import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../employees.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  currentEmployee;
  constructor(
    private router: Router,
    private routeState: ActivatedRoute,
    private employeesService: EmployeesService
  ) { }

  ngOnInit() {
    this.routeState.paramMap.subscribe(params => {
      this.employeesService.getEmployeeByID(+params.get('employeeId')).subscribe((data) => {

        this.currentEmployee = { ...data };
      });
    });
  }

  delete() {
    this.employeesService.delete(this.currentEmployee).subscribe();
    window.alert('Employee was deleted');
    this.router.navigate(['/employees']);
  }
}
