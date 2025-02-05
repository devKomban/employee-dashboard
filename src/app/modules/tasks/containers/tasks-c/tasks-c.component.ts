import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, switchMap, tap } from 'rxjs/operators';
import { TasksService, LoadingService } from '@shared/services';
import { Observable } from 'rxjs';
import { TopNavbarService } from '@shared/ui-components/header/components/top-navbar/top-navbar.service';
import { iEvent } from '@shared/models';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskPComponent } from '@modules/tasks/presentations/add-task-p/add-task-p.component';

@Component({
  selector: 'app-tasks-c',
  templateUrl: './tasks-c.component.html',
  styleUrls: ['./tasks-c.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksCComponent implements OnInit {

  /**
   * Observerable fetching all employee tasks from server from server 
   */
  obsEmployeeTaskList$: Observable<any[]>;
  /**
   * List of employee task 
   */
  arrEmployeeTaskList: any[];
  /**
   * Current employee id used for saving new task
   */
  intEmployeeId: number;

  constructor(private objActRoute: ActivatedRoute,
              private objDialogService: MatDialog,
              private objChangeDetectionDef: ChangeDetectorRef,
              private objTopNavbarService: TopNavbarService,
              private objLoadingService: LoadingService,                  
              private objTasksService: TasksService) { }

  ngOnInit(): void {
    this.objLoadingService.showSpinner();
    this.objActRoute.params
    .pipe(
      switchMap(({id}) => {
        this.intEmployeeId = id;
        return this.objTasksService.getEmployeeTasksList(id);
      }),
      tap(() => {
        this.objLoadingService.hideSpinner();
      }),
      /**
       * Title and count send to top nav 
       */
      tap((arrEmployeeTaskList: any[]) => {
        this.objTopNavbarService.sendDataToTopNavbar({
          strTitle: 'Employee Tasks',
          intCount: arrEmployeeTaskList.length || 0
        })
      }),
      take(1),
    ).subscribe(arrEmployeeeTaskList => {
      this.arrEmployeeTaskList = arrEmployeeeTaskList;
      this.objChangeDetectionDef.detectChanges();
    });
  }

  /**
   * Function to handle all child events
   * @param objEvent 
   */
  handleChildEvents(objEvent: iEvent) {
    switch (objEvent.operation) {
      case 'ADD_TASK':
          this.openAddTaskPopup();
        break;
      case 'SAVE_TASK':
        this.saveNewTask(objEvent.data);
        break;
      
      default:
        break;
    }
  }

  openAddTaskPopup() {
    const objDialogRef = this.objDialogService.open(AddTaskPComponent, {
      width: '400px'
    });

    objDialogRef.componentInstance.pEvent
    .pipe(take(1))
    .subscribe(objAddTaskEvents => {
      this.handleChildEvents(objAddTaskEvents);
      objDialogRef.close();
    });
  }

  saveNewTask(objNewEmployeeTask) {
    this.arrEmployeeTaskList = this.objTasksService.saveNewEmployeeTask(this.arrEmployeeTaskList, this.intEmployeeId, objNewEmployeeTask);    
    this.objChangeDetectionDef.detectChanges();
  }
}
