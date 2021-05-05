import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private jwtHelper: JwtHelperService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // let model = new Request();
        // model.Username = localStorage.getItem('currentUser');
            
        // return this._CDMSService.post(config.LoginAPIPath + `/AuthenticateLogin`, model).map((auth) => {
        //     if (auth != undefined && auth.ResponseStatus == config.Success) {
        //         console.log('authenticated');
        //         return true;
        //     }
        //     console.log('not authenticated');
        //     this.router.navigateByUrl('/Login');
        //     return false;
        // })
        const token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)){
            console.log('1');
          return true;
        }
        console.log('2');
        this.router.navigate(["Login"]);
        return false;
    }
}