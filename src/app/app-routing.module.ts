import { NgModule } from '@angular/core';
import { RouterModule, Routes } from'@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";

const routes: Routes = [
{ path: 'dashboard', component: DashboardComponent },
{ path: 'about', component: AboutComponent },
{ path: 'home', component: HomeComponent },
{ path: '', pathMatch: 'full', redirectTo: '/home'},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
