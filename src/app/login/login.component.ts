import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {RegisterService} from '../register.service';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  emails = [];
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.email ],
      password: ['', Validators.pattern(/[\w0-9]{8,}/) ],
    });
  }

  ngOnInit() {
  }
  get values() {
    return this.loginForm.controls;
  }

  get Email() {
    return this.loginForm.get('email') as FormControl;
  }
  get Password() {
    return this.loginForm.get('password') as FormControl;
  }
  get disabled() {
    return this.loginForm.invalid;
  }
  allEmails() {
    this.emails.push( this.Email.value);
    return this.emails;
  }

  checkAuthentication() {
    if ( this.allEmails().includes(this.Email.value) && this.registerService.passwords.includes(this.Password.value)) {
      this.loginService.allowAccess();
      this.router.navigate(['/users']);
    } else {
      this.loginService.blockAccess();
      this.router.navigate(['/register']);
    }
  }
}
