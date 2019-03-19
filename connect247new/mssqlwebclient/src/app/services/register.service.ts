import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Http,HttpModule, Response, URLSearchParams } from '@angular/http';
import { User } from '../models'
import { AppSettings } from '../appsettings';

@Injectable()
export class RegisterService {
   private apiUrl = AppSettings.apiUrl3;

    //  apiPath = 'http://localhost:8000/mssqlapi/register';

  constructor(private http:Http) { }

   register(newUserData:User): Observable<number> {

      var body = {
       p_email: newUserData.email,
       p_password: newUserData.password
    
    }
    //  var apiPath = 'http://localhost:8000/mssqlapi/register';
        console.log('Inside register Service...'+newUserData.email+newUserData.password)
        return this.http.post(this.apiUrl, body)
        .map((response: Response) =>  response.status)
        
    }  
}
