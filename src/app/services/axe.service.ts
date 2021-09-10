import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Axe } from "../models/axe.model";
import { TokenStorageService } from "./token-storage.service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn:"root"})
export class AxeService{

    constructor(private http:HttpClient,  private tokenStorageService: TokenStorageService){}

      saveAxe(axe: Axe):Observable<Axe[]>{
        let host=environment.host;
        return this.http.post<Axe[]>(host+"/axe/", axe);
      }

      getAllAxes():Observable<Axe[]>{
        let host=environment.host;
        return this.http.get<Axe[]>(host+"/axe");
      }
    
      getAxe(id:string|null):Observable<Axe>{
        let host=environment.host;
        return this.http.get<Axe>(host+ "/axe/"+id);
      }
     
      DeleteAxe(id:string){
        let host=environment.host;
        return  this.http.delete(host+ "/axe/"+id);
      }
      updateAxe(axe:Axe):Observable<Axe>{
        let host=environment.host;
        return this.http.put<Axe>(host+"/axe/"+axe.id,axe);
      }

    
   
}