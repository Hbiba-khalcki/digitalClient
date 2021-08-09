import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Question } from "../models/question.model";


@Injectable({providedIn:"root"})
export class QuestionService {

    constructor(private http:HttpClient){
    }


    saveQuestion(question: Question):Observable<Question[]>{
      let host=environment.host;
      return this.http.post<Question[]>(host+"/question/", question);
    }

    getAllQuestions():Observable<Question[]>{
        let host=environment.host;
        //return this.http.get(host+ "http://localhost:3000/ Questions") 
        return this.http.get<Question[]>(host+"/question");
      }
     
     
      SearchQuestion(keyword:string):Observable<Question[]>{
        let host=environment.host;
        return this.http.get<Question[]>(host+ "/question?name_like="+keyword);
      }
     
      
      DeleteQuestion(Question: Question):Observable<void>{
        let host=environment.host;
        return  this.http.delete<void>(host+ "/question/"+ Question.id);
      }

   
      getQuestion(id:number|null):Observable<Question>{
        let host=environment.host;
        return this.http.get<Question>(host+ "/question/"+id);
      }
      updateQuestion( Question: Question):Observable< Question>{
        let host=environment.host;
        return this.http.put<Question>(host+"/question/"+ Question.id, Question);

      }
      }