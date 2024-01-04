import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {SharedModule} from "../shared/shared.module";
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { SideBarComponent } from './home/side-bar/side-bar.component';
import {AuthService} from "./services/auth.service";


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService
  ]
})
export class PagesModule { }
