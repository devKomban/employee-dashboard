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

  /**
   * Array of all tasksd of current empoloyee
   */
  @Input() arrEmployeeTaskList: iTaskData[];

  @Output() pEvent = new EventEmitter<iEvent>();
  
  /**
   * List of columns to display in the table
   */
  displayedColumns: string[] = ['title'];

  /**
   * Data source object
   */
  dataSource = new MatTableDataSource<iTaskData>();
  
  /**
   * Subject to unsubscribe all observerables during onDestroy
   */
  obsUnsubscribeAll$ = new Subject();

  /**
   * Table pagination and sort object
   */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Form object
   */
  filterTasks = this.objFb.group({
    strStatus: ['ALL']    
  })

  constructor(private objFb: FormBuilder) {

    /**
     * Custom filteration for datasource
     */
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

    /**
     * List to value change from filter and update the table
     */
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
    /**
     * Unsubscribing all observables
     */
    this.obsUnsubscribeAll$.next(null);
    this.obsUnsubscribeAll$.complete();
  }

  /**
   * Add new task to the current user
   */
  addNewTask(){
    this.pEvent.emit({
      operation: 'ADD_TASK'
    })
  }
}
