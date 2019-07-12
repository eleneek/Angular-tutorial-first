import {Injectable} from '@angular/core';

@Injectable ({
    providedIn: 'root'
})
export class RegisterService {
    users = [];
    passwords = [];
    constructor(
    ) {}

    addUsers(user) {
        this.users.push(user);
        this.passwords.push(user.password);
    }
    getusers() {
        return this.users;
    }
    getpasswords() {
      return this.passwords;
    }
    check(user) {
        return this.users.includes(user);
    }

    deleteUser(user) {
        this.users.splice(this.users.indexOf(user), 1);
        this.users.splice(this.passwords.indexOf(user), 1);
    }
}
