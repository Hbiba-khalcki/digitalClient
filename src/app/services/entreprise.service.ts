import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Entreprise } from "../models/entreprise.model";
import { TokenStorageService } from "./token-storage.service";




@Injectable({providedIn:"root"})                                           
export class EntrepriseService{
    constructor(private http:HttpClient, private tokenStorageService: TokenStorageService){}

saveEntreprise(entreprise){
    let host = environment.host;
    
    const httpOptions = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
          'Content-Type': 'application/json'
        })
      };
  
      return this.http.put(host +"/entreprise",entreprise , httpOptions);
    }
getEntreprise():Observable<Entreprise>{
     let host = environment.host;
     const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
        'Content-Type': 'application/json'
      })
    };
     return this.http.get<Entreprise>(host+"/entreprise/single",httpOptions);
 }



}