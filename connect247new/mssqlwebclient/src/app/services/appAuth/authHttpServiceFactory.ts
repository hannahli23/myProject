import { Http, RequestOptions } from '@angular/http';
import { AUTH_PROVIDERS, provideAuth, JwtHelper, AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
        headerPrefix: 'JWT',
        tokenName: 'token',
        tokenGetter: (() => localStorage.getItem('token')),
        globalHeaders: [{'Content-Type':'application/json'}],
     }), http, options);
}