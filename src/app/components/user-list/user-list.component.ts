import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import { User, UserFieldNamesTranslations } from '../../models/User'

import { UserAvatarModalComponent } from '../user-avatar-modal/user-avatar-modal.component'
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  dataSource = new MatTableDataSource<User>(this.users);
  columnsToDisplay: string[] = ['select', 'userNumber', 'firstName', 'lastName', 'email', 'phone', 'status', 'dateOfAcceptance',];
  expandedElement: User | null;
  selection = new SelectionModel<User>(true, []);
  columnsTranslated = UserFieldNamesTranslations;
  isLoading = false;
  private usersSub: Subscription;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog, public usersService: UsersService) {}

  ngOnInit() {
    this.isLoading = true;
    this.usersService.getUsers();
    this.usersSub = this.usersService.getUsersUpdateListener().subscribe((users: User[]) => {
      this.isLoading = false;
      this.users = users;
      this.dataSource.data = [...this.users];
    });
    this.dataSource = new MatTableDataSource<User>(this.users);
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.usersSub.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.userNumber + 1}`;
  }

  rowClick(element) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  openAvatarInModal(user : User): void {
    this.dialog.open(UserAvatarModalComponent, {
      width: '80%',
      data: user
    });
  }

  onDelete(userId: string) {
    this.usersService.deleteUser(userId);
  }
}