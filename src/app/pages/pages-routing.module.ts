import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {UserMustBeLoggedInGuard} from "../services/UserMustBeLoggedInGuard";
import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UserMustBeLoggedInGuard],
  },
  {
    path: 'login',
    component: LoginComponent
    
  }
  ,
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
