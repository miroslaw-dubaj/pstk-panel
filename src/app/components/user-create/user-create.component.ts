import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { User, UserStatus, UserRank, UserFieldNamesTranslations } from '../../models/User'
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UserAvatarModalComponent } from '../user-avatar-modal/user-avatar-modal.component'
import {MatDialog} from '@angular/material/dialog';

import { mimeType } from './mime-type.validator';
import { UsersService } from '../../services/users.service';

enum FormMode {
  Create = "create",
  Edit = "edit"
}

export interface LargePreviewData {
  imgUrl: string;
}

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  fieldNamesTranslations =  UserFieldNamesTranslations;
  user: User;
  form: FormGroup
  isLoading = false;
  imagePreview: string;
  private mode = FormMode.Create;
  private userId: string;
  constructor(public dialog: MatDialog, public usersService: UsersService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      'image': new FormControl(null, {
        validators: [Validators.required], asyncValidators: [mimeType]
      }),
      'firstName': new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      'lastName': new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      'street': new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      'city': new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      'state': new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      'postal': new FormControl(null, {
        validators: [Validators.required, Validators.maxLength(5)]
      }),

    })
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('userId')) {
        this.mode = FormMode.Edit;
        this.userId = paramMap.get('userId');
        this.isLoading = true;
        this.usersService.getUser(this.userId)
        this.usersService.getUser(this.userId).subscribe((userData: User) => {          
          this.user = {...userData};
          this.isLoading = false;
          this.form.setValue({
            'firstName': this.user.firstName,
            'lastName': this.user.lastName,
            'street': this.user.address.street,
            'city': this.user.address.city,
            'state': this.user.address.state,
            'postal': this.user.address.postal,
            'image': this.user.imgUrl,
          })
        });
      } else {
        this.mode = FormMode.Create;
        this.userId = null;
      }
    });
  }


  onSaveUser() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    const user: User = {
      _id: null,
      firstName: this.form.value.firstName,
      lastName:  this.form.value.lastName,
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
          street: this.form.value.street,
          city: this.form.value.city,
          postal: this.form.value.postal,
          state: this.form.value.state
      }
    }
    if (this.mode === FormMode.Create) {
      
      this.usersService.addUser(user, this.form.value.image);
    } else {
      this.usersService.updateUser(this.userId, user, this.form.value.image)
    }

    this.form.reset();
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement) .files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  openAvatarInModal(user : User): void {
    this.dialog.open(UserAvatarModalComponent, {
      width: '80%',
      data: user
    });
  }
}
