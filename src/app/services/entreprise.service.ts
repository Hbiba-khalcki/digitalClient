import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Entreprise } from "../models/entreprise.model";




@Injectable({providedIn:"root"})                                           
export class EntrepriseService{
    constructor(private http:HttpClient){}

saveEntreprise(entreprise:Entreprise):Observable<Entreprise[]>{{
    let host = environment.host;
    return this.http.post<Entreprise[]>(host +"/entreprise", entreprise);
}

/*getEntreprise(id:number|null):Observable<Entreprise>{
     let host = environment.host;
     return this.http.get<Entreprise>(host+"/entreprise/"+id);
 }*/
}}