import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {MatDialog} from '@angular/material/dialog';


import { ELEMENT_DATA, User, UserFieldNamesTranslations } from '../../models/User'

import { UserAvatarModalComponent } from '../user-avatar-modal/user-avatar-modal.component'

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

export class UserListComponent implements OnInit {
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);
  columnsToDisplay: string[] = ['select', 'id', 'firstName', 'lastName', 'email', 'phone', 'status', 'dateOfAcceptance',];
  expandedElement: User | null;
  selection = new SelectionModel<User>(true, []);
  columnsTranslated = UserFieldNamesTranslations;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  rowClick(element) {
    console.log(this.selection)
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  openAvatarInModal(user : User): void {
    console.log(user);
    this.dialog.open(UserAvatarModalComponent, {
      width: '80%',
      data: user
    });
  }
}