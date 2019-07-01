import { Component, OnInit } from '@angular/core';
import { UserFieldNamesTranslations } from '../../models/User'
import { NgForm } from '@angular/forms';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  fieldNamesTranslations =  UserFieldNamesTranslations;

  constructor(public usersService: UsersService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.usersService.loginUser(form.value.email, form.value.password);
  }
}
