import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./modules/auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path:'',
    loadChildren: () => import('./modules/layout-one/layout-one.module').then(m=> m.LayoutOneModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
