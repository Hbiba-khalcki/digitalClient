import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Recommandation } from "../models/recommandation.model";


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
    
      getRecommandation(id:number|null):Observable<Recommandation>{
        let host=environment.host;
        return this.http.get<Recommandation>(host+ "/recommandation/"+id);
      }
     
      DeleteRecommandation(recommandation: Recommandation):Observable<void>{
        let host=environment.host;
        return  this.http.delete<void>(host+ "/recommandation/"+ recommandation.id);
      }

   
}