import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../../models/User'

@Component({
  selector: 'user-avatar-modal',
  templateUrl: 'user-avatar-modal.component.html',
  styleUrls: ['./user-avatar-modal.component.scss']
})
export class UserAvatarModalComponent {

  constructor(
    public dialogRef: MatDialogRef<UserAvatarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}