import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Http,HttpModule, Response, URLSearchParams } from '@angular/http';
import { DatabaseInstance } from '../models';
import { AppSettings } from '../appsettings';

@Injectable()
export class DatabaseService {
    private apiUrl = AppSettings.apiUrl;

  constructor(private http:Http) { 
   
  }
    
   getDatabases(): Observable<Array<DatabaseInstance>> {
        // var apiPath = 'http://localhost:8000/mssqlapi/msdbbyinstance';
        // return this.http.get(apiPath)
        return this.http.get(this.apiUrl)
        .map((response: Response)=> response.json())
        // .do(data => console.log('database info: ' + JSON.stringify(data)))
    }  

    putCOCDBbyID(updateDbData: DatabaseInstance): Observable<number> {
         console.log('Update db info ',updateDbData.COCDBID);
        console.log('Update dbNAME info ',updateDbData.dbName);
     var body = {
       COCDBID: updateDbData.COCDBID,
       dbName: updateDbData.dbName
    
    }
    
     console.log('body= ', body);
    // return this.http.put(this.apiUrl + updateDbData.dbName, body)
     return this.http.put(this.apiUrl, body)
    //  return this.http.put(this.apiUrl + '/dbName/', body)
      .map((response: Response) => response.status)

 }


 postCOCDBdata( newCOCDBdata: DatabaseInstance ) : Observable<number>{
    // var apiPath = 'http://localhost:8000/mssqlapi/msdbbyinstance';
    newCOCDBdata.instanceName = newCOCDBdata.instanceName.toUpperCase();
    newCOCDBdata.dbName = newCOCDBdata.dbName.toUpperCase();
    
    return this.http.post(this.apiUrl, newCOCDBdata)
      .map((response: Response) => response.status)
  }  

}