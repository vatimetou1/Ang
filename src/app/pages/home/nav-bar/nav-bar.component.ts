import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UtilService} from "../../../services/util.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {


  constructor(private authService: AuthService, private util: UtilService) {
  }

  logOut() {
    this.authService.logOut();
    this.util.navigateTo("login")
  }
}
