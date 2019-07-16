import { Component, OnInit } from '@angular/core';
import {EmployeesService} from '../employees.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  currentEmployee;
  employeesUpdate;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private routeState: ActivatedRoute,
    private employeesService: EmployeesService
  ) {
    this.employeesUpdate = formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      salary: [, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      age: [, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    });
  }

  ngOnInit() {
    this.routeState.paramMap.subscribe(params => {
      this.employeesService.getEmployeeByID(+params.get('employeeId')).subscribe((data) => {
        this.employeesUpdate.setValue({...data});
        this.currentEmployee = {...data};
      });
    });
  }

  delete() {
    this.employeesService.delete(this.currentEmployee).subscribe(() => {
      window.alert('Employee was deleted');
      this.router.navigate(['/employees']);
    });
  }

  update() {
    this.employeesService.update(this.employeesUpdate.value).subscribe();
  }
}

