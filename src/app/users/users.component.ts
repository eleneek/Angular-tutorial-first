import {Component, OnInit} from '@angular/core';
import { RegisterService } from '../register.service';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = this.registerService.getusers();
  mail = this.loginComponent.Email.value;
  mail2 = '';
  constructor(
    private loginService: LoginService,
    private loginComponent: LoginComponent,
    private router: Router,
    private registerService: RegisterService,
    ) {
      this.users = this.registerService.getusers();
     }

  ngOnInit() {
  }

  deleteUser(user) {
    if (!confirm(`You sure you want to remove ${user.email}?`)) {
      return true;
    }
    this.registerService.deleteUser(user);
  }

  logout() {
    this.router.navigate(['/login']);
    this.loginService.blockAccess();
  }
  getMail(user) {
    this.mail2 = user.email;
  }
}
