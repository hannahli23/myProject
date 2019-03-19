import { environment } from '../environments';

export class AppSettings {
    public static apiServer: string = environment.apiHost;
    public static apiInstance: string = environment.envName;
    public static apiPort: number = environment.apiPort;
    public static apiRoot: string = environment.apiRoot;
    public static reportServer: string = environment.reportServer;
    public static apiUrl: string = environment.apiUrl;
    public static apiUrl2: string = environment.apiUrl2;
    public static apiUrl3: string = environment.apiUrl3;
    public static apiUrl5: string = environment.apiUrl5;


  
    
}