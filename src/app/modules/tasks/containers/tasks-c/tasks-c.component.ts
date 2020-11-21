import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, switchMap, tap } from 'rxjs/operators';
import { TasksService } from '@shared/services';
import { Observable } from 'rxjs';
import { TopNavbarService } from '@shared/ui-components/header/components/top-navbar/top-navbar.service';
import { iEvent } from '@shared/models';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskPComponent } from '@modules/tasks/presentations/add-task-p/add-task-p.component';

@Component({
  selector: 'app-tasks-c',
  templateUrl: './tasks-c.component.html',
  styleUrls: ['./tasks-c.component.scss']
})
export class TasksCComponent implements OnInit {

  obsEmployeeTaskList$: Observable<any[]>;

  constructor(private objActRoute: ActivatedRoute,
              private objDialogService: MatDialog,
              private objTopNavbarService: TopNavbarService,
              private objTasksService: TasksService) { }

  ngOnInit(): void {
    this.obsEmployeeTaskList$ = this.objActRoute.params
    .pipe(
      switchMap(({id}) => {
        return this.objTasksService.getEmployeeTasksList(id);
      }),
      tap((arrEmployeeTaskList: any[]) => {
        this.objTopNavbarService.sendDataToTopNavbar({
          strTitle: 'Employee Tasks',
          intCount: arrEmployeeTaskList.length || 0
        })
      }),
      take(1),
    );
  }

  handleChildEvents(objEvent: iEvent) {
    switch (objEvent.operation) {
      case 'ADD_TASK':
          this.openAddTaskPopup();
        break;

      default:
        break;
    }
  }

  openAddTaskPopup() {
    const objDialogRef = this.objDialogService.open(AddTaskPComponent, {
      width: '400px'
    });

    objDialogRef.afterClosed().subscribe(result => {
    });
  }
}
