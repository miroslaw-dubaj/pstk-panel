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

  addUser(user: User, image?: File) {
    const { firstName, lastName, address } = user;
    const userData = new FormData();
    userData.append('firstName', firstName)
    userData.append('lastName', lastName)
    userData.append('address[city]', address.city)
    userData.append('address[postal]', address.postal)
    userData.append('address[state]', address.state)
    userData.append('address[street]', address.street)
    userData.append('image', image, lastName)
    this.http.post<{message: string, savedUser: User}>('http://localhost:3000/api/users', userData).subscribe(responseData => {
      const newUser: User = user;
      const newUserId = responseData.savedUser._id;
      newUser._id = newUserId;
      newUser.imgUrl = responseData.savedUser.imgUrl;
      this.users.push(newUser);
      this.usersUpdated.next([...this.users]);
      this.router.navigate(['/']);
    })
  }

  updateUser(id: string, user: User, image: File | string) {
    let userData: User | FormData;
    if (typeof(image) === 'object') {
      const { firstName, lastName, address } = user;
      userData = new FormData();
      userData.append('firstName', firstName)
      userData.append('lastName', lastName)
      userData.append('address[city]', address.city)
      userData.append('address[postal]', address.postal)
      userData.append('address[state]', address.state)
      userData.append('address[street]', address.street)
      userData.append('image', image, lastName)
    } else {
      userData = user;
      userData.imgUrl = image;
    }
    this.http.put(`http://localhost:3000/api/users/${id}`, userData)
    .subscribe(response => {
      const updatedUsers = [...this.users];
      const oldUserIndex = updatedUsers.findIndex(u => u._id === id);
      const updatedUser: User = user;
      updatedUsers[oldUserIndex] = updatedUser;
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
