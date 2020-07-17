import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuth } from './login-auth'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    canActivate: [LoginAuth]
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginAuth]
})
export class AppRoutingModule { }
