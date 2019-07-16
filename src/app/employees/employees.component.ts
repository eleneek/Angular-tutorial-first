import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../employees.service';
import {state, style, trigger} from '@angular/animations';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  animations: [
    trigger('loadNotload', [
      state('load', style({
        display: 'none'
      })),
      state('unload', style({
        display: 'block'
      })),
    ])
  ]
})
export class EmployeesComponent implements OnInit {
  employees$;
  p = 1;
  loaded = false;
  Employees;

  constructor(
    private employeesService: EmployeesService,
  ) { }

  ngOnInit() {
    this.employees$ = this.employeesService.getEmployees();
    this.employees$.subscribe(data => {
      this.Employees = data;
      this.loaded = true;
    });
  }

}
