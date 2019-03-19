// import { Injectable } from '@angular/core';

// @Injectable()
// export class AppAuthService {

//   constructor() { }

// }


import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { User } from '../../models'
import { AppSettings } from '../../appsettings';
import { IAuthService } from './IAuthService';

@Injectable()
export class AppAuthService implements IAuthService{

  //private apiHost = 'localhost:8000'

  private authenticated: boolean = false;
  requestedUrl: string = '';
  
  constructor(private http: Http, private jwtHelper: JwtHelper, private router: Router) { }

  loggedIn(){
    if(this.checkForToken()){
      let token = localStorage.getItem('token');
      this.authenticated = true;
      console.log('TokenExipred? ', this.jwtHelper.isTokenExpired(token));
      console.log('Auth Service: jwtHelper.isTokenExpired ', this.jwtHelper.isTokenExpired(token,0));
      console.log('Auth Service: tokenNotExpired ', tokenNotExpired('token'));
      console.log('Auth Service: tokenNotExpired ', this.jwtHelper.getTokenExpirationDate(token));
      if(this.jwtHelper.isTokenExpired(token,0)) {
         console.log('Token Expired, setting authenticated = false');
         
        this.authenticated = false;
      } else {
        console.log('Token not Expired, setting authenticated = true');
        this.authenticated = true;
        //this.authenticated = true;
      } 
    }
    return this.authenticated;
    
  }


  logIn(username: string, password: string): Promise<User> {

    console.log('Loggin In using LoginService');

    var user = { username: username, password: password };

    let bodyString = JSON.stringify(user); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request 

    
    return this.http.post(AppSettings.apiUrl2 + '/login', user)
      .toPromise()
      .then((response: Response) => {
          this.authenticated = true;
          console.log('Login Request Complete: ', user);
          console.log('token: ', response.json().token);
          localStorage.setItem('token', response.json().token);
          localStorage.setItem('user', response.json().user.username);
          localStorage.setItem('userName', response.json().user.adLogin);
          localStorage.setItem('currentUser', response.json().user.displayName);
          console.log('Changing authenticated Flag to ', this.authenticated);
          return response.json() as User;
        })
      .catch(this.handleLoginError);
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
     localStorage.removeItem('accessToken');
      localStorage.removeItem('name');
       localStorage.removeItem('email');
        localStorage.removeItem('imageURL');
         localStorage.removeItem('id');

    this.router.navigate(['login']);
  }

  private handleLoginError(error: any): Promise<any> {
    console.log('Error Code ', error.status);
    console.error('An error occurred', JSON.parse(error._body)); // for demo purposes only
    var errorMessage = JSON.parse(error._body);
    return Promise.reject({ message: errorMessage.message, code: error.status, loginErrorCode: errorMessage.loginErrorCode });
  }

  checkForToken(){
    // if(localStorage.getItem('token') && localStorage.getItem('user')){
       if(localStorage.getItem('token') && localStorage.getItem('name')){
      console.log('Token exists');
      return true;

    } else {
      console.log('No Token found!')
      return false;
    }
  }

  checkForRole(role: string){
    let token = localStorage.getItem('token');
    let roles = this.jwtHelper.decodeToken(token).roles;
    console.log('roles= ', roles);
    return roles.indexOf(role) >= 0;
  }

}


