import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})

export class AuthService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password,
    },
     httpOptions);
  }

  register(username: string, email: string, password: string, role:string ): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      role:[role]
    }, httpOptions);
  }

  updateProfil(nom: string, prenom: string, roleEntr: string){
        
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Authorization': 'Bearer '+ this.tokenStorageService.getToken(), 
        'Content-Type': 'application/json'
        })
    };
    
    return this.http.put(AUTH_API +'editProfile', {
      nom,
      prenom,
      roleEntr
    }, httpOptions);
  }
}