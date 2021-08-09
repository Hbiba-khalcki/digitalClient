import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Reponse } from "../models/reponse.model";

@Injectable({providedIn:"root"})
export class ReponseService{
    constructor(private http:HttpClient){}
    
      saveReponse(reponse: Reponse):Observable<Reponse[]>{
        let host=environment.host;
        return this.http.post<Reponse[]>(host+"/reponse/", reponse);
      }

      getAllReponses():Observable<Reponse[]>{
        let host=environment.host;
        //return this.http.get(host+ "http://localhost:3000/ Questions") 
        return this.http.get<Reponse[]>(host+"/reponses");
      }
    
      getReponse(id:number|null):Observable<Reponse>{
        let host=environment.host;
        return this.http.get<Reponse>(host+ "/Reponses/"+id);
      }
     
      DeleteReponse(reponse: Reponse):Observable<void>{
        let host=environment.host;
        return  this.http.delete<void>(host+ "/Reponses/"+ reponse.id);
      }

   
    
 }
