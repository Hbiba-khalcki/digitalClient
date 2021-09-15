import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const baseUrl = 'http://localhost:8080/api/users';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {


  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:string|null):Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  getoverall() {
    const httpOptions = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.tokenStorageService.getToken(),
          'Content-Type': 'application/json'
        })
      };
    return this.http.get(baseUrl+"/getoverall", httpOptions)
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  /* 
  findByContenu(contenu): Observable<any> {
    return this.http.get(`${baseUrl}?contenu=${contenu}`);
  }
  */
   
  findByNom(nom): Observable<any> {
    return this.http.get(`${baseUrl}?nom=${nom}`);
  }
}