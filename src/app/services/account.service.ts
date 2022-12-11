import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICreateComment } from '../models/comments/create-comment';
import { ICreateUser } from '../models/users/create-user';
import { ILoginResponse } from '../models/users/injection-response';
import { IUserLogin } from '../models/users/user-login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  userKey = 'user-token'
  controllerUrl: string;

  constructor(private http: HttpClient) {
    this.controllerUrl = environment.apiUrl + "account/";
   }

  login(model: IUserLogin): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(this.controllerUrl + 'login', model);
  }
  signUp(model: ICreateUser): Observable<any> {
    return this.http.post<ILoginResponse>(this.controllerUrl + 'register', model);
  }

  logout(): void {
    this.removeToken();
  }

  saveToken(token: string): void {
    localStorage.setItem(this.userKey, token);
  }
  // getCurrentUserEmail(): string | null {
  //   return localStorage.getItem(this.userKey);
  // }
  getToken(): string | null {
    return localStorage.getItem(this.userKey);
  }
  isAuthenticated(): boolean {
    return localStorage.getItem(this.userKey) != null;
  }
  removeToken(): void {
    localStorage.removeItem(this.userKey);
  }
}
