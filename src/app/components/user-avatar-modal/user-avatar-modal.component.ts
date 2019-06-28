import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LargePreviewData } from '../user-create/user-create.component';

@Component({
  selector: 'user-avatar-modal',
  templateUrl: 'user-avatar-modal.component.html',
  styleUrls: ['./user-avatar-modal.component.scss']
})
export class UserAvatarModalComponent {

  constructor(
    public dialogRef: MatDialogRef<UserAvatarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LargePreviewData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}