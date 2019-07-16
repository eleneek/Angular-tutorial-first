import {Component, OnInit} from '@angular/core';
import { RegisterService } from '../register.service';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {LoginService} from '../login.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger( 'openClose', [
      state( 'open', style({
        display: 'block'
      })),
      state( 'close', style({
        display: 'none'
      })),

      transition('* => *', animate('0.2s'))
    ])
  ]
})
export class UsersComponent implements OnInit {
  users = this.registerService.getusers();
  mail = this.loginComponent.Email.value;
  paddword = this.loginComponent.Password.value;
  mail2 = '';
  popCheck = false;
  isOpen = false;
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
    this.registerService.deleteUser(user);
  }

  logout() {
    this.router.navigate(['/login']);
    this.loginService.blockAccess();
  }
  getMail(user) {
    this.mail2 = user.email;
  }
  popUp() {
    this.popCheck = !this.popCheck;
  }

  showMenu() {
    this.isOpen = true;
  }

  hideMenu() {
    this.isOpen = false;
  }
}
