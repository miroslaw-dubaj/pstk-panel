import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();
  constructor() { }

  getUsers() {
    return [...this.users];
  }

  getUsersUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  addUser(user: User) {
    const newUser: User = user;
    this.users.push(newUser);
    this.usersUpdated.next([...this.users]);
  }
}
