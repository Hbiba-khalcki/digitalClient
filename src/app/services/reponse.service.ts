import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Reponse } from "../models/reponse.model";

@Injectable({providedIn:"root"})
export class ReponseService{
  constructor(private http:HttpClient){}
    
  saveReponse(reponse: Reponse[]){
    let host=environment.host;
    return this.http.put(host+"/reponse/", reponse);
  }

  getAllReponses():Observable<Reponse[]>{
    let host=environment.host;
    return this.http.get<Reponse[]>(host+"/reponse");
  }

  getReponse(id:string):Observable<Reponse>{
    let host=environment.host;
    return this.http.get<Reponse>(host+ "/reponse/"+id);
  }
  
  DeleteReponse(id:string){
    let host=environment.host;
    return  this.http.delete(host+ "/reponse/"+id);
  }

    getReponsesByQuestionId(id:string):Observable<Reponse[]>{
      let host = environment.host;
      return this.http.get<Reponse[]>(host + "/reponse/question/"+id);
    }

   
    
 }
