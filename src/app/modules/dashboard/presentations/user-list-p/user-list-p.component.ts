import { Component, OnInit, ViewChild, AfterViewInit, OnChanges, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export interface iUserData {
  name: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-user-list-p',
  templateUrl: './user-list-p.component.html',
  styleUrls: ['./user-list-p.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListPComponent implements OnChanges, AfterViewInit {

  /**
   * Employee list array from parent
   */
  @Input() arrEmployees: any[];

  /**
   * Necessary column to display in the table
   */
  displayedColumns: string[] = ['name', 'phone', 'email'];

  /**
   * table mat source object
   */
  dataSource = new MatTableDataSource<iUserData>();

  /**
   * Pagination and sorting
   */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private objChangeRef: ChangeDetectorRef) {
    /**
     * set custom filteration for the mat table
     */
    this.dataSource.filterPredicate = (objTask: iUserData, strFilter: string) => {
      return ('' + objTask.name).toLocaleLowerCase().indexOf(strFilter) !== -1
    }
  }

  ngOnChanges() {
    this.dataSource.data = this.arrEmployees || [];
    this.objChangeRef.detectChanges();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Filter current table data using search key
   * @param event 
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

