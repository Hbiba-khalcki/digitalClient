import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Question } from "../models/question.model";
import { ReponseClient } from "../models/reponseClient.model";
import { TokenStorageService } from "./token-storage.service";


@Injectable({ providedIn: "root" })
export class ReponseClientService {

  constructor(private http: HttpClient,private tokenStorageService:TokenStorageService) {
  }

  save(reponseClient: ReponseClient,idQuestion): Observable<ReponseClient[]> {
    let host = environment.host;
    const httpOptions = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
          'Content-Type': 'application/json'
        })
      };
    return this.http.post<ReponseClient[]>(host + "/reponse-client/"+idQuestion, reponseClient, httpOptions);
  }
  getByIdUserAndIdQuestion(idQuestion: string): Observable<ReponseClient> {
    let host = environment.host;
    const httpOptions = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
          'Content-Type': 'application/json'
        })
      };
    return this.http.get<ReponseClient>(host + "/reponse-client/"+idQuestion, httpOptions);
  }
}