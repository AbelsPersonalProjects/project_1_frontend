import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://35.239.88.210:8080/project-1';
  loginEndpoint = '/login';
  
  constructor(
    private http: HttpClient) { }

  login(userName: string, password: string):Observable<User>{
    return this.http.post<User>(this.url+this.loginEndpoint,{ userName,password});
  }
}
