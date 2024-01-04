import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAuth} from "../models/iauth";
import {Observable} from "rxjs";
import {IUser} from "../models/iuser";
import {StateManagerService} from "../../services/state-manager.service";

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient,
              private stateManagerService: StateManagerService) { }

  logIn(auth: IAuth) {
    return this.httpClient.post("http://localhost:8080/Auth", auth);
  }

  logOut() {
    // @ts-ignore
    this.stateManagerService.curUser = null;
  }
}
