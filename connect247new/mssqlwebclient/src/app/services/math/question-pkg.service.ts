import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Http,HttpModule, Response, URLSearchParams } from '@angular/http';
import { QuestionPKG,City } from '../../models'
import { AppSettings } from '../../appsettings';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class QuestionPkgService {

 

  // apiPath = 'http://localhost:8000/mssqlapi/lct';
   private apiPath = AppSettings.apiUrl5;

  constructor(
    private authHttp: AuthHttp,
    private http:Http) { 

  }

   getCityData(): Observable<Array<City>> {
        console.log('Inside getCityData Service...')
        // var apiPath = 'http://localhost:8000/mssqlapi/lct';
        return this.authHttp.get(this.apiPath)
        .map((response: Response)=> response.json())
        
    }  

  getAMC8quPkgData(): Observable<Array<QuestionPKG>> {
        console.log('Inside QuestionPKG Service...')
        // var apiPath = 'http://localhost:8000/mssqlapi/lct';
        return this.authHttp.get(this.apiPath)
        .map((response: Response)=> response.json())
        
    } 

    post( newCityData: City ) : Observable<number>{
    // var apiPath = 'http://localhost:8000/mssqlapi/msdbbyinstance';
    // newDbInstance.instanceName = newDbInstance.instanceName.toUpperCase();
    // newDbInstance.dbName = newDbInstance.dbName.toUpperCase();

   // var apiPath = 'http://localhost:8000/mssqlapi/lct';
    
    return this.authHttp.post(this.apiPath, newCityData)
      .map((response: Response) => response.status)
  }    

}
