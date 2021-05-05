import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Common/CustomAuthGuard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: DashboardComponent,canActivate:[AuthGuard], pathMatch: 'full' },
  { path: 'Login', component: LoginComponent, pathMatch: 'full' },
  { path: 'Home', component: DashboardComponent,canActivate:[AuthGuard], pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
