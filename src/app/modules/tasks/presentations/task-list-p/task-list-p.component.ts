import { Component, OnInit, Input, ViewChild, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { iEvent } from '@shared/models';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

export interface iTaskData {
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
export class TaskListPComponent implements OnChanges, AfterViewInit, OnDestroy  {

  @Input() arrEmployeeTaskList: any[];

  @Output() pEvent = new EventEmitter<iEvent>();
  
  displayedColumns: string[] = ['title', 'completed'];
  dataSource = new MatTableDataSource<iTaskData>();
  
  obsUnsubscribeAll$ = new Subject();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  filterTasks = this.objFb.group({
    strStatus: ['ALL']    
  })

  constructor(private objFb: FormBuilder) {

    this.dataSource.filterPredicate = (objTask: iTaskData, strFilter: string) => {
      return ('' + objTask.completed).indexOf(strFilter) !== -1
    }
  }

  ngOnChanges() {
    this.dataSource.data = this.arrEmployeeTaskList || [];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.filterTasks.valueChanges
    .pipe(
      takeUntil(this.obsUnsubscribeAll$)
    )
      .subscribe(({ strStatus }) => {

        if (strStatus !== 'ALL')
          this.dataSource.filter = strStatus.trim().toLowerCase();
        else
          this.dataSource.filter = '';

        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
    })
  }

  ngOnDestroy() {
    this.obsUnsubscribeAll$.next(null);
    this.obsUnsubscribeAll$.complete();
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
