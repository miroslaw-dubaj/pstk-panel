import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();
  constructor(private http: HttpClient) { }

  getUsers() {
    this.http.get<{message: string, users: User[] }>('http://localhost:3000/api/users').subscribe((postData) => {
      this.users = postData.users;
      this.usersUpdated.next([...this.users]);
    });
  }

  getUsersUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  addUser(user: User) {
    const newUser: User = user;
    this.http.post<{message: string}>('http://localhost:3000/api/users', newUser).subscribe(responseData => {
      this.users.push(newUser);
      this.usersUpdated.next([...this.users]);
    })
  }
}
