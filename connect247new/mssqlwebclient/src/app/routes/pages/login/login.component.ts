
import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { User }  from '../../../models';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
 import { AppAuthService } from '../../../services/appAuth';
import { JwtHelper } from 'angular2-jwt';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular5-social-login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    valForm: FormGroup;
    private user:any ={};
    private errorCode: number;

    loading = false;
    redirectedUrl: string;

    constructor(
        public settings: SettingsService, fb: FormBuilder,
        private socialAuthService: AuthService, 
        private appAuthService: AppAuthService,
        private jwtHelper: JwtHelper, 
        private router: Router,
        private route: ActivatedRoute
        ) {

        this.valForm = fb.group({
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'password': [null, Validators.required]
        });

    }

    ngOnInit() {
        console.log('Login Called');
        //reset login status
         this.appAuthService.logout();
    
        //get return url from route parameters or default to '/'
        this.redirectedUrl = this.route.snapshot.params['redirectedUrl'] || '/';
      }
    
      onScroll () {
            console.log('scrolled!!')
        }
        
    public socialSignIn(socialPlatform : string){
         let socialPlatformProvider;
            if(socialPlatform == "facebook"){
                 console.log(" facebook sign in data : " );
            // socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
            }else if(socialPlatform == "google"){
            socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
            }
            
      this.socialAuthService.signIn(socialPlatformProvider).then(
            (userData) => {
                console.log(socialPlatform+" sign in data : " , userData);
                console.log(socialPlatform+" sign in token : " , userData.token);
                localStorage.setItem('token', userData.idToken);
                localStorage.setItem('accessToken', userData.token);
                localStorage.setItem('name', userData.name);
                localStorage.setItem('email', userData.email);
                localStorage.setItem('imageURL', userData.image);
                localStorage.setItem('id', userData.id);
                this.loading = false;

            //login successful so redirect to return url
             this.router.navigate([this.redirectedUrl]);
            //  this.router.navigate(['/home']);
                    
            } ).catch((error) => {
          console.log('Error Logging in: ', error);
          this.errorCode = error.loginErrorCode;
          this.loading = false;
        });
        //  }

    }



    submitForm($ev, value: any) {
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        console.log(value.email);
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value.email);
        }

        this.loading = true;
        this.appAuthService.logIn(value.email, value.password)
          .then((user?: User) => {
            let token = localStorage.getItem('token');
            this.loading = false;
    
            //login successful so redirect to return url
            this.router.navigate([this.redirectedUrl]);
    
          })
        .catch((error) => {
          console.log('Error Logging in: ', error);
          this.errorCode = error.loginErrorCode;
          this.loading = false;
        })

    }

  

}

//---------------------------------good for AD
// import { Component, OnInit } from '@angular/core';
// import { SettingsService } from '../../../core/settings/settings.service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { CustomValidators } from 'ng2-validation';
// import { User }  from '../../../models';
// import { Router, CanActivate, ActivatedRoute } from '@angular/router';
//  import { AuthService } from '../../../services/auth';
// import { JwtHelper } from 'angular2-jwt';
// 

// @Component({
//     selector: 'app-login',
//     templateUrl: './login.component.html',
//     styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//     valForm: FormGroup;
//     private user:any ={};
//     private errorCode: number;

//     loading = false;
//     redirectedUrl: string;

//     constructor(
//         public settings: SettingsService, fb: FormBuilder,
//         private authService: AuthService, 
//         private jwtHelper: JwtHelper, 
//         private router: Router,
//         private route: ActivatedRoute
//         ) {

//         this.valForm = fb.group({
//             'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
//             'password': [null, Validators.required]
//         });

//     }

//     ngOnInit() {
//         console.log('Login Called');
//         //reset login status
//         this.authService.logout();
    
//         //get return url from route parameters or default to '/'
//         this.redirectedUrl = this.route.snapshot.params['redirectedUrl'] || '/';
//       }
    
//       onScroll () {
//             console.log('scrolled!!')
//         }
        
//     googleLogin(){
//          this.authService.googlelogIn()
//           .then((user?: User) => {
//             // let token = localStorage.getItem('token');
//             // this.loading = false;

//             console.log('Google authentication succeed ');
    
//             //login successful so redirect to return url
//             // this.router.navigate([this.redirectedUrl]);
    
//           })
//         .catch((error) => {
//           console.log('Error Logging in: ', error);
//           this.errorCode = error.loginErrorCode;
//           this.loading = false;
//         })

//     }



//     submitForm($ev, value: any) {
//         $ev.preventDefault();
//         for (let c in this.valForm.controls) {
//             this.valForm.controls[c].markAsTouched();
//         }
//         console.log(value.email);
//         if (this.valForm.valid) {
//             console.log('Valid!');
//             console.log(value.email);
//         }

//         this.loading = true;
//         this.authService.logIn(value.email, value.password)
//           .then((user?: User) => {
//             let token = localStorage.getItem('token');
//             this.loading = false;
    
//             //login successful so redirect to return url
//             this.router.navigate([this.redirectedUrl]);
    
//           })
//         .catch((error) => {
//           console.log('Error Logging in: ', error);
//           this.errorCode = error.loginErrorCode;
//           this.loading = false;
//         })

//     }

  

// }



//=====================================================
// import { Component, OnInit } from '@angular/core';
// import { SettingsService } from '../../../core/settings/settings.service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { CustomValidators } from 'ng2-validation';

// @Component({
//     selector: 'app-login',
//     templateUrl: './login.component.html',
//     styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//     valForm: FormGroup;

//     constructor(public settings: SettingsService, fb: FormBuilder) {

//         this.valForm = fb.group({
//             'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
//             'password': [null, Validators.required]
//         });

//     }

//     submitForm($ev, value: any) {
//         $ev.preventDefault();
//         for (let c in this.valForm.controls) {
//             this.valForm.controls[c].markAsTouched();
//         }
//         if (this.valForm.valid) {
//             console.log('Valid!');
//             console.log(value);
//         }
//     }

//     ngOnInit() {

//     }

// }
