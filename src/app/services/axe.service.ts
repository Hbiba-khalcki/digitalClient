import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Axe } from "../models/axe.model";

@Injectable({providedIn:"root"})
export class AxeService{

    constructor(private http:HttpClient){}

      saveAxe(axe: Axe):Observable<Axe[]>{
        let host=environment.host;
        return this.http.post<Axe[]>(host+"/axe/", axe);
      }

      getAllAxes():Observable<Axe[]>{
        let host=environment.host;
        return this.http.get<Axe[]>(host+"/axe");
      }
    
      getAxe(id:number|null):Observable<Axe>{
        let host=environment.host;
        return this.http.get<Axe>(host+ "/axe/"+id);
      }
     
      DeleteAxe(axe: Axe):Observable<void>{
        let host=environment.host;
        return  this.http.delete<void>(host+ "/axe/"+ axe.id);
      }

   
}