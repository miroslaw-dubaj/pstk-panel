import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { User } from '../models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [];
  private usersUpdated = new Subject<User[]>();
  constructor(private http: HttpClient, private router: Router) { }

  getUsers() {
    this.http.get<{message: string, users: User[] }>('http://localhost:3000/api/users').subscribe((postData) => {
      this.users = postData.users;
      this.usersUpdated.next([...this.users]);
    });
  }

  getUsersUpdateListener() {
    return this.usersUpdated.asObservable();
  }
  
  getUser(id: string) {
    return this.http.get<User>(`http://localhost:3000/api/users/${id}`);
  }

  addUser(user: User) {
    const newUser: User = user;
    this.http.post<{message: string, createdUserId: string}>('http://localhost:3000/api/users', newUser).subscribe(responseData => {
      const newUserId = responseData.createdUserId;
      newUser._id = newUserId;
      this.users.push(newUser);
      this.usersUpdated.next([...this.users]);
      this.router.navigate(['/']);
    })
  }

  updateUser(id: string, user: User) {
    const newUser: User = user;
    this.http.put(`http://localhost:3000/api/users/${id}`, user)
    .subscribe(response => {
      const updatedUsers = [...this.users];
      const oldUserIndex = updatedUsers.findIndex(u => u._id === user._id);
      updatedUsers[oldUserIndex] = user;
      this.users = updatedUsers;
      this.usersUpdated.next([...this.users]);
      this.router.navigate(['/']);
    })
  } 

  deleteUser(userId: string) {
    this.http.delete<{message: string}>(`http://localhost:3000/api/users/${userId}`).subscribe(() => {
      const updatedUsers= this.users.filter(user => user._id !== userId);
      this.users = updatedUsers;
    this.usersUpdated.next([...this.users]);
    this.router.navigate(['/']);
    })
  }
}
