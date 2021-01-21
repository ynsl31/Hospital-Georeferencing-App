import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../master/login/services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  role1: String ;
  role2: String ;
  constructor(
    private router: Router,private tokenStorageService: TokenStorageService
) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.tokenStorageService.getUser();
   // console.log('can activate'+currentUser.roles);
//console.log('can activate route'+route.data.roles);
if(currentUser){
    this.role1 = route.data.roles
    this.role2 = currentUser.roles
  //  console.log(this.role1+" role 2"+this.role2)
   // console.log(this.role2.toString() == this.role1.toString())
   // console.log(route.data.roles =currentUser.roles)
    // if (currentUser) {
    //     // check if route is restricted by role
    //     if (route.data.roles && route.data.roles.indexOf(currentUser.roles) === -1) {
    //         // role not authorised so redirect to home page
    //         //this.router.navigate(['/']);
    //         return false;
    //     }

    //     // authorised so return true
    //     return true;
    // }

    if (this.role2.toString() == this.role1.toString())
      return true
    }  
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
}
}
