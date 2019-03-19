import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule } from '@angular/http';
import { Http, RequestOptions,BrowserXhr } from '@angular/http';
import { AUTH_PROVIDERS, provideAuth, JwtHelper, AuthHttp } from 'angular2-jwt';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { authHttpServiceFactory } from './services/appAuth';
// import { AuthService } from './services/auth';
import { AppAuthService } from './services/appAuth';
import { AuthGuardService } from './services/authGuard';
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular5-social-login";




import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { DatabaseService  } from './services';
import { CityService  } from './services';
 import { QuestionPkgService  } from './services/math';
import { RegisterService  } from './services';
import {CustExtBrowserXhr} from './cust-ext-browser-xhr';


// https://github.com/ocombe/ng2-translate/issues/218
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        // {
        //   id: FacebookLoginProvider.PROVIDER_ID,
        //   provider: new FacebookLoginProvider("Your-Facebook-app-id")
        // },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider( '722672775741-q9gjggldku9ri1533hjjb1bg2k7apoek.apps.googleusercontent.com')
        },
      ]
  );
  return config;
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        BrowserAnimationsModule, // required for ng2-tag-input
        CoreModule,
        HttpModule,
        BrowserModule,
        LayoutModule,
        SocialLoginModule,
        SharedModule.forRoot(),
        RoutesModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    providers: [DatabaseService,
                 CityService,
                QuestionPkgService,
                 RegisterService,
                 AuthGuardService,
                 AppAuthService,
            	JwtHelper,
             {
                 provide: BrowserXhr, 
                 useClass:CustExtBrowserXhr
                },
            {
                provide: LocationStrategy, 
                useClass: HashLocationStrategy
            },
             {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
            },
            {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
            }

                 ],
    bootstrap: [AppComponent]
})
export class AppModule { }


//=========================== good before 815/18 before google auth
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
// import { NgModule } from '@angular/core';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpModule } from '@angular/http';
// import { Http, RequestOptions } from '@angular/http';
// import { AUTH_PROVIDERS, provideAuth, JwtHelper, AuthHttp } from 'angular2-jwt';

// import { authHttpServiceFactory } from './services/auth';
// import { AuthService } from './services/auth';
// import { AuthGuardService } from './services/authGuard';


// import { AppComponent } from './app.component';

// import { CoreModule } from './core/core.module';
// import { LayoutModule } from './layout/layout.module';
// import { SharedModule } from './shared/shared.module';
// import { RoutesModule } from './routes/routes.module';
// import { DatabaseService  } from './services';
// import { CityService  } from './services';
// import { RegisterService  } from './services';


// // https://github.com/ocombe/ng2-translate/issues/218
// export function createTranslateLoader(http: HttpClient) {
//     return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// @NgModule({
//     declarations: [
//         AppComponent
//     ],
//     imports: [
//         HttpClientModule,
//         BrowserAnimationsModule, // required for ng2-tag-input
//         CoreModule,
//         HttpModule,
//         LayoutModule,
//         SharedModule.forRoot(),
//         RoutesModule,
//         TranslateModule.forRoot({
//             loader: {
//                 provide: TranslateLoader,
//                 useFactory: (createTranslateLoader),
//                 deps: [HttpClient]
//             }
//         })
//     ],
//     providers: [DatabaseService,
//                  CityService,
//                  RegisterService,
//                  AuthGuardService,
// 	             AuthService,
//             	JwtHelper,
//             {
//             provide: AuthHttp,
//             useFactory: authHttpServiceFactory,
//             deps: [Http, RequestOptions]
//             }

//                  ],
//     bootstrap: [AppComponent]
// })
// export class AppModule { }
