import { Component, OnInit, ViewChild, AfterViewInit, OnChanges, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export interface UserData {
  name: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-user-list-p',
  templateUrl: './user-list-p.component.html',
  styleUrls: ['./user-list-p.component.scss']
})
export class UserListPComponent implements OnChanges, OnInit, AfterViewInit {

  @Input() arrEmployees: any[];

  displayedColumns: string[] = ['name', 'phone', 'email'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.arrEmployees || []);    
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

