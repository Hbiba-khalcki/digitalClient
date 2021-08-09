import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn:"root"})
export class ContactService {

    constructor(private http:HttpClient){
    }

 
    sendemail(contact:any):Observable<any>{
        console.log(contact)
        let host = environment.host;
        return this.http.post<any>(host+ "/contact",contact);
      }

  
    }