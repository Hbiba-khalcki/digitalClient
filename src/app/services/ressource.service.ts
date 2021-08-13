import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Ressource } from "../models/ressource.model";

@Injectable({providedIn:"root"})
export class RessourceService{
    constructor(private http:HttpClient){}
    
      saveRessource(ressource: Ressource):Observable<Ressource[]>{
        let host=environment.host;
        return this.http.post<Ressource[]>(host+"/ressource/", ressource);
      }

      getAllRessources():Observable<Ressource[]>{
        let host=environment.host; 
        return this.http.get<Ressource[]>(host+"/ressource");
      }
    
      getRessource(id:number|null):Observable<Ressource>{
        let host=environment.host;
        return this.http.get<Ressource>(host+ "/ressource/"+id);
      }
     
      DeleteRessource(ressource: Ressource):Observable<void>{
        let host=environment.host;
        return  this.http.delete<void>(host+ "/ressource/"+ ressource.id);
      }

   
    
 }
