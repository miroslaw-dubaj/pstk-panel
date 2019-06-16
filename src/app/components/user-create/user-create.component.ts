import { Component, OnInit} from '@angular/core';

import { User, UserStatus, UserRank, UserFieldNamesTranslations } from '../../models/User'
import {NgForm} from '@angular/forms';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  fieldNamesTranslations =  UserFieldNamesTranslations;
  constructor(public usersService: UsersService) { }

  ngOnInit() {
  }

  onAddUser(form: NgForm) {
    const user: User = {
      firstName: form.value.firstName,
      lastName:  form.value.lastName,
      status: UserStatus.Accepted,
      email: "test@test.com",
      dateOfAcceptance: new Date,
      dateOfFirstPayment: new Date,
      dateOfLeave: new Date,
      rank: UserRank.Member,
      founder: true,
      certificateIssued: false,
      phone: 12346789,
      pidNo: "AK747474",
      pidIssuedBy: "PMRz",
      pesel: 987654321,
      dob: new Date,
      pob: "Rzeszów",
      address: {
          street: form.value.address,
          city: form.value.city,
          postal: form.value.postal,
          state: form.value.state
      }
    }
    this.usersService.addUser(user);
    form.resetForm();
  }
}
