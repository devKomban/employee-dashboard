import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutOneCComponent } from './containers/layout-one-c/layout-one-c.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutOneCComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'tasks/:id',
        loadChildren: () => import('../tasks/tasks.module').then(m => m.TasksModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutOneRoutingModule { }
