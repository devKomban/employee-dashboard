import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, Validators } from '@angular/forms';
import { iEvent } from '@shared/models';

export interface TaskData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list-p',
  templateUrl: './task-list-p.component.html',
  styleUrls: ['./task-list-p.component.scss']
})
export class TaskListPComponent implements OnInit {

  @Input() arrEmployeeTaskList: any[];

  @Output() pEvent = new EventEmitter<iEvent>();
  
  displayedColumns: string[] = ['title', 'completed'];
  dataSource: MatTableDataSource<TaskData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  status = new FormControl('ALL', [
    Validators.required
  ]);

  constructor() { }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.arrEmployeeTaskList || []);
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

  addNewTask(){
    this.pEvent.emit({
      operation: 'ADD_TASK'
    })
  }
}
