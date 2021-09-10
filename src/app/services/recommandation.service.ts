import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Recommandation } from "../models/recommandation.model";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn:"root"})
export class RecommandationService{

    constructor(private http:HttpClient){}

      saveRecommandation(recommandation: Recommandation):Observable<Recommandation[]>{
        let host=environment.host;
        return this.http.post<Recommandation[]>(host+"/recommandation/", recommandation);
      }

      getAllRecommandations():Observable<Recommandation[]>{
        let host=environment.host;
        return this.http.get<Recommandation[]>(host+"/recommandation");
      }
    
      getRecommandation(id:string|null):Observable<Recommandation>{
        let host=environment.host;
        return this.http.get<Recommandation>(host+ "/recommandation/"+id);
      }
     
      DeleteRecommandation(id:string){
        let host=environment.host;
        return  this.http.delete(host+ "/recommandation/"+id);
      }
      updateRecommandation(recommandation:Recommandation):Observable<Recommandation>{
        let host=environment.host;
        return this.http.put<Recommandation>(host+"/recommandation/"+recommandation.id,recommandation);
      }
      

   
}