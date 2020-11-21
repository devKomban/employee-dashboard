import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


import { TasksRoutingModule } from './tasks-routing.module';
import { TasksCComponent } from './containers/tasks-c/tasks-c.component';
import { TaskListPComponent } from './presentations/task-list-p/task-list-p.component';
import { AddTaskPComponent } from './presentations/add-task-p/add-task-p.component';




@NgModule({
  declarations: [TasksCComponent, TaskListPComponent, AddTaskPComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    
    TasksRoutingModule
  ]
})
export class TasksModule { }
