import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: 'home',component: LandingpageComponent},
  { path: 'dashboard',component: DashboardComponent},
  { path: 'sign-up', component: SignupComponent},
  { path: '',redirectTo: '/home',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
