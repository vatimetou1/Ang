import { Injectable } from '@angular/core';
import {IUser} from "../pages/models/iuser";

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  get curUser(): IUser {
    return this._curUser;
  }

  set curUser(value: IUser) {
    this._curUser = value;
  }
  private _curUser = <IUser>{};

  constructor() { }
}
