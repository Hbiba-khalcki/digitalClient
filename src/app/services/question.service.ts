import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Question } from "../models/question.model";



@Injectable({ providedIn: "root" })
export class QuestionService {

  constructor(private http: HttpClient) {
  }


  saveQuestion(question: Question): Observable<Question[]> {
    let host = environment.host;
    return this.http.post<Question[]>(host + "/question/", question);
  }

  getAllQuestions(): Observable<Question[]> {
    let host = environment.host;
    return this.http.get<Question[]>(host + "/question");
  }

  SearchQuestion(keyword: string): Observable<Question[]> {
    let host = environment.host;
    return this.http.get<Question[]>(host + "/question?name_like=" + keyword);
  }

  DeleteQuestion(id:string){
    let host=environment.host;
    return  this.http.delete(host+ "/question/" +id);
  }

  getQuestion(id: string | null): Observable<Question> {
    let host = environment.host;
    return this.http.get<Question>(host + "/question/" + id);
  }
  updateQuestion(Question: Question): Observable<Question> {
    let host = environment.host;
    return this.http.put<Question>(host + "/question/" + Question.id, Question);

  }
}