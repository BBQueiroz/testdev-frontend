import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getCurrentToken(){
    const token = sessionStorage.getItem('token');
  }

  authenticate(login: string, password: string): Observable<any>{
    const body = { login, password };
    return this.http.post<any>('http://localhost:8080/auth/login', body);

  }
}


