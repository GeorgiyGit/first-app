import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICreateComment } from '../models/comments/create-comment';
import { ICreateGenre } from '../models/genres/create-genre';
import { IGenre } from '../models/genres/genre';
import { ICreateUser } from '../models/users/create-user';
import { ILoginResponse } from '../models/users/injection-response';
import { IUserLogin } from '../models/users/user-login';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  controllerUrl: string;

  constructor(private http: HttpClient) {
    this.controllerUrl = environment.apiUrl + "genres";
   }

  getAll(): Observable<IGenre[]> {
    return this.http.get<IGenre[]>(this.controllerUrl);
  }
  addGenre(model:ICreateGenre):Observable<any>{
    const httpOptions = {
        headers: new HttpHeaders({
            Authorization: 'Bearer '+ localStorage.getItem('user-token')
        })
    };
    return this.http.post<ICreateGenre[]>(this.controllerUrl,model,httpOptions);
  }
}
