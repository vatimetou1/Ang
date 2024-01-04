import { Component, OnInit } from '@angular/core';
import {UtilService} from "../../services/util.service";
import {IAuth} from "../models/iauth";
import {AuthService} from "../services/auth.service";
import {IUser} from "../models/iuser";
import {StateManagerService} from "../../services/state-manager.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  

    type: string = "password";
    isText: boolean = false;
    eyeIcon: string = "fa-eye-slash";
  constructor() {}

  

    ngOnInit(): void {
        
    }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" :this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";


  }
}
