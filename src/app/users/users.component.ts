import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = this.registerService.getusers();

  constructor(
    private registerService: RegisterService
    ) {
      this.users = this.registerService.getusers();
     }

  ngOnInit() {
  }

  deleteUser(user){
    if(!confirm(`You sure you want to remove ${this.users}?`)) {
      return true;
    }
    this.registerService.deleteUser(user);
  }

}
