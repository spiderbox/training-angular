import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuth } from './login-auth'
import { ROUTE } from './config/constants'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: ROUTE.HOME,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: ROUTE.EMPLOYEE,
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    canActivate: [LoginAuth]
  },
  {
    path: '', 
    redirectTo: ROUTE.HOME, 
    pathMatch: 'full'
  },
  { 
    path: ROUTE.ABOUT, 
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule) 
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: [LoginAuth]
})
export class AppRoutingModule { }
