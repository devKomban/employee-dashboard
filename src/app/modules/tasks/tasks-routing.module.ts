import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksCComponent } from '@modules/tasks/containers/tasks-c/tasks-c.component';

const routes: Routes = [
  {
    path: '',
    component: TasksCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
