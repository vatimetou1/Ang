import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {StateManagerService} from "./state-manager.service";
import {IUser} from "../pages/models/iuser";

@Injectable({
    providedIn: 'root'
})
export class UserMustBeLoggedInGuard implements CanActivate {

    constructor(private router: Router, private stateManagerService: StateManagerService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // let usrObs: Observable<IUser>;

        let currentUser: IUser;
        currentUser = this.stateManagerService.curUser;

        if (currentUser) {
            return true;
        }


        // si utilisateur n'est pas connecté
      if(!this.stateManagerService.curUser)
        this.router.navigate(['login']);
        return false;

    }
}

// AppGuard extends KeycloakAuthGuard implements CanActivate {
//     constructor(protected router: Router, protected keycloakAngular: KeycloakService) {
//         super(router, keycloakAngular);
//     }

//     isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
//         return new Promise((resolve, reject) => {
//             if (!this.authenticated) {
//                 this.keycloakAngular.login()
//                     .catch(e => console.error(e));
//                 return reject(false);
//             }

//             const requiredRoles: string[] = route.data.roles;
//             if (!requiredRoles || requiredRoles.length === 0) {
//                 return resolve(true);
//             } else {
//                 if (!this.roles || this.roles.length === 0) {
//                     resolve(false);
//                 }
//                 resolve(requiredRoles.every(role => this.roles.indexOf(role) > -1));
//             }
//         });
//     }
// }
