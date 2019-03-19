// import { Injectable } from '@angular/core';

// @Injectable()
// export class AuthGuardService {

//   constructor() { }

// }



import { Injectable } from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivateChild,
         NavigationExtras } from '@angular/router';

// import { AuthService } from '../auth';
import { AppAuthService } from '../appAuth';


@Injectable()
export class AuthGuardService implements CanActivate
                                        //, CanActivateChild

 {

  private url: string;

  constructor(private appAuthService:  AppAuthService, private router: Router) { }

 /*
  canActivate(next, previous) {
    //console.log('Requested URL: ', previous.url);
    this.url = previous.url;
    this.url.replace('/', '');
   
    console.log('Requested URL: ', this.url);
    console.log('Is user Logged in? ', this.authService.loggedIn())
    localStorage.setItem('previousUrl', this.url);
    if(this.authService.loggedIn()) {
      console.log('User is logged in')
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
  */ //ttram
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.appAuthService.loggedIn()) {
      console.log('User previously logged in')
      return true;
    }
      console.log('User not previouslylogged in')
    //Navigate to the login page and passing redirected URL params
    this.router.navigate(['login', { redirectedUrl: state.url}]);
    return false;
  }
  

}

