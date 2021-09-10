import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Ressource } from "../models/ressource.model";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

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
    
      getRessource(id:string):Observable<Ressource>{
        let host=environment.host;
        return this.http.get<Ressource>(host+ "/ressource/"+id);
      }
     
      DeleteRessource(id:string){
        let host=environment.host;
        return  this.http.delete(host+ "/ressource/"+id);
      }

      updateRessource(ress:Ressource):Observable<Ressource>{
        let host=environment.host;
        return this.http.put<Ressource>(host+"/ressource/"+ress.id,ress);
      }

   
    
 }
