import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable ({
    providedIn: 'root'
})
export class RegisterService {
    users =[];
    constructor(
        private http: HttpClient
    ) {}

    addUsers(user) {
        this.users.push(user);
    }
}