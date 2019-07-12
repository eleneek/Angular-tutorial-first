import {Component, Injectable, OnInit} from '@angular/core';
import { RegisterService } from '../register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = this.registerService.getusers();

  constructor(
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
  }
}
